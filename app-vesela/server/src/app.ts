import express from "express";
import { fibo } from "./fibo";
import type { Handler } from "express";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: (origin, callback) => callback(null, origin ? [origin] : true),
    credentials: true,
  })
);

const log: Handler = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(new Date(), req.method, req.url);
  // Call next or chain is broken!
  next();
};

app.get("/*", log);

// Simplest GET handler
app.get("/hello", (req, res) => {
  res.send("hello world");
});

// Route parameters
app.get("/fibo/:nb([0-9]+)", (req, res) => {
  res.send({ result: fibo(Number(req.params.nb)) });
});
