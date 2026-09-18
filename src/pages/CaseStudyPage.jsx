import React from 'react';
import { useParams, Link } from 'react-router-dom';
import siteContent from '../data/siteContent.json';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = siteContent.caseStudies[slug];

  if (!project) {
    return (
      <div className="cs-not-found" style={{ padding: '160px 24px', textAlign: 'center' }}>
        <h2>Case Study Not Found</h2>
        <p>The requested case study could not be located.</p>
        <Link to="/#work" className="nav-back" style={{ display: 'inline-flex', marginTop: '24px' }}>
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="cs-page">
      {/* Case study hero */}
      <section className="cs-band cream cs-hero" data-pager-nav="dark">
        <div className="cs-wrap cs-hero-grid">
          <div>
            <h1 className="cs-hero-h">{project.title}</h1>
            <p className="cs-hero-tagline">{project.tagline}</p>
            {project.intro.map((para, i) => (
              <p key={i} className="cs-hero-intro">{para}</p>
            ))}
          </div>

          <div className="cs-meta">
            <div>
              <div className="cs-meta-k">Role</div>
              <div className="cs-meta-v">{project.meta.role}</div>
            </div>
            <div>
              <div className="cs-meta-k">Client</div>
              <div className="cs-meta-v">{project.meta.client}</div>
            </div>
            <div>
              <div className="cs-meta-k">Shipped</div>
              <div className="cs-meta-v">{project.meta.shipped}</div>
            </div>
            <div>
              <div className="cs-meta-k">Platform</div>
              <div className="cs-meta-v">{project.meta.platform}</div>
            </div>
          </div>
        </div>

        {/* Hero Mockup */}
        <div className="cs-hero-mock">
          <div className="cs-hero-zoom">
            <img className="cs-hero-plate" src={project.heroMock.plate} alt={project.title} />
            <div className="cs-hero-screen">
              <video
                className="cs-hero-vid"
                muted
                loop
                autoPlay
                playsInline
                poster={project.heroMock.poster}
              >
                <source src={project.heroMock.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Closing */}
      {project.closing && (
        <section className="cs-band cream cs-closing cs-panel">
          <div className="cs-wrap">
            <h2 className="cs-closing-h">{project.closing.heading}</h2>
            <p className="cs-closing-p">{project.closing.paragraph}</p>
          </div>
        </section>
      )}

      {/* Read Next Section */}
      {project.readNext && (
        <section className="cs-band dark cs-readnext cs-panel">
          <div className="rn-copy">
            <div className="rn-kicker">Read next</div>
            <Link className="rn-title-link" to={`/work/${project.readNext.slug}`}>
              <h2 className="rn-title">{project.readNext.title}</h2>
            </Link>
            <p className="rn-desc">{project.readNext.desc}</p>
          </div>
        </section>
      )}
    </div>
  );
}
