const RoomBookingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKING_ROOMS":
      let { id, selectDate, selectedDay, updateRoome } = action.payload;
      let exisitingRoom = state.bookingRoom.find((curRoom) => curRoom.id == id);
      if (exisitingRoom) {
        let roomUpdate = state.bookingRoom.map((curElm) => {
          if (curElm.id == id) {
            let newAmount = curElm.selectedDay + selectedDay;
            if (newAmount >= curElm.max) {
              newAmount = curElm.max;
            }
            return {
              ...curElm,
              selectedDay: newAmount,
            };
          } else {
            return curElm;
          }
        });
        return {
          ...state,
          bookingRoom: roomUpdate,
        };
      } else {
        if (!updateRoome) {
          console.error("updateRoome is undefined in action payload.");
          return state;
        }
        let roomItems = {
          id: id,
          category: updateRoome.category,
          selectedDay,
          selectDate,
          image: updateRoome.image,
          price: updateRoome.price,
        };

        return {
          ...state,
          bookingRoom: [...state.bookingRoom, roomItems],
        };
      }

    // Booking_items_deleted
    case "DELETED_BOOKING_ROOM":
      let updateBookingRoom = state.bookingRoom.filter(
        (bookingItems) => bookingItems.id !== action.payload
      );
      return {
        ...state,
        bookingRoom: updateBookingRoom,
      };

    // Booking_Roome_Clear_All
    case "CLEAR_ALL":
      return {
        ...state,
        bookingRoom: [],
      };

    default:
      return state;
  }
};

export default RoomBookingReducer;
