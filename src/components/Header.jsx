import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 px-3 xs:px-8 sm:px-14 md:px-20 bg-gray-600 shadow-lg text-white">
      <NavLink>
        <div className="flex items-center gap-2">
          <figure className="w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 border-[2px] xs:border-[3px] sm:border-[5px] border-gray-400 rounded-full overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/487042276/photo/hotel-sign.webp?b=1&s=170667a&w=0&k=20&c=TpjhgbKLnlKzHNBtM-2A3fn3KG37e8tTGKPPWZJR5g4="
              alt="hotel logo"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </figure>
          <p className="text-lg xs:text-xl sm:text-2xl font-serif font-bold">
            Hotel Sumon
          </p>
        </div>
      </NavLink>
      <Nav />
    </div>
  );
};

export default Header;
