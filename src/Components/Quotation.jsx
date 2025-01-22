import React from "react";
import Bg from "../assets/About/bottomBg.jpg";
import Logo from "../assets/LogoDark.svg";

function Quotation() {
    return (
        <div
            className="w-full flex items-center justify-center"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${Bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="xl:w-[70rem] flex items-center justify-between flex-col sm:flex-row gap-10">
                <p className="font-[Montserrat] text-center sm:text-left text-lg md:text-xl lg:text-2xl text-white sm:basis-[70%] py-10 px-10 xl:pl-0">
                    Our commitment to values, timely delivery, and customer
                    satisfaction makes AAR Constructions the preferred choice
                    for homeowners.
                </p>
                <div className="bg-[#fff2e780] hidden sm:flex h-60 w-60 items-center justify-center backdrop-blur-md">
                    <img src={Logo} alt="w-60" />
                </div>
            </div>
        </div>
    );
}

export default Quotation;
