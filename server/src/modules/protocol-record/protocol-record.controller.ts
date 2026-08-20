import type { Request, Response } from "express";
import { AppError } from "../../utils/AppError.ts";
import {
  findAllProtocolRecords,
  findProtocolRecordById,
  createProtocolRecord,
  deleteProtocolRecord,
} from "./protocol-record.service.ts";
import { createProtocolRecordSchema } from "./protocol-record.schema.ts";

export const getAllProtocolRecordsController = async (
  req: Request,
  res: Response,
) => {
  const records = await findAllProtocolRecords();

  res.status(200).json(records);
};

export const getProtocolRecordByIdController = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;

  const record = await findProtocolRecordById(String(id));

  res.status(200).json(record);
};

export const createProtocolRecordController = async (
  req: Request,
  res: Response,
) => {
  const { data } = req.body;

  const validatedData = createProtocolRecordSchema.safeParse(data);

  if (!validatedData.success) {
    throw new AppError(validatedData.error.message, 400);
  }

  const record = await createProtocolRecord(validatedData.data);

  res.status(201).json(record);
};

export const deleteProtocolRecordController = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;

  await deleteProtocolRecord(String(id));

  res.status(204).send();
};
