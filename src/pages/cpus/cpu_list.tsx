import Link from "next/link";
import DisplayTable from "../../components/displayTable";
import router_paths_config from "../../utils/next_router_config";
import { trpc } from "../../utils/trpc";

const cpuList = () => {
    const all_cpus = trpc.useQuery(["cpu_router.getCpuList"]);

    return (
        <main className="container mx-auto">
            <div className="flex flex-row justify-around">
                <h3>CPU List</h3>
                <Link href={{ pathname: '/cpus/create/create_cpu.tsx' }}>
                    <button className="p-4 text-center border">Create New</button>
                </Link>
            </div>

            {
                all_cpus.isFetching &&
                <div className="text-gray-500 text-center font-bold"> Loading data... </div>
            }
            { all_cpus.isFetched && 
                <DisplayTable  pc_components={all_cpus.data!} ></DisplayTable>
            }
        </main>
    )
            
}

export default cpuList;