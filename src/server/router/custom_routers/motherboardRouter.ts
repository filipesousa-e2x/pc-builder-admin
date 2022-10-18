import { motherboard_zod_validation } from "../../../utils/zod_objects";
import { createRouter } from "../context";

export const motherboardRouter = createRouter()
    .query('getMotherboardList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.motherboard.findMany();
        }
    })
    .mutation('createMotherboard', {
        input: motherboard_zod_validation,
        async resolve({ ctx, input }) {
            return ctx.prisma.motherboard.create({
                data: input
            })
        }
    })