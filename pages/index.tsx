import Link from "next/link"
import Image from "next/image"
import { Tweet } from "react-twitter-widgets"
import ButtonLink from "../components/ButtonLink"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
    const [tweetLoaded, setTweetLoaded] = useState(false)

    return (
        <div className="min-h-screen w-full mx-auto bg-black overflow-hidden">
            <div className="container mx-auto">
                <div className="w-full md:w-3/4 flex flex-col xl:flex-row justify-center md:justify-between mx-auto pb-12 mt-28">
                    <motion.div
                        initial={{ opacity: 0.1, x: -200 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative mx-auto"
                    >
                        <Image src={"/bottle-1.png"} alt="" height={500} width={400} />
                    </motion.div>
                    <div className="flex flex-col justify-center items-center basis-2/3">
                        <div className="w-full mx-auto xl:ml-24 relative">
                            <div
                                className="absolute w-full h-full flex flex-col items-center justify-center"
                                style={{
                                    opacity: !tweetLoaded ? 1 : 0,
                                    zIndex: !tweetLoaded ? 1 : -1,
                                }}
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.4, 1.4, 1, 1],
                                        rotate: [0, 0, 180, 180, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                        times: [0, 0.2, 0.5, 0.8, 1],
                                        repeat: Infinity,
                                        repeatDelay: 1,
                                    }}
                                >
                                    <Image src={"/twit.png"} alt="" height={140} width={140} />
                                </motion.div>
                                <h3 className="text-2xl text-blue-300">Loading...</h3>
                            </div>
                            <Tweet
                                tweetId="1591227781534613505"
                                options={{ theme: "dark" }}
                                onLoad={() => setTweetLoaded(true)}
                            />
                        </div>

                        <div
                            style={{ marginTop: tweetLoaded ? 32 : 200 }}
                            className="w-full flex flex-col md:flex-row justify-center items-center md:justify-around space-y-8 min-[765px]:space-y-0 px-14"
                        >
                            <ButtonLink url={"/"} text={"BUY $ADDY"} />
                            <ButtonLink url={"/"} text={"CONTRACT"} />
                        </div>
                    </div>
                </div>
                {/* <div className="relative">
                    <Image src={"/caroline.png"} alt="" height={480} width={450} />
                </div> */}

                {/* <div className="relative">
                    <Image src={"/sbf.png"} alt="" height={500} width={500} />
                </div> */}
            </div>
            <div className="w-full bg-slate-100">
                <div className="container mx-auto">
                    <div className="w-full flex flex-col lg:flex-row py-6">
                        <div className=" flex items-center justify-center basis-full xl:basis-1/2">
                            {/* <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                            >
                                <Image src={"/caroline.png"} alt="" height={400} width={400} />
                            </motion.div> */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ ease: "linear", duration: 4, repeat: Infinity }}
                                className=" w-96 h-96 rounded-full  relative"
                            >
                                <div className=" absolute left-0 top-0">
                                    <Image src={"/caroline.png"} alt="" height={150} width={150} />
                                </div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Image src={"/pill.png"} alt="" height={40} width={40} />
                                </div>
                                <div className=" absolute right-0 bottom-0">
                                    <Image src={"/sbf.png"} alt="" height={170} width={170} />
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex flex-col basis-full xl:basis-1/2 justify-center items-center font-Sunflower py-12 px-3 text-slate-700">
                            <h3 className=" text-pink-600 text-3xl font-bold">
                                Why ADDERALL? ($ADDY)
                            </h3>
                            <div className=" mt-5 text-lg md:text-2xl font-semibold">
                                Launched in reaction to one of the crypto titans of industries
                                implosion, $Adderall is here to bring awareness to the public that
                                there is a massive shortage of this wonder drug. It is no
                                coincidence that the shortage comes during one of the most
                                tumultous times in crypto history.
                            </div>
                            <div className=" mt-5 text-lg md:text-2xl font-semibold">
                                It is rumored that in the Bahamian halls of FTX/Alameda is where
                                this drug was free flowing as the sun shy degens were clicking away
                                without any stop losses or technical analysis between their sex
                                parties. Did they create this adderal shortage or was it the
                                linchpin to their downfall.
                            </div>
                            <div className=" mt-5 text-lg md:text-2xl font-semibold">
                                ADHD, degens, and autists alike understand that if there was no
                                shortage we wouldn’t be in this situation. Lets get this drug back
                                in supply in short order so we can turbo back to all time highs in
                                one trade. $Adderall for all!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tok" className="w-full">
                <div className="container mx-auto py-20">
                    <h1 className=" text-4xl lg:text-5xl text-pink-600 text-center tracking-widest">
                        TOKENOMICS <span className="hidden md:inline-block">&nbsp;</span>
                        <span className="hidden md:inline-block text-4xl lg:text-5xl text-white tracking-widest">
                            BREAKDOWN
                        </span>
                    </h1>
                    <div className="w-full flex flex-wrap gap-7 justify-center mt-16 px-5">
                        <div className=" flex justify-between items-center rounded-xl py-3 px-6 border-2 border-slate-500 min-w-[300px] max-w-xs">
                            <Image src={"/pill.png"} alt="" height={40} width={40} />
                            <div className="flex flex-col items-center justify-center text-center">
                                <h2 className=" text-2xl text-pink-500">TOKEN SYMBOL</h2>
                                <h3 className=" text-xl text-white font-bold">$ADDY</h3>
                            </div>
                        </div>
                        <div className=" flex justify-between items-center rounded-xl py-3 px-6 border-2 border-slate-500 min-w-[300px] max-w-xs">
                            <Image src={"/pill.png"} alt="" height={40} width={40} />
                            <div className="flex flex-col items-center justify-center text-center">
                                <h2 className=" text-2xl text-pink-500">TOTAL SUPPLY</h2>
                                <h3 className=" text-xl text-white font-bold">10 B</h3>
                            </div>
                        </div>
                        <div className=" flex justify-between items-center rounded-xl py-3 px-6 border-2 border-slate-500 min-w-[300px] max-w-xs">
                            <Image src={"/pill.png"} alt="" height={40} width={40} />
                            <div className="flex flex-col items-center justify-center text-center">
                                <h2 className=" text-2xl text-pink-500">TEAM TOKENS</h2>
                                <h3 className=" text-xl text-white font-bold">NONE</h3>
                            </div>
                        </div>
                        <div className=" flex justify-between items-center rounded-xl py-3 px-6 border-2 border-slate-500 min-w-[300px] max-w-xs">
                            <Image src={"/pill.png"} alt="" height={40} width={40} />
                            <div className="flex flex-col items-center justify-center text-center">
                                <h2 className=" text-2xl text-pink-500">CIRC SUPPLY</h2>
                                <h3 className=" text-xl text-white font-bold">10B (100%)</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-3">
                <div className="container mx-auto py-16 rounded-xl border-2 border-slate-400">
                    <h1 className=" text-4xl lg:text-5xl text-pink-600 text-center tracking-widest">
                        TAXES
                    </h1>
                    <div className="w-full flex flex-wrap gap-7 justify-center mt-16 px-5">
                        <div className=" flex justify-between items-center rounded-xl py-3 px-6 border-2 border-slate-500 min-w-[300px] max-w-xs">
                            <Image src={"/pill.png"} alt="" height={40} width={40} />
                            <div className="flex flex-col items-center justify-center text-center">
                                <h2 className=" text-2xl text-pink-500">BUY</h2>
                                <h3 className=" text-xl text-white font-bold">5%</h3>
                            </div>
                        </div>
                        <div className=" flex justify-between items-center rounded-xl py-3 px-6 border-2 border-slate-500 min-w-[300px] max-w-xs">
                            <Image src={"/pill.png"} alt="" height={40} width={40} />
                            <div className="flex flex-col items-center justify-center text-center">
                                <h2 className=" text-2xl text-pink-500">SELL</h2>
                                <h3 className=" text-xl text-white font-bold">5%</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto py-20">
                        <h1 className=" text-4xl lg:text-5xl text-pink-600 text-center tracking-widest">
                            DISTRIBUTION
                        </h1>
                        <div className="w-full flex flex-wrap gap-7 justify-center mt-16 px-5">
                            <div className=" flex justify-between items-center rounded-xl py-3 px-6 border-2 border-slate-500 min-w-[300px] max-w-xs">
                                <Image src={"/pill.png"} alt="" height={40} width={40} />
                                <div className="flex flex-col items-center justify-center text-center">
                                    <h2 className=" text-2xl text-pink-500">5%</h2>
                                    <h3 className=" text-xl text-white font-bold">Marketing</h3>
                                </div>
                            </div>
                            <div className=" flex justify-between items-center rounded-xl py-3 px-6 border-2 border-slate-500 min-w-[300px] max-w-xs">
                                <Image src={"/pill.png"} alt="" height={40} width={40} />
                                <div className="flex flex-col items-center justify-center text-center">
                                    <h2 className=" text-2xl text-pink-500">3%</h2>
                                    <h3 className=" text-xl text-white font-bold">Development</h3>
                                </div>
                            </div>
                            <div className=" flex justify-between items-center rounded-xl py-3 px-6 border-2 border-slate-500 min-w-[300px] max-w-xs">
                                <Image src={"/pill.png"} alt="" height={40} width={40} />
                                <div className="flex flex-col items-center justify-center text-center">
                                    <h2 className=" text-2xl text-pink-500">2%</h2>
                                    <h3 className=" text-xl text-white font-bold">Treasury</h3>
                                </div>
                            </div>
                        </div>
                        <h3 className=" text-lg lg:text-xl text-slate-500 text-center tracking-widest mt-10">
                            (Distribution may be subject to change depending on the roadmap)
                        </h3>
                    </div>
                </div>
            </div>
            <div className="w-full py-16 bg-slate-50 flex flex-wrap items-center justify-center gap-10 md:items-start mt-48">
                <Tweet tweetId="1591550398867079168" options={{ theme: "dark" }} />
                <Tweet tweetId="1592002517004873728" options={{ theme: "dark" }} />
                <Tweet tweetId="1173351344159117312" options={{ theme: "dark" }} />
                <Tweet tweetId="1591333446995283969" options={{ theme: "dark" }} />
            </div>

            <footer className="py-20">
                <div className="flex items-center justify-center gap-5 lg:gap-10 mb-8">
                    <a
                        href="https://t.me/AdderallOfficialPortal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <Image src="/tg-icon.svg" alt="Vercel Logo" width={60} height={60} />
                        </span>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <span>
                            <Image
                                src="/logo-smooth.png"
                                alt="Vercel Logo"
                                width={100}
                                height={100}
                            />
                        </span>
                    </a>
                    <a
                        href="https://twitter.com/AdderallToken?t=070zxpFKzCVR4eTVWDAuVg&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <Image src="/tw-icon.svg" alt="Vercel Logo" width={60} height={60} />
                        </span>
                    </a>
                </div>
                <h4 className=" text-lg text-zinc-300 text-center">
                    COPYRIGHT © 2022 ADDERALL TOKEN. ALL RIGHTS RESERVED
                </h4>
            </footer>
        </div>
    )
}
