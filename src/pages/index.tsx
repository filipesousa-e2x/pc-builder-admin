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
    { content: "View CPU", link: "/cpus" },
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
                    <svg aria-hidden="true" className="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
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
                <div className="grid grid-cols-3 gap-4">
                    { linkCardProps.map((item, index) => (
                        <div key={index} className="border h-52 flex items-center justify-center text-blue-500 font-semibold hover:bg-orange-200">
                            <LinkCard content={item.content} link={item.link}  />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};


export default Home;
