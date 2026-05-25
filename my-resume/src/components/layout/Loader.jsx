/**
 * @file Loader.jsx
 * @description Full-screen intro loader with letter-by-letter name reveal.
 *
 * Animation sequence:
 * 1. "Kaif Khurshid" appears letter by letter (staggered fade-in)
 * 2. Full name holds briefly
 * 3. All letters except "K" and "K" fade out
 * 4. Remaining "KK" centers with size contrast (big K + small K)
 * 5. Entire loader fades out to reveal the site
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
  TYPING: 'typing',
  HOLD: 'hold',
  COLLAPSE: 'collapse',
  INITIALS: 'initials',
  EXIT: 'exit',
};

const Loader = ({ isVisible, onComplete }) => {
  const [phase, setPhase] = useState(PHASE.TYPING);

  useEffect(() => {
    if (!isVisible) return;

    const timers = [
      setTimeout(() => setPhase(PHASE.HOLD), 1600),
      setTimeout(() => setPhase(PHASE.COLLAPSE), 2200),
      setTimeout(() => setPhase(PHASE.INITIALS), 2800),
      setTimeout(() => {
        setPhase(PHASE.EXIT);
        if (onComplete) onComplete();
      }, 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isVisible, onComplete]);

  const isInitialLetter = (index) => INITIALS_INDICES.includes(index);
  const isInitialsPhase = phase === PHASE.INITIALS || phase === PHASE.EXIT;
  const isCollapsingOrAfter = phase === PHASE.COLLAPSE || isInitialsPhase;

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

          {/* Full name — letter by letter, then collapses to KK */}
          <motion.div
            className="loader-name-wrap"
            animate={isInitialsPhase ? { gap: '4px' } : { gap: '0px' }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          >
            {FULL_NAME.split('').map((char, i) => {
              const isInitial = isInitialLetter(i);
              const isFirstK = i === 0;

              // During initials phase: big K (first) + small k (second)
              const getFontSize = () => {
                if (isInitialsPhase && isInitial) {
                  return isFirstK ? 'clamp(64px, 12vw, 120px)' : 'clamp(36px, 6vw, 64px)';
                }
                return undefined; // use CSS default
              };

              return (
                <motion.span
                  key={i}
                  className="loader-letter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isCollapsingOrAfter && !isInitial ? 0 : 1,
                    y: 0,
                    scale: 1,
                    width: isCollapsingOrAfter && !isInitial ? 0 : 'auto',
                    marginRight: isCollapsingOrAfter && !isInitial ? 0 : undefined,
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
                    width: { duration: 0.5, ease: EASE_OUT_EXPO },
                  }}
                  style={{
                    display: 'inline-block',
                    width: char === ' ' ? '0.3em' : undefined,
                    fontSize: getFontSize(),
                    alignSelf: isInitialsPhase && isInitial && !isFirstK ? 'flex-end' : 'center',
                    transition: 'font-size 0.5s cubic-bezier(0.22, 1, 0.36, 1), align-self 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                    overflow: 'hidden',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              );
            })}
          </motion.div>

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
