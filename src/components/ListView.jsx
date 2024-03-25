import React, { useEffect } from "react";
import FormatePrice from "./FormatePrice";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ListView = ({ rooms }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      {rooms.map((roomItems) => {
        const { id, image, price, category, description } = roomItems;
        return (
          <div
            key={id}
            className="border-[2px] border-gray-300 p-4 rounded-lg mb-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <figure>
              <img
                src={image}
                alt={category}
                loading="lazy"
                className="h-52 xs:h-72 w-full object-cover"
              />
            </figure>
            <div>
              <p className="text-3xl font-serif">{category}</p>
              <p className="text-[13px] sm:text-base my-3">
                <span className="text-sm sm:text-lg font-serif font-semibold">
                  Price:
                </span>{" "}
                <FormatePrice price={price} />
              </p>
              <p className="text-[13px] sm:text-sm mb-5">
                <span className="text-sm sm:text-lg font-serif font-semibold">
                  Description:
                </span>{" "}
                {description}
              </p>
              <NavLink to={`/roomdetails/${id}`}>
                <button className="bg-orange-500 px-7 sm:px-10 md:px-14 py-3 border-2 border-orange-500 rounded-md hover:bg-transparent text-white hover:text-orange-500 text-sm lg:text-base font-serif font-semibold duration-300">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
