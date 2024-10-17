function SVGArrow({rotate = "0", fill = "#ffffff", height = "1em", width = "1em"}) {
    return (
        <svg fill={fill} height={height} width={width} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
        viewBox="0 0 511.994 511.994"
        style={{ transform: `rotate(${rotate}deg)` }}
        >
        <g>
            <g>
                <path d="M494.259,0H210.505c-9.801,0-17.735,7.933-17.735,17.735c0,9.801,7.933,17.735,17.735,17.735h240.931L5.196,481.721
                    c-6.928,6.928-6.928,18.148,0,25.077c6.928,6.928,18.148,6.928,25.077,0L476.525,60.546v240.943
                    c0,9.801,7.933,17.735,17.735,17.735c9.801,0,17.735-7.933,17.735-17.735V17.735C511.994,7.933,504.061,0,494.259,0z"
                    stroke={fill}
                    strokeWidth= "25"
                    />
            </g>
        </g>
    </svg>
    )
}

export default SVGArrow;