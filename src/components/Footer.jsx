import React, { useEffect, useRef, useState } from 'react';
import siteContent from '../data/siteContent.json';

export default function Footer({ isNight }) {
  const { footer, personal } = siteContent;
  const gardenRef = useRef(null);
  const landRef = useRef(null);
  const [plants, setPlants] = useState([]);

  // Procedurally generate the garden plants if none exist
  useEffect(() => {
    const rnd = (a, b) => a + Math.random() * (b - a);
    const pick = arr => arr[(Math.random() * arr.length) | 0];

    const CREAM = ['#faf5e6', '#fbf7ec', '#f7f1df'];
    const DISC = '#e89a1c';
    const STEM = ['#b06a4d', '#a95c42', '#bb765b'];
    const OLIVE = ['#33361a', '#2b2e14', '#3c4020', '#454a24'];
    const LAV = ['#7c5fa6', '#684c90', '#8f73b8', '#5b4680', '#9a80c2'];
    const LEAFG = ['#5c7d3f', '#4a6b33', '#6f9450'];

    const petalPath = (len, w, col) =>
      `M0 0 C ${-w} ${(-len * 0.42).toFixed(1)} ${(-w * 0.55).toFixed(1)} ${-len} 0 ${-len} C ${(w * 0.55).toFixed(1)} ${-len} ${w} ${(-len * 0.42).toFixed(1)} 0 0 Z`;

    const frond = (x, y, ang, len, col) => {
      const fingers = 3 + ((Math.random() * 3) | 0);
      return (
        <g key={`frond-${x}-${y}`} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${ang.toFixed(1)})`}>
          {Array.from({ length: fingers }).map((_, i) => {
            const fa = (i - (fingers - 1) / 2) * rnd(15, 21);
            const fl = len * (1 - Math.abs(i - (fingers - 1) / 2) * 0.1) * rnd(0.8, 1);
            return (
              <path
                key={i}
                transform={`rotate(${fa.toFixed(1)})`}
                d={petalPath(fl, rnd(6, 9), col)}
                fill={col}
              />
            );
          })}
        </g>
      );
    };

    const buildDaisy = key => {
      const h = rnd(165, 245);
      const w = 96;
      const cx = w / 2;
      const top = 28;
      const bend = rnd(-15, 15);
      const stemC = pick(STEM);
      const olive = pick(OLIVE);
      const cream = pick(CREAM);
      const n = 11 + ((Math.random() * 4) | 0);

      return (
        <svg key={key} width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: 'visible' }}>
          <g filter="url(#ft-paint)">
            {frond(cx - 3, h - 2, rnd(-40, -20), rnd(48, 65), olive)}
            {frond(cx + 3, h - 2, rnd(20, 40), rnd(48, 65), olive)}
            <path
              d={`M${cx} ${h} C ${(cx + bend).toFixed(1)} ${(h * 0.6).toFixed(1)} ${(cx - bend).toFixed(1)} ${(h * 0.34).toFixed(1)} ${cx} ${top + 6}`}
              stroke={stemC}
              strokeWidth={rnd(3.4, 4.6).toFixed(1)}
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={`M${cx - 11} ${top + 2} q11 15 22 0 q-3 12 -11 12 q-8 0 -11 -12 z`}
              fill={olive}
            />
            {Array.from({ length: n }).map((_, i) => {
              const a = (360 / n) * i + rnd(-4, 4);
              const L = rnd(27, 35);
              return (
                <path
                  key={i}
                  transform={`translate(${cx} ${top}) rotate(${a.toFixed(1)})`}
                  d={petalPath(L, rnd(7, 10), cream)}
                  fill={cream}
                  stroke="#e2d5b0"
                  strokeWidth="1"
                />
              );
            })}
            <circle cx={cx} cy={top} r="9.5" fill={DISC} />
          </g>
        </svg>
      );
    };

    const buildLavender = key => {
      const h = rnd(150, 215);
      const w = 56;
      const cx = w / 2;
      const green = pick(LEAFG);
      const rows = 11 + ((Math.random() * 6) | 0);
      const spikeBot = h * 0.34;
      const spikeTop = 12;

      return (
        <svg key={key} width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: 'visible' }}>
          <g filter="url(#ft-paint)">
            <path
              d={`M${cx} ${h} C ${(cx + rnd(-6, 6)).toFixed(1)} ${(h * 0.6).toFixed(1)} ${(cx + rnd(-4, 4)).toFixed(1)} ${(h * 0.42).toFixed(1)} ${cx} ${(h * 0.3).toFixed(1)}`}
              stroke={green}
              strokeWidth="2.8"
              fill="none"
              strokeLinecap="round"
            />
            {Array.from({ length: rows }).map((_, i) => {
              const t = i / rows;
              const yy = spikeBot + (spikeTop - spikeBot) * t;
              const spread = (1 - t) * 7 + 3;
              return (
                <circle
                  key={i}
                  cx={(cx + rnd(-spread, spread)).toFixed(1)}
                  cy={(yy + rnd(-3, 3)).toFixed(1)}
                  r={rnd(2.6, 4.3).toFixed(1)}
                  fill={pick(LAV)}
                  opacity={rnd(0.78, 1).toFixed(2)}
                />
              );
            })}
          </g>
        </svg>
      );
    };

    const buildFoliage = key => {
      const h = rnd(80, 130);
      const w = 110;
      const cx = w / 2;
      const olive = pick(OLIVE);
      const n = 4 + ((Math.random() * 3) | 0);

      return (
        <svg key={key} width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: 'visible' }}>
          <g filter="url(#ft-paint)">
            {Array.from({ length: n }).map((_, i) =>
              frond(
                cx + rnd(-10, 10),
                h - 2,
                (i - (n - 1) / 2) * rnd(20, 30),
                rnd(h * 0.7, h * 1.05),
                olive
              )
            )}
          </g>
        </svg>
      );
    };

    const newPlants = [];
    const N = 20;
    const nc = 6;
    const centers = [];
    for (let c = 0; c < nc; c++) centers.push(7 + ((c + 0.5) / nc) * 86 + rnd(-4, 4));

    for (let i = 0; i < N; i++) {
      const roll = Math.random();
      const content = roll < 0.5 ? buildDaisy(i) : roll < 0.78 ? buildLavender(i) : buildFoliage(i);
      const xPct = Math.max(3, Math.min(97, centers[i % nc] + rnd(-6, 6)));
      // Root near the natural hill ridge (~120px to 195px from bottom)
      const bottom = 120 + Math.sin((xPct / 100) * Math.PI * 2.5) * 28 + rnd(-12, 16);
      const swayA = rnd(1.4, 3.4).toFixed(1);
      const swayDuration = rnd(4.2, 6.8).toFixed(1);
      const swayDelay = rnd(-3, 0).toFixed(1);
      const scale = rnd(0.65, 0.95).toFixed(2);

      newPlants.push({
        id: i,
        xPct,
        bottom,
        scale,
        swayA,
        swayDuration,
        swayDelay,
        content,
        zIndex: 2 + (i % 3)
      });
    }

    setPlants(newPlants);
  }, []);

  const meadowSrc = isNight
    ? '/assets/land meadow-night.png'
    : '/assets/footer-land.png';

  return (
    <footer className="footer" id="contact">
      {/* SVG Paint texture filter */}
      <div aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <svg>
          <defs>
            <filter id="ft-paint" x="-30%" y="-30%" width="160%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.028 0.04" numOctaves="2" seed="6" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="4" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Top wavy masked crest */}
      <div className="ft-wavy" aria-hidden="true" />

      {/* Meadow hill image */}
      <div className="ft-land-clip" aria-hidden="true">
        <img
          ref={landRef}
          className="ft-land"
          src={meadowSrc}
          alt=""
          style={{ width: isNight ? '106vw' : '100vw' }}
        />
      </div>

      {/* Sown interactive garden with swaying plants */}
      <div ref={gardenRef} className="ft-garden" aria-hidden="true">
        {plants.map(p => (
          <div
            key={p.id}
            className="plant"
            style={{
              left: `${p.xPct}%`,
              bottom: `${p.bottom}px`,
              zIndex: p.zIndex,
              '--g': p.scale
            }}
          >
            <div
              className="sway"
              style={{
                '--swayA': `${p.swayA}deg`,
                '--sway': `${p.swayDuration}s`,
                '--sway-d': `${p.swayDelay}s`
              }}
            >
              {p.content}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Headline & Subtitle */}
      <div className="ft-inner">
        {footer.sub && <p className="ft-sub reveal">{footer.sub}</p>}
        <h2 className="ft-head">
          <button
            className="ft-head-btn"
            type="button"
            data-contact-open
            onClick={() => {
              const drawer = document.getElementById('contact-drawer');
              if (drawer) drawer.classList.add('open');
            }}
          >
            {footer.heading}
          </button>
        </h2>
      </div>

      {/* Bottom Bar: Credits & Socials */}
      <p className="ft-credit">{footer.credit || footer.copyright}</p>
      <nav className="ft-social" aria-label="Social links">
        {personal.social.linkedin && (
          <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        {personal.social.github && (
          <a href={personal.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {personal.social.behance && (
          <a href={personal.social.behance} target="_blank" rel="noopener noreferrer">
            Behance
          </a>
        )}
      </nav>
    </footer>
  );
}
