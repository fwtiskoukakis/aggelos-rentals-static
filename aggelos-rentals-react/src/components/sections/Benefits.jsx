import React from 'react';
import { useLanguage } from '../../i18n';
import './Benefits.css';

const CreditCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
);

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
        <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
);

const HeadphonesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
);

const Benefits = () => {
    const { t } = useLanguage();

    const benefits = [
        { key: 'noCard', icon: <CreditCardIcon /> },
        { key: 'delivery', icon: <TruckIcon /> },
        { key: 'monthly', icon: <CalendarIcon /> },
        { key: 'support', icon: <HeadphonesIcon /> },
    ];

    return (
        <section className="benefits">
            <div className="container">
                <h2 className="section-title">{t('benefits.title')}</h2>

                <div className="benefits__grid">
                    {benefits.map((benefit) => (
                        <div className="benefit-card" key={benefit.key}>
                            <div className="benefit-card__icon">
                                {benefit.icon}
                            </div>
                            <h3 className="benefit-card__title">
                                {t(`benefits.${benefit.key}.title`)}
                            </h3>
                            <p className="benefit-card__desc">
                                {t(`benefits.${benefit.key}.desc`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
