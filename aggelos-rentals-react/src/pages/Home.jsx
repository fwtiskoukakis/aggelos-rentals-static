import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n';
import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import MonthlyRentalCTA from '../components/sections/MonthlyRentalCTA';
import FeaturedVehicles from '../components/sections/FeaturedVehicles';
import Testimonials from '../components/sections/Testimonials';
import FAQSection from '../components/sections/FAQ';
import MapSection from '../components/sections/MapSection';

const Home = () => {
    const { language } = useLanguage();

    // SEO from migration/seo-keyword-research.md
    const seoTitle = language === 'el'
        ? 'Ενοικίαση Αυτοκινήτου Πειραιά & Αθήνα | Μηνιαία από €350 | Aggelos Rentals'
        : 'Rent a Car Piraeus & Athens | Affordable Car Hire | Aggelos Rentals';

    const seoDescription = language === 'el'
        ? 'Ενοικίαση αυτοκινήτου στον Πειραιά και Αθήνα. Παράδοση λιμάνι Πειραιά & αεροδρόμιο σε 30 λεπτά. Μηνιαία από €350. Χωρίς πιστωτική κάρτα. 24/7 υποστήριξη.'
        : 'Book car rentals in Piraeus port & Athens airport. Competitive rates, flexible terms, 24/7 support. Same-day availability. Free delivery.';

    const canonical = language === 'en'
        ? 'https://aggelosrentals.com/en/'
        : 'https://aggelosrentals.com/';

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="el" href="https://aggelosrentals.com/" />
                <link rel="alternate" hrefLang="en" href="https://aggelosrentals.com/en/" />
                <link rel="alternate" hrefLang="x-default" href="https://aggelosrentals.com/" />

                {/* Open Graph */}
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={canonical} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car-768x384.jpg" />
                <meta property="og:locale" content={language === 'el' ? 'el_GR' : 'en_US'} />
                <meta property="og:site_name" content="Aggelos Rentals" />

                <html lang={language} />
            </Helmet>

            <Hero />
            <Benefits />
            <MonthlyRentalCTA />
            <FeaturedVehicles />
            <Testimonials />
            <FAQSection />
            <MapSection />
        </>
    );
};

export default Home;
