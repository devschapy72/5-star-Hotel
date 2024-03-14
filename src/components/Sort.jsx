import React from "react";
import { IoGrid } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { TfiViewListAlt } from "react-icons/tfi";
import { FaThList } from "react-icons/fa";
import { useRoomContext } from "../context/RoomContext";

const Sort = () => {
  const { girdView, setGridView, setListView, roome } = useRoomContext();
  return (
    <div className="flex justify-between items-center my-4">
      <div className=" flex gap-2 text-xl">
        <button onClick={setGridView}>
          {girdView ? <IoGridOutline /> : <IoGrid />}
        </button>
        <button onClick={setListView}>
          {" "}
          {girdView ? <FaThList /> : <TfiViewListAlt />}
        </button>
      </div>
      <div className="">
        <p>TOTAL ROOM {roome.length}</p>
      </div>
      <div className="">
        <p>sorting</p>
      </div>
    </div>
  );
};

export default Sort;
