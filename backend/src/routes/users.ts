import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("./register", async (req: Request, res: Response) => {
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

    const token = "";
  } catch (err) {
    console.log("🚀 ~ file: users.ts:22 ~ router.post ~ err:", err);
    return res.status(500).send({ message: "Something went wrong" });
  }
});
