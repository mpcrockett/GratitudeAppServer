import express from 'express';
import cors from 'cors';
require('@dotenvx/dotenvx').config()
import userRouter from './routes/user';
import postRouter from './routes/post';

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
  res.status(200).json("ok");
  console.log("Test endpoint hit");
})
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default server;