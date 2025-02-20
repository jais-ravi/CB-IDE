import nodemailer from "nodemailer";
import process from "node:process";
import dotenv from "dotenv";
dotenv.config();
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Set to `true` for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
