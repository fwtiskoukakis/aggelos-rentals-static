import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import elTranslations from './locales/el.json';
import enTranslations from './locales/en.json';

const translations = {
    el: elTranslations,
    en: enTranslations,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // Determine language from URL
    const getLanguageFromPath = (pathname) => {
        return pathname.startsWith('/en') ? 'en' : 'el';
    };

    const [language, setLanguageState] = useState(() => getLanguageFromPath(location.pathname));

    // Update language when URL changes
    useEffect(() => {
        const lang = getLanguageFromPath(location.pathname);
        setLanguageState(lang);
    }, [location.pathname]);

    // Get translation by key path (e.g., "nav.home")
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                console.warn(`Translation missing for key: ${key} in language: ${language}`);
                return key;
            }
        }

        return value;
    };

    // Switch language and navigate to corresponding route
    const setLanguage = (newLang) => {
        const currentPath = location.pathname;
        let newPath;

        if (newLang === 'en') {
            // Switching to English
            if (currentPath.startsWith('/en')) {
                newPath = currentPath; // Already on English
            } else {
                newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
            }
        } else {
            // Switching to Greek
            if (currentPath.startsWith('/en')) {
                newPath = currentPath === '/en' ? '/' : currentPath.replace('/en', '');
            } else {
                newPath = currentPath; // Already on Greek
            }
        }

        navigate(newPath);
    };

    // Get path for a route considering current language
    const getLocalizedPath = (path) => {
        if (language === 'en') {
            return path === '/' ? '/en' : `/en${path}`;
        }
        return path;
    };

    // Check if current language is English
    const isEnglish = language === 'en';

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            t,
            getLocalizedPath,
            isEnglish
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
