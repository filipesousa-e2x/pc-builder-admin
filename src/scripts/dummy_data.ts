import { Prisma } from '@prisma/client';
import { CpuManufacturer } from "@prisma/client";

// SETTING UP TYPES WITH REQUIRED FIELDS
type pc_case = Prisma.PcCaseGetPayload<{
    select: {
        name: true,
        abrev: true,
        product_type: true,
    }
}>;

type motherboard = Prisma.MotherboardGetPayload<{
    select: {
        name: true,
        abrev: true,
        product_type: true
    }
}>;

type cpu = Prisma.CpuGetPayload<{
    select: {
        name: true,
        abrev: true,
        manufacturer: true,
        product_type: true
    }
}>;

type cooler = Prisma.CoolerGetPayload<{
    select: {
        name: true,
        abrev: true,
        product_type: true
    }
}>;

type ram = Prisma.RamGetPayload<{
    select: {
        name: true,
        abrev: true,
        product_type: true
    }
}>;

type gpu = Prisma.GpuGetPayload<{
    select: {
        name: true,
        abrev: true,
        product_type: true
    }
}>;

type psu = Prisma.PsuGetPayload<{
    select: {
        name: true,
        abrev: true,
        product_type: true
    }
}>;

const pc_cases: pc_case[] = [];
const motherboards: motherboard[] = [];
const coolers: cooler[] = [];
const rams: ram[] = [];
const gpus: gpu[] = [];
const psus: psu[] = [];

// SETTING UP DATA
const cpus: cpu[] = [
    {
        name: '',
        abrev: '',
        manufacturer: CpuManufacturer.AMD,
        product_type: 'cpu'
    },
    {
        name: '',
        abrev: '',
        manufacturer: CpuManufacturer.AMD,
        product_type: 'cpu'
    },
    {
        name: '',
        abrev: '',
        manufacturer: CpuManufacturer.AMD,
        product_type: 'cpu'
    },
    {
        name: '',
        abrev: '',
        manufacturer: CpuManufacturer.AMD,
        product_type: 'cpu'
    },
    {
        name: '',
        abrev: '',
        manufacturer: CpuManufacturer.AMD,
        product_type: 'cpu'
    }
];


// INSERTING DATA TO DATABASE

( async function() {
    try {

        prisma?.$connect();

        prisma?.pcCase.createMany({ data: pc_cases });
        prisma?.motherboard.createMany({ data: motherboards });
        prisma?.cpu.createMany({ data: cpus });
        prisma?.cooler.createMany({ data: coolers });
        prisma?.ram.createMany({ data: rams });
        prisma?.gpu.createMany({ data: gpus });
        prisma?.psu.createMany({ data: psus });
        
    } 
    catch (error) {
        throw error;
    }
    finally {
        // close database
        prisma?.$disconnect();
    }

})()