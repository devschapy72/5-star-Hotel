import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-gray-700 flex flex-col justify-center items-center gap-1 text-white text-xs xs:text-[12px] sm:text-sm">
      <p>Copyright © {new Date().getFullYear()} Bd Shop.All right reserved.</p>
      <p>Design & Developed by MD: Sumon Ahmed</p>
    </div>
  );
};

export default Footer;
