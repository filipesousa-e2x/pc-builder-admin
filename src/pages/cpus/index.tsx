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
                    <Link href={{ pathname: '/cpus/create' }}>Create New</Link>
                </div>

                { all_cpus.isFetched && 
                    <DisplayTable  pc_components={all_cpus.data!} ></DisplayTable>
                }

                {/* <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Name Abrev</th>
                            <th>Manufacturer</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            all_cpus.data?.map( (cpu, index) => (
                                <tr key={ index }>
                                    <td>{ cpu.abrev }</td>
                                    <td>{ cpu.manufacturer }</td>
                                    <td><Link href={ { pathname:"/cpus/update/[id]", query: {id: cpu.id} } }>Update</Link></td>
                                    <td><Link href={ { pathname:"/cpus/delete/[id]", query: {id: cpu.id} } }>Delete</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> */}
            </main>
        </>

    )
            
}

export default cpuList;