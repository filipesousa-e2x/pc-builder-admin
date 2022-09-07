import { createRouter } from "./context";
import { z } from 'zod';


const validateCpuForm = z.object({
    name: z.string().min(10),
    abrev: z.string().max(20),
    manufacturer: z.string()
})


export const motherboardRouter = createRouter()
    .query('getCpuList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.cpu.findMany();
        }
    })
    .mutation('createCpu', {
        input: validateCpuForm,
        async resolve({ ctx, input }) {
            return ctx.prisma.cpu.create({
                data: input
            })
        }
    })