import Link from "next/link";
import DisplayTable from "../../components/displayTable";
import { trpc } from "../../utils/trpc";

const cpuList = () => {
    const all_cpus = trpc.useQuery(["cpu_router.getCpuList"]);

    return (
        <>
            <main className="container mx-auto">
                <div className="flex flex-row justify-around">
                    <h3>CPU List</h3>
                    <Link href={{ pathname: '/cpus/create' }}>
                        <button className="p-4 text-center border">Create New</button>
                    </Link>
                </div>

                { all_cpus.isFetched && 
                    <DisplayTable  pc_components={all_cpus.data!} ></DisplayTable>
                }
            </main>
        </>

    )
            
}

export default cpuList;