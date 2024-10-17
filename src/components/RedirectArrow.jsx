import SVGArrow from "./SVGArrow";

function RedirectArrow({height, width}) {
    return (
        <div className='bg-secondary rounded-full m-2 flex items-center justify-center' 
        style={{ height: `${height}rem`, width: `${width}rem` }}
        >
            <SVGArrow />

        </div>
    )
}

export default RedirectArrow;