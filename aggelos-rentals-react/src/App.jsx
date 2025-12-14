import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Monthly from './pages/Monthly';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PiraeusPort from './pages/PiraeusPort';
import AthensAirport from './pages/AthensAirport';
import AirportToPiraeus from './pages/AirportToPiraeus';
import NotFound from './pages/NotFound';

const AppContent = () => {
  return (
    <LanguageProvider>
      <Routes>
        {/* Greek Routes (default) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stolos" element={<Fleet />} />
          <Route path="monthly" element={<Monthly />} />
          <Route path="epikoinonia" element={<Contact />} />
          <Route path="syxnes-erotiseis" element={<FAQ />} />

          {/* Location Pages - Greek */}
          <Route path="locations/piraeus-port" element={<PiraeusPort />} />
          <Route path="locations/athens-airport" element={<AthensAirport />} />
          <Route path="athens-airport-to-piraeus" element={<AirportToPiraeus />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        {/* English Routes */}
        <Route path="/en" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fleet" element={<Fleet />} />
          <Route path="monthly" element={<Monthly />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />

          {/* Location Pages - English */}
          <Route path="locations/piraeus-port" element={<PiraeusPort />} />
          <Route path="locations/athens-airport" element={<AthensAirport />} />
          <Route path="athens-airport-to-piraeus" element={<AirportToPiraeus />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
