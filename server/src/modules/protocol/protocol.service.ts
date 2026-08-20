import { prisma } from "../../config/prisma.ts";
import { AppError } from "../../utils/AppError.ts";
import type { TCreateProtocol } from "./protocol.schema.ts";

export const findAllProtocol = async () => {
  const protocols = await prisma.protocol.findMany({
    include: {
      records: true,
    },
  });

  return protocols;
};

export const findProtocolById = async (id: string) => {
  const protocol = await prisma.protocol.findUnique({
    where: {
      id,
    },
    include: {
      records: true,
    },
  });

  if (!protocol) {
    throw new AppError("Protocol not found", 404);
  }

  return protocol;
};

export const createProtocol = async (data: TCreateProtocol) => {
  const protocol = await prisma.protocol.create({
    data: {
      place: data.place,
      commission: data.commission,
    },
  });

  return protocol;
};

export const deleteProtocol = async (id: string) => {
  const protocol = await prisma.protocol.findUnique({
    where: {
      id,
    },
  });

  if (!protocol) {
    throw new AppError("Protocol not found", 404);
  }

  const deletedProtocol = await prisma.protocol.delete({
    where: {
      id,
    },
  });

  return deletedProtocol;
};
