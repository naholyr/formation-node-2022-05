import { Router } from "express";

export const postsRouter = Router()
  .get("/", (req, res) => {
    res.send("todo la liste des posts");
  })
  .post("/", (req, res) => {
    res.send("création d'un post");
  })
  .get("/:id", (req, res) => {
    res.send("visualisation d'un post");
  });
