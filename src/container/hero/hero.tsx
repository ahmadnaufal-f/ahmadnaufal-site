import './hero.scss'
import Image from 'next/image'

function Hero() {
    return (
        <section className={'heroContainer'}>
            <div className={'heroCard cards glass'}>
                <div className={'heroText'}>
                    <h2>Hi, my name is</h2>
                    <h1>Ahmad Naufal</h1>
                    <h3>A web developer whose passion lies on both programming and designing</h3>
                    <button className={'heroButton'}>
                        <p>Contact Me</p>
                    </button>
                </div>
                <div className={'heroPicture'}>
                    <Image src={'/assets/images/hero.jpg'} alt="hero" width={896} height={896} />
                </div>
            </div>
        </section>
    )
}

export default Hero
