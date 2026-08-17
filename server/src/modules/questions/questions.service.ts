import { prisma } from "../../config/prisma.ts"
import type { Prisma } from "../../generated/prisma/client.ts";



export const findAllQuestion = async () => {
  const questions = await prisma.question.findMany();

  return questions
}

export const findByIdQuestion = async (id: string) => {

  const question = await prisma.question.findUnique({
    where: { id }
  })

  return question
}



export const createQuestion = async (data: Prisma.QuestionCreateInput) => {

  const questions = await prisma.question.create({
    data
  })

  return questions
}


export const deleteQuestion = async (id: string) => {

  const question = await prisma.question.delete({
    where: { id }
  })

  return question
}

export const updateQuestion = async (id: string, data: Prisma.QuestionUpdateInput) => {
  const question = await prisma.question.update({
    where: { id },
    data
  })

  return question
}

