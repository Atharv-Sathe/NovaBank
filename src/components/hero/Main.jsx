import GetStarted from "../GetStarted";
import creditGirl from "../../images/CardGirlCopy.jpg"
import Glassmorph from "./Glassmorph";
import Profiles from "./Profiles";
import Profile1 from "../../images/Profile1.jpg";
import Profile2 from "../../images/Profile2.jpg";
import Profile3 from "../../images/Profile3.jpg";

function Dollar() {
    return (
        <div className="bg-bgColSec rounded-full p-2 inline-flex aspect-square">
            <svg height="1.5em" width="1.5em" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 235.517 235.517" fill="#f3a1b3">
            <g>
                <path stroke="#f3a1b3" strokeWidth="1"  d="M118.1,235.517c7.898,0,14.31-6.032,14.31-13.483c0-7.441,0-13.473,0-13.473
                    c39.069-3.579,64.932-24.215,64.932-57.785v-0.549c0-34.119-22.012-49.8-65.758-59.977V58.334c6.298,1.539,12.82,3.72,19.194,6.549
                    c10.258,4.547,22.724,1.697,28.952-8.485c6.233-10.176,2.866-24.47-8.681-29.654c-11.498-5.156-24.117-8.708-38.095-10.236V8.251
                    c0-4.552-6.402-8.251-14.305-8.251c-7.903,0-14.31,3.514-14.31,7.832c0,4.335,0,7.843,0,7.843
                    c-42.104,3.03-65.764,25.591-65.764,58.057v0.555c0,34.114,22.561,49.256,66.862,59.427v33.021
                    c-10.628-1.713-21.033-5.243-31.623-10.65c-11.281-5.755-25.101-3.72-31.938,6.385c-6.842,10.1-4.079,24.449,7.294,30.029
                    c16.709,8.208,35.593,13.57,54.614,15.518v13.755C103.79,229.36,110.197,235.517,118.1,235.517z M131.301,138.12
                    c14.316,4.123,18.438,8.257,18.438,15.681v0.555c0,7.979-5.776,12.651-18.438,14.033V138.12z M86.999,70.153v-0.549
                    c0-7.152,5.232-12.657,18.71-13.755v29.719C90.856,81.439,86.999,77.305,86.999,70.153z"
                    />
            </g>
            </svg>
        </div>
    )
}


function Tick() {
    return (
        <div className="bg-bgColSec rounded-full p-2 inline-flex aspect-square">
            <svg height="1.5em" width="1.5em" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17.837 17.837" fill="#ba7d33"  >
            <g>
                <path  d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27
                    c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
                    L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"/>
            </g>
            </svg>
        </div>
    )
}

function CreditCardGirl() {
    return (
        <div className="absolute -top-24 left-72 h-fit w-fit lg:hidden">
            <svg id="eGX4K6WFyzM1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="ccce325d46934832a1f943b87c491dde" export-id="482d4532d9fb436ab905ccc4f83cce25" cached="false"
            height="44rem" width="48vw" className="relative"
            >
            <path d="M218.615556,56.771433c-25.559454,0-81.762364-4.133343-102.244803.987347-12.86816,3.21709-2.094811,23.982017-10.686714,28.755367-8.426386,4.68139-32.455812-1.845407-38.621281,4.320153-6.198149,6.19824-.515791,21.105499-6.417545,26.164219-5.908833,5.06479-43.096732.567931-52.821339,5.430311-7.516829,3.75847-4.936571,46.663675-4.936571,53.809445c0,13.18809-3.700195,42.028245,0,50.353805c3.900783,8.77688,21.183578,5.34439,28.138466,5.92398c23.531213,1.96097,46.385406,1.97466,70.593,1.97466c40.644451,0,81.288913,0,121.933364,0c9.186105,0,33.648764,4.36292,40.479904-2.46832c8.868069-8.8682,5.923892-26.64369,5.923892-38.01218c0-32.29187.493653-64.51621.493653-96.75827c0-7.48743,1.581717-34.6535-3.949262-39.49317-3.280111-2.87014-41.440779-.98733-47.884764-.98733" transform="matrix(1.009441 0 0 1.100354 12.749248-14.653185)" fill="#f3a1b3" stroke="#f3a1b3" stroke-width="0.6"/>
            </svg>
            <img src={creditGirl} alt="Credit Card Girl" 
                className="absolute bottom-[8.5rem] left-[22rem] w-[17vw] h-auto xl:top-[9rem]"
            />
            <div className="absolute top-72 left-56 ">
                <Glassmorph text1="Nova Balances" text2="$17,560" symbol={<Dollar/>}/>
            </div>

            <div className="absolute bottom-52 right-36 ">
                <Glassmorph text1="Invoice Paid" text2="+$960" symbol={<Tick />} />
            </div>

        </div>
    )
}

function Content() {
    return (
        <div className="flex flex-col gap-2 text-primary ml-8 mt-5 h-fit lg:w-fit ">
            <h1 id="hero-heading" className=" text-[3rem] max-w-[29rem] leading-tight">
                ALL YOUR BUSINESS BANKING IN ONE PLATFORM
            </h1>
            <p className="font-light max-w-72 mt-8 mb-6">
                Take your business to new heights with
                faster cash flow and clear financial
                insights all with a free Novo account.<br/>
                Apply in 10 minutes.
            </p>
            <GetStarted />
            <p className="font-light mt-5">Already started? <span className="text-secondary">Finish your application</span></p>
        </div>
    )
}

function Main() {
    return (
        <main className="w-2/3 h-full flex-grow flex-shrink bg-bgCol pb-0 relative lg:w-fit lg:flex-grow-0 md:flex-grow md:w-full">
            <div className="absolute bottom-8 left-[24rem] z-10 flex flex-row gap-2 w-fit xl:hidden">
                <div className="relative text-bgColSec font-light">
                    <Profiles pro={Profile1}  x="0" z="15"/>
                    <Profiles pro={Profile2}  x="35" z="16" />
                    <Profiles pro={Profile3}  x="70" z="17"/>
                    <div className="text-bgColSec font-light relative left-40">
                        <p>More than two million people use nova</p>
                        <p>We are waiting for you</p>
                    </div>

                </div>
            </div>
            <Content />
            <CreditCardGirl />
        </main>
    )
}

export default Main;