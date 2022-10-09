import Link from "next/link";

interface Component {
    id: string,
    name: string,
    abrev: string,
    product_type: string,
    createdAt?: Date,
    updatedAt?: Date
}

const DisplayTable = ( props: { pc_components: Component[] }) => {
    return (
        <div className="overflow-hidden">
        <table className="min-w-full">
            <thead className="bg-white border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        ID
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Abrev
                    </th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                { 
                    props.pc_components.map( (component, index) => {
                        return (
                            <tr key={ index } className={ index % 2 == 0 ? 'bg-white' : 'bg-gray-100' + ' border-b'}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ component.id }</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ component.name }</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ component.abrev }</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <Link href={ { pathname:`/${component.product_type + 's'}/update/[id]`, query: {id: component.id} } }>Update</Link>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> 
                                    <Link href={ { pathname:`/${component.product_type + 's'}/delete/[id]`, query: {id: component.id} } }> Delete</Link>
                                </td>
                            </tr>
                        ) 
                    }) 
                }
            </tbody>
        </table>
        </div>
    )
}

export default DisplayTable;