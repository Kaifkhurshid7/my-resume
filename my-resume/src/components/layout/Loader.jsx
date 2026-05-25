/**
 * @file Loader.jsx
 * @description Full-screen intro loader with letter-by-letter name reveal.
 *
 * Animation sequence:
 * 1. "Kaif Khurshid" appears letter by letter (staggered fade-in)
 * 2. Full name holds briefly
 * 3. All letters except "K" and "K" fade out
 * 4. Remaining "KK" holds centered
 * 5. Entire loader fades/slides out to reveal the site
 *
 * Scattered contextual labels appear around the edges for editorial feel.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_OUT_EXPO } from '../../animations/variants';

const FULL_NAME = 'Kaif Khurshid';
const INITIALS_INDICES = [0, 5]; // indices of 'K' in "Kaif Khurshid"

const LABELS = [
  { text: 'SOFTWARE ENGINEER', position: { top: '8%', left: '8%' } },
  { text: 'XIM UNIVERSITY', position: { top: '12%', right: '8%' } },
  { text: 'MERN STACK', position: { bottom: '18%', left: '10%' } },
  { text: 'DATA SCIENCE', position: { bottom: '10%', right: '10%' } },
  { text: 'ACM CHAIRPERSON', position: { top: '50%', left: '5%' } },
  { text: 'MACHINE LEARNING', position: { top: '45%', right: '6%' } },
];

/** Animation phases */
const PHASE = {
  TYPING: 'typing',       // Letters appear one by one
  HOLD: 'hold',           // Full name visible
  COLLAPSE: 'collapse',   // Non-initial letters fade out
  INITIALS: 'initials',   // Only KK remains
  EXIT: 'exit',           // Loader dismisses
};

const Loader = ({ isVisible, onComplete }) => {
  const [phase, setPhase] = useState(PHASE.TYPING);

  useEffect(() => {
    if (!isVisible) return;

    const timers = [
      // Phase 1 → 2: After all letters have appeared (~1.5s)
      setTimeout(() => setPhase(PHASE.HOLD), 1600),
      // Phase 2 → 3: Hold full name briefly
      setTimeout(() => setPhase(PHASE.COLLAPSE), 2200),
      // Phase 3 → 4: After collapse animation
      setTimeout(() => setPhase(PHASE.INITIALS), 2800),
      // Phase 4 → 5: Hold initials then exit
      setTimeout(() => {
        setPhase(PHASE.EXIT);
        if (onComplete) onComplete();
      }, 3400),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isVisible, onComplete]);

  const isInitialLetter = (index) => INITIALS_INDICES.includes(index);

  const getLetterOpacity = (index) => {
    if (phase === PHASE.COLLAPSE || phase === PHASE.INITIALS || phase === PHASE.EXIT) {
      return isInitialLetter(index) ? 1 : 0;
    }
    return 1;
  };

  const getLetterSpacing = (index) => {
    // When collapsing, move initials closer together
    if (phase === PHASE.INITIALS || phase === PHASE.EXIT) {
      if (index === 0) return { x: 20 };
      if (index === 5) return { x: -20 };
    }
    return { x: 0 };
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          {/* Scattered contextual labels */}
          {LABELS.map((label, i) => (
            <motion.span
              key={i}
              className="loader-label"
              style={label.position}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
            >
              {label.text}
            </motion.span>
          ))}

          {/* Name / Initials — letter by letter */}
          <div className="loader-name-wrap">
            {FULL_NAME.split('').map((char, i) => (
              <motion.span
                key={i}
                className="loader-letter"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: getLetterOpacity(i),
                  y: 0,
                  ...getLetterSpacing(i),
                }}
                transition={{
                  opacity: {
                    delay: phase === PHASE.TYPING ? i * 0.08 : 0,
                    duration: phase === PHASE.COLLAPSE ? 0.4 : 0.3,
                    ease: EASE_OUT_EXPO,
                  },
                  y: {
                    delay: phase === PHASE.TYPING ? i * 0.08 : 0,
                    duration: 0.4,
                    ease: EASE_OUT_EXPO,
                  },
                  x: {
                    duration: 0.5,
                    ease: EASE_OUT_EXPO,
                  },
                }}
                style={{
                  display: 'inline-block',
                  width: char === ' ' ? '0.3em' : 'auto',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Bottom tagline */}
          <motion.p
            className="loader-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            CREATIVE DEVELOPER
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
