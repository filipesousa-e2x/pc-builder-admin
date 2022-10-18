import { pc_case_zod_validation } from "../../../utils/zod_objects";
import { createRouter } from "../context";


export const pcCaseRouter = createRouter()
    .query('getPcCaseList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.pcCase.findMany();
        }
    })
    .mutation('createPcCase', {
        input: pc_case_zod_validation,
        async resolve({ ctx, input }) {
            return ctx.prisma.pcCase.create({
                data: input
            })
        }
    })