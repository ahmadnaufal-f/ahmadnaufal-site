"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Outfit } from "next/font/google"
import { sharedTransition } from "@/utils/utils"
import styles from "./testimonies.module.scss"
import Image from "next/image"
import { testimoniesData } from "./data"
const outfit = Outfit({ subsets: ["latin"] })

type TestiCardProps = {
    text: string
    name: string
    photoPath: string
    company: string
    delay: number
}

function TestiCard({ text, name, photoPath, company, delay }: TestiCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { margin: "200px 0px" })
    return (
        <motion.div
            className={`${styles.testimony} glass`}
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ ...sharedTransition, delay: delay * 0.15 }}
            style={{ zIndex: delay + 1 }}
        >
            <div className={styles.cardHeader}>
                <Image src={photoPath} alt={name} width={50} height={50} className={styles.profpic} />
                <h3>{name}</h3>
                <h4>{company}</h4>
            </div>
            <div className={styles.cardContent}>
                <p>{`"${text}"`}</p>
            </div>
        </motion.div>
    )
}

export default function Testimonies() {
    return (
        <section className={styles.testimoniesContainer}>
            <h2 className={`${styles.testimoniesTitle} ${outfit.className}`}>Thoughts on My Works</h2>
            <div className={styles.testimonies}>
                {testimoniesData.map((testimony, index) => (
                    <TestiCard
                        key={index}
                        text={testimony.text}
                        name={testimony.name}
                        photoPath={testimony.photoPath}
                        company={testimony.company}
                        delay={index}
                    />
                ))}
            </div>
        </section>
    )
}
