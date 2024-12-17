import { useState, useRef, useEffect } from "react";
import BlueBay from "../assets/otherProjects/BlueBayTowers.png";
import BlueHeaven from "../assets/otherProjects/BlueHeaven.png";
import Raghava from "../assets/otherProjects/RaghavaEnclave.png";
import Jasmine from "../assets/otherProjects/JasmineHeights.png";
import Kings from "../assets/otherProjects/KingsCourt.png";
import SriRaj from "../assets/otherProjects/SriRajCastle.png";
import Diamond from "../assets/otherProjects/DiamondSprings.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function App() {
    const [items, setItems]=useState(3);
    useEffect(()=>{
        if(window.innerWidth<=560)
        {
            setItems(2);
        }
    },[]);

    return (
        <>
            <Swiper
                slidesPerView={items}
                spaceBetween={15}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="w-full xl:w-[70rem] my-5 "
            >
                <SwiperSlide className="mb-10">
                    <div className="md:w-52 lg:w-72 xl:w-80">
                        <img src={BlueHeaven} alt="BlueHeaven"/>
                        <div className="mt-3 md:mt-5 flex items-start justify-center flex-col font-normal text-[0.65rem] sm:text-sm">
                            <p>ABHIRAM’S Blue Heaven</p>
                            <p className="font-extralight">Aganampudi, Visakhapatnam</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className="md:w-52 lg:w-72 xl:w-80">
                        <img src={BlueBay} alt="BlueBay"/>
                        <div className="mt-3 md:mt-5 flex items-start justify-center flex-col font-normal text-[0.65rem] sm:text-sm">
                            <p>ABHIRAM’S Blue Bay Towers</p>
                            <p className="font-extralight">Chinna Waltair, Beach Road</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className="md:w-52 lg:w-72 xl:w-80">
                        <img src={Raghava} alt="Raghava"/>
                        <div className="mt-3 md:mt-5 flex items-start justify-center flex-col font-normal text-[0.65rem] sm:text-sm">
                            <p>ABHIRAM’S Raghava Enclave</p>
                            <p className="font-extralight">Saipriya Layout, Madhurawada</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className="md:w-52 lg:w-72 xl:w-80">
                        <img src={Jasmine} alt="Jasmine"/>
                        <div className="mt-3 md:mt-5 flex items-start justify-center flex-col font-normal text-[0.65rem] sm:text-sm">
                            <p>ABHIRAM’S Jasmine Heights</p>
                            <p className="font-extralight">kurmannapalem, Visakhapatnam</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className="md:w-52 lg:w-72 xl:w-80">
                        <img src={Kings} alt="Kings"/>
                        <div className="mt-3 md:mt-5 flex items-start justify-center flex-col font-normal text-[0.65rem] sm:text-sm">
                            <p>ABHIRAM’S Kings Court</p>
                            <p className="font-extralight">Vadlapudi Village, Gajuwaka</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className="md:w-52 lg:w-72 xl:w-80">
                        <img src={SriRaj} alt="SriRaj"/>
                        <div className="mt-3 md:mt-5 flex items-start justify-center flex-col font-normal text-[0.65rem] sm:text-sm">
                            <p>ABHIRAM’S Sri Raj Castles</p>
                            <p className="font-extralight">Seethamadhara, Visakhapatnam</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className="md:w-52 lg:w-72 xl:w-80">
                        <img src={Diamond} alt="Diamond"/>
                        <div className="mt-3 md:mt-5 flex items-start justify-center flex-col font-normal text-[0.65rem] sm:text-sm">
                            <p>ABHIRAM’S Diamond Spring</p>
                            <p className="font-extralight">Dwarakanagar, Visakhapatnam</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
