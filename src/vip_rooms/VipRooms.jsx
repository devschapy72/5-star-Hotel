import React from "react";
import VipRoomApi from "./VipRoomsApi";
import { NavLink } from "react-router-dom";

const VipRooms = () => {
  return (
    <div className="bg-gray-100 py-10 shadow-xl">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold mb-10">
        Our <span className="text-orange-400">VIP</span> Room
      </h2>

      <div className="w-11/12 sm:w-10/12 lg:w-10/12 mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3  gap-4 lg:gap-7">
        {VipRoomApi.map((vipRoom) => {
          const { id, image, category } = vipRoom;
          return (
            <NavLink
              to={`/allviproom/${category}`}
              key={id}
              className="border-[8px] border-orange-400"
            >
              <div className="relative">
                <figure>
                  <img
                    src={image}
                    alt={category}
                    loading="lazy"
                    className="w-full h-40 object-cover"
                  />
                </figure>
                <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center hover:bg-[#09090980] opacity-0 hover:opacity-100 duration-300 text-white text-base md:text-xl font-serif font-semibold">
                  {category}
                </p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default VipRooms;
