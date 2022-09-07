import { createRouter } from "./context";
import { z } from "zod";
import { CpuManufacturer } from "@prisma/client";

const validateId = z.object({
    id: z.string()
});


const cpu_enum = z.enum(["AMD", "INTEL"]);
type cpu_enum = z.infer<typeof cpu_enum>;

const validateCpuForm = z.object({
    name: z.string().min(8),
    abrev: z.string().max(20),
    manufacturer: cpu_enum //z.nativeEnum(CpuManufacturer)
})


export const cpuRouter = createRouter()
    .query('getCpuList', {
        resolve: async function({ ctx }) {
            return ctx.prisma.cpu.findMany();
        }
    })
    .mutation('createCpu', {
        input: validateCpuForm,
        async resolve({ ctx, input }) {
            return ctx.prisma.cpu.create({ data: input })
        }
    })