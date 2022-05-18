import express, { NextFunction, Request, Response } from "express";
import { fibo } from "./fibo";
import cors from "cors";
import { postsRouter } from "./routes/posts";
import { authRouter } from "./routes/auth";
import bodyParser from "body-parser";
import { expressjwt } from "express-jwt";
export const app = express();

app.use(
  cors({
    origin: (origin, callback) => callback(null, origin ? [origin] : true),
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use(
  expressjwt({
    secret: process.env.JWT_SECRET ?? "",
    algorithms: ["HS256"],
  }).unless({
    path: ["/auth/login", "/auth/register"],
  })
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send({ error: "invalid token..." });
  } else {
    next(err);
  }
});

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

app.use("/auth", authRouter);
