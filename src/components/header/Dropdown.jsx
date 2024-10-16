import { useState } from 'react';
import downArrow from '../../images/down-chevron.png'

function DropdownArrow({isActive}) {
    return (
        <img src={downArrow} alt="down arrow" 
            className= {`${isActive ? 'rotate-180' : ''} transition-transform ease-in duration-100 h-6 w-6`}
        />
    )
}

function Dropdown({text}) {
    const [isActive, setIsActive] = useState(false);

    const rotateArrow = () => {
        setIsActive(!isActive);
    }

    return (
        <div className='flex flex-row items-center'>
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