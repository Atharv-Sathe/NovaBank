import Aside from "./Aside";
import Main from "./Main";

function Hero() {
    return (
        <section id="hero" className="flex flex-row gap-6 px-16 bg-bgCol h-2/3 justify-between">
            <Main />
            <Aside />
        </section>
    )
}

export default Hero;