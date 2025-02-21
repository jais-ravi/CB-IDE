import express from "express";
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import dbConnect from "./config/dbConnect.js";
import "./config/passport.js"; // Ensure Passport config loads
import process from "node:process";
dotenv.config();

const app = express();

// ✅ Connect to Database
dbConnect();

// ✅ Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Enable CORS for frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000", // Adjust for deployment
    credentials: true, // Allow cookies in CORS requests
  })
);

// ✅ Session Middleware (Needed for Passport Google OAuth)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Enable secure cookies in production
      httpOnly: true, // Prevent client-side access to cookies
      sameSite: "lax", // Helps with third-party cookies
    },
  })
);

// ✅ Initialize Passport Middleware
app.use(passport.initialize());
app.use(passport.session()); // Only required for session-based authentication

// ✅ Routes
app.get("/", (req, res) => {
  res.json({ server: "running" });
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});