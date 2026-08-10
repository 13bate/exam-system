import express, { Router, type Express, type Request, type Response } from 'express';
import { userRouter } from './modules/user/user.route.ts';

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use("/users", userRouter)


app.listen(3000);
