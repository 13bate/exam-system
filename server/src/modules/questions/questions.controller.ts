import type { Request, Response } from "express"
import { createQuestion, findAllQuestion, findByIdQuestion, deleteQuestion, updateQuestion } from "./questions.service.ts"



export const getAllQuestionsController = async (req: Request, res: Response) => {
  const result = await findAllQuestion()

  res.status(200).json(result)
}

export const getQuestionByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await findByIdQuestion(String(id))

  res.status(200).json(result)
}

export const createQuestionController = async (req: Request, res: Response) => {
  const { data } = req.body;

  const result = await createQuestion(data);

  res.status(201).json(result)
}

export const delteQuestionController = (req: Request, res: Response) => {
  const { id } = req.params;

  const result = deleteQuestion(String(id))

  res.status(204).json(result)
}

export const updateQuestionController = (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = req.body;

  const result = updateQuestion(String(id), data);

  res.status(200).json(result)
}
