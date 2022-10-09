import { createRouter } from "../context";
import { z } from "zod";
import { cpu_manufacturer_e } from "../../../utils/enums";

const cpuId = z.object({
    id: z.string()
});

const validateCpuForm = z.object({
    name: z.string().min(8),
    abrev: z.string().max(20),
    manufacturer: cpu_manufacturer_e
})


export const cpuRouter = createRouter()
    .query('getCpuList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.cpu.findMany();
        }
    })
    .mutation('getCpuById', {
        input: z.string(),
        resolve: async function({ ctx , input }) {
            return ctx.prisma.cpu.findFirst({ where: { id: input } });
        }
    })
    .mutation('createCpu', {
        input: validateCpuForm,
        async resolve({ ctx, input }) {
            return ctx.prisma.cpu.create({ data: input })
        }
    })
    .mutation('updateCpu', {
        input: Object.assign({}, cpuId, validateCpuForm),
        resolve: async function({ ctx, input }) {
            return ctx.prisma.cpu.update({ 
                where: { id: input.id },
                data: input
            })
        }
    })