import Lottie, { LottieRefCurrentProps } from "lottie-react"
import underConstruction from "../public/assets/lottie/underConstruction.json"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import "./comingsoon.scss"
import { Outfit } from "next/font/google"
import Link from "next/link"

const outfit = Outfit({ subsets: ["latin"] })

export default function Home() {
    const lottieRef = useRef<LottieRefCurrentProps>(null)
    const container = useRef<HTMLDivElement>(null)
    const isInView = useInView(container)

    if (isInView) {
        lottieRef.current?.goToAndPlay(0, true)
    }

    return (
        <main className={`main__page ${outfit.className}`}>
            <div className="main__go-back">
                <Link href="/">{"< Go back"}</Link>
            </div>
            <div className="main__under-construction" ref={container}>
                <Lottie lottieRef={lottieRef} animationData={underConstruction} loop={false} autoPlay={false} />
            </div>
        </main>
    )
}
