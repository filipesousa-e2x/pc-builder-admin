import { psu_zod_validation } from "../../../utils/zod_objects";
import { createRouter } from "../context";

export const psuRouter = createRouter()
    .query('getPsuList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.psu.findMany();
        }
    })
    .mutation('createPsu', {
        input: psu_zod_validation,
        async resolve({ ctx, input }) {
            return ctx.prisma.psu.create({
                data: input
            })
        }
    })