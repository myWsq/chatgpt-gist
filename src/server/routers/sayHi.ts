import { z } from "zod";
import { procedureProtected } from "../trpc";

export function sayHi() {
  return procedureProtected
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => `hello ${input.name}`);
}
