import type { Request, Response } from "express"
import { createClientTest, findAllClientTest, findByIdClientTest } from "./clientTest.servie.ts";
import * as z from "zod"
import { AppError } from "../../utils/AppError.ts";

const ClientTestScheme = z.object({
  userId: z.string(),
  theoryTest: z.boolean(),
  exercise1: z.boolean(),
  exercise2: z.boolean(),
  exercise3: z.boolean(),
  typeOfCheck: z.literal("начальная").or(z.literal("переодическая"))
})


export const getAllClientTestsController = async (req: Request, res: Response) => {
  const clientTests = findAllClientTest();

  res.status(200).json(clientTests)
}

export const getClientTestById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const clientTest = findByIdClientTest(String(id))

  res.status(200).json(clientTest)
}

export const createClientTestController = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data)
  const dataValidation = ClientTestScheme.safeParse(data)
  console.log(dataValidation)
  if (!dataValidation.success) {
    throw new AppError(dataValidation.error.message, 422)
  }

  const clientTest = createClientTest(data)

  res.status(201).json(clientTest)
}


