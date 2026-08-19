import type { Request, Response } from "express"
import { createTestAnswer, findAllTestAnswer } from "./test-answer.service.ts";
import { findTesAttemptById } from "../test-attempt/test-attempt.service.ts";
import { TestAnswerSchmema } from "./test-answer.schema.ts";
import { AppError } from "../../utils/AppError.ts";



export const getTestAnswerController = async (req: Request, res: Response) => {

  const testAnswer = await findAllTestAnswer();

  res.status(200).json(testAnswer)

}


export const getTestAnswerByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const testAnswer = await findTesAttemptById(String(id));
  return res.status(200).json(testAnswer)

}


export const createTestAnswerController = async (req: Request, res: Response) => {
  const data = req.body;
  const validatedData = TestAnswerSchmema.safeParse(data);

  if (!validatedData.success) {
    throw new AppError(validatedData.error.message, 401);
  }

  const testAnswer = await createTestAnswer(data);

  res.status(201).json(testAnswer);
}
