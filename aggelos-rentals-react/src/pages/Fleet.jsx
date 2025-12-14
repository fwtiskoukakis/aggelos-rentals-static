import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n';
import './Fleet.css';

const vehicles = [
    {
        id: 1,
        name: 'Fiat Panda Hybrid 2023',
        type: 'Economy',
        image: 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/Fiat-Panda-Hybrid-2023-Piraeus-Rent-A-Car-768x384.jpg.webp',
        dailyPrice: 35,
        monthlyPrice: 350,
        features: ['Automatic', 'Hybrid', '5 Seats', 'A/C'],
        featuresEl: ['Αυτόματο', 'Υβριδικό', '5 Θέσεις', 'A/C'],
        descEn: 'Perfect for city driving and island hopping. Fuel efficient and easy to park.',
        descEl: 'Ιδανικό για οδήγηση στην πόλη. Οικονομικό στην κατανάλωση.',
    },
    {
        id: 2,
        name: 'Jeep Renegade 4x4',
        type: 'SUV',
        image: 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car-768x384.jpg',
        dailyPrice: 80,
        monthlyPrice: 800,
        features: ['Automatic', '4x4', 'Panoramic Roof', 'Navigation'],
        featuresEl: ['Αυτόματο', '4x4', 'Πανοραμική Οροφή', 'GPS'],
        descEn: 'Adventure-ready SUV with 4x4 capability. Perfect for exploring Greece.',
        descEl: 'SUV για περιπέτεια με δυνατότητα 4x4. Ιδανικό για εξερεύνηση της Ελλάδας.',
    },
    {
        id: 3,
        name: 'Mercedes-Benz A-Class',
        type: 'Premium',
        image: 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/Mercedes-Benz-Piraeus-Rent-A-Car-768x384.jpg.webp',
        dailyPrice: 150,
        monthlyPrice: 1200,
        features: ['Automatic', 'Premium Sound', 'Leather', 'Navigation'],
        featuresEl: ['Αυτόματο', 'Premium Ηχοσύστημα', 'Δερμάτινα', 'GPS'],
        descEn: 'Luxury and comfort for business travelers and special occasions.',
        descEl: 'Πολυτέλεια και άνεση για επαγγελματικά ταξίδια και ειδικές περιστάσεις.',
    },
];

const Fleet = () => {
    const { t, language } = useLanguage();

    // SEO from migration/seo-keyword-research.md
    const seoTitle = language === 'el'
        ? 'Στόλος Οχημάτων Πειραιάς | Ενοικίαση SUV, Economy, Premium | Aggelos Rentals'
        : 'Car Fleet Piraeus | SUV, Economy, Premium Rental | Aggelos Rentals';

    const seoDescription = language === 'el'
        ? 'Δείτε τον στόλο μας: Fiat Panda από €35/ημέρα, Jeep Renegade 4x4, Mercedes-Benz. Δωρεάν παράδοση λιμάνι Πειραιά και αεροδρόμιο Αθηνών.'
        : 'View our fleet: Fiat Panda from €35/day, Jeep Renegade 4x4, Mercedes-Benz. Free delivery to Piraeus Port and Athens Airport.';

    const canonical = language === 'en'
        ? 'https://aggelosrentals.com/en/fleet'
        : 'https://aggelosrentals.com/stolos';

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="el" href="https://aggelosrentals.com/stolos" />
                <link rel="alternate" hrefLang="en" href="https://aggelosrentals.com/en/fleet" />

                {/* Open Graph */}
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={canonical} />
                <meta property="og:image" content="https://www.aggelosrentals.com/wp-content/uploads/2023/12/Fiat-Panda-Hybrid-2023-Piraeus-Rent-A-Car-768x384.jpg" />

                <html lang={language} />
            </Helmet>

            <section className="fleet-hero">
                <div className="container">
                    <h1 className="fleet-hero__title">{t('vehicles.title')}</h1>
                    <p className="fleet-hero__subtitle">{t('vehicles.subtitle')}</p>
                    <p className="fleet-hero__desc">
                        {language === 'el'
                            ? 'Επιλέξτε το ιδανικό αυτοκίνητο για την ανάγκη σας. Ημερήσια ή μηνιαία ενοικίαση με δωρεάν παράδοση σε λιμάνι Πειραιά και αεροδρόμιο Αθηνών.'
                            : 'Choose the perfect car for your needs. Daily or monthly rental with free delivery to Piraeus Port and Athens Airport.'}
                    </p>
                </div>
            </section>

            <section className="fleet-content">
                <div className="container">
                    <div className="fleet-grid">
                        {vehicles.map((vehicle) => (
                            <div className="fleet-card" key={vehicle.id}>
                                <div className="fleet-card__image">
                                    <img src={vehicle.image} alt={vehicle.name} loading="lazy" />
                                    <span className="fleet-card__type">{vehicle.type}</span>
                                </div>

                                <div className="fleet-card__content">
                                    <h2 className="fleet-card__name">{vehicle.name}</h2>
                                    <p className="fleet-card__desc">
                                        {language === 'el' ? vehicle.descEl : vehicle.descEn}
                                    </p>

                                    <div className="fleet-card__features">
                                        {(language === 'el' ? vehicle.featuresEl : vehicle.features).map((feature, index) => (
                                            <span key={index} className="fleet-card__feature">{feature}</span>
                                        ))}
                                    </div>

                                    <div className="fleet-card__pricing">
                                        <div className="fleet-card__price fleet-card__price--daily">
                                            <span className="fleet-card__price-label">{t('common.daily')}</span>
                                            <span className="fleet-card__price-value">€{vehicle.dailyPrice}</span>
                                        </div>
                                        <div className="fleet-card__price fleet-card__price--monthly">
                                            <span className="fleet-card__price-label">{t('common.monthly')}</span>
                                            <span className="fleet-card__price-value">€{vehicle.monthlyPrice}</span>
                                        </div>
                                    </div>

                                    <a href="tel:+306980151068" className="fleet-card__cta">
                                        {t('vehicles.book')} - {t('common.callUs')}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="fleet-cta-section">
                        <h3>{language === 'el' ? 'Χρειάζεστε βοήθεια για να επιλέξετε;' : 'Need help choosing?'}</h3>
                        <p>{language === 'el' ? 'Επικοινωνήστε μαζί μας για εξατομικευμένη πρόταση.' : 'Contact us for a personalized recommendation.'}</p>
                        <div className="fleet-cta-buttons">
                            <a href="tel:+306980151068" className="btn btn-accent">
                                {t('common.callUs')}: +30 698 015 1068
                            </a>
                            <a href="https://wa.me/306980151068" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Fleet;
