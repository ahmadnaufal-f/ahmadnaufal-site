import styles from "./background.module.css"
import Image from "next/image"

export default function Background() {
    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.backgroundWrapper}>
                <Image src={"/assets/images/bg.svg"} alt="background" width={2560} height={1440} />
            </div>
        </div>
    )
}
