import React, { useEffect } from "react";
import StaffData from "./StaffData";
import Aos from "aos";
import "aos/dist/aos.css";

const HotelStaff = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-16">
      <h2
        className="text-center text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold my-3 xs:my-4 sm:my-7"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        Hotel Staff
      </h2>
      <p
        className="text-center w-10/12 lg:w-8/12 mx-auto text-[12px] xs:text-sm lg:text-base font-mono mb-10"
        data-aos="fade-down-right"
        data-aos-duration="1300"
      >
        The hotel staff were paragons of professionalism and hospitality.
        Receptionists warmly welcomed us, housekeeping ensured impeccable rooms,
        and the concierge offered invaluable assistance. Restaurant staff
        exhibited meticulous attention to detail, enhancing our dining
        experiences. Every encounter reflected a commitment to excellence,
        leaving a lasting impression of outstanding service. Their dedication
        undoubtedly elevated our stay, making it truly memorable.
      </p>

      <div className="w-10/12 mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {StaffData.map((staffInfo) => {
          const { id, name, image } = staffInfo;
          return (
            <div
              key={id}
              className="shadow-xl flex flex-col items-center py-5 rounded-s-full"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <figure className="w-40 h-40 border-[3px] rounded-full overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </figure>
              <h4 className="my-3 text-base sm:text-lg lg:text-xl font-mono">
                {name}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelStaff;
