import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import './Hero.css';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const Hero = () => {
    const { t, language, getLocalizedPath } = useLanguage();

    const trustItems = [
        { key: 'years', icon: '🏆' },
        { key: 'customers', icon: '⭐' },
        { key: 'support', icon: '📞' },
    ];

    const locationLinks = [
        { path: '/locations/athens-airport', label: language === 'el' ? 'Αεροδρόμιο' : 'Airport', icon: '✈️' },
        { path: '/locations/piraeus-port', label: language === 'el' ? 'Λιμάνι Πειραιά' : 'Piraeus Port', icon: '⛴️' },
        { path: '/locations/athens-center', label: language === 'el' ? 'Κέντρο Αθήνας' : 'Athens Center', icon: '🏛️' },
    ];

    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__content">
                    <div className="hero__text">
                        {/* Badge */}
                        <div className="hero__badge">
                            {language === 'el' ? 'Πειραιάς • Αεροδρόμιο • Αθήνα' : 'Piraeus • Airport • Athens'}
                        </div>

                        {/* Title */}
                        <h1 className="hero__title">
                            {t('hero.title')}
                        </h1>
                        <p className="hero__subtitle">
                            {t('hero.description')}
                        </p>

                        {/* Trust Badges */}
                        <div className="hero__trust">
                            {trustItems.map((item) => (
                                <div className="hero__trust-item" key={item.key}>
                                    <span className="hero__trust-icon">{item.icon}</span>
                                    <span>{t(`trust.${item.key}`)}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hero__actions">
                            <a href="tel:+306980151068" className="hero__cta hero__cta--primary">
                                <PhoneIcon />
                                <span>{t('hero.callCta')}</span>
                            </a>
                            <a href="https://wa.me/306980151068" className="hero__cta hero__cta--whatsapp" target="_blank" rel="noopener noreferrer">
                                <span>WhatsApp</span>
                            </a>
                        </div>

                        {/* Features */}
                        <div className="hero__features">
                            <div className="hero__feature">
                                <CheckIcon />
                                <span>{language === 'el' ? 'Χωρίς πιστωτική κάρτα' : 'No credit card'}</span>
                            </div>
                            <div className="hero__feature">
                                <CheckIcon />
                                <span>{language === 'el' ? 'Δωρεάν παράδοση' : 'Free delivery'}</span>
                            </div>
                            <div className="hero__feature">
                                <CheckIcon />
                                <span>{language === 'el' ? 'Από €35/ημέρα' : 'From €35/day'}</span>
                            </div>
                        </div>

                        {/* Location Quick Links */}
                        <div className="hero__locations">
                            <span className="hero__locations-label">
                                <MapPinIcon /> {language === 'el' ? 'Τοποθεσίες Παραλαβής:' : 'Pickup Locations:'}
                            </span>
                            <div className="hero__locations-links">
                                {locationLinks.map((loc) => (
                                    <Link key={loc.path} to={getLocalizedPath(loc.path)} className="hero__location-link">
                                        <span>{loc.icon}</span> {loc.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Vehicle Image */}
                    <div className="hero__image">
                        <img
                            src="https://www.aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car-768x384.jpg"
                            alt="Jeep Renegade - Aggelos Rentals"
                            loading="eager"
                        />
                        <div className="hero__price-badge">
                            <span className="hero__price-label">{language === 'el' ? 'Μηνιαία από' : 'Monthly from'}</span>
                            <span className="hero__price-value">€350</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

