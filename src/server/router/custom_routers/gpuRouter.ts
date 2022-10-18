import { gpu_zod_validation } from "../../../utils/zod_objects";
import { createRouter } from "../context";

export const gpuRouter = createRouter()
    .query('getGpuList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.gpu.findMany();
        }
    })
    .mutation('createGpu', {
        input: gpu_zod_validation,
        async resolve({ ctx, input }) {
            return ctx.prisma.gpu.create({
                data: input
            })
        }
    })