import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const Blog = () => {
    const { language, getLocalizedPath } = useLanguage();

    const seoTitle = language === 'el'
        ? 'Blog | Συμβουλές Ενοικίασης Αυτοκινήτου | Aggelos Rentals'
        : 'Blog | Car Rental Tips & Guides | Aggelos Rentals';

    const seoDescription = language === 'el'
        ? 'Διαβάστε τους οδηγούς μας για ενοικίαση αυτοκινήτου στην Αθήνα, ταξίδια στα νησιά, και συμβουλές οδήγησης στην Ελλάδα.'
        : 'Read our guides about car rental in Athens, island trips, driving tips in Greece, and more.';

    const canonical = language === 'en'
        ? 'https://aggelosrentals.com/en/blog'
        : 'https://aggelosrentals.com/blog';

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />
                <link rel="alternate" hrefLang="el" href="https://aggelosrentals.com/blog" />
                <link rel="alternate" hrefLang="en" href="https://aggelosrentals.com/en/blog" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={canonical} />
                <html lang={language} />
            </Helmet>

            <section className="blog-hero">
                <div className="container">
                    <h1 className="blog-hero__title">
                        {language === 'el' ? 'Blog & Οδηγοί' : 'Blog & Guides'}
                    </h1>
                    <p className="blog-hero__subtitle">
                        {language === 'el'
                            ? 'Συμβουλές και πληροφορίες για την ενοικίαση αυτοκινήτου και ταξίδια στην Ελλάδα'
                            : 'Tips and information about car rental and traveling in Greece'}
                    </p>
                </div>
            </section>

            <section className="blog-section">
                <div className="container">
                    <div className="blog-grid">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={getLocalizedPath(`/blog/${post.slug}`)}
                                className="blog-card"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title[language]}
                                    className="blog-card__image"
                                    loading="lazy"
                                />
                                <div className="blog-card__content">
                                    <div className="blog-card__meta">
                                        <span className="blog-card__date">
                                            <CalendarIcon />
                                            {new Date(post.date).toLocaleDateString(language === 'el' ? 'el-GR' : 'en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <span className="blog-card__read-time">
                                            <ClockIcon />
                                            {post.readTime[language]}
                                        </span>
                                    </div>
                                    <h2 className="blog-card__title">{post.title[language]}</h2>
                                    <p className="blog-card__excerpt">{post.excerpt[language]}</p>
                                    <span className="blog-card__cta">
                                        {language === 'el' ? 'Διαβάστε Περισσότερα' : 'Read More'}
                                        <ArrowIcon />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
