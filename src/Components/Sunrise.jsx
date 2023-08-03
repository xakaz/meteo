import React from "react";
import  sunrise  from "../assets/sunrise.svg";
import sunset  from "../assets/sunset.svg";

export default function Sunrise(props) {
  return (
    <div className="flex space-x-10">
      <div className="flex flex-col items-center">
        <img src={sunrise} alt="sunrise icon" />
        <p>{props.sunrise}</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={sunset} alt="sunrise icon" />
        <p>{props.sunset}</p>
      </div>
    </div>
  );
}
