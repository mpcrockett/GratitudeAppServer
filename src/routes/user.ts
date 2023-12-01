import { Router } from "express";
import User from "../controllers/user";

const userRouter = Router();

userRouter.get('/:id', async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id);
    const user = await User.getUserById(id);
    if(!user) return res.status(400).send("No user found.");
    return res.status(200).json(user); 
  } catch (error) {
    console.log(error);
    return res.status(500).send()
  }
});

userRouter.post('/', async (req, res) => {
  try {
    await User.createUser(req.body);
    return res.status(201).send()
  } catch (error) {
    return res.status(500).send()
  }
})

export default userRouter;