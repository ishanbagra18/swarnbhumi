import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PhotosPage } from './pages/PhotosPage';

function App() {
  const location = useLocation();

  return (
    <SiteLayout>
      <main key={location.pathname} className="flex-1">
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/photos" element={<PhotosPage />} />
        </Routes>
      </main>
    </SiteLayout>
  );
}

export default App;