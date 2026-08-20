import type { Request, Response } from "express"
import { createTestAttempt, findAllTestAttempt, findTesAttemptById } from "./test-attempt.service.ts";
import { AppError } from "../../utils/AppError.ts";
import { CreateTestAttemptSchema } from "./test-attempt.schema.ts";




export const getAllTestAttemptController = async (req: Request, res: Response) => {
  const testAttempts = await findAllTestAttempt();

  res.status(200).json(testAttempts)
}

export const getTestAttemptByIDController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const testAttempt = await findTesAttemptById(String(id))

  res.status(200).json(testAttempt)
}

export const createTestAttemptController = async (req: Request, res: Response) => {
  const data = req.body;
  const validateData = CreateTestAttemptSchema.safeParse(data);

  if (!validateData.success) {
    throw new AppError(validateData.error.message, 401)
  }

  const testAttempt = await createTestAttempt(data);

  res.status(201).json(testAttempt)
}
