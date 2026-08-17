import { prisma } from "../../config/prisma.ts"
import type { Prisma } from "../../generated/prisma/client.ts"


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

export const createClientTest = async (data: Prisma.ClientTestCreateInput) => {
  const clientTest = await prisma.clientTest.create({
    data
  })

  return clientTest
}
