import React from "react";

const RoomReducer = (state, action) => {
  switch (action.type) {
    case "ROOM_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "ROOMS_VIEW":
      const upDateRoom = action.payload.filter((items) => {
        return items.id;
      });
      return {
        ...state,
        isLoading: false,
        roome: upDateRoom,
      };

    case "ROOM_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default RoomReducer;
