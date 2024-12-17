import React, { useRef, useState } from 'react';
import Header from "../assets/Header.jpg";
import Ionic from "../assets/Projects/IonicTowers.jpg";
import Touch from "../assets/Projects/Touchstone.jpg";
import Imperio from "../assets/Projects/TsImperio.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide>
            <div className="h-full w-full" style={{background:`url(${Header})`,backgroundPosition:"left center",backgroundSize:"cover"}}></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}