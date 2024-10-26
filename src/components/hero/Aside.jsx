import card from "../../images/creditCard.webp"
import RedirectArrow from "../RedirectArrow"
import Glassmorph from "./Glassmorph"

function InstantCard() {
    return (
        <div className="text-primary w-full h-auto flex flex-row gap-2 items-center">
            <RedirectArrow height={5} width={12}/>
            <div className="flex flex-col gap-2 justify-around">
                <h1 className="font-semibold text-lg">Instan Card Control</h1>
                <p className="w-full text-sm font-light">Monitor all your purchases in one place, and freeze or unfreeze your card in a few taps</p>
            </div>
        </div>
    )
}

function Star() {
    return (
        <svg height="1em" width="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#dd96ff">
        <path  d="M256 22.017l-69.427 102.007-123.038-9.32L100 232.584l-84 90.384 114.898 44.987 18.292 122.028L256 428.2l106.81 61.783 18.292-122.028L496 322.968l-84-90.385 36.465-117.88-123.038 9.32z"/>
        </svg>
    )
}

function CreditCard() {
    return (
        <div className="h-[80%] py-4">
            <img src={card} alt="Credit Card" 
            className="object-fill w-full h-full rounded-3xl"/>
        </div>
    )
}

function Aside() {
    return (
        <aside className="w-[23%] flex-shrink-0 flex-grow-0 flex flex-col gap-2 bg-bgCol relative lg:flex-grow md:w-full">
            <div className="absolute top-5 left-12">
                <Glassmorph text1="Conrol in One Platform" symbol={<Star/>}/>
            </div>
            <CreditCard />
            <InstantCard />
        </aside>
    )
}

export default Aside;