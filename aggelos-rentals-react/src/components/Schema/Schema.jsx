import React from 'react';

const LocalBusinessSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://aggelosrentals.com",
        "name": "Aggelos Rentals",
        "alternateName": "Piraeus Rent A Car",
        "image": [
            "https://www.aggelosrentals.com/wp-content/uploads/2023/12/cropped-cropped-Aggelos-Rentals-Logo-1.png",
            "https://www.aggelosrentals.com/wp-content/uploads/2023/12/Jeep-Renegade-Piraeus-Rent-A-Car-768x384.jpg",
            "https://www.aggelosrentals.com/wp-content/uploads/2023/12/Fiat-Panda-Hybrid-2023-Piraeus-Rent-A-Car-768x384.jpg"
        ],
        "description": "Professional car rental in Piraeus and Athens. Delivery to Piraeus Port and Athens Airport within 30 minutes. Monthly from €350, daily from €35.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Piraeus Port, Gate E7",
            "addressLocality": "Piraeus",
            "addressRegion": "Attica",
            "postalCode": "18537",
            "addressCountry": "GR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.9392,
            "longitude": 23.6427
        },
        "telephone": "+306980151068",
        "email": "piraeus@aggelosrentals.com",
        "url": "https://aggelosrentals.com",
        "sameAs": [
            "https://www.facebook.com/AggalosRentals",
            "https://www.instagram.com/AggalosRentals"
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
            }
        ],
        "priceRange": "€35-€150",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Cash, Credit Card, Debit Card",
        "areaServed": [
            {
                "@type": "City",
                "name": "Piraeus"
            },
            {
                "@type": "City",
                "name": "Athens"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Attica"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "238",
            "bestRating": "5",
            "worstRating": "1"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Car Rental Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Daily Car Rental",
                        "description": "Rent a car for daily use in Piraeus and Athens"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Monthly Car Rental",
                        "description": "Long-term monthly car rental from €350/month"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Airport Pickup",
                        "description": "Free car delivery to Athens International Airport"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Port Pickup",
                        "description": "Free car delivery to Piraeus Port"
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

const CarRentalSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRental",
        "name": "Aggelos Rentals",
        "description": "Car rental in Piraeus and Athens with free delivery to port and airport",
        "url": "https://aggelosrentals.com",
        "telephone": "+306980151068",
        "priceRange": "€35-€150",
        "makesOffer": [
            {
                "@type": "Offer",
                "name": "Fiat Panda Hybrid 2023",
                "priceCurrency": "EUR",
                "price": "35",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://aggelosrentals.com/stolos",
                "itemOffered": {
                    "@type": "Car",
                    "name": "Fiat Panda Hybrid 2023",
                    "vehicleTransmission": "Automatic",
                    "fuelType": "Hybrid",
                    "seatingCapacity": "5",
                    "brand": {
                        "@type": "Brand",
                        "name": "Fiat"
                    }
                }
            },
            {
                "@type": "Offer",
                "name": "Jeep Renegade 4x4",
                "priceCurrency": "EUR",
                "price": "80",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://aggelosrentals.com/stolos",
                "itemOffered": {
                    "@type": "Car",
                    "name": "Jeep Renegade 4x4",
                    "vehicleTransmission": "Automatic",
                    "driveWheelConfiguration": "FourWheelDriveConfiguration",
                    "seatingCapacity": "5",
                    "brand": {
                        "@type": "Brand",
                        "name": "Jeep"
                    }
                }
            },
            {
                "@type": "Offer",
                "name": "Mercedes-Benz A-Class",
                "priceCurrency": "EUR",
                "price": "150",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://aggelosrentals.com/stolos",
                "itemOffered": {
                    "@type": "Car",
                    "name": "Mercedes-Benz A-Class",
                    "vehicleTransmission": "Automatic",
                    "seatingCapacity": "5",
                    "brand": {
                        "@type": "Brand",
                        "name": "Mercedes-Benz"
                    }
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

const FAQSchema = ({ faqs }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

const BreadcrumbSchema = ({ items }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export { LocalBusinessSchema, CarRentalSchema, FAQSchema, BreadcrumbSchema };
