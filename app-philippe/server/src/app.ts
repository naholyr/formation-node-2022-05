import express from "express";
import { fibo } from "./fibo";
import cors from "cors";
import { postsRouter } from "./routes/posts";
import bodyParser from "body-parser";
export const app = express();

app.use(
  cors({
    origin: (origin, callback) => callback(null, origin ? [origin] : true),
    credentials: true,
  })
);

app.use(bodyParser.json());

app.get("/fibo", (req, res) => {
  res.send({ result: fibo(40) });
});

app.get("/fibo/:nb", (req, res) => {
  res.send({ result: fibo(Number(req.params.nb)) });
});

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.use("/posts", postsRouter);
