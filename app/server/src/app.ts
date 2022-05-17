import express from "express";
import { fibo } from "./fibo";
import type { Handler } from "express";
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

app.use(bodyParser.json()); // application/json
// bodyParser.text() → text/plain
// bodyParser.raw() → application/octet-stream
// bodyParser.urlencoded() → application/x-www-form-urlencoded

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
  const input = Number(req.params.nb);
  res.send({ input, result: fibo(input) });
});

// Posts REST API
app.use("/posts", postsRouter);
