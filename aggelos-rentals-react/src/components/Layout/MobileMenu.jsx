// src/components/Layout/MobileMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './MobileMenu.css';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: 'Home', url: '/' },
        { name: 'Piraeus Port', url: '/location/piraeus-port' },
        { name: 'Athens Airport', url: '/location/athens-airport' },
        { name: 'Athens Center', url: '/location/athens-center' },
        { name: 'Our Fleet', url: '/fleet' },
        { name: 'Monthly Rentals', url: '/monthly-car-rentals-athens' },
        { name: 'Contact', url: '/contact' }
    ];

    return (
        <>
            <button
                className="mobile-menu-toggle"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

            <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <h3>Menu</h3>
                    <button onClick={toggleMenu}><FaTimes /></button>
                </div>
                <ul className="mobile-menu-list">
                    {menuItems.map((item) => (
                        <li key={item.url}>
                            <Link
                                to={item.url}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default MobileMenu;
