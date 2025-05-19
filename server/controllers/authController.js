import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { transporter } from "../config/nodmailer.js";
import otpModel from "../models/otpModel.js";
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
    await otpModel.create({
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
    const userOtp = await otpModel.findOne({ email });

    if (!userOtp) {
      return res
        .status(400)
        .json({ message: "OTP not found. Please sign up again." });
    }

    // Check if OTP is expired
    if (Date.now() > userOtp.expiresAt) {
      await otpModel.deleteOne({ email });
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
    await otpModel.deleteOne({ email });

    res.status(201).json({
      message: "User verified and registered successfully!",
      userId: newUser._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    
    if (!user) {
      return res
      .status(404)
      .json({ success: false, message: "Invalid credentials" });
    }
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);


    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Send JWT in a cookie (optional)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    // Send response
    res.json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({ message: "Logged out successfully" });
};
export const me = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    res.json({ user: { id: user._id, email: user.email , name :user.name } });
  })(req, res, next);
};

export const google = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleCallback = (req, res, next) => {
  passport.authenticate("google", { failureRedirect: "/" }, (err, user) => {
    if (err || !user) {
      return res.redirect("/");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.redirect(`${process.env.CLIENT_URL}/`);
  })(req, res, next);
};
