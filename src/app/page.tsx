import Background from "@/components/background/background"
import About from "@/container/about/about"
import Hero from "@/container/hero/hero"
import Portfolio from "@/container/portfolio/portfolio"
import Services from "@/container/services/services"

export default function Home() {
    return (
        <main>
            <Hero />
            <Background />
            <About />
            <Services />
            <Portfolio />
        </main>
    )
}
