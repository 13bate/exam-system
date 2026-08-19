import * as z from "zod"


export const CreateClientTestSchema = z.object({
  userId: z.string(),
  exercise1: z.boolean().optional(),
  exercise2: z.boolean().optional(),
  exercise3: z.boolean().optional(),
  result: z.boolean().optional(),
  typeOfCheck: z.literal("начальная").or(z.literal("переодическая"))
})

export type TCreateClientTest = z.infer<typeof CreateClientTestSchema>

export const UpdateClientTestSchema = z.object({
  userId: z.string().optional(),
  exercise1: z.boolean().optional(),
  exercise2: z.boolean().optional(),
  exercise3: z.boolean().optional(),
  result: z.boolean().optional(),
  typeOfCheck: z.literal("начальная").or(z.literal("переодическая")).optional()
}).refine(
  (data) => Object.keys(data).length > 0,
  {
    message: "At least one field must be provided",
  }
)



export type TUpdateClientTest = z.infer<typeof UpdateClientTestSchema>
