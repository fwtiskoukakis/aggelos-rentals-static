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

const AthensAirport = () => {
    const { language, getLocalizedPath } = useLanguage();

    const seoTitle = language === 'el'
        ? 'Ενοικίαση Αυτοκινήτου Αεροδρόμιο Αθηνών | Δωρεάν Παραλαβή | Aggelos Rentals'
        : 'Rent a Car Athens Airport | Free Pickup | Aggelos Rentals';

    const seoDescription = language === 'el'
        ? 'Ενοικίαση αυτοκινήτου στο αεροδρόμιο Ελ. Βενιζέλος. Δωρεάν παράδοση στο terminal. Από €35/ημέρα. 24/7 υποστήριξη. Χωρίς πιστωτική κάρτα.'
        : 'Car rental at Athens El. Venizelos Airport. Free delivery to terminal. From €35/day. 24/7 support. No credit card required.';

    const canonical = language === 'en'
        ? 'https://aggelosrentals.com/en/locations/athens-airport'
        : 'https://aggelosrentals.com/locations/athens-airport';

    const breadcrumbs = [
        { name: language === 'el' ? 'Αρχική' : 'Home', url: 'https://aggelosrentals.com' + (language === 'en' ? '/en' : '') },
        { name: language === 'el' ? 'Τοποθεσίες' : 'Locations', url: 'https://aggelosrentals.com' + (language === 'en' ? '/en' : '') + '/locations' },
        { name: language === 'el' ? 'Αεροδρόμιο Αθηνών' : 'Athens Airport', url: canonical }
    ];

    const features = language === 'el' ? [
        'Δωρεάν παράδοση στο terminal αφίξεων',
        'Χωρίς πιστωτική κάρτα',
        'Πλήρης ασφάλεια',
        '24/7 υποστήριξη στα Ελληνικά',
        'Δωρεάν ακύρωση έως 24 ώρες πριν',
        'Transfer προς Πειραιά με €50'
    ] : [
        'Free delivery to arrivals terminal',
        'No credit card required',
        'Full insurance included',
        '24/7 Greek support',
        'Free cancellation up to 24h before',
        'Transfer to Piraeus for €50'
    ];

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />
                <link rel="alternate" hrefLang="el" href="https://aggelosrentals.com/locations/athens-airport" />
                <link rel="alternate" hrefLang="en" href="https://aggelosrentals.com/en/locations/athens-airport" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={canonical} />
                <html lang={language} />
            </Helmet>

            <BreadcrumbSchema items={breadcrumbs} />

            <section className="location-hero location-hero--airport">
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
                            {language === 'el' ? 'Ενοικίαση Αυτοκινήτου Αεροδρόμιο Αθηνών' : 'Rent a Car at Athens Airport'}
                        </h1>
                        <p className="location-hero__subtitle">
                            {language === 'el'
                                ? 'Δωρεάν παράδοση στο Eleftherios Venizelos Terminal'
                                : 'Free delivery at Eleftherios Venizelos Terminal'}
                        </p>
                    </div>
                </div>
            </section>

            <section className="location-content">
                <div className="container">
                    <div className="location-grid">
                        <div className="location-main">
                            <div className="location-block">
                                <h2>{language === 'el' ? 'Εύκολη Παραλαβή στο Αεροδρόμιο' : 'Easy Airport Pickup'}</h2>
                                <p>
                                    {language === 'el'
                                        ? 'Παραλάβετε το αυτοκίνητό σας απευθείας στο αεροδρόμιο Ελ. Βενιζέλος. Θα σας περιμένουμε στην έξοδο του terminal αφίξεων. Καλέστε μας όταν προσγειωθείτε για να ξεκινήσουμε.'
                                        : 'Pick up your car directly at El. Venizelos Airport. We will be waiting at the arrivals terminal exit. Call us when you land to get started.'}
                                </p>

                                {/* Special section for Athens Airport to Piraeus - HIGH VALUE KEYWORD */}
                                <div className="location-highlight">
                                    <h3>{language === 'el' ? '✈️ Από Αεροδρόμιο σε Λιμάνι Πειραιά' : '✈️ Athens Airport to Piraeus Port'}</h3>
                                    <p>
                                        {language === 'el'
                                            ? 'Χρειάζεστε αυτοκίνητο από το αεροδρόμιο για το λιμάνι του Πειραιά; Σας παραδίδουμε το αυτοκίνητο στο αεροδρόμιο και το αφήνετε στον Πειραιά - ή το αντίστροφο!'
                                            : 'Need a car from the airport to Piraeus Port? We deliver to the airport and you can drop off at Piraeus - or vice versa!'}
                                    </p>
                                    <Link to={getLocalizedPath('/athens-airport-to-piraeus')} className="btn btn-primary">
                                        {language === 'el' ? 'Μάθετε Περισσότερα' : 'Learn More'}
                                    </Link>
                                </div>
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
                                            <span>Athens International Airport (ATH)</span>
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
                                            <span>{language === 'el' ? '30 λεπτά' : '30 minutes'}</span>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12582.944742442487!2d23.9445!3d37.9364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1900c48ee1e9d%3A0x51c2c4b2bb2b9f9a!2sAthens%20International%20Airport!5e0!3m2!1sen!2sgr!4v1700000000000"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Athens Airport Location"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AthensAirport;
