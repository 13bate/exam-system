import { z } from "zod";

export const createProtocolRecordSchema = z.object({
  protocolId: z.string(),
  userId: z.string(),
  date: z.coerce.date(),
  theoryResult: z.boolean(),
  practiceResult: z.boolean(),
});

export type TCreateProtocolRecord = z.infer<
  typeof createProtocolRecordSchema
>;
