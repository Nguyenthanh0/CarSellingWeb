import React from 'react';
import Data3 from '../../Data3';
import CarCard3 from './CarCard3';

const CarList3 = () => {
    return (
        <div className="car-list">
            {Data3.map((car) => (
                <CarCard3 key={car.id} car={car} />
                
            ))}
            
        </div>
    );
};

export default CarList3;