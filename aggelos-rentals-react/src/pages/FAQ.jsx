import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n';
import FAQSection from '../components/sections/FAQ';
import './FAQ.css';

const FAQ = () => {
    const { t, language } = useLanguage();

    // SEO
    const seoTitle = language === 'el'
        ? 'Συχνές Ερωτήσεις | Ενοικίαση Αυτοκινήτου Πειραιά | Aggelos Rentals'
        : 'FAQ | Car Rental Piraeus | Aggelos Rentals';

    const seoDescription = language === 'el'
        ? 'Βρείτε απαντήσεις στις συχνές ερωτήσεις για ενοικίαση αυτοκινήτου στον Πειραιά. Τι χρειάζομαι; Παράδοση; Τιμές; Ασφάλεια; Επικοινωνήστε 24/7.'
        : 'Find answers to common questions about car rental in Piraeus. What do I need? Delivery? Prices? Insurance? Contact us 24/7.';

    const canonical = language === 'en'
        ? 'https://aggelosrentals.com/en/faq'
        : 'https://aggelosrentals.com/syxnes-erotiseis';

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="el" href="https://aggelosrentals.com/syxnes-erotiseis" />
                <link rel="alternate" hrefLang="en" href="https://aggelosrentals.com/en/faq" />

                <html lang={language} />
            </Helmet>

            <section className="faq-hero">
                <div className="container">
                    <h1 className="faq-hero__title">{t('faq.title')}</h1>
                    <p className="faq-hero__subtitle">{t('faq.subtitle')}</p>
                </div>
            </section>

            <FAQSection />
        </>
    );
};

export default FAQ;
