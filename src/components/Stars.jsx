import React from "react";
import { IoStarSharp, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";

const Stars = ({ reating }) => {
  const reatingStar = Array.from({ length: 5 }, (elm, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {reating >= index + 1 ? (
          <IoStarSharp />
        ) : reating >= number ? (
          <IoStarHalfSharp />
        ) : (
          <IoStarOutline />
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center gap-2 text-sm sm:text-lg font-serif font-semibold">
      Reating :
      <span className="flex items-center gap-1 text-[#fe8230] text-[13px] sm:text-base">
        {reatingStar}
      </span>
    </div>
  );
};

export default Stars;
