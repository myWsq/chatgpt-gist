import assert from "assert";
import GithubProvider from "next-auth/providers/github";

assert(process.env.GITHUB_ID, "GITHUB_ID is required");
assert(process.env.GITHUB_SECRET, "GITHUB_SECRET is required");

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};