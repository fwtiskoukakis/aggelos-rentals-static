import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import './Header.css';

// Icons
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const LOGO_URL = 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/cropped-cropped-Aggelos-Rentals-Logo-1.png';

const Header = () => {
    const { t, language, setLanguage, getLocalizedPath } = useLanguage();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/stolos', englishPath: '/fleet', label: t('nav.fleet') },
        { path: '/monthly', label: t('nav.monthlyRental') },
        { path: '/blog', label: 'Blog' },
        { path: '/epikoinonia', englishPath: '/contact', label: t('nav.contact') },
        { path: '/syxnes-erotiseis', englishPath: '/faq', label: t('nav.faq') },
    ];

    const getPath = (link) => {
        if (language === 'en') {
            const path = link.englishPath || link.path;
            return path === '/' ? '/en' : `/en${path}`;
        }
        return link.path;
    };

    const isActive = (link) => {
        const currentPath = location.pathname;
        const linkPath = getPath(link);
        return currentPath === linkPath;
    };

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header className="site-header">
            {/* Top Bar */}
            <div className="site-header__top">
                <div className="site-header__top-content">
                    <a href="mailto:piraeus@aggelosrentals.com" className="site-header__contact">
                        <EmailIcon />
                        <span>piraeus@aggelosrentals.com</span>
                    </a>
                    <a href="tel:+306980151068" className="site-header__contact">
                        <PhoneIcon />
                        <span>+30 698 015 1068</span>
                    </a>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="site-header__main">
                <Link to={getLocalizedPath('/')} className="site-header__brand">
                    <img
                        src={LOGO_URL}
                        alt="Aggelos Rentals"
                        width="180"
                        height="50"
                    />
                </Link>

                <nav className="site-nav">
                    <ul className="site-nav__list">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={getPath(link)}
                                    className={`site-nav__link ${isActive(link) ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Language Switcher */}
                <div className="site-header__lang">
                    <button
                        onClick={() => setLanguage('el')}
                        className={`lang-btn ${language === 'el' ? 'active' : ''}`}
                    >
                        EL
                    </button>
                    <span className="lang-divider">|</span>
                    <button
                        onClick={() => setLanguage('en')}
                        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                    >
                        EN
                    </button>
                </div>

                {/* CTA Button */}
                <a href="tel:+306980151068" className="site-header__cta">
                    <PhoneIcon />
                    <span>{t('common.callUs')}</span>
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="site-header__burger"
                    onClick={toggleMobileMenu}
                    aria-label="Open menu"
                >
                    <MenuIcon />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`site-nav-mobile ${mobileMenuOpen ? 'is-open' : ''}`} onClick={closeMobileMenu}>
                <div className="site-nav-mobile__panel" onClick={(e) => e.stopPropagation()}>
                    <div className="site-nav-mobile__header">
                        <h2 className="site-nav-mobile__title">Menu</h2>
                        <button onClick={closeMobileMenu} className="site-nav-mobile__close">
                            <CloseIcon />
                        </button>
                    </div>

                    <nav className="site-nav-mobile__content">
                        <ul className="site-nav-mobile__list">
                            {navLinks.map((link, index) => (
                                <li key={index} className={`site-nav-mobile__item ${isActive(link) ? 'active' : ''}`}>
                                    <Link
                                        to={getPath(link)}
                                        className="site-nav-mobile__link"
                                        onClick={closeMobileMenu}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Language Switcher in Mobile */}
                    <div className="site-nav-mobile__lang">
                        <span className="site-nav-mobile__lang-title">Language</span>
                        <div className="site-nav-mobile__lang-buttons">
                            <button
                                onClick={() => { setLanguage('el'); closeMobileMenu(); }}
                                className={`lang-btn ${language === 'el' ? 'active' : ''}`}
                            >
                                Ελληνικά
                            </button>
                            <button
                                onClick={() => { setLanguage('en'); closeMobileMenu(); }}
                                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            >
                                English
                            </button>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="site-nav-mobile__quick-actions">
                        <span className="site-nav-mobile__quick-title">{t('contact.title')}</span>
                        <a href="tel:+306980151068" className="site-nav-mobile__quick-button site-nav-mobile__quick-button--call">
                            <PhoneIcon />
                            <span>+30 698 015 1068</span>
                        </a>
                        <a href="https://wa.me/306980151068" className="site-nav-mobile__quick-button site-nav-mobile__quick-button--whatsapp" target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
