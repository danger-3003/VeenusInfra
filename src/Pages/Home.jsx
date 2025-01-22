import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import HeaderSwiper from "../Components/HeaderSwiper";
import Marquee from "react-fast-marquee";
import Element from "../assets/MarqueeElement.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    const location = useLocation();
    const homeSection = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    useEffect(() => {
        if (location.hash === "#home" && homeSection.current) {
            homeSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div ref={homeSection} className="pt-14">
            <div className="w-full text-white font-[Montserrat]">
                <div className="absolute top-14 h-[19rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] w-full">
                    <HeaderSwiper />
                </div>
                <div className="relative overflow-hidden flex items-center sm:items-end justify-center flex-col z-[9] py-20 sm:py-14 px-5 sm:px-7 md:px-10 lg:px-16 h-[19rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] bg-gradient-to-r to-[#000000d0] from-[#0000003d]">
                    <div
                        data-aos="fade-left"
                        className="w-[90vw] lg:w-[60rem] xl:w-[70rem] flex items-center sm:items-end justify-center flex-col"
                    >
                        <p className="font-light text-[1.7rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-center sm:text-left tracking-widest">
                            AAR Constructions
                        </p>
                        <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left">
                            Redefining Modern Living
                        </p>
                        <div className="mt-9 mb-3 md:mt-12 sm:mb-10 flex items-center sm:items-start justify-center flex-col">
                            <p className="tracking-[0.5rem] -mr-2 sm:mr-0 text-lg md:text-xl">
                                SPACIOUS
                            </p>
                            <p className="text-xl sm:text-2xl md:text-3xl font-medium">
                                3 BHKs
                            </p>
                        </div>
                        <div>
                            <a
                                href="tel:+919701616666"
                                className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd font-semibold text-[0.7rem] sm:text-sm px-4 sm:px-5 py-2 rounded-[0.25rem]"
                            >
                                Enquiry Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-[0.7rem] sm:text-base text-white py-1">
                <Marquee className="" autoFill>
                    <div className="flex items-center justify-center mx-1 gap-1">
                        <img src={Element} alt="" className="w-3 sm:w-5" />
                        <p>KURMANNAPALEM</p>
                    </div>
                    <div className="flex items-center justify-center mx-1 gap-1">
                        <img src={Element} alt="" className="w-3 sm:w-5" />
                        <p>ATCHYUTAPURAM</p>
                    </div>
                    <div className="flex items-center justify-center mx-1 gap-1">
                        <img src={Element} alt="" className="w-3 sm:w-5" />
                        <p>SEETHAMANDHARA</p>
                    </div>
                    <div className="flex items-center justify-center mx-1 gap-1">
                        <img src={Element} alt="" className="w-3 sm:w-5" />
                        <p>G+15 FLOORS</p>
                    </div>
                    <div className="flex items-center justify-center mx-1 gap-1">
                        <img src={Element} alt="" className="w-3 sm:w-5" />
                        <p>2BHK & 3BHK</p>
                    </div>
                </Marquee>
            </div> */}
        </div>
    );
}

export default Home;
