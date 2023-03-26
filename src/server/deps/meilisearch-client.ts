import { config as getConfig } from "./config";
import Meilisearch from "meilisearch";

let isIndexInit = false;

export async function meilisearchClient() {
  const config = getConfig();

  const client = new Meilisearch({
    host: config.meilisearchEndpoint,
    apiKey: config.meilisearchMasterKey,
  });

  if (!isIndexInit) {
    await Promise.all([
      client.createIndex(config.meilisearchPromptIndex, {
        primaryKey: "id",
      }),
      client.createIndex(config.meilisearchSessionIndex, {
        primaryKey: "id",
      }),
    ]);
    isIndexInit = true;
  }

  return client;
}
