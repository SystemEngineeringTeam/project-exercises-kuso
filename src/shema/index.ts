import z from 'zod';

export const zAIResponse = z.object({
  title: z.string(),
  description: z.string(),
});

export type AIResponse = z.infer<typeof zAIResponse>;
