import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FeatureRoom = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-5 bg-gray-50 py-3 md:py-7 shadow-xl">
      <h3
        className="text-center text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold my-3 md:my-7"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        Oue Feature Room
      </h3>
      <div className="w-10/12 md:w-8/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-7">
        <figure data-aos="fade-down-right" data-aos-duration="1300">
          <img
            src="https://www.japantimes.co.jp/japantimes/uploads/images/2024/03/01/283559.jpg"
            alt="feature room"
            loading="lazy"
          />
        </figure>
        <p
          className="text-xs xs:text-[13px] sm:text-sm lg:text-base font-mono"
          data-aos="fade-up-left"
          data-aos-duration="1500"
        >
          Our feature rooms boast elegant decor, luxurious amenities, and
          breathtaking views. Each room is meticulously designed to offer utmost
          comfort and style, with plush bedding, spacious bathrooms, and modern
          technology. Guests can indulge in complimentary Wi-Fi, in-room dining,
          and access to premium entertainment options. Whether relaxing in the
          cozy seating area or enjoying the stunning vistas from the private
          balcony, our feature rooms provide a tranquil retreat for discerning
          travelers seeking the ultimate in luxury accommodation.
        </p>
      </div>
    </div>
  );
};

export default FeatureRoom;
