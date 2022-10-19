import { cpu_manufacturer_e } from "./enums"

 
export interface Store {
    store_name: string,
    product_link: string,
    product_price: number,
    product_discount?: number,
    product_availability?: boolean
}


export interface Component {
    id?: string,
    product_type: string,
    name: string,
    abrev: string,
    stores: Store[],
    created_at?: Date,
    updated_at?: Date
}

export interface PcCase extends Component {}
export interface Motherboard extends Component {}
export interface Cpu extends Component {
    manufacturer: cpu_manufacturer_e
}
export interface Cooler extends Component {}
export interface Ram extends Component {}
export interface Gpu extends Component {}
export interface Psu extends Component {}
export interface Storage extends Component {}
export interface Cable extends Component {}
export interface Fan extends Component {}


export interface Computer {
    id?: string,
    name: string,
    description: string,
    computer_components: [PcCase, Motherboard, Cpu, Ram, Psu, Gpu?, Cooler?, Cable?, Fan?],
    created_at?: Date,
    updated_at?: Date
}

export interface ComputerSet {
    id?: string,
    name: string,
    description: string
    computers: Computer[]
    created_at?: Date
    updated_at?: Date
}