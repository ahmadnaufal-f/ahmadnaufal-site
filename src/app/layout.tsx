import "./globals.css"
import "../styles/customStyles.scss"
import "../styles/variables.scss"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import type { Metadata } from "next"
import { League_Spartan } from "next/font/google"
import Header from "@/container/header/header"
import Background from "@/components/background/background"
import { Suspense } from "react"
import Loading from "@/app/loading"
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top"

const leagueSpartan = League_Spartan({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Ahmad Naufal Site",
    description: "A versatile front-end developer with 2 years of experience in creating stunning and responsive websites.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={leagueSpartan.className}>
                <Background />
                <Header />
                <Suspense fallback={<Loading />}>{children}</Suspense>
                <ScrollToTop />
            </body>
        </html>
    )
}
