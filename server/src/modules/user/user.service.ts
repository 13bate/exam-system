import { prisma } from "../../config/prisma.ts";
import type { Prisma } from "../../generated/prisma/client.ts";
import { AppError } from "../../utils/AppError.ts";


export const findAll = async () => {
  const users = await prisma.user.findMany();

  return users
}

export const findById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export const create = async (data: Prisma.UserCreateInput) => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

export const update = async (id: string, data: Prisma.UserUpdateInput) => {
  const existingUser = await prisma.user.findUnique({
    where: { id },
  });

  if (!existingUser) {
    throw new AppError("User not found", 404);
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data,
  });

  return updatedUser;
};

export const deleteUser = async (id: string) => {
  const existingUser = await prisma.user.findUnique({
    where: { id },
  });

  if (!existingUser) {
    throw new AppError("User not found", 404);
  }

  const deletedUser = await prisma.user.delete({
    where: { id },
  });

  return deletedUser;
};
