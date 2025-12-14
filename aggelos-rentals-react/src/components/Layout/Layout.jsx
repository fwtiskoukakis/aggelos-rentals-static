import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from '../common/WhatsAppFloat';
import './Layout.css';

const Layout = () => {
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="app-layout">
            <Header />
            <main className="app-main">
                <Outlet />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
};

export default Layout;

