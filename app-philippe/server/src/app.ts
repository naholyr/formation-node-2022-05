import express from "express";
import { fibo } from "./fibo";

export const app = express();

app.get("/fibo", (req, res) => {
  res.send({ result: fibo(40) });
});

app.get("/fibo/:nb", (req, res) => {
  res.send({ result: fibo(Number(req.params.nb)) });
});

app.get("/hello", (req, res) => {
  res.send("hello world");
});
