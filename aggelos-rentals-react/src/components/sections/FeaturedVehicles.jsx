import React from 'react';
import { useLanguage } from '../../i18n';
import './FeaturedVehicles.css';

const vehicles = [
    {
        id: 1,
        name: 'Fiat Panda Hybrid 2023',
        type: 'Economy',
        image: 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/Fiat-Panda-Hybrid-2023-Piraeus-Rent-A-Car-768x384.jpg.webp',
        dailyPrice: 35,
        monthlyPrice: 350,
        features: ['Automatic', 'Hybrid', '5 Seats'],
        featuresEl: ['Αυτόματο', 'Υβριδικό', '5 Θέσεις'],
    },
    {
        id: 2,
        name: 'Jeep Renegade 4x4',
        type: 'SUV',
        image: 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car-768x384.jpg',
        dailyPrice: 80,
        monthlyPrice: 800,
        features: ['Automatic', '4x4', 'Panoramic Roof'],
        featuresEl: ['Αυτόματο', '4x4', 'Πανοραμική Οροφή'],
    },
    {
        id: 3,
        name: 'Mercedes-Benz A-Class',
        type: 'Premium',
        image: 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/Mercedes-Benz-Piraeus-Rent-A-Car-768x384.jpg.webp',
        dailyPrice: 150,
        monthlyPrice: 1200,
        features: ['Automatic', 'Premium', 'Navigation'],
        featuresEl: ['Αυτόματο', 'Premium', 'GPS'],
    },
];

const FeaturedVehicles = () => {
    const { t, language } = useLanguage();

    return (
        <section className="vehicles">
            <div className="container">
                <h2 className="section-title">{t('vehicles.title')}</h2>
                <p className="section-subtitle">{t('vehicles.subtitle')}</p>

                <div className="vehicles__grid">
                    {vehicles.map((vehicle) => (
                        <div className="vehicle-card" key={vehicle.id}>
                            <div className="vehicle-card__image">
                                <img src={vehicle.image} alt={vehicle.name} loading="lazy" />
                                <span className="vehicle-card__type">{vehicle.type}</span>
                            </div>

                            <div className="vehicle-card__content">
                                <h3 className="vehicle-card__name">{vehicle.name}</h3>

                                <div className="vehicle-card__features">
                                    {(language === 'el' ? vehicle.featuresEl : vehicle.features).map((feature, index) => (
                                        <span key={index} className="vehicle-card__feature">{feature}</span>
                                    ))}
                                </div>

                                <div className="vehicle-card__pricing">
                                    <div className="vehicle-card__price vehicle-card__price--daily">
                                        <span className="vehicle-card__price-label">{t('common.daily')}</span>
                                        <span className="vehicle-card__price-value">€{vehicle.dailyPrice}</span>
                                    </div>
                                    <div className="vehicle-card__price vehicle-card__price--monthly">
                                        <span className="vehicle-card__price-label">{t('common.monthly')}</span>
                                        <span className="vehicle-card__price-value">€{vehicle.monthlyPrice}</span>
                                    </div>
                                </div>

                                <a href="tel:+306980151068" className="vehicle-card__cta">
                                    {t('vehicles.book')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedVehicles;
