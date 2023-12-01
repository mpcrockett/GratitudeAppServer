import express from 'express';
import userRouter from './routes/user';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default server;