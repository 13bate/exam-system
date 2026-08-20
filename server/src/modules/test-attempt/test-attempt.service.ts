import { prisma } from "../../config/prisma.ts";
import { AppError } from "../../utils/AppError.ts";
import type { TCreateTestAttempt, TUpdateTestAttempt } from "./test-attempt.schema.ts";


export const findAllTestAttempt = async () => {
  const testAttempts = await prisma.testAttempt.findMany({
    include: {
      answers: true
    }
  });

  return testAttempts
}


export const findTesAttemptById = async (id: string) => {
  const testAttempt = await prisma.testAttempt.findUnique({
    where: { id },
    include: {
      answers: true
    }
  })

  return testAttempt
}


export const createTestAttempt = async (data: TCreateTestAttempt) => {

  console.log(data)

  const testAttempt = await prisma.testAttempt.create({
    data,
    include: {
      answers: true
    }
  })

  return testAttempt
}


// export const updateTestAttempt = async (id: string, data: TUpdateTestAttempt) => {
//
//   const testAttempt = await prisma.testAttempt.findUnique({
//     where: { id },
//     include: {
//       answers: true
//     }
//   })
//   if (!testAttempt) {
//     throw new AppError("Test attempt with this id not found", 404)
//   }
//
//   if (testAttempt.answers.length == 10) {
//     const result = await prisma.testAttempt.update({
//       where: { id },
//       data: {
//         isFinished: true
//       },
//       include: {
//         answers: true
//       }
//     })
//     return result
//   }
//
//   const testAttemptUpd = await prisma.testAnswer.update({
//     where
//   })
//
// }
