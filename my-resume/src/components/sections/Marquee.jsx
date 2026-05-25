/**
 * @file Marquee.jsx
 * @description Infinite horizontal scrolling ticker displaying skill keywords.
 *
 * Uses pure CSS animation (scroll-marquee keyframe) for smooth 60fps
 * performance without JavaScript intervention. The track is duplicated
 * in CSS via translateX(-50%) to create a seamless loop effect.
 */

import { MARQUEE_ITEMS } from '../../data/portfolio';

const Marquee = () => (
  <div className="marquee-wrap" aria-hidden="true">
    <div className="marquee-track">
      {MARQUEE_ITEMS.map((item, i) => (
        <span className="marquee-item" key={i}>{item}</span>
      ))}
      {/* Duplicate for seamless infinite scroll */}
      {MARQUEE_ITEMS.map((item, i) => (
        <span className="marquee-item" key={`dup-${i}`}>{item}</span>
      ))}
    </div>
  </div>
);

export default Marquee;
