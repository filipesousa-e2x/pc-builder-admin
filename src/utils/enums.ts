import { z } from "zod";

const cpu_manufacturer_e = z.enum(["AMD", "INTEL"]);
type cpu_manufacturer_e = z.infer<typeof cpu_manufacturer_e>;

const psu_type_e = z.enum(["ATX", "SFX"]);
type psu_type_e = z.infer<typeof psu_type_e>;

const gpu_manufacturer_e = z.enum(["AMD", "NVIDIA"]);
type gpu_manufacturer_e = z.infer<typeof gpu_manufacturer_e>;

const cpu_architecture_e = z.enum(["ZEN2", "ZEN3", "ZEN4"]);
type cpu_architecture_e = z.infer<typeof cpu_architecture_e>;

const cpu_socket_e = z.enum(["AM4", "AM5", 'LGA 1151']);
type cpu_socket_e = z.infer<typeof cpu_socket_e>;

const cooler_type_e = z.enum(["AIR", "LIQUID"]);
type cooler_type_e = z.infer<typeof cooler_type_e>;


export { 
    cpu_manufacturer_e,
    psu_type_e,
    gpu_manufacturer_e,
    cpu_architecture_e,
    cpu_socket_e,
    cooler_type_e
};

export enum CpuType {
    Intel = 'Intel',
    AMD = 'AMD'
}

export enum PsuType {
    ATX = 'ATX',
    SFX = 'SFX'
}

export enum MotherboardCpuManufacturer {
    AMD = 'AMD',
    INTEL = 'INTEL'
}

export enum GpuManufacturer {
    AMD = 'AMD',
    NVIDIA = 'NVIDIA'
}

export enum Architecture {
    ZEN2 = 'ZEN2',
    ZEN3 = 'ZEN3',
    ZEN4 = 'ZEN4'
}

export enum Socket {
    AM4 = 'AM4',
    AM5 = 'AM5',
    TR4 = 'TR4',
    sTRX4 = 'sTRX4',
    LGA_1151 = 'LGA 1151',
    LGA_1200 = 'LGA 1200',
    LGA_1700 = 'LGA 1700',
    LGA_2066 = 'LGA 2066',
    LGA_4189 = 'LGA 4189'
 }

export enum CoolerType {
    AIR = 'Air',
    LIQUID = 'Liquid'
}

export enum FrequencyUnit {
    Ghz = 'Ghz'
}

export enum TdpUnit {
    W = 'W'
}

export enum CacheUnit {
    Mb = 'Mb'
}

export enum RamTechonology {
    DDR4 = 'DDR4',
    DDR5 = 'DDR5'
}


export enum BUS {
    Gen_4 = 'Gen 4.0'
}

export enum ClockSpeeedUnit {
    MHz = 'MHz'
}

export enum PowerConsumptionUnit {
    W = 'Watts'
}

export enum PsuModularType {
    FULL_MODULAR = 'Full Modular',
    NON_MODULAR = 'Non Modular'
}

export enum EnergyEfficiency {
    plus_80 = '80 plus',
    plus_80_bronze = '80 plus bronze',
    plus_80_silver = '80 plus silver',
    plus_80_gold = '80 plus gold',
    plus_80_platinum = '80 plus platinum',
    plus_80_titanium = '80 plus titanium'
}

export enum Motherboard_PSU_Support {
    ATX = 'ATX',
    E_ATX = 'E-ATX',
    Micro_ATX = 'Micro-ATX',
    Mini_ITX = 'Mini-ITX'
}

export enum StoreName {
    GlobalData = 'GlobalData',
    PcDiga = 'PcDiga',
    PcComponentes = 'PcComponentes'
}

export enum Availability {
    disponivel = 'Disponível',
    por_ecomenda = 'Por Ecomenda',
    transito = 'Em Transito',
    esgotado = 'Esgotado'    
}

export enum StorageType {
    SSD = 'SSD',
    SSD_M2 = 'SSD M.2',
    HDD = 'HDD'
}