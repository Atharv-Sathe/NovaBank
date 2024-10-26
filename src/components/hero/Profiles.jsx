
function Profiles({pro, x, z}) {
    return (
        <div className="h-14 w-14  rounded-full absolute transition-transform duration-300 hover:-translate-y-4" style={{transform: `translateX(${x}px)`, zIndex: `${z}`}} >
            <img src={pro} alt="Profile" className="object-cover h-full w-full border-[3px] border-bgCol  rounded-full  transition-transform duration-300 hover:-translate-y-3 "/>
        </div>
    )
}

export default Profiles;