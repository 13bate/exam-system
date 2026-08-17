import express from "express"
import { fillQuestions, getQuestion, getQuestions, removeQuestion, updateQuestion } from "./questions.controller.ts";



export const questionsRouter = express.Router()

questionsRouter.get("/", getQuestions);
questionsRouter.get("/:id", getQuestion);
questionsRouter.post("/", fillQuestions);
questionsRouter.delete("/:id", removeQuestion);
questionsRouter.put("/", updateQuestion)
