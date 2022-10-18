import { cooler_zod_validation } from "../../../utils/zod_objects";
import { createRouter } from "../context";

export const coolerRouter = createRouter()
    .query('getCoolerList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.cooler.findMany();
        }
    })
    .mutation('createCooler', {
        input: cooler_zod_validation,
        async resolve({ ctx, input }) {
            return ctx.prisma.cooler.create({
                data: input
            })
        }
    })