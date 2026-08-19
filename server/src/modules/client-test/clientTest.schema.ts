import * as z from "zod"


export const ClientTestSchema = z.object({
  userId: z.string(),
  exercise1: z.boolean(),
  exercise2: z.boolean(),
  exercise3: z.boolean(),
  result: z.boolean(),
  typeOfCheck: z.literal("начальная").or(z.literal("переодическая"))
})


