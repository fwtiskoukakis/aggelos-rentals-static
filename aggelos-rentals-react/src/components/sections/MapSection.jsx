import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../i18n';
import './MapSection.css';

const MapSection = () => {
    const { language } = useLanguage();
    const [isLoaded, setIsLoaded] = useState(false);
    const mapRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="map-section">
            <div className="container">
                <h2 className="section-title">
                    {language === 'el' ? 'Βρείτε μας' : 'Find Us'}
                </h2>
                <p className="section-subtitle">
                    {language === 'el' ? 'Πειραιάς, Ελλάδα' : 'Piraeus, Greece'}
                </p>

                <div className="map-wrapper" ref={mapRef}>
                    {isLoaded ? (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12582.944742442487!2d23.63!3d37.9413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bb01c60af2d3%3A0x400bd2ce2b980f00!2sPiraeus%2C%20Greece!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Aggelos Rentals Location - Piraeus, Greece"
                        />
                    ) : (
                        <div className="map-placeholder">
                            <span>{language === 'el' ? 'Φόρτωση χάρτη...' : 'Loading map...'}</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MapSection;
