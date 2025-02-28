import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    otp: Number,
    expiresAt: Date,
});

export default mongoose.model("OTP", otpSchema);