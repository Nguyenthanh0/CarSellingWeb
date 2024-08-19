import React from 'react';
import './CarCard2.css';
import Data2 from '../../Data2';
import Review from '../Review/Review'
const CarCard2 = ({ car }) => {
    return (
        <div className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-info">
                <div className='Used'><p>Used</p></div>
                <h3>{car.name}</h3>
                <p>{car.price}</p>
                <p>{car.place}</p>
                <div className="car-infor">
                    <div><p>{car.year}</p></div>
                    <div><p>{car.style}</p></div>
                    <div><p>{car.energy}</p></div>
                    <div><p>{car.seat} seats</p></div>
                    
                </div>
                <Review></Review>
            </div>
        </div>
    );
};

export default CarCard2;