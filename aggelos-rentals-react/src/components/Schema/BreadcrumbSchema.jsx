// src/components/Schema/BreadcrumbSchema.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BreadcrumbSchema = ({ items }) => {
    // items should be array of { name, url }
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://piraeusrentacar.gr${item.url}`
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default BreadcrumbSchema;
