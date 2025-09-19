import { z } from "zod";

export const ExampleSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  value: z.number().min(0),
  createdAt: z.date(),
});

export const CreateExampleSchema = z.object({
  name: z.string().min(1),
  value: z.number().min(0),
});
