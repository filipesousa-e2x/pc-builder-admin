import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Component {
    name: string,
    abrev: string,
    product_type: string
}

const pccases: Component[] = [];
const motherboards: Component[] = [];
const cpus: Component[] = [];
const coolers: Component[] = [];
const rams: Component[] = [];
const gpus: Component[] = [];
const psus: Component[] = [];
const storages: Component[] = [];


(async function() {
    try {
        prisma.$connect();

        console.log("Inserting Pc Cases");
        await prisma.pcCase.createMany({
            data: pccases,
            skipDuplicates: true
        });
        console.log("Inserting Motherboards");
        await prisma.pcCase.createMany({
            data: motherboards,
            skipDuplicates: true
        });
        console.log("Inserting Cpus");
        await prisma.pcCase.createMany({
            data: cpus,
            skipDuplicates: true
        });
        console.log("Inserting Coolers");
        await prisma.pcCase.createMany({
            data: coolers,
            skipDuplicates: true
        });
        console.log("Inserting Rams");
        await prisma.pcCase.createMany({
            data: rams,
            skipDuplicates: true
        });
        console.log("Inserting Gpus");
        await prisma.pcCase.createMany({
            data: gpus,
            skipDuplicates: true
        });
        console.log("Inserting Psus");
        await prisma.pcCase.createMany({
            data: psus,
            skipDuplicates: true
        });
        console.log("Inserting Storages");
        await prisma.pcCase.createMany({
            data: storages,
            skipDuplicates: true
        });

    } catch (error: any) {
        throw new Error(error);
    } finally {
        prisma.$disconnect();
    }

})()