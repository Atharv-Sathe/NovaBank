import GetStarted from "../GetStarted";

// function CreditCardGirl() {
//     return (
//         <>
//         </>
//     )
// }

function Content() {
    return (
        <div className="flex flex-col gap-2 text-primary ml-8 mt-5">
            <h1 id="hero-heading" className=" text-[3rem] max-w-[29rem]">
                ALL YOUR BUSINESS BANKING IN ONE PLATFORM
            </h1>
            <p className="font-light max-w-72 mt-8 mb-6">
                Take your business to new heights with
                faster cash flow and clear financial
                insights all with a free Novo account.<br/>
                Apply in 10 minutes.
            </p>
            <GetStarted />
            <p className="font-light mt-3">Already started? <span className="text-secondary">Finish your application</span></p>
        </div>
    )
}

function Main() {
    return (
        <main className="w-2/3 h-full flex-grow flex-shrink bg-bgCol">
            <Content />
        </main>
    )
}

export default Main;