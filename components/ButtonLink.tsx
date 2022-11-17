import Link from "next/link"

const ButtonLink = ({ text, url }: any) => {
    return (
        <Link href={url} target="_blank">
            <button className="relative font-Sunflower inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-14 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0">
                    {text}
                </span>
            </button>
        </Link>
    )
}

export default ButtonLink
