import type { Request, Response } from "express"
import { createClientTest, findAllClientTest, findByIdClientTest, updateClientTest } from "./client-test.servie.ts";
import { AppError } from "../../utils/AppError.ts";
import { CreateClientTestSchema, UpdateClientTestSchema } from "./client-test.schema.ts";



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
  const dataValidation = CreateClientTestSchema.safeParse(data);

  if (!dataValidation.success) {
    throw new AppError(dataValidation.error.message, 422)
  }

  const clientTest = await createClientTest(data)

  res.status(201).json(clientTest)
}


export const updateClientTestController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const dataValidation = UpdateClientTestSchema.safeParse(data);

  if (!dataValidation.success) {
    throw new AppError(dataValidation.error.message, 401);
  }

  const clientTest = await updateClientTest(String(id), data)

  res.status(201).json(clientTest)
}

