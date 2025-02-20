import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'; // Correct import
import process from "node:process";
import dotenv from 'dotenv';
import User from '../models/userModel';

dotenv.config();

// Set options for JWT Strategy
const opts = {
  jwtFromRequest: ExtractJwt.fromExtractors([(req) => req.cookies.jwt]), // Extract JWT from cookies
  secretOrKey: process.env.JWT_SECRET, // Secret key from .env file
};

// Set up Passport JWT strategy
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, user); // Return user if found
      } else {
        return done(null, false); // User not found
      }
    } catch (err) {
      return done(err, false); // Error occurred during user search
    }
  })
);

export default passport;