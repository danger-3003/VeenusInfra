import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import BrickManufacture from "../assets/Services/BrickManifacturingPlant.jpeg";
import ReadyMix from "../assets/Services/ReadyMixPlant.jpeg";
import Bg from "../assets/Services/Bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
    const location = useLocation();
    const serviceSection = useRef(null);

    useEffect(() => {
        if (location.pathname === "/services" && serviceSection.current) {
            serviceSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    return (
        <div
            ref={serviceSection}
            className="flex items-center justify-center flex-col pt-14 font-[Montserrat]"
        >
            <div
                className="h-60 md:h-80 w-full flex items-center justify-center flex-col"
                style={{
                    background: `linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${Bg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <p
                    data-aos="fade-up"
                    className="text-center font-[Montserrat] text-3xl md:text-4xl font-bold text-white"
                >
                    Industrial Services
                </p>
                <div
                    data-aos="fade-up"
                    className="bg-white mt-1 h-0.5 w-60 sm:w-[23rem]"
                ></div>
            </div>
            <div className="relative overflow-hidden flex items-center justify-center flex-col w-[90vw] lg:w-[58rem] xl:w-[70rem] py-10 gap-10">
                <div className="flex items-center justify-center flex-col md:flex-row gap-5 md:gap-10">
                    <img
                        data-aos="fade-right"
                        src={BrickManufacture}
                        alt="BrickManufacture"
                        className="sm:w-[18rem] sm:h-[12rem] lg:w-[25rem] lg:h-[18rem] xl:w-[30rem] xl:h-[20rem] object-cover"
                    />
                    <div
                        data-aos="fade-left"
                        className="flex items-center justify-center flex-col"
                    >
                        <p className="mb-2 font-[Italiana] bg-gradient-to-r from-BStart via-BMiddle to-BEnd bg-clip-text text-transparent font-Bold text-xl text-center md:text-2xl lg:text-3xl ">
                            Abhiram's Ready Mix Plant
                        </p>
                        <p className="text-justify md:text-left text-sm">
                            Abhiram Nirman (India) Pvt. Ltd Abhirams mixed plant
                            set up best commercial Ready Mixed Concrete (RMC)
                            plant in visakhapatnam. Ready Mixed Concrete (RMC)
                            coupled with the promotion of bulk cement handling
                            facilities have been responsible for redefining the
                            pace and quality of construction activity in mega
                            infrastructure projects. Small building projects and
                            individual home builders seeking high levels of
                            quality assurance can also now user in the same
                            sophistication and value addition into their
                            construction as some of India's mega projects using
                            ACC RMC- at virtually no extra cost.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col md:flex-row-reverse gap-5 md:gap-10 w-[90vw] lg:w-[58rem] xl:w-[70rem] xl:w-[70rem]">
                    <img
                        data-aos="fade-left"
                        src={ReadyMix}
                        alt="Ready Mixture Plant"
                        className="sm:w-[18rem] sm:h-[12rem] lg:w-[25rem] lg:h-[18rem] xl:w-[30rem] xl:h-[20rem] object-cover"
                    />
                    <div
                        data-aos="fade-right"
                        className="flex items-center justify-center flex-col"
                    >
                        <p className="mb-2 font-[Italiana] bg-gradient-to-r from-BStart via-BMiddle to-BEnd bg-clip-text text-transparent font-Bold text-xl text-center md:text-2xl lg:text-3xl ">
                            Abhiram's Brick Manufacturing Plant
                        </p>
                        <p className="text-justify md:text-left text-sm">
                            Brick Manufacturing Plant Providing you the best
                            range of automatic bricks manufacturing plant,
                            bricks making plant, fully automatic bricks making
                            plant, semi automatic bricks making plant,
                            multifunction brick making plant and multi material
                            bricks manufacturing plant with effective & timely
                            delivery.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
