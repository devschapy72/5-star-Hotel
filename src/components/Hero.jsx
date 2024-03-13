import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div className="relative">
        <figure className="h-screen">
          <img
            src="https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/gpch/Park-Hotel-Group---Explore---Grand-Park-City-Hall-Facade.jpg"
            alt="hotel out door image"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pl-4 xs:pl-6 sm:pl-10 md:pl-16 lg:pl-20 bg-[#0000009a] text-white">
          <p
            className="text-sm xs:text-base sm:text-lg font-mono font-bold mb-2"
            data-aos="fade-right"
            data-aos-duration="1300"
          >
            WELCOME TO
          </p>
          <h2
            className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-2 sm:mb-4"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            OUR Hotel{" "}
            <span
              className="text-orange-500"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              SUMON
            </span>
          </h2>
          <p
            className="text-[13px] sm:text-sm font-mono w-11/12 xs:w-10/12 sm:w-9/12 md:w-10/12 lg:w-6/12 mb-5 xs:mb-7 sm:mb-10"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            Hotel SUMON offers luxurious accommodations, exceptional dining
            options, and premium amenities for a memorable stay in Dhaka,
            Bangladesh.
          </p>
          <NavLink to="/ourrooms">
            <button
              className="bg-orange-500 px-14 py-3 border-[3px] border-orange-500 hover:bg-transparent duration-300 hover:text-orange-500 text-base"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              Visit Room
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
