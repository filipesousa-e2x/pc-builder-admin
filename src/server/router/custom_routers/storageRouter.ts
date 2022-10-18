import { createRouter } from "../context";
import { storage_zod_validation } from "../../../utils/zod_objects";

/*
export const storageRouter = createRouter()
    .query('getStorageList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.storage.findMany();
        }
    })
    .mutation('createStorage', {
        input: storage_zod_validation,
        async resolve({ ctx, input }) {
            return ctx.prisma.storage.create({
                data: input
            })
        }
    })
*/