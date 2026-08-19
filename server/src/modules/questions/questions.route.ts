import express from "express"
import { getAllQuestionsController, getQuestionByIdController } from "./questions.controller.ts";



export const questionsRouter = express.Router()

questionsRouter.get("/", getAllQuestionsController);
questionsRouter.get("/:id", getQuestionByIdController);



