import express, { json, urlencoded, type Express, type Request, type Response } from 'express';
import { userRouter } from './modules/user/user.route.ts';
import { env } from './config/env.ts';
import { questionsRouter } from './modules/questions/questions.route.ts';

const app: Express = express();


app.use(json({ limit: "20mb" }));
app.use(urlencoded({ limit: "5mb", extended: true }))


app.use(express.json());


app.use("/users", userRouter)
app.use("/question", questionsRouter)




app.listen(env.PORT, () => {
  console.log(`Server is running at ${env.PORT} port`)
});
