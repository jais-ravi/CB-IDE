import express from "express";

import process from "node:process";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

import { signup, verifyOtp } from "../controllers/authController.js";
import User from "../models/userModel.js";
import passport from "passport";


const router = express.Router();

router.post("/sign-up", signup);
router.post("/verify-otp", verifyOtp);
// router.post("/sign-in", signin);

router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.json({ message: "Logged out" });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Send JWT in a cookie (optional)
    res.cookie("jwt", token, {
      httpOnly: true, // Prevents XSS attacks
      secure: process.env.NODE_ENV === "production", // Secure in production
      sameSite: "strict",
    });

    // Send response
    res.json({ message: "Login successful", user: { id: user._id, email: user.email }, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Logout Route
router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.json({ message: "Logged out" });
});

// Get Current User Session
router.get("/me", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.json({ user: { id: req.user._id, email: req.user.email } });
});

export default router;
