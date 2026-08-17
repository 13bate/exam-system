import type { Request, Response } from "express"
import { create, findAll, findById, remove, update } from "./questions.service.ts"



export const getQuestions = async (req: Request, res: Response) => {
  const result = await findAll()

  res.status(200).json(result)
}

export const getQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await findById(String(id))

  res.status(200).json(result)
}

export const fillQuestions = async (req: Request, res: Response) => {
  const { data } = req.body;

  const result = await create(data);

  res.status(201).json(result)
}

export const removeQuestion = (req: Request, res: Response) => {
  const { id } = req.params;

  const result = remove(String(id))

  res.status(204).json(result)
}

export const updateQuestion = (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = req.body;

  const result = update(String(id), data);

  res.status(200).json(result)
}
