import { Router } from "express";
import { addPost, getRecentPosts, NewPostDataSchema } from "../api-posts";
import { validateRequest } from "zod-express-middleware";

export const postsRouter = Router()
  .get("/", async (req, res) => {
    res.send(await getRecentPosts());
  })
  .post("/", validateRequest({ body: NewPostDataSchema }), async (req, res) => {
    // done by body-parser
    /* manually consume stream:
    let json = "";
    req.on("data", (data) => {
      json += data.toString();
    });
    req.on("end", async () => {
      res.send(await addPost(JSON.parse(json)));
    });
    */

    // done by validateRequest:
    // const data = NewPostDataSchema.parse(req.body);

    res.send(await addPost(req.body));
  })
  .get("/:id", (req, res) => {
    res.status(501).send({ error: "Not implemented" });
  });
