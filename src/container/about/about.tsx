'use client'

import React, { useRef } from 'react'
import './about.scss'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import programmer from '../../../public/assets/lottie/programmer.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'framer-motion'

function About() {
    const lottieRef = useRef<LottieRefCurrentProps>(null)
    const container = useRef<HTMLDivElement>(null)
    const isInView = useInView(container)

    // Play the animation when in view, pause when not in view
    if (isInView) {
        lottieRef.current?.goToAndPlay(0, true)
    }

    return (
        <section className="cards about-container" data-height="300">
            <div className="about__illustration" ref={container}>
                <Lottie lottieRef={lottieRef} animationData={programmer} loop={false} autoPlay={false} />
            </div>
            <div className="about__text">
                <h2 className="about__title">A brief profile of myself</h2>
                <p className="about__description">
                    I am a passionate front-end developer with 2 years of experience in creating stunning and responsive websites. I reside in the
                    vibrant city of West Jakarta, where I constantly seek inspiration from my surroundings to create designs that not only look great
                    but also provide an exceptional user experience.
                </p>
                <a href="#about" className="about__button">
                    <span>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Dive deeper into my background</p>
                </a>
            </div>
        </section>
    )
}

export default About
