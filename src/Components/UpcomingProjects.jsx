import { faDownload, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Line from "../assets/About/Line.svg";
import Broucher from "../assets/Broucher.pdf"
import sriSarada from "../assets/Projects/sriSaiResidency.jpg";
import Plan1 from "../assets/About/plan1.jpg";
import Plan2 from "../assets/About/plan2.jpg";
import Plan3 from "../assets/About/plan3.jpg";
import ImageZoom from "react-image-zooom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {

    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                loop={false}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-full"
            >
                <SwiperSlide>
                    <div
                        className="w-full flex items-center py-16 justify-center flex-col bg-gradient-to-br from-cyan to-white"
                    >
                        {/* <div data-aos="fade-down" className="text-[1.4rem] sm:text-2xl md:text-3xl font-bold text-BStart font-[Italiana] flex items-center justify-center uppercase mb-7">
                            <img
                                src={Line}
                                alt="Line"
                                className="rotate-180 w-16 sm:w-24 md:w-32"
                            />
                            <p className="mx-3 text-center w-min sm:w-max">
                                Up&nbsp;Coming Projects
                            </p>
                            <img src={Line} alt="Line" className=" w-16 sm:w-24 md:w-32" />
                        </div> */}
                        <div className="relative overflow-hidden w-[90vw] lg:w-[60rem] xl:w-[70rem] flex items-center justify-center flex-col sm:flex-row font-[Montserrat] gap-5 md:gap-10 lg:gap-20">
                            <img
                                data-aos="fade-right"
                                src={sriSarada}
                                alt=""
                                className="w-[90vw] sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]"
                            />
                            <div  data-aos="fade-left">
                                <p className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text text-center sm:text-left text-[1.4rem] sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                                    Sri Sai Sarada
                                </p>
                                <p className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text font-[Italiana] text-center sm:text-left text-[1.4rem] sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                                    Essence Of Living
                                </p>
                                <p className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text font-[Italiana] font-bold text-center">
                                    Possession: Year Ending 2026
                                </p>
                                <div className="text-BStart flex items-start justify-center gap-5 lg:gap-10 mt-5 md:mt-10">
                                    <div className="flex items-center justify-center text-center flex-col">
                                        <p className="text-sm md:text-base">
                                            Spread&nbsp;across
                                        </p>
                                        <p className="text-xl lg:text-2xl font-medium text-BEnd">
                                            1700 sqft
                                        </p>
                                    </div>
                                    <div className="h-12 w-[0.05rem] bg-BStart"></div>
                                    <div className="flex items-center justify-center text-center flex-col">
                                        <p className="text-sm md:text-base">
                                            Configuration
                                        </p>
                                        <p className="text-xl lg:text-2xl font-medium text-BEnd">
                                            3bhk
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center flex-wrap mt-5">
                                    <div className="mx-5 md:mx-3 lg:mx-5 my-2">
                                        <a
                                            href={Broucher}
                                            target="_blank"
                                            className="hover:bg-none border border-BStart bg-gradient-to-r text-white duration-300 hover:text-BStart from-BStart via-BMiddle to-BEnd font-semibold text-[0.7rem] md:text-sm px-4 md:px-5 my-1 py-2 rounded-[0.25rem]"
                                        >
                                            <FontAwesomeIcon
                                                icon={faDownload}
                                                className="mr-3"
                                            />
                                            Brochure
                                        </a>
                                    </div>
                                    <div className="mx-5 md:mx-3 lg:mx-5 my-1">
                                        <a
                                            href="tel:+"
                                            className="bg-none border border-BStart hover:text-white text-BEnd hover:bg-gradient-to-r duration-300 from-BStart via-BMiddle to-BEnd font-semibold text-[0.7rem] md:text-sm px-4 md:px-5 my-1 py-2 rounded-[0.25rem]"
                                        >
                                            <FontAwesomeIcon
                                                icon={faLocationDot}
                                                className="mr-3"
                                            />
                                            Location
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-max flex items-center justify-center flex-col pt-10">
                            <h1 className="bg-gradient-to-r h-14 text-center from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text sm:text-left text-[1.4rem] sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                                Building Plan
                            </h1>
                            <p className="font-[Montserrat] text-center px-5">The Architecture and the Blue Print of the Flats are shown below.</p>
                            <div className="flex items-center justify-center flex-row flex-wrap mt-10">
                                <div className="w-60 md:w-80">
                                    <ImageZoom src={Plan1} alt="Plan1" zoom="200"/>
                                </div>
                                <div className="w-60 md:w-80">
                                    <ImageZoom src={Plan2} alt="Plan2" zoom="200"/>
                                </div>
                                <div className="w-60 md:w-80">
                                    <ImageZoom src={Plan3} alt="Plan3" zoom="200"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
