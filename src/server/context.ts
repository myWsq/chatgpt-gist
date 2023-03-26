import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { config } from "./deps/config";
import { meilisearchClient } from "./deps/meilisearch-client";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: trpcNext.CreateNextContextOptions) {
  return {
    config: config(),
    meilisearchClient: await meilisearchClient(),
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
