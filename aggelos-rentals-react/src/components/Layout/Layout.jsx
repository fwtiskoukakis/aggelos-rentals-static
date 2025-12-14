import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from '../common/WhatsAppFloat';
import './Layout.css';

const Layout = () => {
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
