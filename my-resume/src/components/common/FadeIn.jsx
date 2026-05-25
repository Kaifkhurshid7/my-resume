/**
 * @file FadeIn.jsx
 * @description Reusable scroll-triggered fade-in animation wrapper.
 *
 * Wraps any children with a vertical slide-up + opacity transition
 * that fires once when the element enters the viewport. Used across
 * all sections for consistent entrance animations.
 *
 * @example
 * <FadeIn delay={0.1}>
 *   <h2>Section Title</h2>
 * </FadeIn>
 */

import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

const FadeIn = ({ children, delay = 0, y = 24 }) => (
  <motion.div {...fadeInUp(delay, y)}>
    {children}
  </motion.div>
);

export default FadeIn;
