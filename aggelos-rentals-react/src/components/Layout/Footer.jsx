import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import './Footer.css';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const LOGO_URL = 'https://www.aggelosrentals.com/wp-content/uploads/2023/12/cropped-cropped-Aggelos-Rentals-Logo-1.png';

const Footer = () => {
    const { t, getLocalizedPath, language } = useLanguage();

    // SEO Links from migration docs  
    const locationLinks = [
        { label: language === 'el' ? 'Λιμάνι Πειραιά' : 'Piraeus Port', path: '/locations/piraeus-port' },
        { label: language === 'el' ? 'Αεροδρόμιο Αθηνών' : 'Athens Airport', path: '/locations/athens-airport' },
        { label: language === 'el' ? 'Κέντρο Αθήνας' : 'Athens Center', path: '/locations/athens-center' },
    ];

    const serviceLinks = [
        { label: language === 'el' ? 'Ημερήσια Ενοικίαση' : 'Daily Rental', path: language === 'en' ? '/fleet' : '/stolos' },
        { label: language === 'el' ? 'Μηνιαία Ενοικίαση' : 'Monthly Rental', path: '/monthly' },
        { label: language === 'el' ? 'Ενοικίαση SUV' : 'SUV Rental', path: language === 'en' ? '/fleet' : '/stolos' },
        { label: language === 'el' ? 'Economy Αυτοκίνητα' : 'Economy Cars', path: language === 'en' ? '/fleet' : '/stolos' },
    ];

    const companyLinks = [
        { label: 'Blog', path: '/blog' },
        { label: t('nav.contact'), path: language === 'en' ? '/contact' : '/epikoinonia' },
        { label: t('nav.faq'), path: language === 'en' ? '/faq' : '/syxnes-erotiseis' },
        { label: t('footer.privacy'), path: '/privacy' },
        { label: t('footer.terms'), path: '/terms' },
    ];

    return (
        <footer className="modern-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-column footer-column--brand">
                        <img
                            src={LOGO_URL}
                            alt="Aggelos Rentals"
                            className="footer-logo"
                        />
                        <p className="footer-desc">
                            {language === 'el'
                                ? 'Επαγγελματική ενοικίαση αυτοκινήτων στον Πειραιά με 10+ χρόνια εμπειρίας. Παράδοση σε λιμάνι Πειραιά και αεροδρόμιο Αθηνών σε 30 λεπτά.'
                                : 'Professional car rental in Piraeus with 10+ years of experience. Delivery to Piraeus Port and Athens Airport within 30 minutes.'}
                        </p>
                        <div className="footer-rating">
                            <span className="footer-rating__stars">★★★★★</span>
                            <span className="footer-rating__text">4.8/5 (238 {language === 'el' ? 'κριτικές' : 'reviews'})</span>
                        </div>
                    </div>

                    {/* Locations - SEO Links */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('nav.locations')}</h3>
                        <ul className="footer-links">
                            {locationLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={getLocalizedPath(link.path)}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services - SEO Links */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('footer.services')}</h3>
                        <ul className="footer-links">
                            {serviceLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={getLocalizedPath(link.path)}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('footer.company')}</h3>
                        <ul className="footer-links">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={getLocalizedPath(link.path)}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('footer.contactInfo')}</h3>
                        <ul className="footer-contact">
                            <li>
                                <a href="tel:+306980151068">
                                    <span className="footer-contact-icon"><PhoneIcon /></span>
                                    +30 698 015 1068
                                </a>
                            </li>
                            <li>
                                <a href="mailto:piraeus@aggelosrentals.com">
                                    <span className="footer-contact-icon"><EmailIcon /></span>
                                    piraeus@aggelosrentals.com
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/place/Piraeus" target="_blank" rel="noopener noreferrer">
                                    <span className="footer-contact-icon"><MapPinIcon /></span>
                                    {language === 'el' ? 'Πειραιάς, Ελλάδα' : 'Piraeus, Greece'}
                                </a>
                            </li>
                        </ul>
                        <p className="footer-hours">
                            <strong>{t('contact.hours')}:</strong> {t('contact.alwaysOpen')}
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Aggelos Rentals - Piraeus Rent A Car. {t('footer.rights')}.
                    </p>
                    <div className="footer-seo-text">
                        <p>
                            {language === 'el'
                                ? 'Ενοικίαση αυτοκινήτου Πειραιάς | Rent a Car Piraeus Port | Athens Airport Car Rental'
                                : 'Car Rental Piraeus | Rent a Car Piraeus Port | Athens Airport Car Rental'}
                        </p>
                    </div>
                    <p className="footer-credit">
                        Made by <a href="https://anotherseoguru.com" target="_blank" rel="noreferrer">Anotherseoguru.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
