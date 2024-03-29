import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RoomProvider } from "./context/RoomContext.jsx";
import { BookingProvider } from "./context/RoomBookingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoomProvider>
    <BookingProvider>
      <App />
    </BookingProvider>
  </RoomProvider>
);
