import React from 'react';
import { Link } from 'react-router-dom';
import siteContent from '../data/siteContent.json';
import ClientsMarquee from './ClientsMarquee';

export default function FeaturedWork() {
  const { featuredProjects, clients } = siteContent;

  const row1 = featuredProjects.slice(0, 2);
  const row2 = featuredProjects.slice(2, 4);

  return (
    <section className="featured-work" id="work">
      {/* Decorative airplane trail */}
      <div className="plane-fly" aria-hidden="true">
        <svg className="plane-trail" viewBox="0 0 1440 3021" fill="none" preserveAspectRatio="none">
          <defs>
            <mask id="planeTrailMask">
              <path id="planeTrailMaskPath" fill="none" stroke="#fff" strokeWidth="44"
                d="M 210 110 C 110 200 70 325 88 410 C 103 488 192 528 255 555"/>
            </mask>
          </defs>
          <path id="planeMotionPath" fill="none" stroke="none"
            d="M 210 110 C 110 200 70 325 88 410 C 103 488 192 528 255 555"/>
          <path id="planeTrailPath" fill="none" stroke="#000000" strokeWidth="1.4"
            strokeLinecap="butt" strokeDasharray="10 6" mask="url(#planeTrailMask)"
            d="M 210 110 C 110 200 70 325 88 410 C 103 488 192 528 255 555"/>
        </svg>
        <img className="plane-sprite" src="/assets/plane.svg" alt="" />
      </div>

      <h2 className="featured-heading">{clients.heading}</h2>

      {/* Marquee */}
      <ClientsMarquee />

      {/* Project Tiles */}
      <div className="project-tiles">
        {/* Row 1 */}
        <div className="tiles-row">
          {row1.map((project) => (
            <Link
              key={project.id}
              className={`project-tile tile-${project.layout}`}
              to={project.link}
              aria-label={`Open the ${project.title} case study`}
            >
              <div className="cs-hero-mock tile-mock">
                <div className="cs-hero-zoom">
                  <img className="cs-hero-plate" src={project.plateImage} alt={project.alt} loading="lazy" />
                  <div className="cs-hero-screen">
                    <video
                      className="cs-hero-vid"
                      muted
                      loop
                      autoPlay
                      playsInline
                      poster={project.poster}
                      aria-label={project.title}
                    >
                      <source src={project.videoMp4} type="video/mp4" />
                      {project.videoWebm && <source src={project.videoWebm} type="video/webm" />}
                    </video>
                  </div>
                </div>
              </div>
              <div className="tile-overlay">
                <p className="tile-overlay-title">{project.title}</p>
                <p className="tile-overlay-subtitle">{project.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2 */}
        <div className="tiles-row">
          {row2.map((project) => (
            <Link
              key={project.id}
              className={`project-tile tile-${project.layout}`}
              to={project.link}
              aria-label={`Open the ${project.title} case study`}
            >
              <div className="cs-hero-mock tile-mock">
                <div className="cs-hero-zoom">
                  <img className="cs-hero-plate" src={project.plateImage} alt={project.alt} loading="lazy" />
                  <div className="cs-hero-screen">
                    <video
                      className="cs-hero-vid"
                      muted
                      loop
                      autoPlay
                      playsInline
                      poster={project.poster}
                      aria-label={project.title}
                    >
                      <source src={project.videoMp4} type="video/mp4" />
                      {project.videoWebm && <source src={project.videoWebm} type="video/webm" />}
                    </video>
                  </div>
                </div>
              </div>
              <div className="tile-overlay">
                <p className="tile-overlay-title">{project.title}</p>
                <p className="tile-overlay-subtitle">{project.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
