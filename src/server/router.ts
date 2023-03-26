import { router } from "./trpc";
import { sayHi } from "./lambdas/say-hi";
import { listPrompt } from "./lambdas/list-prompt";
import { createPrompt } from "./lambdas/create-prompt";

export const appRouter = router({
  sayHi: sayHi(),
  createPrompt: createPrompt(),
  listPrompt: listPrompt(),
});

// export type definition of API
export type AppRouter = typeof appRouter;
