import React from "react";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import RoomList from "./RoomList";

const OurRooms = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-center my-5 text-4xl font-serif font-semibold">
        BOOKING ROOM
      </h2>
      <div>
        <div>
          <FilterSection />
        </div>
        <div>
          <div>
            <Sort />
          </div>
          <div>
            <RoomList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRooms;
