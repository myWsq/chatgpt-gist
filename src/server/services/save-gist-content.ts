import { Octokit } from "octokit";
import { GIST_FILE_META } from "../consts";
import { getGistId } from "./get-gist-id";

export async function saveGistContent(
  client: Octokit,
  filename: string,
  content: string
) {
  const id = await getGistId(client);
  return client.rest.gists.update({
    gist_id: id,
    files: {
      [filename]: {
        content,
      },
      [GIST_FILE_META]: {
        content: JSON.stringify({
          lastUpdatedAt: new Date(),
        }),
      },
    },
  });
}
