import type { Request, Response } from "express"
import { findAllQuestion, findByIdQuestion } from "./questions.service.ts"





export const getAllQuestionsController = async (req: Request, res: Response) => {
  const result = await findAllQuestion()

  res.status(200).json(result)
}

export const getQuestionByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await findByIdQuestion(String(id))

  res.status(200).json(result)
}



