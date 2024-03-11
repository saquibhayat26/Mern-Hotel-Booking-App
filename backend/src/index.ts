import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "hello from express endpoints!" });
});

app.listen(8000, () => {
  console.log("server is running on 8000");
});
