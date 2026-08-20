import { prisma } from "../../config/prisma.ts";
import { AppError } from "../../utils/AppError.ts";
import type { TTestAnswer } from "./test-answer.schema.ts";

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


export const createTestAnswer = async (testAttemptId: string, data: TTestAnswer) => {
  const testAnswersCount = await prisma.testAnswer.count({
    where: { testAttemptId },
  })

  if (testAnswersCount >= 10) {
    throw new AppError("Test is already finished", 400)
  }

  const testAnswer = await prisma.testAnswer.create({
    data: {
      testAttemptId,
      questionId: data.questionId,
      questionOptionId: data.questionOptionId
    }
  })
  const attempt = await prisma.testAttempt.findUnique({
    where: { id: testAttemptId },
    include: {
      answers: true
    }
  })

  if (!attempt) {
    throw new AppError("Test attempt not found", 404)
  }
  if (attempt.isFinished) {
    throw new AppError("Test is already finished", 400)
  }

  const clientTest = await prisma.clientTest.findUnique({
    where: {
      id: attempt.clientTestId
    }
  })

  let allowedMistakes = clientTest?.allowedMistakes ?? 1;



  let mistakesCount = 0;



  if (attempt.answers.length === 10) {
    let isPassed = true;

    for (let answer of attempt.answers) {
      const option = await prisma.questionOption.findUnique({
        where: { id: answer.questionOptionId }
      })

      if (option?.isCorrect === false) {
        mistakesCount += 1;
      }
    }

    if (mistakesCount > allowedMistakes) {
      isPassed = false;
    }
    console.log(mistakesCount + " : " + "isPassed")
    await prisma.testAttempt.update({
      where: {
        id: testAttemptId,
      },
      data: {
        passed: isPassed,
        isFinished: true,
        mistakes: mistakesCount

      }
    })
  }

  return testAnswer
}
