// src/pages/VehicleType.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const VehicleType = ({ type }) => {
    const { category, type: paramType } = useParams(); // 'type' prop vs param?
    const displayCategory = type === 'gearbox' ? paramType : category;

    return (
        <>
            <SEO title={`${displayCategory} Rentals`} />
            <div className="container section">
                <h1>{displayCategory} Car Rentals</h1>
                <p>Find the best {displayCategory} cars for your trip.</p>
            </div>
        </>
    );
};

export default VehicleType;
