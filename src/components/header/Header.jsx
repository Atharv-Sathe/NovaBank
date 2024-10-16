import Logo from "./Logo";
import LogIn from "./LogIn";
import Dropdowns from "./Dropdowns";

function Header() {
    return (
        <header className="px-16 py-4  flex flex-row justify-between items-center">
            <Logo />
            <Dropdowns />
            <LogIn />
        </header>
    )
}

export default Header;