import { router } from "../trpc";
import { sayHi } from "./sayHi";

export const appRouter = router({
  sayHi: sayHi(),
});

// export type definition of API
export type AppRouter = typeof appRouter;
