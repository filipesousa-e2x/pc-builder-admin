// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { cpuRouter } from "./cpuRouter";
import { pccaseRouter } from "./pcCaseRouter";
import { motherboardRouter } from "./motherboardRouter";
import { coolerRouter } from "./coolerRouter";
import { ramRouter } from "./ramRouter";
import { gpuRouter } from "./gpuRouter";
import { psuRouter } from "./psuRouter";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge('pccase_router.', pccaseRouter)
  .merge('motherboard_router.', motherboardRouter)
  .merge('cpu_router.', cpuRouter)
  .merge('cooler_router.', coolerRouter)
  .merge('ram_router.', ramRouter)
  .merge('gpu_router.', gpuRouter)
  .merge('psu_router.', psuRouter)
//   .merge('computer_router.', computerRouter)
//   .merge('computer_Set_router.', computerSetRouter)


// export type definition of API
export type AppRouter = typeof appRouter;
