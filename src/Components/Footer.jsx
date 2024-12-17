import React from "react";
import Bg from "../assets/About/bottomBg.jpg";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div
            className="flex items-center justify-center w-full relative"
            style={{
                background: `linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${Bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="h-full w-full backdrop-blur flex items-center justify-start flex-col font-[Montserrat] text-white py-10">
                <img src={Logo} alt="Logo" className="w-32 sm:w-40"/>
                <p className="font-medium text-center text-xl sm:text-2xl">
                    Buy Premium Apartments in vizag.
                </p>
                <div className="flex items-center justify-between flex-col lg:flex-row w-full px-5 md:px-10 gap-5 lg:gap-10 xl:w-[70rem] mt-10">
                    <div className="flex items-start justify-start gap-5 lg:gap-10 flex-wrap xl:w-[30rem]">
                        <div className="flex items-start justify-center flex-col font-extralight">
                            <p className="font-semibold uppercase mb-3 text-lg">
                                On&nbsp;Going&nbsp;Projects
                            </p>
                            <Link>Touchstone Towers</Link>
                            <Link>Iconic Towers</Link>
                            <Link>TS Imperio</Link>
                        </div>
                        <div className="flex items-start justify-center flex-col font-extralight">
                            <p className="font-semibold uppercase mb-3 text-lg">
                                Completed&nbsp;Projects
                            </p>
                            <Link>Abhiram's Jasmine Heights</Link>
                            <Link>Abhiram's Blue Heaven</Link>
                            <Link>Abhiram's Blue Bay Towers</Link>
                            <Link>Abhiram's Raghava Enclave</Link>
                            <Link>Abhiram's Kings Court</Link>
                            <Link>Abhiram's Sri Raj Castles</Link>
                            <Link>Abhiram's Diamond Spring</Link>
                        </div>
                    </div>
                    <div className="flex items-start justify-start gap-5 lg:gap-10 flex-wrap xl:w-[30rem]">
                        <div className="flex items-start justify-center flex-col font-extralight w-min">
                            <p className="font-semibold uppercase mb-3 text-lg">
                                Quick&nbsp;Links
                            </p>
                            <Link to="/#home">Home</Link>
                            <Link to="/#projects">Projects</Link>
                            <Link to="/#about">About</Link>
                            <Link to="/#contact">Contact</Link>
                        </div>
                        <div className="flex items-start justify-center flex-col font-extralight w-60">
                            <p className="font-semibold uppercase mb-3 text-lg">
                                Address
                            </p>
                            <a>ABHIRAM HOUSE D.No. 31-9-1/5, Road No-4, Sathavahana Nagar, Kurmmannapalem, Visakhapatnam - 530046.</a>
                            <a href="tel:+91 9133273338"><FontAwesomeIcon icon={faPhone} className="mr-2"/> 9133273338</a>
                            <a href="https://api.whatsapp.com/send?phone=919803123999&text=I%20am%20interested%20in%20Abhiram%20Projects%20and%20need%20information." target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="text-lg mr-2"/> 9848464448</a>
                            <a href="mailto:abiramnirman@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="-mb-0.5"/> abiramnirman@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
