import About from "@/container/about/about"
import Closing from "@/container/closing/closing"
import Hero from "@/container/hero/hero"
import Portfolio from "@/container/portfolio/portfolio"
import Services from "@/container/services/services"
import Testimonies from "@/container/testimonies/testimonies"

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonies />
            <Closing />
        </main>
    )
}
