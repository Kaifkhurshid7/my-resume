/**
 * @file Loader.jsx
 * @description Highly stylized, AI-system inspired loading screen.
 *
 * Animation logic:
 * 1. Progress counter flickers from 00.00 to 100.00% rapidly (computational feel).
 * 2. A four-stage pipeline (Ingest → Embed → Retrieve → Serve) lights up as
 *    progress passes each threshold, with a status line naming the current stage.
 * 3. Screen exit is a staggered 5-column "shutter" slide-up, revealing the site
 *    behind it like a hyper-modern aperture.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/** Boot stages; `at` is the progress (%) at which the stage becomes active. */
const STAGES = [
  { label: 'Ingest', status: 'chunking documents', at: 0 },
  { label: 'Embed', status: 'generating embeddings', at: 25 },
  { label: 'Retrieve', status: 'querying vector store', at: 50 },
  { label: 'Serve', status: 'starting API server', at: 75 },
];

const MONO = '"Space Mono", monospace';

const Loader = ({ isVisible, onComplete }) => {
  const [displayProgress, setDisplayProgress] = useState('00.00');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2800; // total loading duration in ms
    const startTime = Date.now();
    let rAF;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const fraction = Math.min(elapsed / duration, 1);
      const baseProgress = fraction * 100;
      setProgress(baseProgress);

      if (fraction >= 1) {
        setProgress(100);
        setDisplayProgress('100.00');
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500); // Brief pause at 100% before triggering exit
      } else {
        // Fast random jitter gives a computational / crunching numbers effect
        const jitter = Math.random() * 0.99;
        setDisplayProgress((baseProgress + jitter).toFixed(2).padStart(5, '0'));
        rAF = requestAnimationFrame(animate);
      }
    };

    rAF = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rAF);
  }, [isVisible, onComplete]);

  const activeStage = STAGES.reduce((acc, st, i) => (progress >= st.at ? i : acc), 0);
  const done = progress >= 100;

  // Framer Motion variants
  const panelVariants = {
    initial: { height: '100vh', top: 0 },
    exit: (i) => ({
      height: 0,
      transition: {
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1], // Premium easing (quintic)
        delay: i * 0.08,
      },
    }),
  };

  const overlayVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader-wrapper"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            pointerEvents: 'none',
          }}
          // Parent holds the unmount for 1.4s to let the staggered columns finish
          exit={{ opacity: 1, transition: { duration: 1.4 } }}
        >
          {/* 5 Background Shutter Panels */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`panel-${i}`}
              custom={i}
              variants={panelVariants}
              initial="initial"
              exit="exit"
              style={{
                flex: 1,
                backgroundColor: '#0D0D0D', // Dark Ink
                borderRight: i < 4 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                transformOrigin: 'top',
              }}
            />
          ))}

          {/* Content Overlay (Absolute, laid over the panels) */}
          <motion.div
            variants={overlayVariants}
            initial="initial"
            exit="exit"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              padding: 'clamp(20px, 4vw, 40px)',
              color: '#FFFFFF',
            }}
          >
            {/* Top Row: System Status & Progress */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em' }}>
                  BOOTING // RAG_PIPELINE
                </span>
                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}>
                  VECTOR_STORE · LLM_AGENTS · API
                </span>
              </div>

              <div style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: 'clamp(24px, 4vw, 32px)',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '-0.03em'
              }}>
                {displayProgress}%
              </div>
            </div>

            {/* Center Area: Radial Graphic & Typography */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

              {/* Pipeline: Ingest → Embed → Retrieve → Serve */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ marginBottom: '40px', width: 'min(440px, 86vw)' }}
              >
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                  {/* Track */}
                  <div style={{ position: 'absolute', left: 6, right: 6, top: 5, height: 1, backgroundColor: 'rgba(255,255,255,0.12)' }} />
                  {/* Fill */}
                  <div
                    style={{
                      position: 'absolute', left: 6, top: 5, height: 1,
                      width: `calc((100% - 12px) * ${progress / 100})`,
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                  {STAGES.map((st, i) => {
                    const reached = i <= activeStage;
                    return (
                      <div key={st.label} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                        <span
                          style={{
                            width: 11, height: 11, borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.5)',
                            backgroundColor: reached ? '#FFFFFF' : '#0D0D0D',
                            boxShadow: i === activeStage && !done ? '0 0 0 4px rgba(255,255,255,0.12)' : 'none',
                            transition: 'all 0.3s',
                          }}
                        />
                        <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: reached ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.25)', transition: 'color 0.3s' }}>
                          {st.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Name Reveal */}
              <motion.h1
                initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: 'clamp(40px, 8vw, 84px)',
                  lineHeight: 1,
                  margin: 0,
                  letterSpacing: '-0.02em'
                }}
              >
                Kaif Khurshid
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: '16px'
                }}
              >
                AI & Backend Developer
              </motion.p>

              <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginTop: 40, height: 14 }}>
                {done ? '> ready' : `> ${STAGES[activeStage].status}...`}
              </p>
            </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', overflow: 'hidden' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>
                  LLM Agents · RAG · Backend APIs
                </span>
                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>
                  PYTHON · DJANGO · FASTAPI
                </span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60px' }}
                transition={{ delay: 1, duration: 1 }}
                style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
