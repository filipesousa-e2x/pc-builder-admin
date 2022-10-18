import { z } from 'zod';
import { cpu_manufacturer_e } from './enums';

export const id_zod_validation = z.object({
    id: z.string().min(4)
});

export const base_zod_validation = z.object({
    id: z.string().nullable(),
    name: z.string().min(5).max(100),
    abrev: z.string().min(4).max(25)
});

export const cpu_zod_validation = z.object({
    name: z.string().min(5).max(100),
    abrev: z.string().min(4).max(25),
    manufacturer: cpu_manufacturer_e
});

// TODO
export const pc_case_zod_validation = z.object({
    name: z.string().min(5).max(100),
    abrev: z.string().min(4).max(25)
});
export const motherboard_zod_validation = z.object({
    name: z.string().min(5).max(100),
    abrev: z.string().min(4).max(25)
});
export const cooler_zod_validation = z.object({
    name: z.string().min(5).max(100),
    abrev: z.string().min(4).max(25)
});
export const ram_zod_validation = z.object({
    name: z.string().min(5).max(100),
    abrev: z.string().min(4).max(25)
});
export const gpu_zod_validation = z.object({
    name: z.string().min(5).max(100),
    abrev: z.string().min(4).max(25)
});
export const psu_zod_validation = z.object({
    name: z.string().min(5).max(100),
    abrev: z.string().min(4).max(25)
});
export const storage_zod_validation = z.object({
    name: z.string().min(5).max(100),
    abrev: z.string().min(4).max(25)
});


