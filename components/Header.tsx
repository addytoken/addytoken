import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <nav className="p-3 w-full bg-black border-b-2 border-b-slate-600 flex flex-col md:flex-row justify-between items-center font-Sunflower">
            <Link href="/" legacyBehavior>
                <a className=" ml-10">
                    <Image src={"/logo-smooth.png"} alt="" height={80} width={160} />
                </a>
            </Link>
            <div className="hidden md:flex flex-row  tracking-wider text-slate-200 mr-10">
                <a
                    href="https://t.me/AdderallOfficialPortal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 p-4 hover:border-b-2 hover:border-b-fuchsia-600 font-bold"
                >
                    COMMUNITY
                </a>

                <a
                    href="https://etherscan.io/address/0xc8baaa3063bc20cc237de3903cf57e2110b59ad9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 p-4 hover:border-b-2 hover:border-b-fuchsia-600 font-bold"
                >
                    CONTRACT
                </a>

                <Link legacyBehavior href="#tok">
                    <a className="mr-4 p-4 hover:border-b-2 hover:border-b-fuchsia-600 font-bold">
                        TOKENOMICS
                    </a>
                </Link>

                <a
                    href="https://app.uniswap.org/#/swap?outputCurrency=0xc8baaa3063bc20cc237de3903cf57e2110b59ad9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 p-4 hover:border-b-2 hover:border-b-fuchsia-600 font-bold"
                >
                    BUY
                </a>
            </div>
        </nav>
    )
}
