import { Router } from "express";
import { getRecentPosts, addPost } from "../api-posts";

export const postsRouter = Router()
  .get("/", async (req, res) => {
    res.send(await getRecentPosts());
  })

  .post("/", async (req, res) => {
    const data = res.send(await addPost(req.body));
  });

//   .get("/:id", (req, res) => {});
