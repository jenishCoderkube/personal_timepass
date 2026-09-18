import React from 'react';
import siteContent from '../data/siteContent.json';

export default function ClientsMarquee() {
  const { clients } = siteContent;

  return (
    <div className="logo-marquee-wrap" aria-label="Companies this work has featured in">
      <div className="logo-marquee-inner">
        {/* First set */}
        {clients.logos.map((logo, idx) => (
          <img 
            key={`logo-1-${idx}`} 
            className={`client-logo ${logo.className}`} 
            src={logo.src} 
            alt={logo.name} 
          />
        ))}
        {/* Duplicate set for infinite loop */}
        {clients.logos.map((logo, idx) => (
          <img 
            key={`logo-2-${idx}`} 
            className={`client-logo ${logo.className}`} 
            src={logo.src} 
            alt="" 
            aria-hidden="true" 
          />
        ))}
      </div>

      {/* Mobile two rows in opposite directions */}
      <div className="logo-marquee-mobile" aria-hidden="true">
        <div className="logo-marquee-inner mrow mrow-a">
          {clients.logos.slice(0, 3).map((logo, idx) => (
            <img key={`mob-a1-${idx}`} className={`client-logo ${logo.className}`} src={logo.src} alt="" />
          ))}
          {clients.logos.slice(0, 3).map((logo, idx) => (
            <img key={`mob-a2-${idx}`} className={`client-logo ${logo.className}`} src={logo.src} alt="" />
          ))}
        </div>
        <div className="logo-marquee-inner mrow mrow-b">
          {clients.logos.slice(2).map((logo, idx) => (
            <img key={`mob-b1-${idx}`} className={`client-logo ${logo.className}`} src={logo.src} alt="" />
          ))}
          {clients.logos.slice(2).map((logo, idx) => (
            <img key={`mob-b2-${idx}`} className={`client-logo ${logo.className}`} src={logo.src} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
