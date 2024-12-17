import React from "react";
import Marquee from "react-fast-marquee";
import Profile from "../assets/Clients/Profile.svg";
import Quotation from "../assets/Clients/quotation.svg";

function Clients() {
    return (
        <div className="bg-cyan px-5 md:px-10 py-14 flex items-center justify-center flex-col relative overflow-hidden">
            <div>
                <img
                    src={Quotation}
                    alt="QuotationMark"
                    className="absolute left-10 top-10 h-12 sm:h-16 md:h-20"
                />
            </div>
            <div className="font-medium uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <p className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text text-center sm:text-left">
                    What our Client's Say!
                </p>
            </div>
            <div className="w-[90vw] xl:w-[70rem] font-[Montserrat] mt-10">
                <Marquee
                    pauseOnHover
                    autoFill
                    gradient
                    gradientColor="#e8f7ff"
                    gradientWidth={20}
                >
                    <div
                        className="flex items-center justify-start flex-col w-60 md:w-64 h-[15rem] md:h-[19rem] bg-white m-3 md:m-5 p-5 rounded-lg"
                        style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" }}
                    >
                        <img
                            src={Profile}
                            alt="Profile"
                            className="w-16 h-16 md:w-20 md:h-20 rounded"
                            style={{
                                filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.6))",
                            }}
                        />
                        <p className="text-center font-semibold">
                            Customer of Blue Bay Towers
                        </p>
                        <p className="text-center text-BEnd font-medium text-[0.7rem] md:text-sm mt-3">
                            "We believe that Veenus Infra offered the best value
                            for the overhaul and new entrance for our building.
                            We highly recommend Veenus Infra."
                        </p>
                    </div>
                    <div
                        className="flex items-center justify-start flex-col w-60 md:w-64 h-[15rem] md:h-[19rem] bg-white m-3 md:m-5 p-5 rounded-lg"
                        style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" }}
                    >
                        <img
                            src={Profile}
                            alt="Profile"
                            className="w-16 h-16 md:w-20 md:h-20 rounded"
                            style={{
                                filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.6))",
                            }}
                        />
                        <p className="text-center font-semibold">
                            Customer of Touchstone Towers
                        </p>
                        <p className="text-center text-BEnd font-medium text-[0.7rem] md:text-sm mt-3">
                            "Veenus Infra performed very professionally with
                            great communication .They earned our confidence
                            during the upgrade project."
                        </p>
                    </div>
                    <div
                        className="flex items-center justify-start flex-col w-60 md:w-64 h-[15rem] md:h-[19rem] bg-white m-3 md:m-5 p-5 rounded-lg"
                        style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" }}
                    >
                        <img
                            src={Profile}
                            alt="Profile"
                            className="w-16 h-16 md:w-20 md:h-20 rounded"
                            style={{
                                filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.6))",
                            }}
                        />
                        <p className="text-center font-semibold">
                            Customer of Blue Heavens
                        </p>
                        <p className="text-center text-BEnd font-medium text-[0.7rem] md:text-sm mt-3">
                            "We believe that Veenus Infra offered the best value
                            for the overhaul and new entrance for our building.
                            We highly recommend Veenus Infra."
                        </p>
                    </div>
                    <div
                        className="flex items-center justify-start flex-col w-60 md:w-64 h-[15rem] md:h-[19rem] bg-white m-3 md:m-5 p-5 rounded-lg"
                        style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" }}
                    >
                        <img
                            src={Profile}
                            alt="Profile"
                            className="w-16 h-16 md:w-20 md:h-20 rounded"
                            style={{
                                filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.6))",
                            }}
                        />
                        <p className="text-center font-semibold">
                            Customer of Raghava Enclave
                        </p>
                        <p className="text-center text-BEnd font-medium text-[0.7rem] md:text-sm mt-3">
                            "Veenus Infra performed very professionally with
                            great communication .They earned our confidence
                            during the upgrade project"
                        </p>
                    </div>
                </Marquee>
            </div>
        </div>
    );
}

export default Clients;
