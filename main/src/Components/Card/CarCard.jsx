import React, { useContext, useState, useRef } from "react";
import "./CarCard.css";
import Review from "../Review/Review";
import Data from "../../Data";
import { FaCalendarAlt } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { RiGasStationLine } from "react-icons/ri";
import { RiParentLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../componentOfThanh/ShoppingCart/CartContext ";
import Notification from "../../componentOfThanh/ShoppingCart/Notification ";

const CarCard = ({ car }) => {
  const { addToCart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationPosition, setNotificationPosition] = useState({
    top: 0,
    left: 0,
  });
  const carCardRef = useRef(null);

  const handleAddToCart = (product) => {
    if (carCardRef.current) {
      const { top, left } = carCardRef.current.getBoundingClientRect();
      setNotificationPosition({ top: top - 50, left: left + window.scrollX });
      setShowNotification(true);
      addToCart(product);
      setTimeout(() => setShowNotification(false), 3000); // Hiển thị thông báo trong 3 giây
    }
  };
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-info">
        <div className="new1">New</div>
        <Link to="/homepage/newcarlist/cardetail">
          <h3>{car.name}</h3>
        </Link>
        <div style={{ display: "flex", gap: "60px" }}>
          <h3 style={{ color: "#007CC7" }}>{car.price}</h3>
          {/* <Link to="/homepage/buy"> */}
          <button
            onClick={() => handleAddToCart(car)}
            className="add-to-cart-btn"
          >
            <FaCartShopping className="shoppingcart" />
          </button>
          {/* </Link> */}
        </div>

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
      {showNotification && (
        <Notification
          message="Product added to cart!"
          onClose={() => setShowNotification(false)}
          style={{
            top: `${notificationPosition.top}px`,
            left: `${notificationPosition.left}px`,
            position: "absolute",
          }}
        />
      )}
    </div>
  );
};

export default CarCard;
