import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type loginType = {
  _id: number;
  email: string;
  password: string;
};

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Login = mongoose.model<loginType>("Login", loginSchema);

export default Login;
