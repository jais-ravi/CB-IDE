import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { transporter } from "../config/nodmailer.js";
import optModel from "../models/optModel.js";
import process from "node:process";
import jwt from "jsonwebtoken";
import passport from "passport";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

    // Hash password but don't save user yet
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save OTP in database (temporary)
    await optModel.create({
      name,
      email,
      password: hashedPassword,
      otp,
      expiresAt: Date.now() + 300000,
    }); // 5 min expiry

    // Send OTP via email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Verify Your Email - OTP",
      text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
    });

    res.status(200).json({
      message:
        "OTP sent to your email. Please verify to complete registration.",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    // Find OTP in database
    const userOtp = await optModel.findOne({ email });

    if (!userOtp) {
      return res
        .status(400)
        .json({ message: "OTP not found. Please sign up again." });
    }

    // Check if OTP is expired
    if (Date.now() > userOtp.expiresAt) {
      await optModel.deleteOne({ email });
      return res
        .status(400)
        .json({ message: "OTP expired. Please sign up again." });
    }

    // Check if OTP is correct
    if (userOtp.otp !== parseInt(otp)) {
      return res
        .status(400)
        .json({ message: "Invalid OTP. Please try again." });
    }

    // Save user in the database
    const newUser = await User.create({
      name: userOtp.name,
      email: userOtp.email,
      password: userOtp.password,
    });

    // Delete OTP entry after successful verification
    await optModel.deleteOne({ email });

    res.status(201).json({
      message: "User verified and registered successfully!",
      userId: newUser._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const signin = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err || !user) return res.status(400).json({ message: info.message });

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set the JWT in a cookie (httpOnly for security)
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({ user });
  })(req, res, next);
};

