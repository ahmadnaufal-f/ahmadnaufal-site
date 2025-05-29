"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./header.scss"
import { motion, useScroll } from "framer-motion"
import Link from "next/link"

function Header() {
    const [expanded, setExpanded] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [hovered, setHovered] = useState(false)
    const [isBlogHovered, setIsBlogHovered] = useState(false)
    const { scrollYProgress } = useScroll()

    const onToggleFunction = () => {
        const burger = document.getElementById("hamburger") || null

        if (!expanded) {
            setExpanded(true)
            burger?.classList.add("is-active")
            document.body.style.overflow = "hidden"
        } else {
            setExpanded(false)
            burger?.classList.remove("is-active")
            document.body.style.overflow = "auto"
        }
    }

    const linkProps = {
        className: "nav-link-socmed",
        "data-is-icon": "true",
        rel: "noreferrer",
        target: "_blank",
    }

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.scrollY
        setVisible(prevScrollPos > currentScrollPos)
        setPrevScrollPos(currentScrollPos)
    }, [prevScrollPos])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])

    return (
        <>
            <motion.nav
                className="navbar navbar-expand-md navbar-dark d-flex"
                aria-expanded={expanded}
                initial={{ y: 0 }}
                animate={{ y: visible ? 0 : -68 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => {
                    if (!visible) {
                        setVisible(true)
                        setHovered(true)
                    }
                }}
                onMouseLeave={() => {
                    if (hovered) {
                        setVisible(false)
                        setHovered(false)
                    }
                }}
            >
                <div className="navbar-logo">
                    <Image src="/assets/images/icon.svg" alt="logo" width={32} height={32} />
                    <div className="logo-text">
                        <span className="logo-text-change">
                            <span className="logo-text-head">Ahmad</span>
                            <span className="logo-text-foot">{`© ${new Date().getFullYear()}`}</span>
                        </span>
                        <span className="logo-text-still">Naufal</span>
                    </div>
                </div>
                <div className="hamburger-wrapper">
                    <button id="hamburger" className="hamburger hamburger--spin" type="button" onClick={onToggleFunction}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div className="navbar-links-wrapper">
                    <div
                        className="navbar-links"
                        onClick={() => {
                            setExpanded(false)
                            document.getElementById("hamburger")?.classList.remove("is-active")
                            document.body.style.overflow = "auto"
                        }}
                    >
                        <Link href="/" className="nav-link">
                            Main Page
                        </Link>
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                        <Link href="/" className="nav-link disabled" onClick={(e) => e.preventDefault()} onMouseEnter={() => setIsBlogHovered(true)} onMouseLeave={() => setIsBlogHovered(false)}>
                            Blog
                            {isBlogHovered && (
                                <motion.div 
                                    className="disabled-tooltip"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <p>Coming soon!</p>
                                </motion.div>
                            )}
                        </Link>
                        <Link href="/contact" className="nav-link">
                            Contact
                        </Link>
                        <div className="nav-separator"></div>
                        <div className="nav-socmed-wrapper">
                            <Link href="https://github.com/ahmadnaufal-f" {...linkProps}>
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/ahmad-naufal-firdaus-9a427a131/" {...linkProps}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                        </div>
                    </div>
                </div>
                <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            </motion.nav>
        </>
    )
}

export default Header
