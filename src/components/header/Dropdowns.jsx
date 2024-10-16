import Dropdown from "./Dropdown";

const categories = [
    "Business Checking",
    "Solution",
    "Resources",
    "Results",
    "Contact"
]

function Dropdowns() {
    return (
        <ul className="flex flex-row gap-8">
            {categories.map((category, index) => 
                <li key={index}><Dropdown text={category} /></li>
            )}
        </ul>
    )
}

export default Dropdowns;