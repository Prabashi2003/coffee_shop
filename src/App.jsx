import React from "react";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services"; 
import Delivery from "./component/Delivery/Delivery";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Services/>
      <Delivery/>
    </div>
  );
};

export default App;