import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="pt-36 flex flex-col justify-center items-center text-center px-5">
      <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-orange-500 mb-10">
        Page not found. Please try again later ☹
      </p>
      <NavLink to="/">
        <button className="px-14 py-3 bg-orange-500 border-[2px] border-orange-500 rounded-lg text-base text-white font-serif hover:bg-transparent duration-300 hover:text-orange-500">
          Go Back
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
