import React from "react";
import { IoGrid } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { TfiViewListAlt } from "react-icons/tfi";
import { FaThList } from "react-icons/fa";
import { useRoomContext } from "../context/RoomContext";

const Sort = () => {
  const {
    filters: { text },
    gridView,
    setGridView,
    setListView,
    roome,
    searchRoom,
  } = useRoomContext();
  return (
    <div className="flex flex-wrap gap-3 justify-between items-center my-4 border-[2px] py-4 px-3 rounded-lg">
      <div className=" flex gap-2 text-lg sm:text-xl">
        <button
          onClick={setGridView}
          className={
            gridView
              ? "shadow-lg px-4 py-1.5 cursor-pointer bg-gray-200"
              : "shadow-lg px-4 py-1.5 cursor-pointer"
          }
        >
          {gridView ? <IoGrid /> : <IoGridOutline />}
        </button>
        <button
          onClick={setListView}
          className={
            gridView
              ? "shadow-lg px-4 py-1.5 cursor-pointer"
              : "shadow-lg px-4 py-1.5 cursor-pointer  bg-gray-200"
          }
        >
          {" "}
          {gridView ? <TfiViewListAlt /> : <FaThList />}
        </button>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-10/12 xs:w-8/12 sm:w-6/12"
      >
        <input
          type="text"
          name="text"
          value={text}
          autoComplete="off"
          placeholder="Sarch room"
          onChange={searchRoom}
          className="outline-none w-full bg-gray-100 shadow-xl px-4 py-2 rounded-full placeholder:font-serif placeholder:text-gray-600"
        />
      </form>
      <div className="px-6 py-1.5 shadow-xl text-lg sm:text-xl font-serif bg-gray-50">
        <p>TOTAL ROOM {roome.length}</p>
      </div>
    </div>
  );
};

export default Sort;
