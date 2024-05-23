"use client"

import React, { useState, useEffect } from "react"
import styles from "./scroll-to-top.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons"

const ScrollToTop: React.FC = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.screen.height / 2) {
                setHideScrollButton(false)
            } else {
                setHideScrollButton(true)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const [hideScrollButton, setHideScrollButton] = useState(true)

    return (
        <button onClick={handleScrollToTop} className={`${styles.scrollToTopButton} glass ${hideScrollButton ? styles.hide : ""}`}>
            <FontAwesomeIcon icon={faCircleArrowUp} />
        </button>
    )
}

export default ScrollToTop
