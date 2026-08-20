import * as z from "zod"

export const CreateTestAttemptSchema = z.object({
  clientTestId: z.string(),
})


export type TCreateTestAttempt = z.infer<typeof CreateTestAttemptSchema>


export const UpdateTestAttemptSchema = z.object({
  clientTestId: z.string().optional(),
  mistakes: z.number().optional(),
  passed: z.boolean().optional()
})


export type TUpdateTestAttempt = z.infer<typeof UpdateTestAttemptSchema>

