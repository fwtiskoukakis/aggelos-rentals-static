import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { blogPosts } from '../data/blogPosts';
import { blogContent } from '../data/blogContent';
import './Blog.css';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const BlogPost = () => {
    const { slug } = useParams();
    const { language, getLocalizedPath } = useLanguage();

    const post = blogPosts.find(p => p.slug === slug);
    const content = blogContent[slug];

    if (!post) {
        return <Navigate to={getLocalizedPath('/blog')} replace />;
    }

    const seoTitle = post.title[language] + ' | Aggelos Rentals';
    const seoDescription = post.excerpt[language];
    const canonical = language === 'en'
        ? `https://aggelosrentals.com/en/blog/${slug}`
        : `https://aggelosrentals.com/blog/${slug}`;

    const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />
                <link rel="alternate" hrefLang="el" href={`https://aggelosrentals.com/blog/${slug}`} />
                <link rel="alternate" hrefLang="en" href={`https://aggelosrentals.com/en/blog/${slug}`} />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={canonical} />
                <meta property="og:image" content={post.image} />
                <meta property="og:type" content="article" />
                <meta name="keywords" content={post.keywords[language].join(', ')} />
                <html lang={language} />
            </Helmet>

            <section className="blog-post-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to={getLocalizedPath('/')}>{language === 'el' ? 'Αρχική' : 'Home'}</Link> /
                        <Link to={getLocalizedPath('/blog')}> Blog</Link> /
                        <span> {post.title[language]}</span>
                    </nav>
                    <h1 className="blog-post-hero__title">{post.title[language]}</h1>
                    <div className="blog-post-hero__meta">
                        <span><CalendarIcon /> {new Date(post.date).toLocaleDateString(language === 'el' ? 'el-GR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <span><ClockIcon /> {post.readTime[language]}</span>
                        <span>{post.author}</span>
                    </div>
                </div>
            </section>

            <section className="blog-post-content">
                <div className="container">
                    <div className="blog-post-layout">
                        <article className="blog-post-main" dangerouslySetInnerHTML={{ __html: content ? content[language] : '' }} />

                        <aside className="blog-post-sidebar">
                            <div className="blog-sidebar-card">
                                <h4>{language === 'el' ? 'Χρειάζεστε Αυτοκίνητο;' : 'Need a Car?'}</h4>
                                <a href="tel:+306980151068" className="btn btn-accent">
                                    {language === 'el' ? 'Καλέστε Τώρα' : 'Call Now'}
                                </a>
                                <a href="https://wa.me/306980151068" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </div>

                            <div className="blog-sidebar-card">
                                <h4>{language === 'el' ? 'Τοποθεσίες Παραλαβής' : 'Pickup Locations'}</h4>
                                <ul className="blog-related-posts">
                                    <li><Link to={getLocalizedPath('/locations/athens-airport')}>{language === 'el' ? 'Αεροδρόμιο Αθηνών' : 'Athens Airport'}</Link></li>
                                    <li><Link to={getLocalizedPath('/locations/piraeus-port')}>{language === 'el' ? 'Λιμάνι Πειραιά' : 'Piraeus Port'}</Link></li>
                                    <li><Link to={getLocalizedPath('/locations/athens-center')}>{language === 'el' ? 'Κέντρο Αθήνας' : 'Athens Center'}</Link></li>
                                </ul>
                            </div>

                            <div className="blog-sidebar-card">
                                <h4>{language === 'el' ? 'Άλλα Άρθρα' : 'Other Articles'}</h4>
                                <ul className="blog-related-posts">
                                    {otherPosts.map(p => (
                                        <li key={p.id}>
                                            <Link to={getLocalizedPath(`/blog/${p.slug}`)}>{p.title[language]}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPost;
