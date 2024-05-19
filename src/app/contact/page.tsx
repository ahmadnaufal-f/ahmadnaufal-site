import Image from "next/image"
import styles from "./page.module.scss"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
    return (
        <main className={styles.mainPageContact}>
            <div className={styles.heroCard + " cards glass"}>
                <div className={styles.heroText}>
                    <h1>Ask me anything</h1>
                </div>
                <div className={styles.heroPicture}>
                    <Image src={"/assets/images/contact.webp"} alt="hero" width={1024} height={768} />
                </div>
            </div>
            <div className={styles.content}>
                <p>If you have any questions, feel free to contact me via email or whatsapp. I will do my best to respond as soon as possible.</p>
                <div className={styles.contactButtonContainer}>
                    <Link href="mailto:ahmedopank@gmail.com">
                        <div className={styles.contactButton + " glass"}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>Send me an e-mail</p>
                        </div>
                    </Link>
                    <a
                        href="https://wa.me/6281952803348"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.contactButton} ${styles.green} glass`}
                    >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <p>Chat on WhatsApp</p>
                    </a>
                </div>
                <p>Or find me on other platforms:</p>
                <div className={styles.contactIconContainer}>
                    <Link
                        href="https://www.linkedin.com/in/ahmad-naufal-firdaus-9a427a131/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactIcon + " glass"}
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link
                        href="https://www.instagram.com/ahmednaufal.f"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.contactIcon} ${styles.ig} glass`}
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link
                        href="https://github.com/ahmadnaufal-f"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.contactIcon} ${styles.gh} glass`}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </div>
            </div>
            <div className={styles.navigation}>
                <Link href="/">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Go back to main page
                </Link>
            </div>
        </main>
    )
}
