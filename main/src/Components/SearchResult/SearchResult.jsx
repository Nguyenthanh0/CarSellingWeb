import React, { useState } from 'react';
import './SearchResult.css';
import Data from '../../Data';
import Review from '../Review/Review';

const SearchResult = () => {
  const [cars, setCars] = useState(Data);

  return (
    <div className="search-result">

      {cars.reduce((rows, car, index) => {
        if (index % 2 === 0) rows.push([]);
        rows[rows.length - 1].push(car);
        return rows;
      }, []).map((row, index) => (
        <div key={index} className="car-row">
          {row.map(car => (
            <div key={car.id} className="car-card1">
              <img src={car.image} alt={car.name} className="car-image1" />
              <div className="car-info1">
                <div className='condition'><p>New</p></div>
                <h3>{car.name}</h3>
                <h3 className="car-price">{car.price} {car.oldPrice && <span className="old-price">{car.oldPrice}</span>}</h3>
                <p className="car-place">{car.place}</p>
                <p className="car-year">{car.year} • {car.style}</p>
                <p className="car-energy">{car.energy} • {car.seat} seats</p>
                <Review />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SearchResult;