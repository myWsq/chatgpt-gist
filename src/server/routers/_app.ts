import { router } from "../trpc";
import { sayHi } from "./say-hi";

export const appRouter = router({
  sayHi: sayHi(),
});

// export type definition of API
export type AppRouter = typeof appRouter;
