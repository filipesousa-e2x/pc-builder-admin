// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { cpuRouter } from "./cpuRouter";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge('cpu_router.', cpuRouter);  
// export type definition of API
export type AppRouter = typeof appRouter;
