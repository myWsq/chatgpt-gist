import assert from "assert";
import { z } from "zod";

export function config() {
  assert(process.env.MEILISEARCH_ENDPOINT, "MEILISEARCH_ENDPOINT is required");
  assert(
    process.env.MEILISEARCH_MASTER_KEY,
    "MEILISEARCH_MASTER_KEY is required"
  );

  return {
    meilisearchEndpoint: process.env.MEILISEARCH_ENDPOINT,
    meilisearchMasterKey: process.env.MEILISEARCH_MASTER_KEY,
    meilisearchSessionIndex: "session",
    meilisearchPromptIndex: "prompt",
    sessionSchema: z.object({
      id: z.string(),
      createdAt: z.string(),
      promptId: z.string(),
      messages: z.object({
        role: z.enum(["assistant", "user"]),
        text: z.string(),
      }),
    }),
    promptSchema: z.object({
      id: z.string(),
      updatedAt: z.string(),
      title: z.string(),
      content: z.string(),
    }),
  };
}
