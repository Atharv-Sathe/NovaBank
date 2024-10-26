import Benefits from "./Benefits";
import SubHero from "./SubHero";

function Content() {
    return (
        <section className="flex flex-row gap-8 pl-16 pr-24 justify-between md:flex-col">
            <SubHero />
            <Benefits />
        </section>
    )   
}

export default Content;