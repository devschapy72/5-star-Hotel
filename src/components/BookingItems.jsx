import React from "react";
import FormatePrice from "./FormatePrice";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useBookingContext } from "../context/RoomBookingContext";

const BookingItems = ({
  id,
  image,
  price,
  category,
  selectedDay,
  selectDate,
}) => {
  const { deleteBooking } = useBookingContext();

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 items-center text-end mb-10 sm:mb-4 text-xs xs:text-sm lg:text-base">
      <figure className="flex flex-col text-start gap-2 md:block">
        <img src={image} alt={id} />
        <p className="md:hidden">
          <span className="font-serif font-semibold">Name:</span> {category}
        </p>
        <p className="sm:hidden">
          <span className="font-serif font-semibold">Date:</span> {selectDate}
          10/05/2024
        </p>
        <p className="sm:hidden">
          <span className="font-serif font-semibold">Total Day:</span>{" "}
          {selectedDay} Day
        </p>
      </figure>
      <p className="hidden md:block">{category}</p>
      <p className="hidden sm:block">{selectDate}10/05/2024</p>
      <p className="hidden sm:block">{selectedDay} Day</p>
      <p>
        <FormatePrice price={price * selectedDay} />
      </p>
      <div className="flex justify-end gap-2 text-2xl">
        <button className="text-blue-600 hover:text-green-600 duration-300 cursor-pointer">
          {" "}
          <CiEdit />
        </button>
        <button
          onClick={() => deleteBooking(id)}
          className="text-green-600 hover:text-red-600 duration-300 cursor-pointer"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default BookingItems;
