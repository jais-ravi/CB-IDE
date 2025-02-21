import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import process from "node:process";

import {
  signup,
  verifyOtp,
  signin,
  logout,
  me,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/verify-otp", verifyOtp);
router.post("/sign-in", signin);
router.post("/logout", logout);
router.get("/me", me);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"], // Ensure this matches what Google expects
    prompt: "select_account",
  })
);
// 🔹 Step 2: Handle Google OAuth Callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Generate JWT Token
    const token = jwt.sign(
      { id: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 🔹 Send Token as Cookie (Optional)
    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });

    // 🔹 Redirect to frontend (client)
    res.redirect(`${process.env.CLIENT_URL}/`);
  }
);




export default router;
