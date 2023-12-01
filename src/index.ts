import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routes/user';
import postRouter from './routes/post';

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default server;