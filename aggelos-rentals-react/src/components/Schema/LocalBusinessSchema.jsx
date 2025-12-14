import React from 'react';
import { Helmet } from 'react-helmet-async';

const LocalBusinessSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CarRental",
                "@id": "https://aggelosrentals.com/#carrental",
                "name": "Aggelos Rentals",
                "description": "Ενοικίαση αυτοκινήτου στον Πειραιά με παράδοση σε λιμάνι και αεροδρόμιο. Μηνιαία και ημερήσια ενοικίαση. Car rental in Piraeus with delivery to port and airport. Monthly and daily rental.",
                "url": "https://aggelosrentals.com",
                "telephone": "+30-698-015-1068",
                "email": "piraeus@aggelosrentals.com",
                "image": "https://aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car.jpg",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Ακτή Θεμιστοκλέους",
                    "addressLocality": "Πειραιάς",
                    "addressRegion": "Αττική",
                    "postalCode": "185 39",
                    "addressCountry": "GR"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "37.9413",
                    "longitude": "23.6474"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                },
                "priceRange": "€€",
                "paymentAccepted": "Cash, Credit Card, Debit Card",
                "areaServed": [
                    { "@type": "City", "name": "Πειραιάς" },
                    { "@type": "City", "name": "Αθήνα" },
                    { "@type": "Place", "name": "Αεροδρόμιο Αθηνών" }
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Υπηρεσίες Ενοικίασης Αυτοκινήτων / Car Rental Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Ημερήσια Ενοικίαση Αυτοκινήτου / Daily Car Rental"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Μηνιαία Ενοικίαση Αυτοκινήτου / Monthly Car Rental"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://aggelosrentals.com/#localbusiness",
                "name": "Aggelos Rentals",
                "alternateName": "Άγγελος Rentals",
                "description": "Επαγγελματική ενοικίαση αυτοκινήτων στον Πειραιά με 10+ χρόνια εμπειρίας. Professional car rental in Piraeus with 10+ years of experience.",
                "url": "https://aggelosrentals.com",
                "telephone": "+30-698-015-1068",
                "email": "piraeus@aggelosrentals.com",
                "priceRange": "€35 - €150 (ημερήσια/daily), €350 - €1200 (μηνιαία/monthly)",
                "image": [
                    "https://aggelosrentals.com/wp-content/uploads/2023/12/Fiat-Panda-Hybrid-2023-Piraeus-Rent-A-Car.jpg",
                    "https://aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car.jpg",
                    "https://aggelosrentals.com/wp-content/uploads/2023/12/Mercedes-Benz-Piraeus-Rent-A-Car.jpg"
                ],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Ακτή Θεμιστοκλέους",
                    "addressLocality": "Πειραιάς",
                    "addressRegion": "Αττική",
                    "postalCode": "185 39",
                    "addressCountry": "GR"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "37.9413",
                    "longitude": "23.6474"
                },
                "hasMap": "https://www.google.com/maps/place/Piraeus,+Greece/@37.9413,23.6474",
                "openingHours": "Mo-Su 00:00-23:59",
                "sameAs": [
                    "https://www.facebook.com/aggelosrentals",
                    "https://www.instagram.com/aggelosrentals"
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "238",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Νίκος Παπαδόπουλος" },
                        "datePublished": "2023-12-15",
                        "reviewBody": "Εξαιρετική εξυπηρέτηση! Παρέλαβα το αυτοκίνητο στο λιμάνι του Πειραιά σε 20 λεπτά. Το αυτοκίνητο ήταν καθαρό και σε άριστη κατάσταση.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Μαρία Κωνσταντίνου" },
                        "datePublished": "2023-11-20",
                        "reviewBody": "Πολύ καλή εμπειρία με μηνιαία ενοικίαση! Το Jeep Renegade ήταν τέλειο για τις ανάγκες μου. Εξαιρετική τιμή και εξυπηρέτηση.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Γιώργος Αλεξίου" },
                        "datePublished": "2023-10-05",
                        "reviewBody": "Άψογη συνεργασία! Με εξυπηρέτησαν στα ελληνικά και μου έφεραν το αυτοκίνητο στο αεροδρόμιο. Σίγουρα θα ξανακάνω ενοικίαση.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://aggelosrentals.com/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Ποια είναι η ελάχιστη διάρκεια ενοικίασης; / What is the minimum rental duration?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Η ελάχιστη διάρκεια ενοικίασης είναι 1 ημέρα για ημερήσια ενοικίαση και 1 μήνας για μηνιαία ενοικίαση. The minimum rental duration is 1 day for daily rental and 1 month for monthly rental."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Τι χρειάζομαι για να ενοικιάσω αυτοκίνητο; / What do I need to rent a car?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Χρειάζεστε έγκυρη άδεια οδήγησης (τουλάχιστον 1 έτος), ταυτότητα ή διαβατήριο. You need a valid driving license (at least 1 year), ID or passport."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Κάνετε παράδοση στο λιμάνι Πειραιά; / Do you deliver to Piraeus Port?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ναι! Κάνουμε δωρεάν παράδοση στο λιμάνι Πειραιά, αεροδρόμιο Αθηνών. Yes! We offer free delivery to Piraeus Port and Athens Airport."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Τι περιλαμβάνει η μηνιαία ενοικίαση; / What does monthly rental include?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Η μηνιαία ενοικίαση περιλαμβάνει πλήρη ασφάλεια, 2000 km/μήνα, 24/7 υποστήριξη. Monthly rental includes full insurance, 2000 km/month, 24/7 support."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default LocalBusinessSchema;
