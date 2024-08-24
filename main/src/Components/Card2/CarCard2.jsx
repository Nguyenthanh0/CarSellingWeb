import React from "react";
import "./CarCard2.css";
import Data2 from "../../Data2";
import Review from "../Review/Review";
import { FaCalendarAlt } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { RiGasStationLine } from "react-icons/ri";
import { RiParentLine } from "react-icons/ri";

const CarCard2 = ({ car }) => {
 
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-info2">
        <div className="Used">
          <p>Used</p>
        </div>
        <h3>{car.name}</h3>
        <h3 style={{ color: "#007CC7" }}>{car.price}</h3>
        <p>{car.place}</p>
        <div className="car-infor">
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <FaCalendarAlt className="calendarIcon" />
            <p>{car.year}</p>
          </div>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <RiGasStationLine className="calendarIcon" />
            <p>{car.style}</p>
          </div>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <TbSteeringWheel className="calendarIcon" />
            <p>{car.energy}</p>
          </div>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <RiParentLine className="calendarIcon" />
            <p>{car.seat} seats</p>
          </div>
        </div>
        <Review></Review>
      </div>
      {/* >>>>>>> 60c5826e150c5a44be5fe735d19e794865dddc91 */}
    </div>
    //      <h3>{car.name}</h3>
    //     <p>{car.price}</p>
    //     <p>{car.place}</p>
    //     <div className="car-infor">
    //       <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
    //         <FaCalendarAlt className="calendarIcon" />
    //         <p>{car.year}</p>
    //       </div>
    //       <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
    //         <RiGasStationLine className="calendarIcon" />
    //         <p>{car.style}</p>
    //       </div>
    //       <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
    //         <TbSteeringWheel className="calendarIcon" />
    //         <p>{car.energy}</p>
    //       </div>
    //       <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
    //         <RiParentLine className="calendarIcon" />
    //         <p>{car.seat} seats</p>
    //       </div>
    //     </div>
    //     <Review></Review>
    //   </div>
    // </div>
  );
};

export default CarCard2;
