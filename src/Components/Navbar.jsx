import { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faTimes, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo.svg";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    };
    return (
        <div className="flex items-center justify-center flex-row fixed z-10 h-14 w-full top-0 bg-navbarGradient text-BEnd font-semibold text-[13px] lg:text-sm font-[Montserrat] shadow-md shadow-[#00000036]">
            <ul className={`absolute ${menu?"top-14":"-top-52"} duration-500 bg-navbarGradient font-bold sm:bg-none w-full sm:w-auto py-4 sm:py-0 sm:top-0 sm:relative flex items-center justify-center flex-col sm:flex-row gap-3 md:gap-5 uppercase`}>
                <li className="" onClick={handleMenu}>
                    <Link to="/#home">Home</Link>
                </li>
                <li className="" onClick={handleMenu}>
                    <Link to="/#projects">Projects</Link>
                </li>
                <li className="" onClick={handleMenu}>
                    <Link to="/#about">About</Link>
                </li>
                <li className="" onClick={handleMenu}>
                    <Link to="/#contact">Contact</Link>
                </li>
            </ul>
            <img
                src={Logo}
                alt="Logo"
                className="h-12 relative sm:absolute sm:top-1 sm:left-10 lg:left-16"
            />
            <div className="block sm:hidden absolute left-7 top-5" onClick={handleMenu}>
                <FontAwesomeIcon
                    icon={menu ? faTimes : faBars}
                    className="text-lg text-BEnd"
                />
            </div>
            <a href="tel:+919701616666" className="group">
                <div className="group-hover:bg-none border border-BEnd bg-gradient-to-r transition-all duration-300 from-BStart via-BMiddle to-BEnd group-hover:text-BEnd text-white px-2 sm:px-3 py-2 sm:py-1 rounded-full sm:rounded-[0.25rem] absolute top-[0.79rem] right-5 md:right-10 lg:right-16">
                    <p className="hidden sm:block">Book a Demo</p>
                    <FontAwesomeIcon icon={faPhone} className="text-white group-hover:text-BEnd text-base sm:text-lg block sm:hidden"/>
                </div>
            </a>
        </div>
    );
}

export default Navbar;
