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
      className="bg-gray-50 rounded-xl overflow-hidden shadow-xl"
      data-aos="flip-up"
      data-aos-duration="1500"
    >
      <figure>
        <img src={image} alt={category} className="w-full h-52 object-cover" />
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
};

export default Room;
