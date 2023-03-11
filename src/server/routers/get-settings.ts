import { Octokit } from "octokit";
import { getGistContent } from "../services/get-gist-content";
import { procedureProtected } from "../trpc";
import { GIST_FILE_SETTINGS } from "../consts";
import z from "zod";

const SettingsSchema = z.object({
  apiKey: z.string(),
});

export function getSettings() {
  return procedureProtected.query(async ({ ctx }) => {
    const client = new Octokit({ auth: ctx.accessToken });
    const settingsString = await getGistContent(client, GIST_FILE_SETTINGS);
    let settings: z.infer<typeof SettingsSchema>;
    try {
      settings = SettingsSchema.parse(JSON.parse(settingsString));
    } catch {
      settings = {
        apiKey: "",
      };
    }
    return settings;
  });
}
