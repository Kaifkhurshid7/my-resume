/**
 * @file MobileMenu.jsx
 * @description Full-screen mobile navigation overlay with enhanced design.
 *
 * Features:
 * - Navigation links with staggered animations
 * - Personal tagline/message
 * - Social media links at the bottom
 * - Modern, spacious layout
 */

import { motion, AnimatePresence } from 'framer-motion';
import { X, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { NAV_LINKS, PERSONAL } from '../../data/portfolio';
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
        {/* Close Button */}
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
            color: '#0D0D0D',
          }}
        >
          <X size={24} />
        </button>

        {/* Navigation Links */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16, marginTop: -40 }}>
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={onClose}
              {...staggerItem(i)}
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 48,
                lineHeight: 1.1,
                color: '#0D0D0D',
                textDecoration: 'none',
                letterSpacing: '-0.03em',
                fontWeight: 400,
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Bottom Section: Message + Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            paddingTop: 40,
            borderTop: '1px solid #E5E2DC',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}
        >
          {/* Tagline / Message */}
          <div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                lineHeight: 1.7,
                color: '#6B6B6B',
                fontWeight: 300,
                margin: '0 0 4px 0',
              }}
            >
              Building intelligent systems with code & creativity.
            </p>
            <p
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: 9,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#C8C8C8',
                margin: 0,
              }}
            >
              Think & Do
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a
              href="https://twitter.com/kaifkhurshid7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              style={{
                width: 40,
                height: 40,
                border: '1px solid #E5E2DC',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B6B6B',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0D0D0D';
                e.currentTarget.style.backgroundColor = '#0D0D0D';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E2DC';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#6B6B6B';
              }}
            >
              <Twitter size={16} />
            </a>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: 40,
                height: 40,
                border: '1px solid #E5E2DC',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B6B6B',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0A66FF';
                e.currentTarget.style.backgroundColor = '#0A66FF';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E2DC';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#6B6B6B';
              }}
            >
              <Linkedin size={16} />
            </a>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                width: 40,
                height: 40,
                border: '1px solid #E5E2DC',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B6B6B',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0D0D0D';
                e.currentTarget.style.backgroundColor = '#0D0D0D';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E2DC';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#6B6B6B';
              }}
            >
              <Github size={16} />
            </a>

            <a
              href={`mailto:${PERSONAL.email}`}
              aria-label="Email"
              style={{
                width: 40,
                height: 40,
                border: '1px solid #E5E2DC',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B6B6B',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0D0D0D';
                e.currentTarget.style.backgroundColor = '#0D0D0D';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E2DC';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#6B6B6B';
              }}
            >
              <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;
