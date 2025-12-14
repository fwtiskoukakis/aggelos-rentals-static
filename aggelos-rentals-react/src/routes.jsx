// src/routes.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const Fleet = lazy(() => import('./pages/Fleet'));
const VehicleType = lazy(() => import('./pages/VehicleType'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const Loading = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--primary-blue)' }}>
        <div className="spinner"></div> {/* Add spinner CSS later */}
        Loading...
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Location Pages */}
                <Route path="/location/:slug" element={<LocationPage />} />
                <Route path="/monthly-car-rentals-athens" element={<LocationPage type="monthly" />} />

                {/* Fleet Pages */}
                <Route path="/fleet" element={<Fleet />} />
                <Route path="/type/:category" element={<VehicleType />} />
                <Route path="/gearbox/:type" element={<VehicleType type="gearbox" />} />

                {/* Support Pages */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<Blog />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
