import React from 'react';
import { useLanguage } from '../../i18n';
import './MonthlyRentalCTA.css';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const MonthlyRentalCTA = () => {
    const { t, language } = useLanguage();

    const features = [
        t('monthlyRental.features.insurance'),
        t('monthlyRental.features.km'),
        t('monthlyRental.features.support'),
        t('monthlyRental.features.delivery'),
    ];

    return (
        <section className="monthly-cta">
            <div className="container">
                <div className="monthly-cta__content">
                    <div className="monthly-cta__text">
                        <h2 className="monthly-cta__title">{t('monthlyRental.title')}</h2>
                        <p className="monthly-cta__subtitle">{t('monthlyRental.subtitle')}</p>

                        <div className="monthly-cta__price">
                            <span className="monthly-cta__price-from">{language === 'el' ? 'από' : 'from'}</span>
                            <span className="monthly-cta__price-value">{t('monthlyRental.price')}</span>
                            <span className="monthly-cta__price-period">{t('monthlyRental.period')}</span>
                        </div>

                        <ul className="monthly-cta__features">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <CheckIcon />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="tel:+306980151068" className="monthly-cta__cta">
                            {t('monthlyRental.cta')}
                        </a>
                    </div>

                    <div className="monthly-cta__image">
                        <img
                            src="https://www.aggelosrentals.com/wp-content/uploads/2023/12/Fiat-Panda-Hybrid-2023-Piraeus-Rent-A-Car-768x384.jpg.webp"
                            alt="Monthly Rental - Fiat Panda"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonthlyRentalCTA;
