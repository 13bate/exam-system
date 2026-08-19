import * as z from "zod"

export const TestAnswerSchmema = z.object({
  id: z.string(),
  testAttemptId: z.string(),
  questionId: z.string(),
  questionOptionId: z.string(),
})


export type ITestAnswer = z.infer<typeof TestAnswerSchmema>
