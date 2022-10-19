import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Store {
    store_name: string,
    price: number,
    product_link: string,
}

interface Component {
    name: string,
    abrev: string,
    product_type: string,
    stores: Store[]
}

enum CoolerType {
    AIR = 'Air',
    LIQUID = 'Liquid'
}

interface PcCase extends Component {};
interface Motherboard extends Component {};
interface Cpu extends Component {};
interface Cooler extends Component { type: CoolerType };
interface Ram extends Component {};
interface Gpu extends Component {};
interface Psu extends Component {};
interface Storage extends Component {};

const default_stores: Store[] = [
    {
        store_name: 'GlobalData',
        price: 0,
        product_link: ''
    },
    {
        store_name: 'PcDiga',
        price: 0,
        product_link: ''
    },
    {
        store_name: 'PcComponentes',
        price: 0,
        product_link: ''
    }
];

const pccases: PcCase[] = [
    {
        product_type: 'pc_case',
        name: 'ATX Lian Li Lancool 205 Mesh Preta Vidro Temperado',
        abrev: 'ATX Lian Li Lancool 205',
        stores: default_stores
    },
    {
        product_type: 'pc_case',
        name: 'ATX Kolink Observatory Lite Mesh RGB Vidro Temperado',
        abrev: 'ATX Kolink Observatory Lite',
        stores: default_stores
    },
    {
        product_type: 'pc_case',
        name: 'ATX Lian Li Lancool 215 ARGB Preta Vidro Temperado',
        abrev: 'ATX Lian Li Lancool 215',
        stores: default_stores
    }
];

const motherboards: Motherboard[] = [
    {
        product_type: 'motherboard',
        name: 'Motherboard Asus PRIME B550M-A',
        abrev: 'Asus PRIME B550M-A',
        stores: default_stores
    },
    {
        product_type: 'motherboard',
        name: 'Motherboard Asus PRIME B560M-K',
        abrev: 'Asus PRIME B560M-K',
        stores: default_stores
    },
    {
        product_type: 'motherboard',
        name: 'Motherboard MSI B560M PROVDH',
        abrev: 'MSI B560M PROVDH',
        stores: default_stores
    },
    {
        product_type: 'motherboard',
        name: 'Motherboard Asus TUF B550ME Gaming',
        abrev: 'Asus TUF B550ME Gaming',
        stores: default_stores
    },
    {
        product_type: 'motherboard',
        name: 'Motherboard Asus TUF B660-Plus Gaming WiFi D4',
        abrev: 'Asus TUF B660-Plus Gaming WiFi D4',
        stores: default_stores
    }
];
const cpus: Cpu[] = [
    {
        product_type: 'cpu',
        name: 'APU AMD Ryzen 5 5600G 6-Core (3.9GHz-4.4GHz) 19MB AM4',
        abrev: 'AMD Ryzen 5 5600G',
        stores: default_stores
    },
    {
        product_type: 'cpu',
        name: 'Intel Core i3 10100F 4-Core (3.6GHz-4.3GHz) 6MB Skt1200',
        abrev: 'i3 10100F',
        stores: default_stores
    },
    {
        product_type: 'cpu',
        name: 'Intel Core i5 10400F 6-Core (2.9GHz-4.3GHz) 12MB Skt1200',
        abrev: 'i5 10400F',
        stores: default_stores
    },
    {
        product_type: 'cpu',
        name: 'AMD Ryzen 5 5600 6-Core (3.5GHz-4.4GHz) 36MB AM4',
        abrev: 'AMD Ryzen 5 5600',
        stores: default_stores
    },
    {
        product_type: 'cpu',
        name: 'AMD Ryzen 7 5700X 8-Core (3.4GHz-4.6GHz) 36MB AM4',
        abrev: 'AMD Ryzen 7 5700X',
        stores: default_stores
    },
    {
        product_type: 'cpu',  
        name: 'Intel Core i7 12700F 12-Core (2.1GHz-4.9GHz) 25MB Skt1700',
        abrev: 'i7 12700F',
        stores: default_stores
    }
];
const coolers: Cooler[] = [
    {
        product_type: 'cooler',
        name: 'Cooler CPU Jonsbo CR-1000 RGB Preto - 120mm',
        abrev: 'Jonsbo CR-1000 RGB',
        type: CoolerType.AIR,
        stores: default_stores
    },
    {
        product_type: 'cooler',
        name: 'Cooler CPU Arctic Freezer 34',
        abrev: 'Arctic Freezer 34',
        type: CoolerType.AIR,
        stores: default_stores
    },
    {
        product_type: 'cooler',
        name: 'Cooler CPU a Água AIO Lian Li GALAHAD V2 DRGB Preto - 240mm (LGA 1700 Ready)',
        abrev: 'Lian Li GALAHAD V2',
        type: CoolerType.LIQUID,
        stores: default_stores
    }
];
const rams: Ram[] = [
    {
        product_type: 'ram',
        name: 'Team Group Kit 16GB (2 x 8GB) DDR4 3600MHz Vulcan Z Grey CL18',
        abrev: 'Team Group 16GB (2 x 8GB) DDR4 3600MHz CL18',
        stores: default_stores 
    },
    {
        product_type: 'ram',
        name: 'Team Group Kit 16GB (2 x 8GB) DDR4 3200MHz Vulcan Z Grey CL16',
        abrev: 'Team Group 16GB (2x8GB) DDR4 3200Mhz CL16',
        stores: default_stores
    },
    {
        product_type: 'ram',
        name: 'Kingston Kit 32GB (2 x 16GB) DDR4 3600MHz FURY Renegade Preto 2R CL16',
        abrev: 'Kingston 32GB (2x16GB) DDR4 3600Mhz CL16',
        stores: default_stores
    }
];
const gpus: Gpu[] = [
    {
        product_type: 'gpu',
        name: 'Gráfica MSI GeForce® GTX 1650 D6 VENTUS XS OC 4G',
        abrev: 'MSI GeForce GTX 1650 4G',
        stores: default_stores
    },
    {
        product_type: 'gpu',
        name: 'Gráfica MSI GeForce® RTX 3050 VENTUS 2X 8G OC',
        abrev: 'MSI GeForce® RTX 3050 8G OC',
        stores: default_stores
    },
    {
        product_type: 'gpu',
        name: 'Gráfica MSI GeForce® RTX 3060 GAMING X 12G',
        abrev: 'MSI GeForce® RTX 3060 12G',
        stores: default_stores
    },
    {
        product_type: 'gpu',
        name: 'Gráfica MSI GeForce® RTX 3070 GAMING X TRIO 8G',
        abrev: 'MSI GeForce® RTX 3070 8G',
        stores: default_stores
    }
];
const psus: Psu[] = [
    {
        product_type: 'psu',
        name: 'Fonte Modular Kolink Enclave 500W 80+ Gold',
        abrev: 'Kolink Enclave 500W 80+ Gold',
        stores: default_stores
    },
    {
        product_type: 'psu',
        name: 'Fonte Seasonic G12 GC 550W 80+ Gold',
        abrev: 'Seasonic G12 GC 550W 80+ Gold',
        stores: default_stores
    },
    {
        product_type: 'psu',
        name: 'Fonte Modular Kolink Enclave 600W 80+ Gold',
        abrev: 'Kolink Enclave 600W 80+ Gold',
        stores: default_stores
    },
    {
        product_type: 'psu',
        name: 'Fonte Modular Seasonic Focus GX-750W 80+ Gold',
        abrev: 'Seasonic Focus GX-750W 80+ Gold',
        stores: default_stores
    }
];
const storages: Storage[] = [
    {
        product_type: 'storage',
        name: 'Disco SSD Western Digital Blue SN570 500GB M.2 NVMe',
        abrev: 'SSD WDB 500GB M.2 NVMe',
        stores: default_stores
    },
    {
        product_type: 'storage',
        name: 'Disco SSD Samsung 980 1TB M.2 NVMe',
        abrev: 'SSD Samsung 980 1TB M.2 NVMe',
        stores: default_stores
    }
];


(async function() {
    try {
        //prisma.$connect();

        console.log('Deleting database records...');
        await prisma.pcCase.deleteMany();
        await prisma.motherboard.deleteMany();
        await prisma.cpu.deleteMany();
        await prisma.cooler.deleteMany();
        await prisma.ram.deleteMany();
        await prisma.gpu.deleteMany();
        await prisma.psu.deleteMany();
        //await prisma.storage.deleteMany();

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