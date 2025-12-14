import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n';
import './NotFound.css';

const NotFound = () => {
    const { t, language, getLocalizedPath } = useLanguage();

    return (
        <>
            <Helmet>
                <title>{t('404.title')} | Aggelos Rentals</title>
                <html lang={language} />
            </Helmet>

            <section className="not-found">
                <div className="not-found__content">
                    <span className="not-found__code">404</span>
                    <h1 className="not-found__title">{t('404.title')}</h1>
                    <p className="not-found__desc">{t('404.desc')}</p>
                    <Link to={getLocalizedPath('/')} className="not-found__cta">
                        {t('404.home')}
                    </Link>
                </div>
            </section>
        </>
    );
};

export default NotFound;
