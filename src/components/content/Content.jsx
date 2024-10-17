import Benefits from "./Benefits";
import SubHero from "./SubHero";

function Content() {
    return (
        <section className="flex flex-row gap-8 px-16 justify-between">
            <SubHero />
            <Benefits />
        </section>
    )   
}

export default Content;