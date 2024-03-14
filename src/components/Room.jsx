import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import FormatePrice from "./FormatePrice";
import Aos from "aos";
import "aos/dist/aos.css";

const Room = ({ id, image, category, price }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="bg-[#607779] rounded-xl overflow-hidden shadow-xl"
      data-aos="flip-up"
      data-aos-duration="1500"
    >
      <figure>
        <img src={image} alt={category} className="w-full h-52 object-cover" />
      </figure>
      <div className="text-center text-white font-mono font-semibold text-base">
        <p className="my-2">{category}</p>
        <p className="mb-2">
          Price: <FormatePrice price={price} />
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
