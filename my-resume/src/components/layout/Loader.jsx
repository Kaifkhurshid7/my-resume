/**
 * @file Loader.jsx
 * @description Highly stylized, AI-system inspired loading screen.
 *
 * Animation logic:
 * 1. Progress counter flickers from 00.00 to 100.00% rapidly (computational feel).
 * 2. Visuals combine a spinning geometric "node" and elegant typography.
 * 3. Screen exit is a staggered 5-column "shutter" slide-up, revealing the site
 *    behind it like a hyper-modern aperture.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isVisible, onComplete }) => {
  const [displayProgress, setDisplayProgress] = useState('00.00');

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2800; // total loading duration in ms
    const startTime = Date.now();
    let rAF;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const fraction = Math.min(elapsed / duration, 1);
      const baseProgress = fraction * 100;

      if (fraction >= 1) {
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
                  SYS.BOOT_SEQ // V_1.0
                </span>
                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}>
                  AI_ENVIRONMENT_INIT
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

              {/* Revolving Data Node (SVG) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{ marginBottom: '32px', position: 'relative', width: '80px', height: '80px' }}
              >
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  {/* Outer Dashed Orbit */}
                  <motion.circle
                    cx="50" cy="50" r="46"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    style={{ transformOrigin: '50% 50%' }}
                  />
                  {/* Inner Solid Ring */}
                  <motion.circle
                    cx="50" cy="50" r="30"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                    style={{ transformOrigin: '50% 50%' }}
                  />
                  {/* Pulsing Core */}
                  <motion.circle
                    cx="50" cy="50" r="10"
                    fill="#FFFFFF"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  />
                </svg>

                {/* Crosshairs overlaying SVG */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ width: '1px', height: '140%', backgroundColor: 'rgba(255,255,255,0.1)', position: 'absolute' }} />
                  <div style={{ height: '1px', width: '140%', backgroundColor: 'rgba(255,255,255,0.1)', position: 'absolute' }} />
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
                Data Science // Backend Architecture
              </motion.p>
            </div>

            {/* Bottom Row: Aesthetic Metrics */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', overflow: 'hidden' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>
                  LAT: 23° 38' N / LONG: 85° 30' E
                </span>
                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>
                  EST. 2026 // NEURAL NETWORK SECURE
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
