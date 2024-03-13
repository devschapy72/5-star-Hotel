import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import RoomDetails from "../page-details/RoomDetails";
import Contact from "../components/Contact";
import OurRooms from "../components/OurRooms";
import Error from "../components/Error";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourrooms" element={<OurRooms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      <Route path="/roomdetails/:id" element={<RoomDetails />} />
    </Routes>
  );
};

export default Index;
