import express, { Request, Response } from "express";
import User from "../models/user";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isString(),
    check(
      "password",
      "Password with 6 or more characters is required"
    ).isLength({ min: 6 }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d", //valid for one day
        }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", //true for production, false for development
        maxAge: 86400000, //1 day in milliseconds
      });

      return res
        .status(200)
        .json({ userId: user._id, message: "Logged in successfully" });
    } catch (error) {
      console.log("🚀 ~ file: login.ts:15 ~ router.post ~ error:", error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  }
);

export default router;
