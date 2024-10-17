import fingerBoy from "../../images/FingerBoy.webp"
import SVGArrow from "../SVGArrow";

function Heading() {
    return (
        <h1 className="absolute text-[2rem] top-8 left-8 max-w-[17rem] leading-tight">
            ONLINE BANKING THAT TAKES YOUR BUSINESS TO THE <span className="text-secondary">NEXT LEVEL</span>  
        </h1>
    )
}

function SubHero() {
    return (
        <div className="bg-bgColSec w-[37%] rounded-3xl h-[48vh] border-2 text-primary mt-10 relative flex flex-col justify-end ml-8">
            <Heading />
            <div id="wrapper" className="absolute top-11 right-10">
                <SVGArrow fill="var(--color-text)"/>
            </div>
            <div className="flex flex-row gap-4 ml-8 justify-between items-center">
                <p className="font-light max-w-52 flex-grow pt-4"> Monitor all your purchases in
                    one place and freeze or
                    unfreeze your card in a few
                    tops
                </p>
                <img src={fingerBoy} alt="Boy raising fingers"  className="rounded-3xl mr-10 flex-shrink max-w-56 h-60"/>
            </div>
        </div>
    )
}

export default SubHero;