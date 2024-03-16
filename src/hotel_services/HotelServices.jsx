import React, { useEffect } from "react";
import ServicesData from "./ServicesData";
import Aos from "aos";
import "aos/dist/aos.css";

const HotelServices = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="py-10">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold my-7 text-center"
        data-aos="fade-down"
        data-aos-duration="1300"
      >
        Our Services
      </h2>
      <div className="w-11/12 sm:w-10/12 md:w-11/12 xl:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-6">
        {ServicesData.map((service) => {
          const { id, image, category, description } = service;
          return (
            <div
              key={id}
              className="bg-[#ffffff] shadow-xl rounded-lg"
              data-aos="zoom-in-down"
              data-aos-duration="1300"
            >
              <figure>
                <img
                  src={image}
                  alt={category}
                  className="w-full h-32 xs:h-52 object-cover"
                />
              </figure>
              <div className=" px-2">
                <h4 className=" text-center my-2 xs:my-3 text-base sm:text-xl lg:text-2xl font-serif font-semibold text-orange-400">
                  {category}
                </h4>
                <p className="text-xs xs:text-sm lg:text-base font-mono mb-2">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelServices;
