function Glassmorph({text1, text2 = "", symbol = null}) {
    return (
        <div className="w-fit h-auto flex flex-row items-center pl-2 py-2 gap-3 text-bgColSec bg-gray-600 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            {symbol}
            <div className=" px-3 text-primary">
                <p>{text1}</p>
                <p className="font-light">{text2}</p>
            </div>
        </div>
    )
}

export default Glassmorph;