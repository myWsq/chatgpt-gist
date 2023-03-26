import { z } from "zod";
import { procedure } from "../trpc";
import { nanoid } from "nanoid";

export function createPrompt() {
  return procedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ input, ctx }) => {
      const id = nanoid();
      ctx.meilisearchClient
        .index(ctx.config.meilisearchPromptIndex)
        .addDocuments([
          {
            id,
            title: input.title,
            content: input.content,
            createdAt: new Date(),
          },
        ]);
      return id;
    });
}
