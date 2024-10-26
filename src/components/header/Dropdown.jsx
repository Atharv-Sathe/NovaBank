import { useState } from 'react';
// import downArrow from '../../images/down-chevron.png'

function DropdownArrow({isActive}) {
    return (
        // <img src={downArrow} alt="down arrow" 
        //     className= {`${isActive ? 'rotate-180' : ''} transition-transform ease-in duration-100 h-6 w-6`}
        // />
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className= {`${isActive ? 'rotate-180' : ''} transition-transform ease-in duration-100`} 
            fill='var(--color-text)'
        >
            <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
        </svg>
    )
}

function Dropdown({text}) {
    const [isActive, setIsActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const rotateArrow = () => {
        setIsActive(!isActive);
    }

    return (
        <div className='flex flex-row items-center relative'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className={`absolute w-full h-[2px] bottom-0 bg-primary transition-all duration-500 ease-in-out ${isHovering ? "scale-100" : "scale-0"} `}></div>
            <button className="text-primary p-2 font-semibold"
                onClick={rotateArrow}
            >
                {text}
            </button>
            <DropdownArrow isActive={isActive}/>
        </div>
    )
}

export default Dropdown;