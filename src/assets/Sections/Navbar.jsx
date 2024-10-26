import LoginBtn from "../Components/Navbar/LoginBtn";
import Logo from "../Components/Navbar/Logo";
import NavLinks from "../Components/Navbar/NavLinks";

const Navbar = () => {
    return (
        <div id="Navbar" className="flex justify-between items-center">
            <Logo />
            <div className="flex text-md gap-x-24 items-center font-medium">
                <NavLinks />
                <LoginBtn />
            </div>
        </div>
    )
}

export default Navbar;