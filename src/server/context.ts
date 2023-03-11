import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { authOptions } from "./auth";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: trpcNext.CreateNextContextOptions) {
  const token = await getToken({
    req: opts.req,
  });
  const session = await getServerSession(opts.req, opts.res, authOptions);
  return {
    token,
    session,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
