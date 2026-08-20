import { prisma } from "../../config/prisma.ts";
import { AppError } from "../../utils/AppError.ts";
import type { TCreateProtocolRecord } from "./protocol-record.schema.ts";

export const findAllProtocolRecords = async () => {
  const records = await prisma.protocolRecord.findMany();

  return records;
};

export const findProtocolRecordById = async (id: string) => {
  const record = await prisma.protocolRecord.findUnique({
    where: { id },
  });

  if (!record) {
    throw new AppError("Protocol record not found", 404);
  }

  return record;
};

export const createProtocolRecord = async (
  data: TCreateProtocolRecord,
) => {
  const protocol = await prisma.protocol.findUnique({
    where: {
      id: data.protocolId,
    },
  });

  if (!protocol) {
    throw new AppError("Protocol not found", 404);
  }

  const user = await prisma.user.findUnique({
    where: {
      id: data.userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const record = await prisma.protocolRecord.create({
    data: {
      protocolId: data.protocolId,
      userId: data.userId,
      date: data.date,
      theoryResult: data.theoryResult,
      practiceResult: data.practiceResult,
    },
  });

  return record;
};

export const deleteProtocolRecord = async (id: string) => {
  const record = await prisma.protocolRecord.findUnique({
    where: { id },
  });

  if (!record) {
    throw new AppError("Protocol record not found", 404);
  }

  const deletedRecord = await prisma.protocolRecord.delete({
    where: { id },
  });

  return deletedRecord;
};
