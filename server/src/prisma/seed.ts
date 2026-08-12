import { prisma } from "../config/prisma.ts"
import { questions } from "../prisma-data/questions.ts"

const seed = async () => {


  await prisma.questionsPool.upsert({
    where: {
      id: "main-pool"
    },
    update: {},
    create: {
      id: "main-pool"
    }
  })

  for (const question of questions) {
    await prisma.question.upsert({
      where: {
        id: question.id
      },
      update: {},
      create: {
        id: question.id,
        questionText: question.questionText,
        variant1: question.variant1,
        variant2: question.variant2,
        variant3: question.variant3,
        correctVariantIndex: question.correctVariantIndex,
        questionsPoolId: question.questionsPoolId
      }
    })
  }

}

seed()
