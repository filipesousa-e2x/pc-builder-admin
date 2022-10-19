import { createRouter } from "../context";
import { cpu_zod_validation, id_zod_validation } from "../../../utils/zod_objects";

export const cpuRouter = createRouter()
    .query('getCpuList', {
        resolve: async function({ ctx }) {
            const results = await ctx.prisma.cpu.findMany();
            console.log(results);
            return results;
        }
    })
    .mutation('getCpuById', {
        input: id_zod_validation,
        resolve: async function({ ctx , input }) {
            return ctx.prisma.cpu.findFirst({ where: { id: input.id } });
        }
    })
    .mutation('createCpu', {
        input: cpu_zod_validation,
        async resolve({ ctx, input }) {
            return ctx.prisma.cpu.create({ data: input })
        }
    })
    .mutation('updateCpu', {
        input: Object.assign({}, id_zod_validation, cpu_zod_validation),
        resolve: async function({ ctx, input }) {
            return ctx.prisma.cpu.update({ 
                where: { id: input.id },
                data: input
            })
        }
    })
    .mutation('deleteCpuById', {
        input: id_zod_validation,
        resolve: async function({ ctx, input }) {
            return ctx.prisma.cpu.delete({
                where: { id: input.id }
            })
        }
    })