import React from "react"
import { useLottie } from "lottie-react"

type Props = {
    animationData: string
    loop?: boolean
    autoplay?: boolean
    lottieRef?: React.MutableRefObject<any>
}

// eslint-disable-next-line react/prop-types
export default function DisplayLottie({ animationData, loop, autoplay, lottieRef }: Props) {
    const defaultOptions = {
        loop: loop !== undefined ? loop : true,
        autoplay: autoplay !== undefined ? autoplay : true,
        lottieRef: lottieRef,
        animationData: animationData,
    }
    const { View } = useLottie(defaultOptions)
    return <>{View}</>
}
