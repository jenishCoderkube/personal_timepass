import React from 'react';
import siteContent from '../data/siteContent.json';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="hero">
      <img className="hero-shader" src={hero.shaderImage} alt="" aria-hidden="true" />
      <div className="hero-sky" aria-hidden="true"></div>
      <div className="hero-stars" aria-hidden="true"></div>
      <div className="hero-meteor" aria-hidden="true"></div>
      <div className="hero-noise" aria-hidden="true"></div>

      <div className="hero-content" id="hero-content">
        <img className="sun-group" src={hero.sunImage} alt="" aria-hidden="true" />
        
        <div className="moon-group" aria-hidden="true">
          <span className="moon-glow"></span>
          <img className="moon-disc" src={hero.moonImage} alt="" />
        </div>

        <img className="hero-cloud cloud-a" src={hero.cloudImage} alt="" aria-hidden="true" />
        <img className="hero-cloud cloud-b" src={hero.cloudImage} alt="" aria-hidden="true" />

        <p className="hero-eyebrow">
          <img src="/assets/imgEllipse14.svg" alt="" />
          {hero.eyebrow}
        </p>

        <span className="hero-vertical">{hero.verticalTag}</span>

        <h1 className="hero-headline">
          <span className="hero-headline-1">{hero.headline.line1}</span>
          <span className="hero-headline-2">{hero.headline.line2}</span>
          <span className="hero-headline-3">{hero.headline.line3}</span>
        </h1>
      </div>
    </section>
  );
}
