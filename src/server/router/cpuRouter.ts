import { createRouter } from "./context";
import { z } from "zod";


export const cpuRouter = createRouter()
    .query('getCpu', {
        input: z.object({
            id: z.number()
        }),
        async resolve({ input }) {
            return ` Valu squared is : ${input.id * input.id}`;
        }
    })
    // .mutation('create-cpu', {
    //     input: {},
    //     resolve({ ctx, input }) {
    //         return {}
    //     }
    // })