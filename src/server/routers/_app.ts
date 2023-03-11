import { router } from "../trpc";
import { getSettings } from "./get-settings";
import { updateSettings } from "./update-settings";

export const appRouter = router({
  getSettings: getSettings(),
  updateSettings: updateSettings(),
});

// export type definition of API
export type AppRouter = typeof appRouter;
