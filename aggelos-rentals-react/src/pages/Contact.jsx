import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n';
import './Contact.css';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const Contact = () => {
    const { t, language } = useLanguage();

    // SEO 
    const seoTitle = language === 'el'
        ? 'Επικοινωνία | Ενοικίαση Αυτοκινήτου Πειραιά | Aggelos Rentals'
        : 'Contact Us | Car Rental Piraeus | Aggelos Rentals';

    const seoDescription = language === 'el'
        ? 'Επικοινωνήστε με την Aggelos Rentals στο +30 698 015 1068. Διαθέσιμοι 24/7 για κρατήσεις. Δωρεάν παράδοση στο λιμάνι του Πειραιά και αεροδρόμιο Αθηνών.'
        : 'Contact Aggelos Rentals at +30 698 015 1068. Available 24/7 for bookings. Free delivery to Piraeus Port and Athens Airport.';

    const canonical = language === 'en'
        ? 'https://aggelosrentals.com/en/contact'
        : 'https://aggelosrentals.com/epikoinonia';

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={canonical} />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="el" href="https://aggelosrentals.com/epikoinonia" />
                <link rel="alternate" hrefLang="en" href="https://aggelosrentals.com/en/contact" />

                <html lang={language} />
            </Helmet>

            <section className="contact-hero">
                <div className="container">
                    <h1 className="contact-hero__title">{t('contact.title')}</h1>
                    <p className="contact-hero__subtitle">{t('contact.subtitle')}</p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Phone */}
                        <a href="tel:+306980151068" className="contact-card contact-card--phone">
                            <div className="contact-card__icon">
                                <PhoneIcon />
                            </div>
                            <div className="contact-card__content">
                                <h2>{t('contact.phone')}</h2>
                                <span className="contact-card__value">+30 698 015 1068</span>
                                <span className="contact-card__desc">{t('contact.alwaysOpen')}</span>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a href="https://wa.me/306980151068" className="contact-card contact-card--whatsapp" target="_blank" rel="noopener noreferrer">
                            <div className="contact-card__icon">
                                <WhatsAppIcon />
                            </div>
                            <div className="contact-card__content">
                                <h2>WhatsApp</h2>
                                <span className="contact-card__value">+30 698 015 1068</span>
                                <span className="contact-card__desc">{language === 'el' ? 'Άμεση απάντηση' : 'Instant reply'}</span>
                            </div>
                        </a>

                        {/* Email */}
                        <a href="mailto:piraeus@aggelosrentals.com" className="contact-card contact-card--email">
                            <div className="contact-card__icon">
                                <EmailIcon />
                            </div>
                            <div className="contact-card__content">
                                <h2>{t('contact.email')}</h2>
                                <span className="contact-card__value">piraeus@aggelosrentals.com</span>
                                <span className="contact-card__desc">{language === 'el' ? 'Απάντηση εντός 1 ώρας' : 'Reply within 1 hour'}</span>
                            </div>
                        </a>
                    </div>

                    {/* Map */}
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12582.944742442487!2d23.63!3d37.9413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bb01c60af2d3%3A0x400bd2ce2b980f00!2sPiraeus%2C%20Greece!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
