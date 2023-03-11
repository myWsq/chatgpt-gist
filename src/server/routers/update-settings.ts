import { Octokit } from "octokit";
import { z } from "zod";
import { GIST_FILE_SETTINGS } from "../consts";
import { saveGistContent } from "../services/save-gist-content";
import { procedureProtected } from "../trpc";

export function updateSettings() {
  return procedureProtected
    .input(
      z.object({
        apiKey: z.string().nonempty(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const client = new Octokit({ auth: ctx.accessToken });
      await saveGistContent(client, GIST_FILE_SETTINGS, JSON.stringify(input));
    });
}
