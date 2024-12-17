import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopLine from "../assets/About/Line.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Ongoing from "../Components/OngoingProjects";

function Projects() {
    const location = useLocation();
    const projectSection = useRef(null);

    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    });

    useEffect(() => {
        if (location.hash === "#projects" && projectSection.current) {
            projectSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <div ref={projectSection} data-aos="fade-down" className="text-[1.4rem] sm:text-2xl md:text-3xl font-bold text-BStart font-[Italiana] flex items-center justify-center uppercase my-7">
                <img
                    src={TopLine}
                    alt="Line"
                    className="rotate-180 w-16 sm:w-24 md:w-32"
                />
                <p className="mx-3 text-center w-min sm:w-max">
                    OnGoing Projects
                </p>
                <img
                    src={TopLine}
                    alt="Line"
                    className=" w-16 sm:w-24 md:w-32"
                />
            </div>
            <Ongoing />
            
        </>
    );
}

export default Projects;
