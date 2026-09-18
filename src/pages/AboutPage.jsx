import React, { useState } from 'react';
import siteContent from '../data/siteContent.json';

export default function AboutPage() {
  const { about } = siteContent;
  const { intro, experience, funFacts } = about;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="about-page-view">
      {/* Intro section */}
      <section className="about-intro" aria-label="About Zainab Kabira">
        <div className="about-intro-stage">
          <div className="ai-scene" id="ai-scene">
            <img className="ai-sun-clouds" src="/assets/about-sun-clouds.png" alt="" aria-hidden="true" />

            <div className="ai-content">
              <div className="ai-copy">
                <h1 className="ai-heading">{intro.heading}</h1>
                <div className="ai-body">
                  {intro.body.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="ai-photos">
                {intro.photos.map((photo, idx) => (
                  <figure key={idx} className={`ai-polaroid ${photo.class}`}>
                    <span className="ai-card">
                      <span className="ai-photo">
                        <img src={photo.src} alt={photo.alt} />
                      </span>
                    </span>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="about-exp" aria-label="Professional experience">
        <img className="ai-land" src="/assets/about-land.png" alt="" aria-hidden="true" />
        <div className="about-exp-stage">
          <p className="aexp-label">Professional Experience</p>

          <div className="aexp-list">
            <div className="aexp-divider"></div>

            {experience.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <React.Fragment key={idx}>
                  <div className={`aexp-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      className="aexp-head"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleAccordion(idx)}
                    >
                      <span className="aexp-company">
                        <span className="aexp-name">{item.company}</span>
                        <span className="aexp-role">{item.role}</span>
                      </span>
                      <span className="aexp-meta">
                        <span className="aexp-date">{item.date}</span>
                        <span className="aexp-toggle" aria-hidden="true"></span>
                      </span>
                    </button>

                    <div className="aexp-panel" style={{ display: isOpen ? 'block' : 'none' }}>
                      <div className="aexp-panel-inner">
                        <p>{item.overview}</p>
                        <ul className="aexp-bullets">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="aexp-divider"></div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="about-fun" aria-label="Fun facts">
        <div className="aff-bg" aria-hidden="true"></div>
        <div className="about-fun-stage">
          {/* Hikes card */}
          <div className="ff-card b1 pos-lt ff-hikes">
            <div className="ff-hikes-label">
              <span className="k">Hikes</span>
              <span className="y">{funFacts.hikes.year}</span>
            </div>
            {funFacts.hikes.images.map((img, i) => (
              <div key={i} className={`ff-photo h${i + 1}`}>
                <img src={img} alt="" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Weekend todo card */}
          <div className="ff-card b1 pos-ct ff-wk">
            <span className="ff-wk-friday">Friday</span>
            <span className="ff-wk-dots"><i></i><i></i><i></i></span>
            <div className="ff-wk-panel">
              <div className="ff-wk-inner">
                <p className="ff-wk-title">Weekend To do</p>
                <div className="ff-wk-list">
                  {funFacts.todo.map((todoItem, tIdx) => (
                    <div key={tIdx} className="r">
                      <span className="cb"></span>
                      <span className="t">{todoItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Music card */}
          <div className="ff-card pos-rt ff-gully">
            <div className="ff-media">
              <img src={funFacts.music.cover} alt="Music cover" />
            </div>
            <div className="ff-gully-grad" aria-hidden="true"></div>
            <div className="ff-gully-pill">
              <span className="ff-vinyl" aria-hidden="true"></span>
              <span className="meta">
                <span className="a">{funFacts.music.song}</span>
                <span className="b">{funFacts.music.artist}</span>
              </span>
            </div>
            <a
              className="ff-gully-link"
              href={funFacts.music.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on YouTube"
            ></a>
          </div>

          {/* Quote */}
          <div className="ff-card b1 pos-lb ff-quote">
            <div className="ff-quote-grid" aria-hidden="true"></div>
            <span className="ff-quote-mark" aria-hidden="true">
              <img src="/assets/about-quote-mark.svg" alt="" />
            </span>
            <p className="ff-quote-text">
              <span className="a">God </span>
              <span className="b">is in the </span>
              <span className="c">details.</span>
            </p>
            <p className="ff-quote-cite">– {funFacts.quote.author}</p>
            <span className="ff-quote-ruler" aria-hidden="true">
              <img src="/assets/about-quote-ruler.svg" alt="" />
            </span>
          </div>

          {/* Blog */}
          <div className="ff-card b1 pos-cb ff-blog">
            <div className="ff-blog-img">
              <img src={funFacts.blog.image} alt="Blog cover" />
            </div>
            <p className="ff-blog-title">{funFacts.blog.title}</p>
            <div className="ff-blog-foot">
              <span className="rl">Read Blog</span>
              <span className="rl-icon" aria-hidden="true"></span>
            </div>
            <img className="ff-bookmark" src="/assets/about-blog-bookmark.svg" alt="" aria-hidden="true" />
            <a
              className="ff-blog-link"
              href={funFacts.blog.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={funFacts.blog.title}
            ></a>
          </div>

          {/* Game */}
          <div className="ff-card pos-rb ff-starry">
            <div className="ff-media">
              <img src={funFacts.game.image} alt="Game preview" />
            </div>
            <div className="ff-starry-panel">
              <span className="k">{funFacts.game.label}</span>
              <span className="t">{funFacts.game.title}</span>
              <div className="ff-starry-row">
                <button className="ff-play-btn" type="button">
                  <span>PLAY</span>
                  <img className="pl-icon" src="/assets/about-starry-extlink.svg" width="20" height="20" alt="" />
                </button>
              </div>
            </div>
            <a
              className="ff-starry-link"
              href={funFacts.game.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Play game"
            ></a>
          </div>
        </div>
      </section>
    </div>
  );
}
