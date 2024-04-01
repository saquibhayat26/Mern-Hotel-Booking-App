import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

const router = express.Router();

// /api/users/register
router.post(
  "/register",
  [
    check("firstName", "First name is required").isString(),
    check("lastName", "Last name is required").isString(),
    check("email", "Email is required").isEmail(),
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
    try {
      // find user email if already exist
      let user = await User.findOne({
        email: req.body.email,
      });

      // validate user email
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      // create user
      user = new User(req.body);

      // save user
      await user.save();

      // create token
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d", //valid for one day
        }
      );

      // set cookie
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", //false for development, true for production
        maxAge: 86400000, //same as auth token expiresIn time but in milliseconds
      });
      return res.sendStatus(200);
    } catch (err) {
      console.log("🚀 ~ file: users.ts:22 ~ router.post ~ err:", err);
      return res.status(500).send({ message: "Something went wrong" });
    }
  }
);

export default router;
