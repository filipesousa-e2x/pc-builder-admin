import { createRouter } from "../context";
import { z } from 'zod';


const validateGpuForm = z.object({
    name: z.string().min(10),
    abrev: z.string().max(20)
})


export const gpuRouter = createRouter()
    .query('getCpuList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.gpu.findMany();
        }
    })
    .mutation('createGpu', {
        input: validateGpuForm,
        async resolve({ ctx, input }) {
            return ctx.prisma.gpu.create({
                data: input
            })
        }
    })