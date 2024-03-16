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

    // SORT_FILE_SET_GRIDVIEW_&_SET_LIST_VIEW
    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };

    // SORT_FILE_SEARCH_ROOM
    case "SEARCH_ROOM":
      let { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_ROOM":
      let { roome } = state;
      let updateRoomSearch = [...roome];

      const { text } = state.filters;

      if (text) {
        updateRoomSearch = updateRoomSearch.filter((roomItem) => {
          return (
            roomItem.category && roomItem.category.toLowerCase().includes(text)
          );
        });
      }
      return {
        ...state,
        roome: updateRoomSearch,
      };

    default:
      return state;
  }
};

export default RoomReducer;
