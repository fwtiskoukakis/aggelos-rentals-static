import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'Aggelos Rentals - Ενοικίαση Αυτοκινήτου Πειραιά',
    description = 'Ενοικίαση αυτοκινήτου στον Πειραιά από €35/ημέρα ή €350/μήνα. Παράδοση σε λιμάνι & αεροδρόμιο Αθηνών.',
    keywords = 'ενοικίαση αυτοκινήτου πειραιάς, rent a car piraeus, μηνιαία ενοικίαση αυτοκινήτου',
    canonical = 'https://aggelosrentals.com/',
    ogTitle,
    ogDescription,
    ogImage = '/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car.jpg',
    ogType = 'website',
    lang = 'el',
    noindex = false,
}) => {
    const siteUrl = 'https://aggelosrentals.com';
    const fullCanonical = canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Basic */}
            <html lang={lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Aggelos Rentals" />

            {/* Robots */}
            <meta
                name="robots"
                content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
            />

            {/* Canonical */}
            <link rel="canonical" href={fullCanonical} />

            {/* Geo */}
            <meta name="geo.region" content="GR-I" />
            <meta name="geo.placename" content="Piraeus, Greece" />
            <meta name="geo.position" content="37.9413;23.6474" />
            <meta name="ICBM" content="37.9413, 23.6474" />

            {/* Hreflang */}
            <link rel="alternate" hrefLang="el" href={fullCanonical} />
            <link rel="alternate" hrefLang="en" href={`${fullCanonical}${fullCanonical.endsWith('/') ? '' : '/'}en/`} />
            <link rel="alternate" hrefLang="x-default" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:locale" content="el_GR" />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={ogTitle || title} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content="Aggelos Rentals" />
            <meta property="og:image" content={fullOgImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle || title} />
            <meta name="twitter:description" content={ogDescription || description} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* Favicon */}
            <link rel="icon" type="image/png" href="/wp-content/uploads/2023/12/cropped-cropped-Aggelos-Rentals-Logo-1.png" />
            <link rel="apple-touch-icon" href="/wp-content/uploads/2023/12/cropped-cropped-Aggelos-Rentals-Logo-1.png" />

            {/* Preconnect */}
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    canonical: PropTypes.string,
    ogTitle: PropTypes.string,
    ogDescription: PropTypes.string,
    ogImage: PropTypes.string,
    ogType: PropTypes.string,
    lang: PropTypes.string,
    noindex: PropTypes.bool,
};

export default SEO;
