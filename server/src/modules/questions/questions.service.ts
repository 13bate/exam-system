import { prisma } from "../../config/prisma.ts"
import type { Prisma } from "../../generated/prisma/client.ts";



export const findAll = async () => {
  const questions = await prisma.question.findMany();

  return questions
}

export const findById = async (id: string) => {

  const question = await prisma.question.findUnique({
    where: { id }
  })

  return question
}



export const create = async (data: Prisma.QuestionCreateInput) => {

  const questions = await prisma.question.create({
    data
  })

  return questions
}


export const remove = async (id: string) => {

  const question = await prisma.question.delete({
    where: { id }
  })

  return question
}

export const update = async (id: string, data: Prisma.QuestionUpdateInput) => {
  const question = await prisma.question.update({
    where: { id },
    data
  })

  return question
}

