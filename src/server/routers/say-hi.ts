import { z } from "zod";
import { procedure } from "../trpc";

export function sayHi() {
  return procedure.input(z.object({ name: z.string() })).query(({ input }) => {
    return "Hello " + input.name;
  });
}
