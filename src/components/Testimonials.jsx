import React, { useState } from 'react';
import siteContent from '../data/siteContent.json';

export default function Testimonials() {
  const { testimonials } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonials" id="testimonials">
      <div className="t-willow" aria-hidden="true">
        <div className="t-willow-sway"><div className="t-willow-skin"></div></div>
      </div>
      <img className="t-wavy" src="/assets/testimonials-grass-cream.png" alt="" aria-hidden="true" />
      <div className="t-wavy t-wavy-night" aria-hidden="true"></div>
      <img className="t-trees-left" src="/assets/testimonials-trees.svg" alt="" aria-hidden="true" />
      <img className="t-trees-right" src="/assets/testimonials-trees.svg" alt="" aria-hidden="true" />
      <img className="t-land" src="/assets/testimonials-land.webp" alt="" aria-hidden="true" />

      <div className="t-inner">
        <p className="t-eyebrow">{testimonials.eyebrow}</p>
        <h2 className="t-heading">{testimonials.heading}</h2>

        <div className="t-cards" id="t-cards">
          {testimonials.items.map((item, idx) => {
            const isCenter = idx === activeIndex;
            const pos = idx === 0 ? 0 : idx === 1 ? 1 : -1;

            return (
              <figure 
                key={item.id} 
                className={`t-card ${isCenter ? 't-card--front' : 't-card--side'}`}
                style={{ 
                  '--pos': pos, 
                  zIndex: isCenter ? 3 : 2 - Math.abs(pos),
                  cursor: 'pointer'
                }}
                onClick={() => setActiveIndex(idx)}
              >
                <img className="t-quoteicon" src="/assets/t-quote.svg" alt="" aria-hidden="true" />
                <blockquote className="t-quote">{item.quote}</blockquote>
                <hr className="t-divider" />
                <figcaption className="t-author">
                  <div className="t-authorrow">
                    <img className="t-avatar" src={item.avatar} alt={item.author} />
                    <span className="t-name">{item.author}</span>
                  </div>
                  <span className="t-role">{item.role}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
      <div className="t-scrub" aria-hidden="true"></div>
    </section>
  );
}
