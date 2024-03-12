import React from "react";
import { NavLink } from "react-router-dom";
import FormatePrice from "./FormatePrice";

const Room = ({ id, image, category, price }) => {
  return (
    <div className="bg-[#607779] rounded-xl overflow-hidden shadow-xl">
      <figure>
        <img src={image} alt={category} className="w-full h-52 object-cover" />
      </figure>
      <div className="text-center text-white font-mono font-semibold text-base">
        <p className="my-2">{category}</p>
        <p className="mb-2">
          <FormatePrice price={price} />
        </p>
      </div>
      <NavLink to={`/roomdetails/${id}`}>
        <button className="bg-[#5b8f93] hover:bg-[#74abb0] duration-300 w-full py-3 text-white font-serif text-base font-semibold">
          View Details
        </button>
      </NavLink>
    </div>
  );
};

export default Room;
