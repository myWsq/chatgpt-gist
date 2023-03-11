import assert from "assert";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

assert(process.env.GITHUB_ID, "GITHUB_ID is required");
assert(process.env.GITHUB_SECRET, "GITHUB_SECRET is required");

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: 'read:user, gist'
        }
      }
    }),
    // ...add more providers here
  ],
  callbacks: {
    jwt({ token, account }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpiresAt = account.expires_at;
      }
      return token;
    },
  },
};
