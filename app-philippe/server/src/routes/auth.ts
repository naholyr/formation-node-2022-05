import { Router } from "express";
import { Request } from "express-jwt";
import { createJWT, validateUser, addUser } from "../api.users";

export const authRouter = Router()
  .get("/user", (req: Request, res) => {
    res.send({ name: req.auth?.name });
  })

  .post("/login", async (req, res) => {
    const isUserExist = await validateUser(req.body.name, req.body.password);
    if (!isUserExist) {
      res.status(401).send({ error: "Not exists" });
      return;
    }
    const jwt = createJWT(req.body.name);
    res.send({ token: jwt });
  })

  .post("/register", async (req, res) => {
    const result = await addUser({
      name: req.body.name,
      password: req.body.password,
    });
    const jwt = createJWT(result.name);
    res.send({ token: jwt });
  });
