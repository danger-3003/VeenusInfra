import {useEffect, useState}from "react";
import BgPattern from "../assets/otherProjects/BgPattern.svg";
import Line from "../assets/otherProjects/Line.svg";
import ProjectsSwiper from "../Components/OtherProjects";
import AOS from "aos";
import "aos/dist/aos.css";

function OtherProjects() {
    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    });
    
    return (
        <div className="font-[Montserrat] py-14 px-5 md:px-10 lg:px-14 text-white bg-gradient-to-b from-BStart via-BMiddle to-BEnd flex items-center justify-center relative overflow-hidden">
            <div className=" w-full xl:w-[70rem]">
                <div data-aos="fade-right" className="flex items-center justify-center sm:justify-start gap-5 flex-row">
                    <p className="font-bold text-xl md:text-2xl lg:text-3xl">Other Projects</p>
                    <img src={Line} alt="Line" className="w-32 lg:w-40 hidden sm:block"/>
                </div>
                <div className="absolute bottom-0 left-0 z-[1]">
                    <img src={BgPattern} alt="Pattern" />
                </div>
                <div data-aos="fade" className="relative z-[5]">
                    <ProjectsSwiper />
                </div>
            </div>
        </div>
    );
}

export default OtherProjects;
