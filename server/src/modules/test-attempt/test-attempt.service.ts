import { prisma } from "../../config/prisma.ts";
import type { Prisma } from "../../generated/prisma/client.ts";


export const findAllTestAttempt = async () => {
  const testAttempts = await prisma.testAttempt.findMany();

  return testAttempts
}


export const findTesAttemptById = async (id: string) => {
  const testAttempt = await prisma.testAttempt.findUnique({
    where: { id }
  })

  return testAttempt
}


export const createTestAttempt = async (data: Prisma.TestAttemptCreateInput) => {
  const testAttempt = await prisma.testAttempt.create({
    data
  })


  return testAttempt
} 
