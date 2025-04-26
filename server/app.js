import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import authRoutes from "./routes/authRoutes.js";
import dbConnect from "./config/dbConnect.js";
import setupSocket from "./socket/index.js";
import "./config/passport.js";
import dockerRoutes from "./routes/dockerRoutes.js";
import setupFileWatcher from "./utils/setupFileWatcher.js";
import process from "node:process";
import { exec } from "child_process";
import util from "util";
import path from "path";
import fs from "fs/promises";
import { BASE_PROJECT_PATH } from "./config.js";

dotenv.config();

const app = express();
const server = createServer(app);
const io = setupSocket(server);
dbConnect();
const execAsync = util.promisify(exec);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", dockerRoutes);

app.get("/", (req, res) => {
  res.json({ server: "running" });
});

setupFileWatcher(io);

function sanitize(input) {
  return input.replace(/[^a-zA-Z0-9-_./]/g, "");
}

async function dockerExec(container, cmd) {
  const safeContainer = sanitize(container);
  return await execAsync(`docker exec ${safeContainer} ${cmd}`);
}

// GET: File tree
app.get("/files", async (req, res) => {
  try {
    const { project, userId, container } = req.query;
    if (!project || !container || !userId) {
      return res.status(400).json({ error: "Missing userId, project, or container" });
    }

    const projectRoot = `/app/users/${userId}/${project}`;

    const { stdout: allPaths } = await execAsync(
      `docker exec ${container} sh -c "find ${projectRoot}"`
    );
    const { stdout: folderPaths } = await execAsync(
      `docker exec ${container} sh -c "find ${projectRoot} -type d"`
    );

    const all = allPaths.trim().split("\n");
    const dirs = new Set(folderPaths.trim().split("\n"));

    const tree = {};

    all.forEach((fullPath) => {
      if (fullPath === projectRoot) return;
      const relativePath = fullPath.replace(`${projectRoot}/`, "");
      const parts = relativePath.split("/");

      let current = tree;
      parts.forEach((part, index) => {
        const isLast = index === parts.length - 1;
        const currentFullPath = `${projectRoot}/${parts.slice(0, index + 1).join("/")}`;

        if (isLast) {
          if (dirs.has(currentFullPath)) {
            current[part] = current[part] || {};
          } else {
            current[part] = null;
          }
        } else {
          current[part] = current[part] || {};
          current = current[part];
        }
      });
    });

    res.json({ [project]: tree });
  } catch (err) {
    console.error("❌ Error generating file tree:", err);
    res.status(500).json({ error: "Failed to generate file tree" });
  }
});

// GET: File content

// GET: File content
app.get("/files/content", async (req, res) => {
  try {
    const { userId, project, path: filePath } = req.query;

    if (!userId || !project || !filePath) {
      return res.status(400).json({ error: "Missing params" });
    }

    // 🧠 Remove duplicate project prefix from filePath if present
    const normalizedFilePath = filePath.startsWith(`${project}/`)
      ? filePath.replace(`${project}/`, "")
      : filePath;

    const absoluteFilePath = path.join(BASE_PROJECT_PATH, userId, project, normalizedFilePath);

    const content = await fs.readFile(absoluteFilePath, "utf-8");
    res.json({ content });
  } catch (err) {
    console.error("❌ Error reading file:", err);
    res.status(500).json({ error: "Failed to read file" });
  }
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
