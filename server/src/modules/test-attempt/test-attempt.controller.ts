import type { Request, Response } from "express"
import { createTestAttempt, findAllTestAttempt, findTesAttemptById } from "./test-attempt.service.ts";
import * as z from "zod"
import { AppError } from "../../utils/AppError.ts";

const TestAttemptScheme = z.object({
  clientTestId: z.string(),
  mistakes: z.number(),
  passed: z.boolean()
})


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
  const validateData = TestAttemptScheme.safeParse(data);

  if (!validateData.success) {
    throw new AppError(validateData.error.message, 401)
  }

  const testAttempt = await createTestAttempt(data);

  res.status(201).json(testAttempt)
}
