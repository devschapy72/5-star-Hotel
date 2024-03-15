import React, { useEffect } from "react";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import RoomList from "./RoomList";
import Aos from "aos";
import "aos/dist/aos.css";

const OurRooms = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-10/12 xs:w-11/12 xl:w-10/12 mx-auto">
      <h2
        className="text-center my-5 text-4xl font-serif font-semibold"
        data-aos="fade-right"
        data-aos-duration="1400"
      >
        BOOKING ROOM
      </h2>

      <div>
        <div>
          <Sort />
        </div>
        <div>
          <RoomList />
        </div>
      </div>
    </div>
  );
};

export default OurRooms;
