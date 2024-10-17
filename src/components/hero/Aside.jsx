import card from "../../images/creditCard.webp"
import RedirectArrow from "../RedirectArrow"

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
        <aside className="w-[23%] flex-shrink-0 flex-grow-0 flex flex-col gap-2 bg-bgCol">
            <CreditCard />
            <InstantCard />
        </aside>
    )
}

export default Aside;