import React, { useState } from "react";
import car1 from "../../../../img/Tesla.png";
import car2 from "../../../../img/Ford.png";
import car3 from "../../../../img/Honda.png";
const vehicles = [
  {
    image: car2,
    title: "Ford F-250 Super Duty",
    price: "$82,098 - $92,050",
    year: "2021",
    driveType: "Four-wheel Drive",
    fuelType: "Diesel",
    passengers: 5,
    rating: 5,
    reviews: 12,
  },
  {
    image: car1,
    title: "Honda Pilot Touring 7-Passenger",
    price: "$43,735 - $44,560",
    year: "2021",
    driveType: "All-wheel Drive",
    fuelType: "Gasoline",
    passengers: 7,
    rating: 4,
    reviews: 12,
  },
  {
    image: car3,
    title: "Honda Pilot Touring 7-Passenger",
    price: "$43,735 - $44,560",
    year: "2021",
    driveType: "All-wheel Drive",
    fuelType: "Gasoline",
    passengers: 7,
    rating: 4,
    reviews: 12,
  },
  // Thêm các xe khác nếu cần
];

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVehicle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % vehicles.length);
  };

  const prevVehicle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vehicles.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="customer-reviews">
      <h1>Customer Review</h1>
      <div className="reviews-slider">
        {vehicles
          .slice(currentIndex, currentIndex + 2)
          .map((vehicle, index) => (
            <div className="review-card" key={index}>
              <div
                className="review-image"
                style={{
                  backgroundImage: `url(${vehicle.image})`,
                }}
              ></div>
              <div className="review-content">
                <h3>{vehicle.title}</h3>
                <h4>{vehicle.price}</h4>
                <ul>
                  <li>{vehicle.year}</li>
                  <li>{vehicle.driveType}</li>
                  <li>{vehicle.fuelType}</li>
                  <li>Passengers: {vehicle.passengers}</li>
                </ul>
                <div className="rating">
                  {"★".repeat(vehicle.rating)}
                  {"☆".repeat(5 - vehicle.rating)}
                  <span>({vehicle.reviews} Reviews)</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="navigation">
        <button onClick={prevVehicle}>&#8249;</button>
        <button onClick={nextVehicle}>&#8250;</button>
      </div>
    </div>
  );
};

export default CustomerReview;
