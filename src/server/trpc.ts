import { initTRPC, TRPCError } from "@trpc/server";
import { Session } from "next-auth";
import { Context } from "./context";

const t = initTRPC.context<Context>().create();

/**
 * Reusable middleware that checks if users are authenticated.
 **/
const isAuth = t.middleware(({ next, ctx }) => {
  if (!ctx.token?.accessToken) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
  return next({
    ctx: {
      // Infers the `session` as non-nullable
      accessToken: ctx.token.accessToken,
    },
  });
});

export const middleware = t.middleware;
export const router = t.router;

/**
 * Unprotected procedure
 **/
export const procedurePublic = t.procedure;

/**
 * Protected procedure
 **/
export const procedureProtected = t.procedure.use(isAuth);
