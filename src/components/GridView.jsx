import React from "react";
import Room from "./Room";

const GridView = ({ rooms }) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {rooms.map((roomItems) => {
        return <Room key={roomItems.id} {...roomItems} />;
      })}
    </div>
  );
};

export default GridView;
