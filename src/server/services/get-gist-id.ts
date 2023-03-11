import { Octokit } from "octokit";
import { GIST_FILE_META, GIST_KEY } from "../consts";
import memo from "memoizee";

async function findId(client: Octokit, page = 1): Promise<string | null> {
  const { data: gists } = await client.rest.gists.list({
    per_page: 100,
    page,
  });
  if (!gists.length) {
    return null;
  }
  const target = gists.find(
    (item) => item.description === GIST_KEY && item.files[GIST_FILE_META]
  );
  if (target) {
    return target.id;
  } else {
    return await findId(client, page + 1);
  }
}

async function createGist(client: Octokit) {
  const { data: gist } = await client.rest.gists.create({
    description: GIST_KEY,
    public: false,
    files: {
      [GIST_FILE_META]: {
        content: JSON.stringify({
          lastUpdatedAt: new Date(),
        }),
      },
    },
  });

  return gist.id as string;
}

/**
 * Get gist id for current user or create default if not exists
 * @param client Octokit client
 * @returns gist id
 */
export const getGistId = memo(
  async (client: Octokit): Promise<string> => {
    const id = await findId(client);
    if (!id) {
      return await createGist(client);
    } else {
      return id;
    }
  },
  {
    promise: true,
    maxAge: 60 * 60 * 24,
  }
);
