import { prisma } from "../../config/prisma.ts"

export const findAllQuestion = async () => {
  const questions = await prisma.question.findMany({
    include: {
      questionOptions: true,
    }
  });

  return questions
}

export const findByIdQuestion = async (id: string) => {

  const question = await prisma.question.findUnique({
    where: { id },
    include: {
      questionOptions: true
    }
  })

  return question
}




