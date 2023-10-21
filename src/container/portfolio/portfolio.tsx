"use client"

import "./portfolio.scss"
import { Signika_Negative } from "next/font/google"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const signika = Signika_Negative({ subsets: ["latin"] })

export default function Portfolio() {
    const refRajawali = useRef(null)
    const isInView = useInView(refRajawali, { margin: "-100px" })
    return (
        <section className="section-container">
            <div className="portfolio-container">
                <h2 className={signika.className}>My works</h2>
                <div className="portfolio glass cards rajawali" ref={refRajawali}>
                    <div className="left-column">
                        <div className="logo-wrapper">
                            <Image alt="rajawali production" src="/assets/images/favicon-rajawali.png" width={72} height={72} />
                        </div>
                        <div className="title-wrapper">
                            <h3>Rajawali Production Indonesia</h3>
                            <h4>Company Profile Website</h4>
                            <div className="colors-container">
                                <div className="color color-1"></div>
                                <div className="color color-2"></div>
                                <div className="color color-3"></div>
                            </div>
                            <a href="" className="portfolio-link">
                                Go deeper
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="portfolio-grid first-grid">
                            <motion.div
                                className="grid-text"
                                initial={{ x: -30, opacity: 0 }}
                                animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p>Crafted by</p>
                                <p>Professional UI Designer</p>
                            </motion.div>
                            <motion.div
                                className="grid-image"
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Image alt="rajawali website screenshot" src="/assets/images/rajawali-ss.webp" width={400} height={400} />
                            </motion.div>
                            <motion.div
                                className="grid-card"
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="card-image">
                                    <Image alt="mirza gozali" src="/assets/images/mirza.webp" width={108} height={108} />
                                </div>
                                <div className="card-text">
                                    <p>Mirza Gozali</p>
                                    <p>UI/UX Designer</p>
                                    <a href="https://solos.work/@mirzagozali" className="portfolio-link">
                                        Visit Profile
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="portfolio-grid second-grid">
                            <motion.div
                                className="grid-text"
                                initial={{ x: -30, opacity: 0 }}
                                animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p>With Language</p>
                                <p>Selection Feature</p>
                            </motion.div>
                            <motion.div
                                className="grid-video"
                                initial={{ x: -30, opacity: 0 }}
                                animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <video autoPlay loop muted playsInline width={220} height={310}>
                                    <source src="/assets/videos/rajawali-lang-3.mp4" type="video/mp4" />
                                </video>
                            </motion.div>
                        </div>
                        <div className="portfolio-grid third-grid">
                            <motion.div
                                className="grid-text"
                                initial={{ y: -30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <p>SEO</p>
                                <p>Friendly</p>
                            </motion.div>
                            <motion.div
                                className="grid-logo-container"
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Image alt="google" src="/assets/images/google.webp" width={24} height={24} />
                                <Image alt="bing" src="/assets/images/bing.webp" width={24} height={24} />
                                <Image alt="yahoo" src="/assets/images/yahoo.webp" width={24} height={24} />
                            </motion.div>
                        </div>
                        <div className="portfolio-grid fourth-grid">
                            <motion.div
                                className="grid-text"
                                initial={{ y: -30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <p>Responsive</p>
                                <p>Layout</p>
                            </motion.div>
                            <motion.div
                                className="grid-image-fourth"
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Image alt="rajawali website screenshot" src="/assets/images/rajawali-responsive.webp" width={1592} height={710} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
