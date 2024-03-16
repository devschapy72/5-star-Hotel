import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HotelVisit = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-3 sm:mt-7 bg-gray-50 shadow-lg py-10 px-5 sm:px-10 md:px-16">
      <h2
        className="text-2xl xs:text-3xl sm:text-4xl font-serif font-semibold text-center mb-7"
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        Visit Our Hotel
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <p
          className="text-sm sm:text-base font-mono"
          data-aos="fade-right"
          data-aos-duration="1600"
        >
          Our hotel stay was exceptional. From the warm welcome at check-in to
          the impeccable service throughout, every detail was perfect. The
          luxurious amenities exceeded our expectations, and the stunning views
          from our room added to the experience. The staff were attentive and
          accommodating, ensuring our comfort and satisfaction. Overall, it was
          a memorable and delightful stay that we won't soon forget. We look
          forward to returning in the future and highly recommend this hotel to
          anyone seeking a truly exceptional experience.
        </p>
        <figure data-aos="fade-left" data-aos-duration="1900">
          <img
            src="https://media.istockphoto.com/id/1439956685/photo/hotel-guests-checking-in.jpg?s=612x612&w=0&k=20&c=28L9XwKoOvpsy_qdylXDTzENVIslPRVll8hhhMwCnrY="
            alt="hotel visit"
          />
        </figure>
      </div>
    </div>
  );
};

export default HotelVisit;
