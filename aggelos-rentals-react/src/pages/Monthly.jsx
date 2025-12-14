import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n';
import './Monthly.css';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const monthlyPackages = [
    {
        id: 1,
        name: 'Economy',
        vehicle: 'Fiat Panda Hybrid 2023',
        image: 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/Fiat-Panda-Hybrid-2023-Piraeus-Rent-A-Car-768x384.jpg.webp',
        price: 350,
        kmIncluded: 2000,
        popular: true,
        featuresEn: ['Full Insurance', '2000 km/month', 'Free Delivery', '24/7 Support', 'No Credit Card'],
        featuresEl: ['Πλήρης Ασφάλεια', '2000 km/μήνα', 'Δωρεάν Παράδοση', '24/7 Υποστήριξη', 'Χωρίς Πιστωτική'],
    },
    {
        id: 2,
        name: 'SUV',
        vehicle: 'Jeep Renegade 4x4',
        image: 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car-768x384.jpg',
        price: 800,
        kmIncluded: 2500,
        popular: false,
        featuresEn: ['Full Insurance', '2500 km/month', 'Free Delivery', '24/7 Support', '4x4 Capability'],
        featuresEl: ['Πλήρης Ασφάλεια', '2500 km/μήνα', 'Δωρεάν Παράδοση', '24/7 Υποστήριξη', 'Δυνατότητα 4x4'],
    },
    {
        id: 3,
        name: 'Premium',
        vehicle: 'Mercedes-Benz A-Class',
        image: 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/Mercedes-Benz-Piraeus-Rent-A-Car-768x384.jpg.webp',
        price: 1200,
        kmIncluded: 3000,
        popular: false,
        featuresEn: ['Full Insurance', '3000 km/month', 'Free Delivery', '24/7 Priority Support', 'Premium Experience'],
        featuresEl: ['Πλήρης Ασφάλεια', '3000 km/μήνα', 'Δωρεάν Παράδοση', '24/7 Premium Υποστήριξη', 'Premium Εμπειρία'],
    },
];

const Monthly = () => {
    const { language, t } = useLanguage();

    // SEO from migration/seo-keyword-research.md
    const seoTitle = language === 'el'
        ? 'Μηνιαία Ενοικίαση Αυτοκινήτου Αθήνα & Πειραιάς | Από €350/μήνα | Aggelos Rentals'
        : 'Monthly Car Rental Athens & Piraeus | From €350/month | Aggelos Rentals';

    const seoDescription = language === 'el'
        ? 'Μηνιαία ενοικίαση αυτοκινήτου στην Αθήνα και Πειραιά. Από €350/μήνα με πλήρη ασφάλεια, 2000+ χιλιόμετρα, δωρεάν παράδοση. Χωρίς πιστωτική κάρτα.'
        : 'Monthly car rental in Athens and Piraeus. From €350/month with full insurance, 2000+ km included, free delivery. No credit card required.';

    const canonical = language === 'en'
        ? 'https://aggelosrentals.com/en/monthly'
        : 'https://aggelosrentals.com/monthly';

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="el" href="https://aggelosrentals.com/monthly" />
                <link rel="alternate" hrefLang="en" href="https://aggelosrentals.com/en/monthly" />

                {/* Open Graph */}
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={canonical} />

                <html lang={language} />
            </Helmet>

            <section className="monthly-hero">
                <div className="container">
                    <h1 className="monthly-hero__title">
                        {language === 'el' ? 'Μηνιαία Ενοικίαση Αυτοκινήτου' : 'Monthly Car Rental'}
                    </h1>
                    <p className="monthly-hero__subtitle">
                        {language === 'el' ? 'Η οικονομική λύση για μακροχρόνιες ανάγκες' : 'The affordable solution for long-term needs'}
                    </p>
                    <div className="monthly-hero__badges">
                        <span className="monthly-hero__badge">
                            {language === 'el' ? '✓ Πλήρης Ασφάλεια' : '✓ Full Insurance'}
                        </span>
                        <span className="monthly-hero__badge">
                            {language === 'el' ? '✓ Δωρεάν Παράδοση' : '✓ Free Delivery'}
                        </span>
                        <span className="monthly-hero__badge">
                            {language === 'el' ? '✓ Χωρίς Πιστωτική Κάρτα' : '✓ No Credit Card'}
                        </span>
                    </div>
                </div>
            </section>

            <section className="monthly-content">
                <div className="container">
                    <div className="monthly-grid">
                        {monthlyPackages.map((pkg) => (
                            <div className={`monthly-card ${pkg.popular ? 'monthly-card--popular' : ''}`} key={pkg.id}>
                                {pkg.popular && (
                                    <span className="monthly-card__badge">
                                        {language === 'el' ? 'Δημοφιλές' : 'Popular'}
                                    </span>
                                )}

                                <div className="monthly-card__image">
                                    <img src={pkg.image} alt={pkg.vehicle} loading="lazy" />
                                </div>

                                <div className="monthly-card__content">
                                    <span className="monthly-card__type">{pkg.name}</span>
                                    <h2 className="monthly-card__name">{pkg.vehicle}</h2>

                                    <div className="monthly-card__price">
                                        <span className="monthly-card__price-value">€{pkg.price}</span>
                                        <span className="monthly-card__price-period">/{language === 'el' ? 'μήνα' : 'month'}</span>
                                    </div>

                                    <p className="monthly-card__km">
                                        {pkg.kmIncluded} km {language === 'el' ? 'συμπεριλαμβάνονται' : 'included'}
                                    </p>

                                    <ul className="monthly-card__features">
                                        {(language === 'el' ? pkg.featuresEl : pkg.featuresEn).map((feature, index) => (
                                            <li key={index}>
                                                <CheckIcon />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a href="tel:+306980151068" className="monthly-card__cta">
                                        {language === 'el' ? 'Κράτηση Τώρα' : 'Book Now'}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Why Monthly Section */}
                    <div className="monthly-why">
                        <h3>{language === 'el' ? 'Γιατί Μηνιαία Ενοικίαση;' : 'Why Monthly Rental?'}</h3>
                        <div className="monthly-why__grid">
                            <div className="monthly-why__item">
                                <span className="monthly-why__icon">💰</span>
                                <h4>{language === 'el' ? 'Εξοικονόμηση' : 'Save Money'}</h4>
                                <p>{language === 'el' ? 'Έως 40% φθηνότερα από ημερήσια ενοικίαση' : 'Up to 40% cheaper than daily rental'}</p>
                            </div>
                            <div className="monthly-why__item">
                                <span className="monthly-why__icon">🔧</span>
                                <h4>{language === 'el' ? 'Συντήρηση' : 'Maintenance'}</h4>
                                <p>{language === 'el' ? 'Συντήρηση και service περιλαμβάνονται' : 'Maintenance and service included'}</p>
                            </div>
                            <div className="monthly-why__item">
                                <span className="monthly-why__icon">📋</span>
                                <h4>{language === 'el' ? 'Ευελιξία' : 'Flexibility'}</h4>
                                <p>{language === 'el' ? 'Χωρίς δεσμεύσεις, ακυρώστε οποτεδήποτε' : 'No commitments, cancel anytime'}</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="monthly-cta-section">
                        <h3>{language === 'el' ? 'Έτοιμοι να ξεκινήσετε;' : 'Ready to start?'}</h3>
                        <p>{language === 'el' ? 'Επικοινωνήστε μαζί μας για να βρούμε το ιδανικό πακέτο για εσάς.' : 'Contact us to find the perfect package for you.'}</p>
                        <div className="monthly-cta-buttons">
                            <a href="tel:+306980151068" className="btn btn-accent btn-lg">
                                +30 698 015 1068
                            </a>
                            <a href="https://wa.me/306980151068" className="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Monthly;
