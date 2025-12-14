// src/pages/LocationPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const LocationPage = ({ type }) => {
    const { slug } = useParams();
    const pageTitle = type === 'monthly' ? 'Monthly Car Rentals' : `Car Rental at ${slug?.replace('-', ' ')}`;

    return (
        <>
            <SEO title={pageTitle} />
            <div className="container section">
                <h1>{pageTitle}</h1>
                <p>Location details and booking information for {slug}.</p>
            </div>
        </>
    );
};

export default LocationPage;
