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

const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
    </svg>
);

const AthensCenter = () => {
    const { language, getLocalizedPath } = useLanguage();

    const seoTitle = language === 'el'
        ? 'Ενοικίαση Αυτοκινήτου Κέντρο Αθήνας | Δωρεάν Παράδοση | Aggelos Rentals'
        : 'Rent a Car Athens Center | Free Delivery | Aggelos Rentals';

    const seoDescription = language === 'el'
        ? 'Ενοικίαση αυτοκινήτου στο κέντρο της Αθήνας. Δωρεάν παράδοση σε ξενοδοχεία και διευθύνσεις. Από €35/ημέρα. Χωρίς πιστωτική κάρτα. 24/7 υποστήριξη.'
        : 'Car rental in Athens city center. Free delivery to hotels and addresses. From €35/day. No credit card required. 24/7 support.';

    const canonical = language === 'en'
        ? 'https://aggelosrentals.com/en/locations/athens-center'
        : 'https://aggelosrentals.com/locations/athens-center';

    const breadcrumbs = [
        { name: language === 'el' ? 'Αρχική' : 'Home', url: 'https://aggelosrentals.com' + (language === 'en' ? '/en' : '') },
        { name: language === 'el' ? 'Τοποθεσίες' : 'Locations', url: 'https://aggelosrentals.com' + (language === 'en' ? '/en' : '') + '/locations' },
        { name: language === 'el' ? 'Κέντρο Αθήνας' : 'Athens Center', url: canonical }
    ];

    const features = language === 'el' ? [
        'Δωρεάν παράδοση σε ξενοδοχεία & διευθύνσεις',
        'Χωρίς πιστωτική κάρτα',
        'Πλήρης ασφάλεια',
        '24/7 υποστήριξη στα Ελληνικά',
        'Δωρεάν ακύρωση έως 24 ώρες πριν',
        'Ιδανικό για εξερεύνηση της Αττικής'
    ] : [
        'Free delivery to hotels & addresses',
        'No credit card required',
        'Full insurance included',
        '24/7 Greek support',
        'Free cancellation up to 24h before',
        'Perfect for exploring Attica'
    ];

    const popularAreas = language === 'el' ? [
        'Πλάκα & Μοναστηράκι',
        'Σύνταγμα & Κολωνάκι',
        'Ακρόπολη & Θησείο',
        'Εξάρχεια & Ομόνοια',
        'Κηφισιά & Μαρούσι',
        'Γλυφάδα & Νότια Προάστια'
    ] : [
        'Plaka & Monastiraki',
        'Syntagma & Kolonaki',
        'Acropolis & Thissio',
        'Exarchia & Omonia',
        'Kifisia & Marousi',
        'Glyfada & Southern Suburbs'
    ];

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />
                <link rel="alternate" hrefLang="el" href="https://aggelosrentals.com/locations/athens-center" />
                <link rel="alternate" hrefLang="en" href="https://aggelosrentals.com/en/locations/athens-center" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={canonical} />
                <meta property="og:image" content="https://www.aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car-768x384.jpg" />
                <html lang={language} />
            </Helmet>

            <BreadcrumbSchema items={breadcrumbs} />

            <section className="location-hero location-hero--center">
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
                            {language === 'el' ? 'Ενοικίαση Αυτοκινήτου Κέντρο Αθήνας' : 'Rent a Car in Athens Center'}
                        </h1>
                        <p className="location-hero__subtitle">
                            {language === 'el'
                                ? 'Δωρεάν παράδοση σε οποιαδήποτε διεύθυνση ή ξενοδοχείο στην Αθήνα'
                                : 'Free delivery to any address or hotel in Athens'}
                        </p>
                    </div>
                </div>
            </section>

            <section className="location-content">
                <div className="container">
                    <div className="location-grid">
                        <div className="location-main">
                            <div className="location-block">
                                <h2>{language === 'el' ? 'Εξερευνήστε την Αθήνα με Δικό σας Αυτοκίνητο' : 'Explore Athens with Your Own Car'}</h2>
                                <p>
                                    {language === 'el'
                                        ? 'Η Aggelos Rentals σας παραδίδει το αυτοκίνητο απευθείας στο ξενοδοχείο σας, στο Airbnb σας, ή σε οποιαδήποτε διεύθυνση στο κέντρο της Αθήνας. Με βάση μας τον Πειραιά, είμαστε μόλις 20-30 λεπτά από το κέντρο, εξασφαλίζοντας γρήγορη και αξιόπιστη εξυπηρέτηση.'
                                        : 'Aggelos Rentals delivers your car directly to your hotel, Airbnb, or any address in central Athens. Based in Piraeus, we are just 20-30 minutes from the center, ensuring fast and reliable service.'}
                                </p>
                                <p>
                                    {language === 'el'
                                        ? 'Με ενοικιασμένο αυτοκίνητο μπορείτε να επισκεφθείτε εύκολα τα αξιοθέατα της Αθήνας, να κάνετε ημερήσιες εκδρομές στο Σούνιο, τους Δελφούς, ή την Επίδαυρο, και να εξερευνήσετε τις όμορφες παραλίες της Αττικής.'
                                        : 'With a rental car, you can easily visit Athens\' attractions, take day trips to Sounion, Delphi, or Epidaurus, and explore the beautiful beaches of Attica.'}
                                </p>
                            </div>

                            {/* Popular Areas Section */}
                            <div className="location-block">
                                <h3><BuildingIcon /> {language === 'el' ? 'Παράδοση σε Δημοφιλείς Περιοχές' : 'Delivery to Popular Areas'}</h3>
                                <ul className="location-areas-list">
                                    {popularAreas.map((area, index) => (
                                        <li key={index}><CheckIcon /><span>{area}</span></li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cross-linking to other locations */}
                            <div className="location-highlight">
                                <h3>{language === 'el' ? '🚗 Άλλες Τοποθεσίες Παραλαβής' : '🚗 Other Pickup Locations'}</h3>
                                <p>
                                    {language === 'el'
                                        ? 'Εκτός από το κέντρο της Αθήνας, παραδίδουμε επίσης στο αεροδρόμιο και το λιμάνι του Πειραιά.'
                                        : 'Besides Athens center, we also deliver to the airport and Piraeus port.'}
                                </p>
                                <div className="location-links">
                                    <Link to={getLocalizedPath('/locations/athens-airport')} className="btn btn-outline">
                                        {language === 'el' ? 'Αεροδρόμιο Αθηνών' : 'Athens Airport'}
                                    </Link>
                                    <Link to={getLocalizedPath('/locations/piraeus-port')} className="btn btn-outline">
                                        {language === 'el' ? 'Λιμάνι Πειραιά' : 'Piraeus Port'}
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
                                            <strong>{language === 'el' ? 'Περιοχή' : 'Area'}</strong>
                                            <span>{language === 'el' ? 'Κέντρο Αθήνας & Προάστια' : 'Athens Center & Suburbs'}</span>
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
                                            <span>{language === 'el' ? '20-40 λεπτά' : '20-40 minutes'}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="location-price-card">
                                <span className="location-price-label">{language === 'el' ? 'Ημερήσια από' : 'Daily from'}</span>
                                <span className="location-price-value">€35</span>
                                <span className="location-price-note">{language === 'el' ? 'Μηνιαία από €350' : 'Monthly from €350'}</span>
                            </div>

                            {/* Blog CTA */}
                            <div className="location-blog-cta">
                                <h4>{language === 'el' ? '📖 Διαβάστε το Blog μας' : '📖 Read Our Blog'}</h4>
                                <p>{language === 'el' ? 'Συμβουλές για ενοικίαση αυτοκινήτου και ταξίδι στην Ελλάδα' : 'Tips for car rental and traveling in Greece'}</p>
                                <Link to={getLocalizedPath('/blog')} className="btn btn-outline btn-sm">
                                    {language === 'el' ? 'Δείτε τα Άρθρα' : 'View Articles'}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Map - Athens Center (Syntagma Square) */}
                    <div className="location-map">
                        <h3>{language === 'el' ? 'Κέντρο Αθήνας - Περιοχή Εξυπηρέτησης' : 'Athens Center - Service Area'}</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12579.876!2d23.7275!3d37.9755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd19ca39ee61%3A0x1b3fa079bec3d6f0!2sSyntagma%20Square!5e0!3m2!1sen!2sgr!4v1700000000000"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Athens Center Service Area"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AthensCenter;
