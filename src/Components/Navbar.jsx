import { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faTimes, faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo.png";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [onGoing, setOnGoing] = useState(false);
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
                <li className="hover:cursor-pointer" onClick={()=>{setOnGoing(!onGoing)}}>
                    <p className="text-center">OnGoing<FontAwesomeIcon icon={faChevronDown} className={`text-BEnd text-sm ml-1 lg:ml-3 ${onGoing?"-rotate-180":"rotate-0"} transition-all duration-300`}/></p>
                    <ul className={`normal-case bg-LMiddle px-3 w-screen sm:w-auto sm:mt-[1.15rem] sm:-ml-3 left-0 sm:left-auto ${onGoing?"h-max mt-1 sm:mt-0 overflow-hidden relative sm:absolute":"h-0 overflow-hidden relative sm:absolute"} transition-all duration-300`}>
                        <Link to="/sriSaiSarada">
                            <li className="py-2 text-center" onClick={()=>{handleMenu(),setOnGoing(false)}}>Sri Sai Sarada</li>
                        </Link>
                    </ul>
                </li>
                <li className="" onClick={handleMenu}>
                    <Link to="/#contact">Contact</Link>
                </li>
            </ul>
            <img
                src={Logo}
                alt="Logo"
                className="h-12 relative sm:absolute sm:top-1 sm:left-5 lg:left-16"
            />
            <div className="block sm:hidden absolute left-7 top-5" onClick={handleMenu}>
                <FontAwesomeIcon
                    icon={menu ? faTimes : faBars}
                    className="text-lg text-BEnd"
                />
            </div>
            <a href="tel:+919701616666" className="group">
                <div className="group-hover:bg-none border border-BEnd bg-gradient-to-r transition-all duration-300 from-BStart via-BMiddle to-BEnd group-hover:text-BEnd text-white px-2 sm:px-3 py-2 sm:py-1 rounded-full sm:rounded-[0.25rem] absolute top-[0.79rem] right-5 md:right-10 lg:right-16">
                    <p className="hidden sm:block">Book a Visit</p>
                    <FontAwesomeIcon icon={faPhone} className="text-white group-hover:text-BEnd text-base sm:text-lg block sm:hidden"/>
                </div>
            </a>
        </div>
    );
}

export default Navbar;
