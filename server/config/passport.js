
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import User from "../models/userModel.js";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config();


const options = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    (req) => req.cookies?.token, // Extract token from cookies
  ]),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) return done(null, user);
      return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  })
);