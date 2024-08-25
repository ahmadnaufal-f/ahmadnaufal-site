import styles from "./hero.module.scss"
import Image from "next/image"
import { Outfit } from "next/font/google"
import Link from "next/link"

const outfit = Outfit({ subsets: ["latin"] })

function Hero() {
    return (
        <section className={styles.heroContainer}>
            <div className={`${styles.heroCard} cards glass`}>
                <div className={styles.heroText}>
                    <h2 className={outfit.className}>Hi, my name is</h2>
                    <h1 className={outfit.className}>Ahmad Naufal</h1>
                    <h3>I am a web developer whose passion lies on both programming and designing</h3>
                    <Link href="/contact">
                        <button className={styles.heroButton}>
                            <p>Contact Me</p>
                        </button>
                    </Link>
                </div>
                <div className={styles.heroPicture}>
                    <Image src={"/assets/images/hero.jpg"} alt="hero" width={896} height={896} />
                </div>
            </div>
        </section>
    )
}

export default Hero
