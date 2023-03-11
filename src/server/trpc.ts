import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context";

const t = initTRPC.context<Context>().create();

/**
 * Reusable middleware that checks if users are authenticated.
 **/
const isAuth = t.middleware(({ next, ctx }) => {
  if (!ctx.session?.user?.email) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
  return next({
    ctx: {
      // Infers the `session` as non-nullable
      session: ctx.session,
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
