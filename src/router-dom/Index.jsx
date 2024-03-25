import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import RoomDetails from "../page-details/RoomDetails";
import Contact from "../components/Contact";
import OurRooms from "../components/OurRooms";
import Error from "../components/Error";
import AllVipRoom from "../vip_rooms/AllVipRoom";
import DatePicker from "../components/DatePicker";
import BookingRoom from "../components/BookingRoom";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourrooms" element={<OurRooms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      <Route path="/roomdetails/:id" element={<RoomDetails />} />
      <Route path="/allviproom/:id" element={<AllVipRoom />} />
      <Route path="/bookingroom" element={<BookingRoom />} />
      <Route path="/datepicker" element={<DatePicker />} />
    </Routes>
  );
};

export default Index;
