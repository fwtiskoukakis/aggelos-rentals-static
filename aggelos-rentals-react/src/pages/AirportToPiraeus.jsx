import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { BreadcrumbSchema } from '../components/Schema/Schema';
import './LocationPage.css';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const AirportToPiraeus = () => {
    const { language, getLocalizedPath } = useLanguage();

    // HIGH VALUE KEYWORD: "rent a car athens airport" - 333 impressions, 0 clicks!
    const seoTitle = language === 'el'
        ? 'Αυτοκίνητο Αεροδρόμιο Αθηνών προς Λιμάνι Πειραιά | One-Way Rental | Aggelos Rentals'
        : 'Car Rental Athens Airport to Piraeus Port | One-Way Rental | Aggelos Rentals';

    const seoDescription = language === 'el'
        ? 'Νοικιάστε αυτοκίνητο από το αεροδρόμιο Αθηνών και αφήστε το στο λιμάνι του Πειραιά. One-way rental χωρίς επιπλέον χρέωση. Από €35/ημέρα. Κλείστε τώρα!'
        : 'Rent a car from Athens Airport and drop off at Piraeus Port. One-way rental with no extra charge. From €35/day. Book now!';

    const canonical = language === 'en'
        ? 'https://aggelosrentals.com/en/athens-airport-to-piraeus'
        : 'https://aggelosrentals.com/athens-airport-to-piraeus';

    const breadcrumbs = [
        { name: language === 'el' ? 'Αρχική' : 'Home', url: 'https://aggelosrentals.com' + (language === 'en' ? '/en' : '') },
        { name: language === 'el' ? 'Τοποθεσίες' : 'Locations', url: 'https://aggelosrentals.com' + (language === 'en' ? '/en' : '') + '/locations' },
        { name: language === 'el' ? 'Αεροδρόμιο → Πειραιάς' : 'Airport → Piraeus', url: canonical }
    ];

    const steps = language === 'el' ? [
        { num: '1', title: 'Κλείστε Online ή Τηλεφωνικά', desc: 'Επικοινωνήστε μαζί μας με την ημερομηνία άφιξης' },
        { num: '2', title: 'Παραλαβή στο Αεροδρόμιο', desc: 'Σας περιμένουμε στο terminal αφίξεων' },
        { num: '3', title: 'Οδηγήστε στον Πειραιά', desc: '45 λεπτά περίπου από το αεροδρόμιο' },
        { num: '4', title: 'Επιστροφή στο Λιμάνι', desc: 'Αφήστε το αυτοκίνητο στις πύλες E5-E7' }
    ] : [
        { num: '1', title: 'Book Online or by Phone', desc: 'Contact us with your arrival date' },
        { num: '2', title: 'Pickup at Airport', desc: 'We meet you at the arrivals terminal' },
        { num: '3', title: 'Drive to Piraeus', desc: 'About 45 minutes from the airport' },
        { num: '4', title: 'Drop Off at Port', desc: 'Leave the car at gates E5-E7' }
    ];

    const features = language === 'el' ? [
        'Χωρίς επιπλέον χρέωση για one-way',
        'Παράδοση στο terminal αφίξεων',
        'Παραλαβή στο λιμάνι Πειραιά',
        'Χωρίς πιστωτική κάρτα',
        'Πλήρης ασφάλεια',
        '24/7 τηλεφωνική υποστήριξη'
    ] : [
        'No extra charge for one-way',
        'Delivery at arrivals terminal',
        'Pickup at Piraeus Port',
        'No credit card required',
        'Full insurance included',
        '24/7 phone support'
    ];

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />
                <link rel="alternate" hrefLang="el" href="https://aggelosrentals.com/athens-airport-to-piraeus" />
                <link rel="alternate" hrefLang="en" href="https://aggelosrentals.com/en/athens-airport-to-piraeus" />

                {/* Targeting high-value keywords */}
                <meta name="keywords" content={language === 'el'
                    ? 'αεροδρόμιο αθηνών πειραιάς, ενοικίαση αυτοκινήτου αεροδρόμιο, rent a car athens airport, piraeus port car rental'
                    : 'athens airport to piraeus, rent a car athens airport, piraeus port car rental, one way car rental greece'} />

                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={canonical} />
                <meta property="og:image" content="https://www.aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car-768x384.jpg" />
                <html lang={language} />
            </Helmet>

            <BreadcrumbSchema items={breadcrumbs} />

            <section className="location-hero">
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
                            {language === 'el'
                                ? '✈️ Αυτοκίνητο: Αεροδρόμιο Αθηνών → Λιμάνι Πειραιά'
                                : '✈️ Car Rental: Athens Airport → Piraeus Port'}
                        </h1>
                        <p className="location-hero__subtitle">
                            {language === 'el'
                                ? 'One-way rental χωρίς επιπλέον χρέωση. Παραλάβετε στο αεροδρόμιο, αφήστε στο λιμάνι!'
                                : 'One-way rental with no extra charge. Pick up at airport, drop off at port!'}
                        </p>
                    </div>
                </div>
            </section>

            <section className="location-content">
                <div className="container">
                    {/* How It Works */}
                    <div className="location-block" style={{ marginBottom: '32px' }}>
                        <h2>{language === 'el' ? 'Πως Λειτουργεί' : 'How It Works'}</h2>
                        <div className="steps-grid">
                            {steps.map((step) => (
                                <div className="step-card" key={step.num}>
                                    <span className="step-num">{step.num}</span>
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="location-grid">
                        <div className="location-main">
                            <div className="location-block">
                                <h2>{language === 'el' ? 'Γιατί One-Way με Aggelos Rentals;' : 'Why One-Way with Aggelos Rentals?'}</h2>
                                <p>
                                    {language === 'el'
                                        ? 'Πολλοί ταξιδιώτες προσγειώνονται στο αεροδρόμιο Αθηνών και χρειάζονται να φτάσουν στο λιμάνι του Πειραιά για να πάρουν το πλοίο τους. Αντί για ακριβά ταξί ή λεωφορεία, νοικιάστε ένα αυτοκίνητο και οδηγήστε με την άνεσή σας. Και το καλύτερο; Αφήστε το αυτοκίνητο στον Πειραιά χωρίς καμία επιπλέον χρέωση!'
                                        : 'Many travelers land at Athens Airport and need to reach Piraeus Port to catch their ferry. Instead of expensive taxis or buses, rent a car and drive at your own pace. And the best part? Drop off the car at Piraeus with no extra charge!'}
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

                            {/* Related Pages */}
                            <div className="location-block">
                                <h3>{language === 'el' ? 'Σχετικοί Σύνδεσμοι' : 'Related Links'}</h3>
                                <ul className="related-links">
                                    <li>
                                        <Link to={getLocalizedPath('/locations/athens-airport')}>
                                            {language === 'el' ? '→ Ενοικίαση Αεροδρόμιο Αθηνών' : '→ Athens Airport Car Rental'}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={getLocalizedPath('/locations/piraeus-port')}>
                                            {language === 'el' ? '→ Ενοικίαση Λιμάνι Πειραιά' : '→ Piraeus Port Car Rental'}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={getLocalizedPath('/monthly')}>
                                            {language === 'el' ? '→ Μηνιαία Ενοικίαση από €350' : '→ Monthly Rental from €350'}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="location-sidebar">
                            <div className="location-price-card">
                                <span className="location-price-label">{language === 'el' ? 'One-Way από' : 'One-Way from'}</span>
                                <span className="location-price-value">€35</span>
                                <span className="location-price-note">{language === 'el' ? 'Χωρίς επιπλέον χρέωση' : 'No extra charge'}</span>
                            </div>

                            <div className="location-info-card">
                                <h3>{language === 'el' ? 'Απόσταση & Χρόνος' : 'Distance & Time'}</h3>
                                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                                    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                                        Athens Airport (ATH)
                                    </p>
                                    <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)' }}>
                                        ↓ 45 km • 45 min ↓
                                    </p>
                                    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginTop: '12px' }}>
                                        Piraeus Port
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 24px;
        }
        .step-card {
          text-align: center;
          padding: 20px;
          background: var(--color-gray-50);
          border-radius: 12px;
        }
        .step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--color-primary);
          color: white;
          font-weight: 700;
          border-radius: 50%;
          margin-bottom: 12px;
        }
        .step-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 8px;
        }
        .step-card p {
          font-size: 13px;
          color: var(--color-text-muted);
          margin: 0;
        }
        .related-links {
          list-style: none;
        }
        .related-links li {
          padding: 12px 0;
          border-bottom: 1px solid var(--color-border);
        }
        .related-links li:last-child {
          border-bottom: none;
        }
        .related-links a {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 500;
        }
        .related-links a:hover {
          color: var(--color-primary-dark);
        }
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </>
    );
};

export default AirportToPiraeus;
