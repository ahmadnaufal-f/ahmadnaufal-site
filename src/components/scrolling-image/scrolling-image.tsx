"use client"

import { useState, useEffect, useRef } from "react"
import { useTransform, useMotionValue } from "framer-motion"
import { throttle } from "lodash"

type Props = {
    videoPath: string
}

export default function ScrollingImage({ videoPath }: Props) {
    const [scrolling, setScrolling] = useState(false)
    const [afterScrolling, setAfterScrolling] = useState(false)
    const [yPos, setYPos] = useState(0)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const handleScroll = throttle(() => {
        const scrollingHeight = 1000 // Height of the container
        const videoHeight = 720 // Height of the image

        const scrollPosition = window.scrollY
        const videoWrapperTop = wrapperRef.current?.getBoundingClientRect().top || 0

        const startScrollingPoint = scrollPosition + videoWrapperTop + videoHeight / 2 - window.innerHeight / 2

        const stopScrollingPoint = startScrollingPoint + scrollingHeight

        if (scrollPosition >= startScrollingPoint && scrollPosition <= stopScrollingPoint) {
            setScrolling(true)
            setAfterScrolling(false)
            setYPos(scrollPosition - startScrollingPoint)
        } else {
            if (scrollPosition > stopScrollingPoint) {
                setAfterScrolling(true)
                setYPos(1000)
            } else {
                setAfterScrolling(false)
                setYPos(0)
            }
            setScrolling(false)
        }
    }, 100)

    useEffect(() => {
        if (videoRef.current) {
            if (yPos === 1000) {
                videoRef.current.currentTime = 16
            } else if (yPos === 0) {
                videoRef.current.currentTime = 0
            } else {
                videoRef.current.currentTime = (yPos / 1000) * 16
            }
        }
    }, [yPos])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="portfolio-video-wrapper" ref={wrapperRef}>
            <div
                className={`portfolio-video ${scrolling ? "fixed" : ""} ${afterScrolling ? "after-scroll" : ""}`}
                style={{ width: 900, height: 720 }}
            >
                <video width={900} height="auto" style={{ objectFit: "contain" }} ref={videoRef} preload="auto">
                    <source src={videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
