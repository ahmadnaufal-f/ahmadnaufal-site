"use client"

import "./portfolio.scss"
import { Signika_Negative } from "next/font/google"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { sharedTransition } from "@/utils/utils"

const signika = Signika_Negative({ subsets: ["latin"] })

interface PortfolioCardProps {
    title: string
    description: string
    hashtags: string[]
    preview: string
    color: string
    hue: number
    icon: string
    link: string
    category: string
    titleColor?: string
    dontUseBorderForPreview?: boolean
}

function PortfolioCard({
    title,
    description,
    hashtags,
    preview,
    hue,
    color,
    icon,
    link,
    category,
    titleColor,
    dontUseBorderForPreview,
}: PortfolioCardProps) {
    const colorVar = { "--hue": hue, "--color-theme": color } as React.CSSProperties
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { margin: "200px 0px" })
    const initialStyle = {
        "--saturation": "0%",
    }
    const appliedStyle = {
        "--saturation": "50%",
    }

    return (
        <motion.div
            className="project-container glass"
            style={colorVar}
            animate={!isInView ? (initialStyle as any) : (appliedStyle as any)}
            ref={ref}
            transition={{ ...sharedTransition, delay: 0.5 }}
        >
            <motion.div
                className="project-title-container"
                initial={{ "--box-width": 0 } as any}
                animate={!isInView ? ({ "--box-width": 0 } as any) : ({ "--box-width": "100%" } as any)}
            >
                <div className="project-icon">
                    <Image src={icon} alt="Project Icon" width={45} height={45} />
                </div>
                <h3 style={titleColor ? { color: titleColor } : {}}>{title}</h3>
            </motion.div>
            <div className="project-content">
                <div className="project-preview" style={dontUseBorderForPreview ? { outline: "unset", boxShadow: "unset" } : {}}>
                    <Image src={preview} alt="Project Preview" width={360} height={360} />
                </div>
                <div className="project-details">
                    <p className="project-category">{category}</p>
                    <p className="project-description">{description}</p>
                    <div className="project-hashtags">
                        {hashtags.map((hashtag, index) => (
                            <span key={index}>{hashtag}</span>
                        ))}
                    </div>
                    <Link href={link} target="_blank" className="project-link">
                        <span>
                            <FontAwesomeIcon icon={faCaretRight} />
                        </span>
                        <p>Visit site</p>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default function Portfolio() {
    const container = useRef<HTMLDivElement>(null)

    return (
        <section className="section-container">
            <div className="portfolio-container">
                <h2 className={signika.className + " section-title"}>My works</h2>
                <PortfolioCard
                    title="Rajawali Production Indonesia"
                    description="A profile website for a rigging and event equipment rental company. Designed by professional UI/UX designer."
                    hashtags={["Responsive", "High Quality UI Design", "SEO Friendly", "Multilingual"]}
                    hue={2}
                    color="#b9221d"
                    icon="/assets/images/favicon-rajawali.png"
                    preview="/assets/images/rajawali-ss.webp"
                    link="https://www.rajawaliproduction.com"
                    category="Company Profile"
                />
                <PortfolioCard
                    title="Es Coklat Duo Boedjang"
                    description="A website for a local ice chocolate beverage shop in Bogor. Features a fun and entertaining design to attract customers."
                    hashtags={["Responsive", "Rich of Animation", "SEO Friendly"]}
                    hue={15}
                    color="#3b170b"
                    icon="/assets/images/favicon-boedjang.png"
                    preview="/assets/images/boedjang-ss.webp"
                    link="https://escoklatduoboedjang.com/"
                    category="Company Profile"
                />
                <PortfolioCard
                    title="Ahmad Naufal & Liska Feby"
                    description="My wedding invitation website. Features a simple and elegant design with an interactive message box."
                    hashtags={["Interactive", "Elegant Design", "Mobile First"]}
                    hue={2}
                    color="#964f57"
                    icon="/assets/images/favicon-wedding.png"
                    preview="/assets/images/wedding-ss.webp"
                    link="https://liskafeby.ahmadnaufal.dev/"
                    category="Wedding Invitation"
                    dontUseBorderForPreview={true}
                />
                <PortfolioCard
                    title="Liska Feby Profile Website"
                    description="Profile website for my wife. Features an elegant yet attractive design with a touch of feminine color."
                    hashtags={["Responsive", "Interactive", "SEO Friendly"]}
                    hue={340}
                    color="#a95a63"
                    icon="/assets/images/favicon-ayang.png"
                    preview="/assets/images/ayang-ss.webp"
                    link="https://liska-feby.web.app"
                    category="Personal Portfolio"
                />
            </div>
        </section>
    )
}
