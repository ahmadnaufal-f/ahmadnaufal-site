import Image from "next/image"
import styles from "./page.module.scss"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function About() {
    return (
        <main className={styles.mainPageAbout}>
            <div className={styles.heroCard + " cards glass"}>
                <div className={styles.heroText}>
                    <h1>From Engineering Circuits to Building Web Interfaces: </h1>
                    <h1>My Story</h1>
                </div>
                <div className={styles.heroPicture}>
                    <Image src={"/assets/images/srin-reception.webp"} alt="office of SRIN" width={896} height={504} />
                </div>
            </div>
            <div className={styles.content}>
                <p>
                    For the past two and a half years, I have been working at Samsung Research Indonesia, experiencing immense growth and contributing
                    to a prestigious company. Before joining Samsung, I honed my skills at Indonesia Epson Industry as a hardware engineer.
                    Transitioning from hardware to software engineering was a significant shift, as the two fields, despite both requiring coding
                    skills, presented entirely different challenges. Without a formal background in software engineering, I had to work diligently to
                    catch up with my teammates, many of whom had studied the field since university. Through dedication and continuous learning, I
                    managed to bridge the knowledge gap, culminating in being awarded Employee of the Quarter last year.
                </p>
                <p>
                    In addition to my work at Samsung, I started freelancing last year to enhance my front-end development skills. My first project
                    was particularly special: creating a personal profile website for my girlfriend, who is now my wife. This project allowed me to
                    combine my love for graphic design with my passion for programming. My dual interest in both graphic design and programming has
                    been a unique strength, enabling me to create websites that are not only visually appealing but also provide an excellent user
                    experience. Whenever I develop a profile website, I focus on showcasing the company or personal identity, highlighting the unique
                    attributes to ensure each website effectively communicates its core message. I am dedicated to developing websites that are both
                    beautiful and user-friendly, balancing aesthetic appeal with functionality.
                </p>
            </div>
            <div className={styles.navigation}>
                <Link href="/">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Go back to main page
                </Link>
                <Link href="/contact">
                    Contact me
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </main>
    )
}
