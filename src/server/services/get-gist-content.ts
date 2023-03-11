import { Octokit } from "octokit";
import { getGistId } from "./get-gist-id";

export async function getGistContent(client: Octokit, filename: string) {
  const id = await getGistId(client);
  const gist = await client.rest.gists.get({
    gist_id: id,
  });
  return gist.data.files?.[filename]?.content || "";
}
