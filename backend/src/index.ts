import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING as string);

const db = mongoose.connection;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});
