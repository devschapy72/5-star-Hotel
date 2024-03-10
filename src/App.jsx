import React from "react";
import { BrowserRouter } from "react-router-dom";
import Index from "./router-dom/Index";
import DashBord from "./layoutes/DashBord";

const App = () => {
  return (
    <BrowserRouter>
      <DashBord>
        <Index />
      </DashBord>
    </BrowserRouter>
  );
};

export default App;
