import { Router } from "express";
import User from "../controllers/user";

const userRouter = Router();

userRouter.get('/:id', async (req, res) => {
  const id = Number.parseInt(req.params.id);
  const user = await User.getUserById(id);
  if(!user) return res.status(400).send("No user found.");
  return res.status(200).json(user);
});

export default userRouter;