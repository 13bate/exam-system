import * as z from "zod";


export const createProtocolSchema = z.object({
  place: z.string(),
  commission: z.string()
})

export type TCreateProtocol = z.infer<typeof createProtocolSchema>
