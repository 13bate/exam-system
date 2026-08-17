import express from "express"
import { createQuestionController, delteQuestionController, getAllQuestionsController, getQuestionByIdController, updateQuestionController } from "./questions.controller.ts";




export const questionsRouter = express.Router()

questionsRouter.get("/", getAllQuestionsController);
questionsRouter.get("/:id", getQuestionByIdController);
questionsRouter.post("/", createQuestionController);
questionsRouter.delete("/:id", delteQuestionController);
questionsRouter.put("/", updateQuestionController)
