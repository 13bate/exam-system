import express, { json, urlencoded, type Express, type NextFunction, type Request, type Response } from 'express';
import { userRouter } from './modules/user/user.route.ts';
import { env } from './config/env.ts';
import { questionsRouter } from './modules/questions/questions.route.ts';
import { authRouter } from './modules/auth/auth.route.ts';
import { authMiddleware } from './middlewares/auth.middlewares.ts';
import { errorMiddleware } from './middlewares/error.middleware.ts';

const app: Express = express();


app.use(json({ limit: "20mb" }));
app.use(urlencoded({ limit: "5mb", extended: true }))


app.use(express.json());



app.use("/users", authMiddleware, userRouter)
app.use("/question", authMiddleware, questionsRouter)
app.use("/auth", authRouter)


app.use(errorMiddleware)



app.listen(env.PORT, () => {
  console.log(`Server is running at ${env.PORT} port`)
});
