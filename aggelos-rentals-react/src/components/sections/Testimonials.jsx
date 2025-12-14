import React from 'react';
import { useLanguage } from '../../i18n';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        nameEl: 'Νίκος Παπαδόπουλος',
        nameEn: 'Nikos P.',
        textEl: 'Εξαιρετική εξυπηρέτηση! Παρέλαβα το αυτοκίνητο στο λιμάνι του Πειραιά σε 20 λεπτά.',
        textEn: 'Excellent service! I picked up the car at Piraeus port in 20 minutes.',
        rating: 5,
        date: '2024-12',
    },
    {
        id: 2,
        nameEl: 'Μαρία Κωνσταντίνου',
        nameEn: 'Maria K.',
        textEl: 'Πολύ καλή εμπειρία με μηνιαία ενοικίαση! Το Jeep Renegade ήταν τέλειο.',
        textEn: 'Great experience with monthly rental! The Jeep Renegade was perfect.',
        rating: 5,
        date: '2024-11',
    },
    {
        id: 3,
        nameEl: 'Γιώργος Αλεξίου',
        nameEn: 'George A.',
        textEl: 'Άψογη συνεργασία! Μου έφεραν το αυτοκίνητο στο αεροδρόμιο. Σίγουρα θα ξανακάνω ενοικίαση.',
        textEn: 'Flawless cooperation! They brought the car to the airport. Will definitely rent again.',
        rating: 5,
        date: '2024-10',
    },
];

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const Testimonials = () => {
    const { t, language } = useLanguage();

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">{t('testimonials.title')}</h2>

                <div className="testimonials__grid">
                    {testimonials.map((testimonial) => (
                        <div className="testimonial-card" key={testimonial.id}>
                            <div className="testimonial-card__stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} />
                                ))}
                            </div>

                            <p className="testimonial-card__text">
                                "{language === 'el' ? testimonial.textEl : testimonial.textEn}"
                            </p>

                            <div className="testimonial-card__author">
                                <div className="testimonial-card__avatar">
                                    {(language === 'el' ? testimonial.nameEl : testimonial.nameEn).charAt(0)}
                                </div>
                                <div>
                                    <span className="testimonial-card__name">
                                        {language === 'el' ? testimonial.nameEl : testimonial.nameEn}
                                    </span>
                                    <span className="testimonial-card__date">{testimonial.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonials__summary">
                    <span className="testimonials__rating">
                        <StarIcon /> {t('testimonials.rating')}
                    </span>
                    <span className="testimonials__count">{t('testimonials.reviews')}</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
