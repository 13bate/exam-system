import express from "express"
import { questionsController } from "./questions.controller.ts";



export const questionsRouter = express.Router()

questionsRouter.get("/", questionsController.getAllQuestions);
questionsRouter.get("/:id", questionsController.getQuestionById);
questionsRouter.post("/", questionsController.fillQuestions);
questionsRouter.delete("/:id", questionsController.deleteQuestions);
questionsRouter.put("/", questionsController.updateQuestions)
