import React, { useState } from 'react';
import { useLanguage } from '../../i18n';
import './FAQ.css';

const faqData = [
    {
        questionEl: 'Ποια είναι η ελάχιστη διάρκεια ενοικίασης;',
        questionEn: 'What is the minimum rental period?',
        answerEl: 'Η ελάχιστη διάρκεια ενοικίασης είναι 1 ημέρα για ημερήσια ενοικίαση και 1 μήνας για μηνιαία ενοικίαση.',
        answerEn: 'The minimum rental period is 1 day for daily rental and 1 month for monthly rental.',
    },
    {
        questionEl: 'Τι χρειάζομαι για να ενοικιάσω αυτοκίνητο;',
        questionEn: 'What do I need to rent a car?',
        answerEl: 'Χρειάζεστε έγκυρη άδεια οδήγησης (τουλάχιστον 1 έτος) και ταυτότητα ή διαβατήριο. Δεν απαιτείται πιστωτική κάρτα.',
        answerEn: 'You need a valid driving license (at least 1 year) and ID or passport. No credit card required.',
    },
    {
        questionEl: 'Κάνετε παράδοση στο λιμάνι Πειραιά;',
        questionEn: 'Do you deliver to Piraeus Port?',
        answerEl: 'Ναι! Κάνουμε δωρεάν παράδοση στο λιμάνι Πειραιά και αεροδρόμιο Αθηνών σε 20-30 λεπτά.',
        answerEn: 'Yes! We offer free delivery to Piraeus Port and Athens Airport within 20-30 minutes.',
    },
    {
        questionEl: 'Τι περιλαμβάνει η μηνιαία ενοικίαση;',
        questionEn: 'What does monthly rental include?',
        answerEl: 'Η μηνιαία ενοικίαση περιλαμβάνει πλήρη ασφάλεια, 2000 km/μήνα, 24/7 υποστήριξη και δωρεάν παράδοση.',
        answerEn: 'Monthly rental includes full insurance, 2000 km/month, 24/7 support, and free delivery.',
    },
];

const ChevronIcon = ({ isOpen }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
    >
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const FAQSection = () => {
    const { t, language } = useLanguage();
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="section-title">{t('faq.title')}</h2>
                <p className="section-subtitle">{t('faq.subtitle')}</p>

                <div className="faq__list">
                    {faqData.map((faq, index) => (
                        <div
                            className={`faq__item ${openIndex === index ? 'is-active' : ''}`}
                            key={index}
                        >
                            <button
                                className="faq__question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="faq__question-text">
                                    {language === 'el' ? faq.questionEl : faq.questionEn}
                                </span>
                                <ChevronIcon isOpen={openIndex === index} />
                            </button>

                            <div className="faq__answer">
                                <div className="faq__answer-content">
                                    <p>{language === 'el' ? faq.answerEl : faq.answerEn}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
