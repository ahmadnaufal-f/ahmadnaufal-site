"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import styles from "./closing.module.scss"
import Link from "next/link"
import Image from "next/image"
import { sharedTransition } from "@/utils/utils"
import { Outfit } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"] })

export default function Closing() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { margin: "300px 0px" })
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (isHovered) {
            ref.current?.classList.add(styles.hovered)
        } else {
            ref.current?.classList.remove(styles.hovered)
        }
    }, [isHovered])

    return (
        <section className={styles.closingSection}>
            <div className={styles.closingCard + " glass"} ref={ref}>
                <div className={styles.closingText}>
                    <h2 className={outfit.className + " " + styles.closingTitle}>Ready to take the next step?</h2>
                    <p className={styles.closingDescription}>
                        If you are interested in working together, or if you have any questions, feel free to reach out to me. I&apos;m always open to
                        new projects and opportunities.
                    </p>
                    <Link href="/contact">
                        <button className={styles.closingButton} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <p>Contact Me</p>
                        </button>
                    </Link>
                </div>
                <div className={styles.circleShape} />
            </div>
            <motion.div
                className={styles.closingPicture}
                animate={!isInView ? { x: -200, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ ...sharedTransition, duration: 0.5 }}
            >
                <Image src={"/assets/images/banner.webp"} alt="closing banner" width={360} height={360} />
            </motion.div>
        </section>
    )
}
