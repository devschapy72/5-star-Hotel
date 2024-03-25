import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/RoomBookingReducer";

const BookingContext = createContext();

const initialState = {
  bookingRoom: [],
  totalPrice: "",
};

const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addBookingRoom = (id, selectDate, selectedDay, updateRoome) => {
    dispatch({
      type: "ADD_BOOKING_ROOMS",
      payload: { id, selectDate, selectedDay, updateRoome },
    });
  };

  // Booking_items_deleted
  const deleteBooking = (id) => {
    dispatch({ type: "DELETED_BOOKING_ROOM", payload: id });
  };

  // Booking_Roome_Clear_All
  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  return (
    <BookingContext.Provider
      value={{ ...state, addBookingRoom, deleteBooking, clearAll }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// custom_hook
const useBookingContext = () => {
  return useContext(BookingContext);
};

export { BookingContext, BookingProvider, useBookingContext };
