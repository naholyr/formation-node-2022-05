import { Router } from "express";
import { addUser, createJWT, validateUser } from "../api-auth";
import type { Request } from "express-jwt";

export const authRouter = Router()
  .get("/user", (req: Request<{ name: string }>, res) => {
    // Idea: use zod() to validate req.auth
    res.send({ name: req.auth?.name });
  })

  .post("/login", async (req, res) => {
    const isValid = await validateUser(req.body.name, req.body.password);
    if (!isValid) {
      res.status(401).send({ error: "Unauthorized" });
      return;
    }
    const token = createJWT(req.body.name);
    res.send({ token });
  })

  .post("/register", async (req, res) => {
    const { name } = await addUser(req.body.name, req.body.password);
    const token = createJWT(name);
    res.send({ token });
  });
