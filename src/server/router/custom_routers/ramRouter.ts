import { ram_zod_validation } from "../../../utils/zod_objects";
import { createRouter } from "../context";

export const ramRouter = createRouter()
    .query('getRamList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.ram.findMany();
        }
    })
    .mutation('createRam', {
        input: ram_zod_validation,
        async resolve({ ctx, input }) {
            return ctx.prisma.ram.create({
                data: input
            })
        }
    })