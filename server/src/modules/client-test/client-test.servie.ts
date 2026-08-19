import { prisma } from "../../config/prisma.ts"
import type { Prisma } from "../../generated/prisma/client.ts"
import { AppError } from "../../utils/AppError.ts"
import type { TCreateClientTest, TUpdateClientTest } from "./client-test.schema.ts"


export const findAllClientTest = async () => {
  const questions = await prisma.clientTest.findMany({
    include: {
      attempt: true
    }
  })

  return questions
}

export const findByIdClientTest = async (id: string) => {
  const clientTest = await prisma.clientTest.findUnique({
    where: { id },
    include: {
      attempt: true
    }
  })

  return clientTest
}

export const createClientTest = async (data: TCreateClientTest) => {
  const clientTest = await prisma.clientTest.create({
    data
  })

  return clientTest
}

export const updateClientTest = async (id: string, data: TUpdateClientTest) => {


  const clientTest = await prisma.clientTest.update({
    where: { id },
    data
  })

  return clientTest
}
