import express from "express";

import {
  signup,
  verifyOtp,
  signin,
  logout,
  me,
  google,
  googleCallback,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/verify-otp", verifyOtp);
router.post("/sign-in", signin);
router.post("/logout", logout);
router.get("/me", me);
router.get("/google", google);
router.get("/google/callback", googleCallback);

export default router;
