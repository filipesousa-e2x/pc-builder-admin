import { CpuManufacturer } from "@prisma/client";
import { MouseEvent, useState } from "react";
import { cpu_manufacturer_e, ProductType } from "../../../utils/enums";
import { Cpu } from "../../../utils/interfaces";
import { trpc } from "../../../utils/trpc";


const cpuCreate = () => {
    const [cpu_state, setCpuState] = useState<Cpu>({
        product_type: ProductType.CPU,
        name: '',
        abrev: '',
        manufacturer: cpu_manufacturer_e.Enum.AMD,
        stores: []
    });

    const createCpu = trpc.useMutation(["cpu_router.createCpu"]);

    const cpu_manufacturers: string[] = Object.values(CpuManufacturer);

    const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement >) => {
        const { name, value } = e.target;
        setCpuState(previousState => ({
            ...previousState,
            [name]: value
        }))
    }

    const handleSubmit = async (e: MouseEvent) => {
        e.preventDefault();

        createCpu.mutate(cpu_state);

    }

    return (
        <main className="container mx-auto py-6">
            <div className="width-80 mx-auto">   
                <div className="text-center font-semibold"> 
                    <h2>Create CPU</h2>
                    { <label htmlFor="">{ cpu_state.name }</label> }
                    { <label htmlFor="">{ cpu_state.abrev }</label> }
                    { <label htmlFor="">{ cpu_state.manufacturer }</label> }
                </div>
                <div className="text-green-600">
                    { createCpu.isSuccess && <p>Success</p> }
                </div>
                <div className="text-red-600">
                    { createCpu.error && <p>Something went wrong! {createCpu.error.message}</p> }
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Name</label>
                    <input type="text" name="name" id="input_name" onChange={ handleValueChange } required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                        <div>                        
                            <label htmlFor="abrev" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Abrev</label>
                            <input type="text" name="abrev" id="input_abrev" onChange={ handleValueChange } required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>                     
                        <div>
                            <label htmlFor="manufacturer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Manufacturer</label>                    
                            <select  name="manufacturer" id="select_manufacturer" onChange={ handleValueChange } required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="undefined"></option>
                                { cpu_manufacturers.map( (item, index) => {
                                    return <option value={item} key={index} >{item}</option>
                                }) }
                            </select>                            
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={ handleSubmit } 
                        className="p4 rounded bg-transparent text-semibold text-purple-600 border-purple-600 hover:scale-50" >Submit</button>
                </div>
            </div>
        </main>
    )
}

export default cpuCreate;