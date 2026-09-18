import React, { useState } from 'react';
import siteContent from '../data/siteContent.json';

export default function PlaygroundPage() {
  const { playground } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxItem, setLightboxItem] = useState(null);

  const prevItem = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : playground.length - 1));
  };

  const nextItem = () => {
    setActiveIndex((prev) => (prev < playground.length - 1 ? prev + 1 : 0));
  };

  const activeExperiment = playground[activeIndex] || playground[0];

  return (
    <div className="playground-page-view">
      <section className="playground pg-flow" aria-label="Playground — motion and 3D experiments">
        <div className="pgf-head">
          <p className="pgf-lead">
            Each vignette is a small study in material, light, and movement, and a few grew into showcase work for FlutterFlow and Flutter Animate.
          </p>
        </div>

        {/* Carousel stage */}
        <div className="pgf-stage" id="pgf-stage">
          <button type="button" className="pgf-arrow pgf-arrow--prev" onClick={prevItem} aria-label="Previous">
            ‹
          </button>

          <div className="pgf-track">
            {playground.map((item, idx) => {
              const diff = idx - activeIndex;
              const isCenter = diff === 0;
              const absDiff = Math.abs(diff);

              return (
                <div
                  key={item.id}
                  className={`pgf-card ${isCenter ? 'is-active' : ''}`}
                  style={{
                    transform: `translateX(${diff * 260}px) translateZ(${isCenter ? 0 : -160 * absDiff}px) rotateY(${diff * -22}deg)`,
                    opacity: absDiff > 3 ? 0 : 1 - absDiff * 0.25,
                    zIndex: 10 - absDiff,
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    if (isCenter) setLightboxItem(item);
                    else setActiveIndex(idx);
                  }}
                >
                  <div className="pgf-card-media">
                    {item.type === 'video' ? (
                      <video muted loop autoPlay playsInline poster={item.src.replace('/playground/', '/playground/posters/').replace(/\.mp4$/, '.jpg')}>
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={item.src} alt={item.title} />
                    )}
                  </div>
                  <div className="pgf-card-vhs"></div>
                </div>
              );
            })}
          </div>

          <button type="button" className="pgf-arrow pgf-arrow--next" onClick={nextItem} aria-label="Next">
            ›
          </button>
        </div>

        {/* Active caption */}
        <div className="pgf-caption">
          <div className="pgf-cap-meta">
            <span className="pgf-cap-index">{String(activeIndex + 1).padStart(2, '0')} / {String(playground.length).padStart(2, '0')}</span>
            <span className="pgf-cap-tags">{activeExperiment.tool}</span>
          </div>
          <h3 className="pgf-cap-title">{activeExperiment.title}</h3>
          <p className="pgf-cap-desc">{activeExperiment.desc}</p>
        </div>
      </section>

      {/* Lightbox Dialog */}
      {lightboxItem && (
        <div className="pgf-lightbox" role="dialog" aria-modal="true" aria-label="Experiment viewer">
          <button type="button" className="pgf-lb-close" onClick={() => setLightboxItem(null)} aria-label="Close">
            &times;
          </button>
          
          <div className="pgf-lb-stage">
            {lightboxItem.type === 'video' ? (
              <video muted loop autoPlay playsInline controls>
                <source src={lightboxItem.src} type="video/mp4" />
              </video>
            ) : (
              <img src={lightboxItem.src} alt={lightboxItem.title} />
            )}
          </div>

          <div className="pgf-lb-info">
            <span className="pgf-lb-index">{lightboxItem.tool}</span>
            <h3 className="pgf-lb-title">{lightboxItem.title}</h3>
            <p className="pgf-lb-desc">{lightboxItem.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
