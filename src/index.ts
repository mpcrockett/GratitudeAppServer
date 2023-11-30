import express, { Request, Response } from 'express';
import prisma from './connectors/db';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: 1
    }
  })
  res.status(200).send(user);
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default server;