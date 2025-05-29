"use client"

import "./portfolio.scss"
import { Outfit } from "next/font/google"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { sharedTransition } from "@/utils/utils"
import { portfolioData } from "./data"

const signika = Outfit({ subsets: ["latin"] })

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
    const isInView = useInView(ref, { margin: "-100px 0px" })
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
                <motion.h3 style={titleColor ? { color: titleColor } : {}} initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0 }}>
                    {title}
                </motion.h3>
            </motion.div>
            <motion.div
                className="project-content"
                initial={{ opacity: 0, x: 32 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
                transition={{ duration: 0.4 }}
            >
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
            </motion.div>
        </motion.div>
    )
}

export default function Portfolio() {
    return (
        <section className="section-container">
            <div className="portfolio-container">
                <h2 className={signika.className + " section-title"}>My Works</h2>
                {portfolioData.map((project, index) => (
                    <PortfolioCard
                        key={`${project.title}-${index}`}
                        title={project.title}
                        description={project.description}
                        hashtags={project.hashtags}
                        preview={project.preview}
                        hue={project.hue}
                        color={project.color}
                        icon={project.icon}
                        link={project.link}
                        category={project.category}
                    />
                ))}
            </div>
        </section>
    )
}
