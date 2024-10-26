import GetStarted from "../GetStarted";
import "@theme-toggles/react/css/Horizon.css"
import { Horizon } from "@theme-toggles/react"
import { useEffect, useState } from "react";

function LogIn() {

    const [theme, setTheme] = useState('light');
    // const [isToggled, setToggle] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }



    return (
        <div className="flex flex-row gap-4 items-center">
            <p className="text-primary font-semibold">Log In</p>
            <GetStarted />
            <div className="relative" onClick={toggleTheme}>
                <Horizon />
                {/* <button className="w-[1em] h-[1em] absolute top-0 left-0"></button> */}
            </div>
        </div>
    )
}

export default LogIn;