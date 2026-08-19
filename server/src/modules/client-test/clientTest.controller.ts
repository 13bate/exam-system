import type { Request, Response } from "express"
import { createClientTest, findAllClientTest, findByIdClientTest } from "./clientTest.servie.ts";
import { AppError } from "../../utils/AppError.ts";
import { ClientTestSchema } from "./clientTest.schema.ts";


export const getAllClientTestsController = async (req: Request, res: Response) => {
  const clientTests = await findAllClientTest();

  res.status(200).json(clientTests)
}

export const getClientTestById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const clientTest = await findByIdClientTest(String(id))

  res.status(200).json(clientTest)
}

export const createClientTestController = async (req: Request, res: Response) => {
  const data = req.body;
  const dataValidation = ClientTestSchema.safeParse(data)
  if (!dataValidation.success) {
    throw new AppError(dataValidation.error.message, 422)
  }

  const clientTest = await createClientTest(data)

  res.status(201).json(clientTest)
}



