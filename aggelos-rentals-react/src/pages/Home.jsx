import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n';
import { LocalBusinessSchema, CarRentalSchema, FAQSchema } from '../components/Schema/Schema';
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

    // FAQ data for schema
    const faqData = language === 'el' ? [
        { question: 'Χρειάζομαι πιστωτική κάρτα;', answer: 'Όχι! Δεχόμαστε μετρητά και χρεωστικές κάρτες. Δεν απαιτείται πιστωτική κάρτα.' },
        { question: 'Πού μπορώ να παραλάβω το αυτοκίνητο;', answer: 'Παραδίδουμε δωρεάν στο λιμάνι του Πειραιά, στο αεροδρόμιο Αθηνών, και οπουδήποτε στην Αττική.' },
        { question: 'Ποια είναι η ελάχιστη ηλικία οδήγησης;', answer: 'Η ελάχιστη ηλικία είναι 21 ετών με δίπλωμα τουλάχιστον 1 έτους.' },
        { question: 'Τι περιλαμβάνει η ημερήσια τιμή;', answer: 'Πλήρης ασφάλεια, ΦΠΑ, δωρεάν παράδοση/παραλαβή, και 24/7 υποστήριξη.' },
        { question: 'Μπορώ να ακυρώσω δωρεάν;', answer: 'Ναι, δωρεάν ακύρωση έως 24 ώρες πριν την παραλαβή.' }
    ] : [
        { question: 'Do I need a credit card?', answer: 'No! We accept cash and debit cards. No credit card required.' },
        { question: 'Where can I pick up the car?', answer: 'We deliver free to Piraeus Port, Athens Airport, and anywhere in Attica.' },
        { question: 'What is the minimum driving age?', answer: 'Minimum age is 21 with a license held for at least 1 year.' },
        { question: 'What does the daily rate include?', answer: 'Full insurance, VAT, free delivery/pickup, and 24/7 support.' },
        { question: 'Can I cancel for free?', answer: 'Yes, free cancellation up to 24 hours before pickup.' }
    ];

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

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content="https://www.aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car-768x384.jpg" />

                <html lang={language} />
            </Helmet>

            {/* Schema Markup */}
            <LocalBusinessSchema />
            <CarRentalSchema />
            <FAQSchema faqs={faqData} />

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
