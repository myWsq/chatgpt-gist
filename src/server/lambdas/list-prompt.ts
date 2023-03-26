import { z } from "zod";
import { procedure } from "../trpc";

export function listPrompt() {
  return procedure.query(async ({ ctx }) => {
    const schema = ctx.config.promptSchema;
    const { results } = await ctx.meilisearchClient
      .index<z.infer<typeof schema>>(ctx.config.meilisearchPromptIndex)
      .getDocuments<{
        id: string;
        title: string;
      }>({
        fields: ["id", "title"],
      });
    return results;
  });
}
