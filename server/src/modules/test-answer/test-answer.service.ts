import { prisma } from "../../config/prisma.ts";
import type { Prisma } from "../../generated/prisma/client.ts";

export const findAllTestAnswer = async () => {
  const testAnswer = await prisma.testAnswer.findMany();

  return testAnswer
}

export const findTestAnswerById = async (id: string) => {
  const testAnswer = await prisma.testAnswer.findUnique({
    where: { id }
  })

  return testAnswer
}


export const createTestAnswer = async (data: Prisma.TestAnswerCreateInput) => {

  const testAnswer = await prisma.testAnswer.create({
    data
  })

  return testAnswer
}
