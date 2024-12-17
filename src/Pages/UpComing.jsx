import { useEffect } from "react";
import UpcomingProjects from "../Components/UpcomingProjects"

import AOS from "aos";
import "aos/dist/aos.css";

function UpComing() {

    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    });

    return (
        <UpcomingProjects />
    );
}

export default UpComing;
