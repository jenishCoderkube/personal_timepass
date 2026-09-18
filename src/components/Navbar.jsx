import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteContent from '../data/siteContent.json';

export default function Navbar({ isNight, onToggleNight }) {
  const { personal, nav } = siteContent;
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <nav id="nav" className="site-nav-container">
      <audio ref={audioRef} src={nav.audio.src} loop preload="none" />

      {/* Location tag */}
      <div className="nav-side">
        {location.pathname !== '/' ? (
          <Link to="/#work" className="nav-back" aria-label="Back to work">
            <svg className="nav-back-arrow" width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M7 1 L1 7 L7 13 M1 7 H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back</span>
          </Link>
        ) : (
          <>
            <img className="pin" src={personal.pinIcon} alt="" width="14" height="20" />
            <span className="nav-loc">{personal.location}</span>
          </>
        )}
      </div>

      {/* Main Pill */}
      <div className="nav-pill" id="nav-pill">
        <div className="nav-id">
          <Link className="nav-avatar" to="/#work" aria-label={`${personal.name} — home`}>
            <img src={personal.avatar} alt={personal.name} />
          </Link>
          <div className="nav-meta">
            <span className="nav-name">{personal.name}</span>
            <span className="nav-role">{personal.role}</span>
          </div>
        </div>

        <ul className="nav-links" role="list">
          <li>
            <Link 
              to="/#work" 
              className={`nav-link ${location.pathname === '/' && !location.hash.includes('about') && !location.hash.includes('playground') ? 'is-active' : ''}`}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              to="/playground" 
              className={`nav-link ${location.pathname === '/playground' ? 'is-active' : ''}`}
            >
              Playground
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'is-active' : ''}`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Controls: Audio + Day/Night Toggle */}
      <div className="nav-side nav-side-right">
        <div className="nav-controls">
          {/* Ambient Music Button */}
          <button 
            type="button" 
            className={`nav-audio-btn ${isPlaying ? 'is-playing' : ''}`}
            onClick={toggleAudio}
            title={isPlaying ? "Pause ambient sound" : "Play ambient sound"}
            aria-label="Toggle ambient sound"
          >
            <span className="nav-audio-wave">
              <i></i><i></i><i></i><i></i>
            </span>
            <span className="nav-audio-label">{isPlaying ? "Playing" : "Sound"}</span>
          </button>

          {/* Day / Night toggle switch */}
          <div className="nav-toggle">
            <button
              type="button"
              className="toggle-pill"
              id="theme-toggle"
              aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
              aria-pressed={isNight}
              onClick={onToggleNight}
            >
              <span className="toggle-track" aria-hidden="true">
                <span className="toggle-clouds"></span>
                <span className="toggle-stars">
                  <i className="t-star s1"></i>
                  <i className="t-star s2"></i>
                  <i className="t-star s3"></i>
                </span>
                <span className="toggle-thumb">
                  <span className="toggle-sun"></span>
                  <span className="toggle-moon"></span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
