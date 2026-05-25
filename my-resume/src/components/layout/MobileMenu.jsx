/**
 * @file MobileMenu.jsx
 * @description Full-screen mobile navigation overlay.
 *
 * Slides in from the right with staggered link animations.
 * Uses AnimatePresence for smooth mount/unmount transitions.
 * Closes on link click to provide seamless single-page navigation.
 */

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV_LINKS } from '../../data/portfolio';
import { slideInRight, staggerItem } from '../../animations/variants';

const MobileMenu = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        {...slideInRight}
      >
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          style={{
            position: 'absolute',
            top: 32,
            right: 32,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <X size={24} />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={onClose}
              {...staggerItem(i)}
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 52,
                lineHeight: 1.1,
                color: '#0D0D0D',
                textDecoration: 'none',
                letterSpacing: '-0.03em',
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;
