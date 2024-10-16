import RedirectArrow from "./RedirectArrow";

function GetStarted() {
    return (
        <div className="flex flex-row gap-1 items-center border-2 rounded-[2rem] pr-3 max-w-40">
            <RedirectArrow height={2.5} width={2.5}/>
            <p className="text-primary font-semibold h">Get Started</p>
        </div>
    )
}

export default GetStarted;