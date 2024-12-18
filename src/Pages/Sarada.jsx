import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Bg from "../assets/Header.jpg"
import Image1 from "../assets/Ongoing/Image1.jpg";
import Image2 from "../assets/Ongoing/Image2.jpg";
import Image3 from "../assets/Ongoing/Image3.jpg";
import Image4 from "../assets/Ongoing/Image4.jpg";
import Image5 from "../assets/Ongoing/Image5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function SriSaiSarada() {
    const location = useLocation();
    const sriSaiSarada = useRef(null);

    useEffect(() => {
        if (location.pathname === "/sriSaiSarada" && sriSaiSarada.current) {
            sriSaiSarada.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    return (
        <div
            ref={sriSaiSarada}
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
                    className="text-center font-[Montserrat] text-3xl md:text-4xl font-bold"
                    style={{background:`url(${Bg})`,backgroundSize:"fill",backgroundPosition:"bottom right",backgroundClip:"text",color:"transparent"}}
                >
                    Sri Sai Sarada
                </p>
            </div>
            <div className="bg-LMiddle py-14 px-5 md:px-10 w-full">
                <div>
                    <p className="font-semibold font-[Montserrat] text-lg md:text-xl lg:text-2xl text-center mb-5">Project Work Progress</p>
                </div>
                <div className="flex items-center justify-center flex-col gap-3 md:gap-5">
                    <div className={`flex items-center justify-center ${window.innerWidth<425?"flex-col":"flex-row"} w-full xl:w-[70rem] gap-3 md:gap-5`}>
                        <img src={Image1} className={`${window.innerWidth<425?"w-[80vw]":"w-[40vw]"} lg:w-[40%] xl:w-[45.8%] rounded-md md:rounded-xl lg:rounded-2xl`} alt="sri sai sarada Image1"/>
                        <img src={Image2} className={`${window.innerWidth<425?"w-[80vw]":"w-[40vw]"} lg:w-[40%] xl:w-[45.8%] rounded-md md:rounded-xl lg:rounded-2xl`} alt="sri sai sarada Image2"/>
                    </div>
                    <div className="flex items-center justify-center flex-col sm:flex-row w-full xl:w-[70rem] gap-3 md:gap-5">
                        <img src={Image3} className="w-[80vw] sm:w-[25.8vw] lg:w-[26.2%] xl:w-[30%] rounded-md md:rounded-xl lg:rounded-2xl" alt="sri sai sarada Image3"/>
                        <img src={Image5} className="w-[80vw] sm:w-[25.8vw] lg:w-[26.2%] xl:w-[30%] rounded-md md:rounded-xl lg:rounded-2xl" alt="sri sai sarada Image5"/>
                        <img src={Image4} className="w-[80vw] sm:w-[25.8vw] lg:w-[26.2%] xl:w-[30%] rounded-md md:rounded-xl lg:rounded-2xl" alt="sri sai sarada Image4"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SriSaiSarada;
