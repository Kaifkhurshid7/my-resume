/**
 * @file variants.js
 * @description Reusable Framer Motion animation configuration.
 *
 * Centralizing animation constants ensures visual consistency across
 * all animated components and makes timing adjustments trivial.
 */

/**
 * Custom easing curve — fast start, smooth deceleration.
 * Produces a natural, premium feel without being sluggish.
 */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

/**
 * Default transition preset used by most scroll-triggered animations.
 */
export const DEFAULT_TRANSITION = {
  duration: 0.6,
  ease: EASE_OUT_EXPO,
};

/**
 * Viewport detection settings for whileInView triggers.
 * `once: true` prevents re-animation on scroll-back.
 */
export const VIEWPORT_CONFIG = {
  once: true,
  margin: '-60px',
};

/**
 * Slide-up fade animation — the primary entrance effect.
 * @param {number} delay - Stagger delay in seconds.
 * @param {number} y - Initial vertical offset in pixels.
 */
export const fadeInUp = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT_CONFIG,
  transition: { ...DEFAULT_TRANSITION, delay },
});

/**
 * Slide-in from right — used for mobile menu and panel reveals.
 */
export const slideInRight = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { ease: EASE_OUT_EXPO, duration: 0.5 },
};

/**
 * Staggered list item animation for sequential reveals.
 * @param {number} index - Item index for stagger calculation.
 * @param {number} staggerDelay - Delay between each item.
 */
export const staggerItem = (index, staggerDelay = 0.07) => ({
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: index * staggerDelay },
});
