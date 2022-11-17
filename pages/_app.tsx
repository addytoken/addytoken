import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import ScrollToTop from "react-scroll-to-top"

export default function App({ Component, pageProps }: AppProps) {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        const mouseMove = (e: any) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
    }

    return (
        <>
            <Head>
                <title>Adderall</title>
                <meta name="description" content="Adderall Token Community" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ScrollToTop
                smooth
                viewBox="0 0 24 24"
                svgPath="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"
            />
            <motion.div
                variants={variants}
                animate="default"
                className=" fixed z-20 pointer-events-none"
            >
                <Image src="/cursor-pill.png" alt="pill bottle" width={35} height={48} />
            </motion.div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
