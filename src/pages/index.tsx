import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface LinkCardInterface {
    content: string;
    link: string;
}

const linkCardProps: LinkCardInterface[] = [
    { content: "View Computer Sets", link: "/computer_set" },
    { content: "View Computers", link: "/computers" },
    { content: "View Pc Cases", link: "/pc_cases" },
    { content: "View Motherboards", link: "/motherboards" },
    { content: "View CPU", link: "/cpus/cpu_list" },
    { content: "View Coolers", link: "/coolers" },
    { content: "View RAM", link: "/rams" },
    { content: "View GPU", link: "/gpus" },
    { content: "View PSU", link: "/psus" }
];

// const LinkCard = (props: LinkCardInterface) => {
//     return (
//         <div className="flex items-center justify-center">
//             <Link
//                 className="text-lg text-blue-600"
//                 href={{ pathname: props.link }}
//             >
//                 {props.content}
//             </Link>
//         </div>
//     );
// };

const LinkCard = (props: LinkCardInterface) => {
    return (
        <div className="w-48 text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <Link
                href={{ pathname: props.link }}
                className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <button>
                    { props.content }
                </button>
            </Link>
        </div>
    )
}


const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto py-8">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p4 text-center justify-center h-44">TESTE</div>
                    <div className="">
                        <h2>TITLE</h2>
                        <div className="grid grid-flow-row">
                            { linkCardProps.map((item, index) => (
                                <div key={index} className="justify-center text-center text-blue-600">
                                    <LinkCard content={item.content} link={item.link}  />
                                </div>
                            ))}                            
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};


export default Home;
