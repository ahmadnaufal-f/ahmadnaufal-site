"use client"

import React, { useRef, useEffect } from "react"
import "./about.scss"
// Import Lottie dynamically and the type for LottieRefCurrentProps
import dynamic from "next/dynamic"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { useInView, motion } from "framer-motion"
import { Outfit } from "next/font/google"
import Link from "next/link"
import { LottieRefCurrentProps } from "lottie-react" // Import the type for the Lottie reference
import programmer from "../../../public/assets/lottie/programmer.json"

// Dynamically import the Lottie component with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const outfit = Outfit({ subsets: ["latin"] })

function About() {
    const lottieRef = useRef<LottieRefCurrentProps>(null)
    const container = useRef<HTMLDivElement>(null)
    const isInView = useInView(container, { margin: "-100px 0px" })

    useEffect(() => {
        if (isInView) {
            lottieRef.current?.goToAndPlay(0, true)
        }
    }, [isInView])

    return (
        <section className="cards about-container" data-height="300">
            <div className="about__illustration" ref={container}>
                <Lottie lottieRef={lottieRef} animationData={programmer} loop={false} autoPlay={false} />
            </div>
            <motion.div
                className="about__text"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
            >
                <h2 className={`about__title ${outfit.className}`}>A Brief Profile of Myself</h2>
                <p className="about__description">
                    I am a passionate front-end developer with 2 and half years of experience in creating stunning and responsive websites. I reside
                    in the vibrant city of Bekasi, where I constantly seek inspiration from my surroundings to create designs that not only look great
                    but also provide an exceptional user experience.
                </p>
                <Link href="/about" className="about__button">
                    <span>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Dive deeper into my background</p>
                </Link>
            </motion.div>
        </section>
    )
}

export default About
