import React from "react";
import Hero from "./Hero";
import HotelVisit from "./HotelVisit";
import HotelStaff from "../hotel_ staff/HotelStaff";
import FeatureRoom from "./FeatureRoom";

const Home = () => {
  return (
    <div>
      <Hero />
      <HotelVisit />
      <HotelStaff />
      <FeatureRoom />
    </div>
  );
};

export default Home;
