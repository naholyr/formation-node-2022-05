import express, { NextFunction, Request, Response } from "express";
import { fibo } from "./fibo";
import type { Handler } from "express";
import cors from "cors";
import { postsRouter } from "./routes/posts";
import bodyParser from "body-parser";
import { authRouter } from "./routes/auth";
import { expressjwt } from "express-jwt";

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

// Whitelisting: all URLs are protected except login & register
app.use(
  expressjwt({
    secret: process.env.JWT_SECRET ?? "",
    algorithms: ["HS256"],
  }).unless({
    path: ["/auth/login", "/auth/register"],
  })
);
/**
 * Alternative = blacklisting: protect on demand
 *
 * const protected = expressjwt({ … });
 *
 * app.get('/unprotected', (req, res) => …)
 * app.get('/protected', protected, (req, res) => …)
 */

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

// Simulate 500 error
app.get("/error", () => {
  throw new Error("Oh no I crashed");
});

// Posts REST API
app.use("/auth", authRouter);
app.use("/posts", postsRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send({ error: "Invalid token" });
  } else {
    next(err);
  }
});
