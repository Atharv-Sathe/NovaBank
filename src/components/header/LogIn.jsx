import GetStarted from "../GetStarted";
import "@theme-toggles/react/css/Horizon.css"
import { Horizon } from "@theme-toggles/react"
import { useEffect, useState } from "react";

function ThemeDrop({show, setShow}) {

    const setGreen = () => {
        document.documentElement.setAttribute("data-theme", "grassGreen");
        setShow(false);
    }

    const setBlue = () => {
        document.documentElement.setAttribute("data-theme", "royalBlue");
        setShow(false);
    }

    return (
        <div className={`p-4 bg-bgColSec border-2 h-fit w-fit absolute -right-6 -bottom-24 flex flex-col justify-center items-center gap-2 rounded-md ${show ? "" : "hidden"}`}>
            <button className="bg-[#3f9b0b] h-8 w-8 rounded-xl text-white" onClick={setGreen}>
                G
            </button>
            <button className="bg-[#003399] h-8 w-8 rounded-xl text-white" onClick={setBlue}>
                B
            </button>
        </div>
        
    )
}

function LogIn() {

    const [theme, setTheme] = useState('light');
    // const [isToggled, setToggle] = useState(false);
    const [isDrop, setIsDrop] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }



    return (
        <div className="flex flex-row gap-4 items-center relative">
            <p className="text-primary font-semibold">Log In</p>
            <GetStarted />
            <div className="relative" onClick={toggleTheme}>
                <Horizon />
            </div>
            <button className="w-[1em] h-[1em]" onClick={() => setIsDrop(!isDrop)}>
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
                    width="1em" height="1em" viewBox="0 0 45.402 45.402"
                    >
                <g>
                    <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                        c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                        c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                        c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                </g>
                </svg>
            </button>
            <ThemeDrop show={isDrop} setShow={setIsDrop}/>
        </div>
    )
}

export default LogIn;