// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { cpuRouter } from "./custom_routers/cpuRouter";
import { pcCaseRouter } from "./custom_routers/pcCaseRouter";
import { motherboardRouter } from "./custom_routers/motherboardRouter";
import { coolerRouter } from "./custom_routers/coolerRouter";
import { ramRouter } from "./custom_routers/ramRouter";
import { gpuRouter } from "./custom_routers/gpuRouter";
import { psuRouter } from "./custom_routers/psuRouter";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('pccase_router.', pcCaseRouter)
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
