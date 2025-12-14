import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { BreadcrumbSchema } from '../components/Schema/Schema';
import './LocationPage.css';

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const CarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const PiraeusPort = () => {
    const { language, getLocalizedPath } = useLanguage();

    const seoTitle = language === 'el'
        ? 'Ενοικίαση Αυτοκινήτου Λιμάνι Πειραιά | Παραλαβή σε 20 Λεπτά | Aggelos Rentals'
        : 'Rent a Car Piraeus Port | Pickup in 20 Minutes | Aggelos Rentals';

    const seoDescription = language === 'el'
        ? 'Ενοικίαση αυτοκινήτου στο λιμάνι του Πειραιά. Δωρεάν παράδοση στις πύλες E5-E7. Από €35/ημέρα. Χωρίς πιστωτική κάρτα. 24/7 υποστήριξη.'
        : 'Rent a car at Piraeus Port. Free delivery to gates E5-E7. From €35/day. No credit card required. 24/7 support.';

    const canonical = language === 'en'
        ? 'https://aggelosrentals.com/en/locations/piraeus-port'
        : 'https://aggelosrentals.com/locations/piraeus-port';

    const breadcrumbs = [
        { name: language === 'el' ? 'Αρχική' : 'Home', url: 'https://aggelosrentals.com' + (language === 'en' ? '/en' : '') },
        { name: language === 'el' ? 'Τοποθεσίες' : 'Locations', url: 'https://aggelosrentals.com' + (language === 'en' ? '/en' : '') + '/locations' },
        { name: language === 'el' ? 'Λιμάνι Πειραιά' : 'Piraeus Port', url: canonical }
    ];

    const features = language === 'el' ? [
        'Παράδοση στις πύλες E5-E7 σε 20 λεπτά',
        'Χωρίς πιστωτική κάρτα',
        'Πλήρης ασφάλεια',
        '24/7 υποστήριξη στα Ελληνικά',
        'Δωρεάν ακύρωση',
        'Μηνιαία ενοικίαση από €350'
    ] : [
        'Delivery to gates E5-E7 in 20 minutes',
        'No credit card required',
        'Full insurance included',
        '24/7 Greek support',
        'Free cancellation',
        'Monthly rental from €350'
    ];

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />
                <link rel="alternate" hrefLang="el" href="https://aggelosrentals.com/locations/piraeus-port" />
                <link rel="alternate" hrefLang="en" href="https://aggelosrentals.com/en/locations/piraeus-port" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={canonical} />
                <meta property="og:image" content="https://www.aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car-768x384.jpg" />
                <html lang={language} />
            </Helmet>

            <BreadcrumbSchema items={breadcrumbs} />

            <section className="location-hero location-hero--port">
                <div className="container">
                    <div className="location-hero__content">
                        <nav className="breadcrumb">
                            {breadcrumbs.map((item, index) => (
                                <span key={index}>
                                    {index < breadcrumbs.length - 1 ? (
                                        <><Link to={getLocalizedPath(index === 0 ? '/' : '/locations')}>{item.name}</Link> / </>
                                    ) : (
                                        <span>{item.name}</span>
                                    )}
                                </span>
                            ))}
                        </nav>
                        <h1 className="location-hero__title">
                            {language === 'el' ? 'Ενοικίαση Αυτοκινήτου Λιμάνι Πειραιά' : 'Rent a Car at Piraeus Port'}
                        </h1>
                        <p className="location-hero__subtitle">
                            {language === 'el'
                                ? 'Παραλάβετε το αυτοκίνητό σας στις πύλες E5-E7 σε 20 λεπτά'
                                : 'Pick up your car at gates E5-E7 in 20 minutes'}
                        </p>
                    </div>
                </div>
            </section>

            <section className="location-content">
                <div className="container">
                    <div className="location-grid">
                        <div className="location-main">
                            <div className="location-block">
                                <h2>{language === 'el' ? 'Γρήγορη Παραλαβή στο Λιμάνι' : 'Quick Pickup at the Port'}</h2>
                                <p>
                                    {language === 'el'
                                        ? 'Η Aggelos Rentals σας παραδίδει το αυτοκίνητο απευθείας στις πύλες E5-E7 του λιμανιού του Πειραιά. Καλέστε μας 20-30 λεπτά πριν την άφιξή σας και θα σας περιμένουμε με το κλειδί στο χέρι.'
                                        : 'Aggelos Rentals delivers your car directly to gates E5-E7 at Piraeus Port. Call us 20-30 minutes before arrival and we will be waiting with the key in hand.'}
                                </p>
                            </div>

                            <div className="location-features">
                                <h3>{language === 'el' ? 'Τι Περιλαμβάνεται' : 'What\'s Included'}</h3>
                                <ul>
                                    {features.map((feature, index) => (
                                        <li key={index}><CheckIcon /><span>{feature}</span></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="location-cta">
                                <a href="tel:+306980151068" className="btn btn-accent btn-lg">
                                    {language === 'el' ? 'Καλέστε Τώρα: +30 698 015 1068' : 'Call Now: +30 698 015 1068'}
                                </a>
                                <a href="https://wa.me/306980151068" className="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="location-sidebar">
                            <div className="location-info-card">
                                <h3>{language === 'el' ? 'Πληροφορίες Τοποθεσίας' : 'Location Info'}</h3>
                                <ul className="location-info-list">
                                    <li>
                                        <MapPinIcon />
                                        <div>
                                            <strong>{language === 'el' ? 'Διεύθυνση' : 'Address'}</strong>
                                            <span>{language === 'el' ? 'Λιμάνι Πειραιά, Πύλες E5-E7' : 'Piraeus Port, Gates E5-E7'}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <ClockIcon />
                                        <div>
                                            <strong>{language === 'el' ? 'Ωράριο' : 'Hours'}</strong>
                                            <span>24/7</span>
                                        </div>
                                    </li>
                                    <li>
                                        <CarIcon />
                                        <div>
                                            <strong>{language === 'el' ? 'Χρόνος Παράδοσης' : 'Delivery Time'}</strong>
                                            <span>{language === 'el' ? '20-30 λεπτά' : '20-30 minutes'}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="location-price-card">
                                <span className="location-price-label">{language === 'el' ? 'Ημερήσια από' : 'Daily from'}</span>
                                <span className="location-price-value">€35</span>
                                <span className="location-price-note">{language === 'el' ? 'Μηνιαία από €350' : 'Monthly from €350'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="location-map">
                        <h3>{language === 'el' ? 'Τοποθεσία στον Χάρτη' : 'Location on Map'}</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6291.472371221244!2d23.625!3d37.9413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bb01c60af2d3%3A0x400bd2ce2b980f00!2sPiraeus%20Port!5e0!3m2!1sen!2sgr!4v1700000000000"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Piraeus Port Location"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PiraeusPort;
