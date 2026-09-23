import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import LeadershipPage from './pages/LeadershipPage';
import StoriesPage from './pages/StoriesPage';
import PartnersPage from './pages/PartnersPage';
import AwardsPage from './pages/AwardsPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [toast, setToast] = useState(null);

  const showNotification = (title, message, type = 'success') => {
    setToast({ title, message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  return (
    <div className="app-container">
      <ScrollToTop />
      <TopBar lang={lang} setLang={setLang} />
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage lang={lang} onNotify={showNotification} />} />
          <Route path="/about" element={<AboutPage onNotify={showNotification} />} />
          <Route path="/programs" element={<ProgramsPage onNotify={showNotification} />} />
          <Route path="/leadership" element={<LeadershipPage onNotify={showNotification} />} />
          <Route path="/stories" element={<StoriesPage onNotify={showNotification} />} />
          <Route path="/partners" element={<PartnersPage onNotify={showNotification} />} />
          <Route path="/awards" element={<AwardsPage onNotify={showNotification} />} />
          <Route path="/contact" element={<ContactPage onNotify={showNotification} />} />
          <Route path="/donate" element={<DonatePage onNotify={showNotification} />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage lang={lang} onNotify={showNotification} />} />
        </Routes>
      </main>

      <Footer />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
