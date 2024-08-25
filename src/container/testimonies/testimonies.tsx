"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Outfit } from "next/font/google"
import { sharedTransition } from "@/utils/utils"
import styles from "./testimonies.module.scss"
import Image from "next/image"
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

const testimoniesArray = [
    {
        text: "Naufal is a talented front-end developer who has a keen eye for detail. He is able to create beautiful and responsive websites together with Mirza as UI designer that are both visually appealing and user-friendly. I would highly recommend them for any web development project.",
        name: "Buyung Mayan",
        photoPath: "/assets/images/testimony1.webp",
        company: "CEO of Rajawali Production",
    },
    {
        text: `Great job, bro! The website of es coklat duo boedjang is awesome 👍🏻
        At first, I just wanted to make a regular website and didn't expect it to be this good 😍 The UI looks great, still simple (as requested), and easy to use 👍🏻
        The coordination was also smooth, fast response, and bro Naufal gave a lot of good suggestions 👌🏻
        Overall, I highly recommend Bro Naufal's website-developing service 😍
        For the next project, Insha Allah, we'll order again!`,
        name: "Dio Mukti K",
        photoPath: "/assets/images/testimony2.webp",
        company: "CEO of Es Coklat Duo Boedjang",
    },
    {
        text: "I am very satisfied with the website that Naufal created for me. The design is fresh and attractive, and also easy to navigate. It helps clients to find the information and the experience they need. I would recommend Naufal to anyone who needs a website for their business or for personal use.",
        name: "Liska Feby F",
        photoPath: "/assets/images/testimony3.webp",
        company: "Skincare reviewer",
    },
]

export default function Testimonies() {
    return (
        <section className={styles.testimoniesContainer}>
            <h2 className={`${styles.testimoniesTitle} ${outfit.className}`}>Thoughts on My Works</h2>
            <div className={styles.testimonies}>
                {testimoniesArray.map((testimony, index) => (
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
