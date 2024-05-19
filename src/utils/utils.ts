export const sharedTransition = {
    duration: 1,
    ease: [0.25, 0.46, 0.45, 0.94],
}

export const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: "100vw",
    },
}

export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
}
