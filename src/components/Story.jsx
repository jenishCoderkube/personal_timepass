import React from 'react';
import siteContent from '../data/siteContent.json';

export default function Story() {
  const { story } = siteContent;

  return (
    <section className="projects" id="story">
      <div className="sky-band" aria-hidden="true"></div>

      <div className="intro-copy">
        {story.introParagraphs.map((paragraph, index) => (
          <p key={index} className={`intro-type ${index === 1 ? 'bold' : ''}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
