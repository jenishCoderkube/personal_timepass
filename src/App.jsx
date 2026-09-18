import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlaygroundPage from './pages/PlaygroundPage';
import CaseStudyPage from './pages/CaseStudyPage';

export default function App() {
  const [isNight, setIsNight] = useState(() => {
    return localStorage.getItem('theme') === 'night';
  });

  const location = useLocation();

  useEffect(() => {
    if (isNight) {
      document.body.classList.add('night');
      localStorage.setItem('theme', 'night');
    } else {
      document.body.classList.remove('night');
      localStorage.setItem('theme', 'day');
    }
  }, [isNight]);

  // Scroll to hash anchor or top on route change
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);

  const toggleNight = () => {
    setIsNight((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Navbar isNight={isNight} onToggleNight={toggleNight} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
      </Routes>

      <Footer isNight={isNight} />
    </div>
  );
}
