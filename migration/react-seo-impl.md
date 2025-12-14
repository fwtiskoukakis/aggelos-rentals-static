# React Native Technical SEO Implementation Guide
## For piraeusrentacar.gr Car Rental Platform

---

## PART 1: META TAG MANAGEMENT COMPONENT

### Installation
```bash
npm install react-helmet
# or
yarn add react-helmet
```

### SEO Wrapper Component (reusable across your app)
```jsx
// components/SEO.jsx
import { Helmet } from 'react-helmet';

export const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogTitle,
  ogDescription,
  hreflang,
  keywords,
  author,
  robots
}) => {
  const siteUrl = 'https://piraeusrentacar.gr';
  const defaultImage = `${siteUrl}/images/og-default.jpg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title} | Aggelos Rentals</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || 'Aggelos Rentals'} />
      <meta name="robots" content={robots || 'index, follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || siteUrl} />
      
      {/* Hreflang Tags */}
      {hreflang && hreflang.map((lang) => (
        <link
          key={lang.code}
          rel="alternate"
          hrefLang={lang.code}
          href={lang.url}
        />
      ))}
      
      {/* Default hreflang (self-referential) */}
      <link rel="alternate" hrefLang="x-default" href={canonical || siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Aggelos Rentals" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="el_GR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical || siteUrl} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      <meta name="twitter:creator" content="@AggalosRentals" />
      
      {/* Additional SEO Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO;
```

### Usage in Location Pages
```jsx
// pages/PiraeusPortPage.jsx
import SEO from '../components/SEO';

function PiraeusPortPage() {
  const hreflangTags = [
    { code: 'en', url: 'https://piraeusrentacar.gr/location/piraeus-port' },
    { code: 'el', url: 'https://piraeusrentacar.gr/λιμανι-πειραια' },
  ];

  return (
    <>
      <SEO
        title="Rent a Car at Piraeus Port | Direct Delivery at Terminal"
        description="Pick up your rental car directly at Piraeus Port. Gates E5-E7. Free delivery, flexible terms, instant confirmation. Book online now."
        canonical="https://piraeusrentacar.gr/location/piraeus-port"
        ogTitle="Rent a Car Piraeus Port | Aggelos Rentals"
        ogDescription="Direct car rental pickup at Piraeus Port gates E5-E7. Competitive rates, 24/7 support."
        ogImage="https://piraeusrentacar.gr/images/piraeus-port-og.jpg"
        keywords="rent a car piraeus port, piraeus port car rental, car hire piraeus port, piraeus port rental"
        hreflang={hreflangTags}
      />
      
      {/* Page Content */}
      <main>
        <h1>Car Rental at Piraeus Port - Direct Terminal Pickup</h1>
        {/* Rest of content */}
      </main>
    </>
  );
}

export default PiraeusPortPage;
```

---

## PART 2: STRUCTURED DATA / SCHEMA MARKUP

### LocalBusiness Schema Component
```jsx
// components/LocalBusinessSchema.jsx
import React from 'react';

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://piraeusrentacar.gr",
    "name": "Aggelos Rentals",
    "image": [
      "https://piraeusrentacar.gr/images/logo.png",
      "https://piraeusrentacar.gr/images/piraeus-port.jpg",
      "https://piraeusrentacar.gr/images/athens-airport.jpg"
    ],
    "description": "Professional car rental services in Piraeus and Athens with flexible terms and competitive rates",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gate E7, 6 Aristeidou Street",
      "addressLocality": "Piraeus",
      "addressRegion": "Attica",
      "postalCode": "18537",
      "addressCountry": "GR"
    },
    "telephone": "+306900000000",
    "email": "info@piraeusrentacar.gr",
    "url": "https://piraeusrentacar.gr",
    "sameAs": [
      "https://www.facebook.com/AggalosRentals",
      "https://www.instagram.com/AggalosRentals"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "24:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "23:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.9392",
      "longitude": "23.6427"
    },
    "priceRange": "€25-€200",
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
      "ratingValue": "4.7",
      "reviewCount": "234",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default LocalBusinessSchema;
```

### CarRental Service Offer Schema
```jsx
// components/CarRentalOfferSchema.jsx
export const CarRentalOfferSchema = ({ vehicles }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "24.99",
    "highPrice": "199.99",
    "offerCount": vehicles.length,
    "availability": "https://schema.org/InStock",
    "offers": vehicles.map(vehicle => ({
      "@type": "Offer",
      "name": vehicle.name,
      "url": `https://piraeusrentacar.gr/type/${vehicle.type}`,
      "priceCurrency": "EUR",
      "price": vehicle.dailyRate,
      "description": vehicle.description,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Aggelos Rentals"
      }
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
```

### BreadcrumbList Schema Component
```jsx
// components/BreadcrumbSchema.jsx
export const BreadcrumbSchema = ({ breadcrumbs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://piraeusrentacar.gr${crumb.url}`
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

// Usage in Page Component
const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Locations', url: '/locations' },
  { name: 'Piraeus Port', url: '/location/piraeus-port' }
];

<BreadcrumbSchema breadcrumbs={breadcrumbs} />
```

### Review/Rating Schema
```jsx
// components/ReviewSchema.jsx
export const ReviewSchema = ({ review }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": review.authorName
    },
    "reviewBody": review.text,
    "datePublished": review.date,
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Aggelos Rentals",
      "url": "https://piraeusrentacar.gr"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
```

---

## PART 3: BREADCRUMB NAVIGATION COMPONENT

### Reusable Breadcrumb Component
```jsx
// components/Breadcrumb.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

export const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb-list">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="breadcrumb-item">
              {index < breadcrumbs.length - 1 ? (
                <>
                  <Link to={crumb.url}>{crumb.name}</Link>
                  <span className="breadcrumb-separator">/</span>
                </>
              ) : (
                <span aria-current="page">{crumb.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      
      {/* Include Schema Markup */}
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
    </>
  );
};
```

### Breadcrumb CSS
```css
/* Breadcrumb.css */
.breadcrumb-nav {
  background-color: #f8f9fa;
  padding: 12px 0;
  margin: 16px 0;
  border-radius: 4px;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0 16px;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.breadcrumb-item a {
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}

.breadcrumb-item a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.breadcrumb-item span[aria-current] {
  color: #6c757d;
  font-size: 14px;
}

.breadcrumb-separator {
  color: #6c757d;
  margin-left: 8px;
}

@media (max-width: 640px) {
  .breadcrumb-list {
    padding: 0 8px;
  }
  
  .breadcrumb-item {
    margin-right: 4px;
  }
  
  .breadcrumb-item a,
  .breadcrumb-item span {
    font-size: 12px;
  }
}
```

---

## PART 4: IMAGE OPTIMIZATION FOR SEO

### Lazy-Loading Image Component
```jsx
// components/LazyImage.jsx
import React, { useState } from 'react';

export const LazyImage = ({ 
  src, 
  alt, 
  title,
  width, 
  height, 
  className 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      className={`lazy-image ${className} ${isLoaded ? 'loaded' : ''}`}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
    />
  );
};
```

### WebP Format with Fallback
```jsx
// components/ResponsiveImage.jsx
export const ResponsiveImage = ({ 
  src, 
  alt, 
  title,
  srcSet, 
  sizes,
  className 
}) => {
  const webpSrc = src.replace(/\.(jpg|png)$/, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        title={title}
        srcSet={srcSet}
        sizes={sizes}
        className={className}
        loading="lazy"
        width="800"
        height="600"
      />
    </picture>
  );
};

// Usage:
<ResponsiveImage
  src="/images/piraeus-port.jpg"
  alt="Direct car pickup at Piraeus Port Gate E7"
  title="Piraeus Port Car Rental Location"
  srcSet="/images/piraeus-port-400w.jpg 400w, /images/piraeus-port-800w.jpg 800w"
  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
/>
```

---

## PART 5: PERFORMANCE OPTIMIZATION

### Code Splitting by Route
```jsx
// routes/index.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load route components
const HomePage = lazy(() => import('../pages/HomePage'));
const PiraeusPage = lazy(() => import('../pages/PiraeusPage'));
const AirportPage = lazy(() => import('../pages/AirportPage'));
const FleetPage = lazy(() => import('../pages/FleetPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));

// Loading component
const Loading = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <p>Loading...</p>
  </div>
);

export const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location/piraeus-port" element={<PiraeusPage />} />
        <Route path="/location/athens-airport" element={<AirportPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
```

### React.memo for Component Optimization
```jsx
// components/VehicleCard.jsx
import React from 'react';

const VehicleCard = ({ vehicle, onSelect }) => {
  return (
    <div className="vehicle-card">
      <img 
        src={vehicle.image} 
        alt={`${vehicle.name} - ${vehicle.type} car rental`}
        loading="lazy"
        width="300"
        height="200"
      />
      <h3>{vehicle.name}</h3>
      <p className="vehicle-type">{vehicle.type}</p>
      <p className="vehicle-price">€{vehicle.dailyRate}/day</p>
      <button onClick={() => onSelect(vehicle)}>Select</button>
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export default React.memo(VehicleCard);
```

### Dynamic Import for Heavy Components
```jsx
// pages/AirportPage.jsx
import React, { Suspense, lazy } from 'react';
import SEO from '../components/SEO';

const AirportMap = lazy(() => import('../components/AirportMap'));
const BookingWidget = lazy(() => import('../components/BookingWidget'));

function AirportPage() {
  return (
    <>
      <SEO
        title="Rent a Car Athens Airport - Eleftherios Venizelos Terminal"
        description="Book car rental at Athens International Airport. Free pickup/drop-off, wide vehicle selection."
      />
      
      <h1>Car Rental at Athens Airport</h1>
      
      <Suspense fallback={<div>Loading map...</div>}>
        <AirportMap />
      </Suspense>
      
      <Suspense fallback={<div>Loading booking widget...</div>}>
        <BookingWidget />
      </Suspense>
    </>
  );
}

export default AirportPage;
```

---

## PART 6: MOBILE OPTIMIZATION

### Mobile-First Meta Tags
```jsx
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="theme-color" content="#0066cc" />
```

### Mobile Hamburger Menu Component
```jsx
// components/MobileMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Piraeus Port', url: '/location/piraeus-port' },
    { name: 'Athens Airport', url: '/location/athens-airport' },
    { name: 'Our Fleet', url: '/fleet' },
    { name: 'Monthly Rentals', url: '/monthly-car-rentals-athens' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <>
      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.url}>
              <Link 
                to={item.url}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
```

---

## PART 7: MONITORING SETUP

### Google Analytics 4 Implementation
```jsx
// App.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Send page view to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [location]);

  return (
    // Your app content
  );
}

export default App;
```

### Google Tag Manager Installation
```jsx
// In your main HTML file or _document.jsx
// Add GTM script in <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## DEPLOYMENT CHECKLIST

- [ ] Test Lighthouse score (Target: 90+ for Performance, 95+ for SEO)
- [ ] Verify all hreflang tags are implemented correctly
- [ ] Test Core Web Vitals on mobile and desktop
- [ ] Validate structured data with Google Structured Data Testing Tool
- [ ] Setup Google Search Console for new domain
- [ ] Setup Google Business Profile
- [ ] Create XML sitemap with hreflang alternates
- [ ] Implement robots.txt
- [ ] Setup 301 redirects from old domain
- [ ] Test all internal links for broken links
- [ ] Verify canonical tags on all pages
- [ ] Test mobile responsiveness across devices
- [ ] Validate image alt text on all pages
- [ ] Check form accessibility and labels
- [ ] Test with screen readers
- [ ] Monitor Core Web Vitals in GSC

---

## MONITORING DASHBOARD

Track these metrics weekly:
- Google Search Console: Clicks, Impressions, CTR, Avg Position
- Core Web Vitals: LCP, FID/INP, CLS
- Lighthouse Score (Desktop & Mobile)
- Organic Traffic by Source
- Conversion Rate
- Top Performing Keywords
- Pages with High Bounce Rate
- Crawl Errors and Warnings