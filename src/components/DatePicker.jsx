import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavLink } from "react-router-dom";
import { useBookingContext } from "../context/RoomBookingContext";

const DatePicker = ({ updateRoome }) => {
  const [selectDate, setSelectDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1);
  const { addBookingRoom } = useBookingContext();
  const { id } = updateRoome;

  const handleDateChange = (date) => {
    setSelectDate(date);
  };

  const handleDayChange = (e) => {
    setSelectedDay(parseInt(e.target.value));
  };

  return (
    <div>
      <div>
        <h2 className="text-[12px] sm:text-base font-serif font-semibold mb-3">
          Booking Date :
        </h2>
        <ReactDatePicker
          selected={selectDate}
          onChange={handleDateChange}
          className="border-2 outline-none pl-5 mb-3"
          placeholderText="MM/DD/YYYY"
        />
      </div>
      <div>
        <h2 className="text-[12px] sm:text-base font-serif font-semibold mb-3">
          Select Days :
        </h2>
        <select
          name="number"
          value={selectedDay}
          onChange={handleDayChange}
          className="outline-none border-2 px-2 py-1 text-base mb-10"
        >
          {Array.from({ length: 31 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1 + " Day"}
            </option>
          ))}
        </select>
      </div>
      <div>
        <NavLink
          to="/bookingroom"
          onClick={() =>
            addBookingRoom(id, selectDate, selectedDay, updateRoome)
          }
        >
          <button className="bg-orange-500 hover:bg-green-500 duration-300 outline-none px-10 py-3 rounded-lg shadow-xl text-sm lg:text-base font-serif font-semibold text-white">
            Booking Conform
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DatePicker;
