import Logo from "./Logo";
import LogIn from "./LogIn";
import Dropdowns from "./Dropdowns";


function Header() {
    return (
        <header className="pl-16 pr-24  py-4  flex flex-row justify-between items-center z-10 relative">
            <Logo />
            <Dropdowns />
            <LogIn />
        </header>
    )
}

export default Header;