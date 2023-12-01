import { Router } from "express";
import Post from "../controllers/post";

const postRouter = Router();

postRouter.get('/', async (req, res) => {
  return res.status(200);
})

postRouter.post('/', async (req, res) => {
  try {
    await Post.createPost(req.body);
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
})

export default postRouter;