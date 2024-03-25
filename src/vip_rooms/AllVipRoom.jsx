import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useRoomContext } from "../context/RoomContext";
import FormatePrice from "../components/FormatePrice";

const AllVipRoom = () => {
  const param = useParams().id;
  const { roome } = useRoomContext();
  const findRoom = roome.filter((items) => items.category === param);
  return (
    <>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold my-10 text-center">
        <span>VIP</span> ROOMS
      </h2>
      <div className="grid grid-cols-4 w-10/12 mx-auto gap-8">
        {findRoom.map((vipRoom) => {
          const { id, image, category, price } = vipRoom;
          return (
            <div
              key={id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-xl"
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              <figure>
                <img
                  src={image}
                  alt={category}
                  loading="lazy"
                  className="w-full h-52 object-cover"
                />
              </figure>
              <div className="text-center font-mono font-semibold text-base">
                <p className="my-2">{category}</p>
                <p className="mb-2">
                  Price: <FormatePrice price={price} />
                </p>
              </div>
              <NavLink to={`/roomdetails/${id}`}>
                <button className="bg-orange-800 text-white  hover:bg-orange-700 duration-300 w-full py-3 font-serif text-base font-semibold">
                  View Details
                </button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllVipRoom;
