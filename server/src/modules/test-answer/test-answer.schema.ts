import * as z from "zod"

export const CreateTestAnswerSchema = z.object({
  questionId: z.string(),
  questionOptionId: z.string(),
})


export type TTestAnswer = z.infer<typeof CreateTestAnswerSchema>
