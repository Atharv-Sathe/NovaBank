import Aside from "./Aside";
import Main from "./Main";

function Hero() {
    return (
        <section id="hero" className="flex flex-row gap-6 pl-16 pr-24 bg-bgCol h-2/3 justify-between items-stretch md:flex-col md:items-center">
            <Main />
            <Aside />
        </section>
    )
}

export default Hero;