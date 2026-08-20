import type { Request, Response } from "express"
import { createProtocolSchema } from "./protocol.schema.ts";
import { AppError } from "../../utils/AppError.ts";
import { createProtocol, deleteProtocol, findAllProtocol, findProtocolById } from "./protocol.service.ts";

export const getAllProtocolsController = async (req: Request, res: Response) => {
  const protocols = await findAllProtocol();

  res.status(200).json(protocols)
}

export const getProtocolByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const protocol = await findProtocolById(String(id));

  res.status(200).json(protocol)
}

export const createProtocolController = async (req: Request, res: Response) => {
  const data = req.body;

  const validatedData = createProtocolSchema.safeParse(data)

  if (!validatedData.success) {
    throw new AppError(validatedData.error.message, 400)
  }

  const protocol = await createProtocol(data)

  res.status(201).json(protocol)

}

export const deleteProtocolController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedProtocol = deleteProtocol(String(id))

  res.status(204).json(deletedProtocol)
}


