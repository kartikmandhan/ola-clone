import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="Banner">
      <div className="Banner__introText">
        <div className="Banner__overlay"></div>
        <h1 className="Banner__LineOne">
          Book a City Taxi to your destination in town
        </h1>
        <h1 className="Banner__LineTwo">
          Choose from a range of categories and prices
        </h1>
      </div>
    </div>
  );
}

export default Banner;
