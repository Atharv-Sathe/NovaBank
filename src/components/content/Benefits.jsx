import SVGArrow from "../SVGArrow";

function Heading({text}) {
    return (
        <div className="relative">
            <hr className="border border-gray-300"></hr>
            <h1 className="mt-3 font-semibold text-lg">{text}</h1>
            <div className="absolute right-0 top-4"><SVGArrow fill="var(--color-text)" rotate="90" /></div>
        </div>
    )
}

function Benefits() {
    return (
        <div className="bg-bgColSec flex-grow rounded-3xl h-[48vh] border-2 mt-10 pl-10 pr-16">
            <p className="text-white rounded-3xl py-2 px-4 bg-secondary w-fit mt-8">BENEFITS</p>
            <div className="flex flex-col gap-4 mt-8">
                <div className="relative">
                    <h1 className="text-secondary text-lg">Access your card at any time</h1>
                    <div className="absolute right-0 top-2"><SVGArrow fill="var(--color-sec)"/></div>
                    <p className="mt-6 w-[27em] font-light">Every Nova checking account comes with a free physical debit card
                        and virtual debit card, so you always have access at your
                        fingertips.</p>
                </div>
                <Heading text="Make your money work for you"/>
                <Heading text="Pay and get paid your way"/>

            </div>
        </div>
    )
}

export default Benefits;