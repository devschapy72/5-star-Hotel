import React from "react";
import { useRoomContext } from "../context/RoomContext";
import GridView from "./GridView";
import ListView from "./ListView";

const RoomList = () => {
  const { roome, gridView } = useRoomContext();

  if (gridView === true) {
    return <GridView rooms={roome} />;
  }
  if (gridView === false) {
    return <ListView rooms={roome} />;
  }
};

export default RoomList;
