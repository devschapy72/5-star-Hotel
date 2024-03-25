import React from "react";
import { useBookingContext } from "../context/RoomBookingContext";
import { NavLink } from "react-router-dom";
import BookingItems from "./BookingItems";

const BookingRoom = () => {
  const { bookingRoom, clearAll } = useBookingContext();
  console.log(bookingRoom);

  if (!bookingRoom) {
    return <div>Loading....</div>;
  }

  if (bookingRoom.length === 0) {
    return (
      <div className="w-full pt-52 flex flex-col justify-center items-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-semibold text-orange-500 mb-10">
          No Booking
        </h2>
        <NavLink to="/ourrooms">
          <button className="bg-orange-500 border-2 border-orange-500 px-12 py-3 rounded-md text-sm lg:text-base hover:bg-transparent text-white hover:text-orange-600 duration-300 font-serif">
            Booking Now
          </button>
        </NavLink>
      </div>
    );
  }
  return (
    <div className="w-11/12 mx-auto pt-10">
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 text-end text-xs xs:text-sm lg:text-base">
        <p>Booking Room</p>
        <p className="hidden md:block">Room Name </p>
        <p className="hidden sm:block">Booking Date</p>
        <p className="hidden sm:block">Total Day</p>
        <p>Bookig Price</p>
        <p>Edit</p>
      </div>
      <hr className="my-5" />
      <div>
        {bookingRoom.map((roomItems) => {
          return <BookingItems key={roomItems.id} {...roomItems} />;
        })}
      </div>
      <hr className="my-3" />
      <div className="flex flex-wrap gap-5 justify-between items-center">
        <NavLink to="/ourrooms">
          <button className="bg-blue-600 text-white px-5 py-3 text-sm font-serif hover:bg-green-600 rounded-lg duration-300">
            See more room
          </button>
        </NavLink>
        <button
          onClick={clearAll}
          className="bg-green-600 text-white px-10 py-3 text-sm font-serif hover:bg-red-600 rounded-lg duration-300"
        >
          All Clear
        </button>
      </div>
    </div>
  );
};

export default BookingRoom;
