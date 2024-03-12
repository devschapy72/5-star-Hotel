import React from "react";
import AboutImag from "../about_image/AboutImag";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const About = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {AboutImag.map((roome) => {
          const { id, image, titel, descrption } = roome;
          return (
            <SwiperSlide key={id}>
              <div className="relative w-full h-screen">
                <figure className="w-full h-full">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000065] text-white flex flex-col justify-center items-center px-3 xs:px-14 sm:px-20 md::px-28 lg:px-40 text-center">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3">
                    {titel}
                  </p>
                  <p className="text-xs xs-text-[12px] sm:text-sm lg:text-base font-mono hidden lg:block">
                    {descrption}
                  </p>
                  <p className="text-xs xs-text-[12px]  font-mono hidden sm:block lg:hidden">
                    {descrption.slice(0, 450)}
                  </p>
                  <p className="text-xs xs-text-[12px]  font-mono block sm:hidden">
                    {descrption.slice(0, 300)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default About;
