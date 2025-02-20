import express from "express";
import authRoutes from "./routes/authRoutes.js";
import dbConnect from "./config/dbConnect.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./config/passport.js";

dotenv.config();

const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Ensure it's exactly the frontend URL
    credentials: true, // Allows cookies and authorization headers
  })
);
app.use(passport.initialize());

// Routes
app.get("/", (req, res) => {
  res.json({ server: "running" });
});

app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
