import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { CgCloseR } from "react-icons/cg";

const Nav = () => {
  const [openSlider, setOpenSlider] = useState(false);
  const openNav = () => {
    setOpenSlider(!openSlider);
  };
  const closeNav = () => {
    setOpenSlider(!openSlider);
  };
  return (
    <nav className="relative">
      <ul className="hidden lg:flex items-center gap-8 text-sm">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/ourrooms">Our Rooms</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      {/* MOBILE_NAV_BAR */}

      {openSlider ? (
        <button className="lg:hidden text-2xl" onClick={closeNav}>
          <CgCloseR />
        </button>
      ) : (
        <button className="lg:hidden text-2xl" onClick={openNav}>
          <CiMenuFries />
        </button>
      )}

      <ul
        className="lg:hidden fixed top-16 left-0 w-full h-auto py-16 px-5 bg-gray-400 flex flex-col text-base font-serif duration-300 z-50"
        style={{ top: openSlider ? "64px" : "-100%" }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <hr className="my-2" />
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <hr className="my-2" />
        <li>
          <NavLink to="/ourrooms">Our Rooms</NavLink>
        </li>
        <hr className="my-2" />
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <hr className="my-2" />
      </ul>
    </nav>
  );
};

export default Nav;
