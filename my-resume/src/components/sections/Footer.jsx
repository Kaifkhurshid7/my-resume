/**
 * @file Footer.jsx
 * @description Contact section and site footer.
 *
 * Features:
 * - Large typographic CTA headline
 * - Contact cards grid (email, LinkedIn, GitHub) with hover inversion
 * - Bottom bar with copyright, back-to-top link, and tagline
 *
 * Contact data is driven from the centralized CONTACT_LINKS array.
 */

import { Mail, Linkedin, Github } from 'lucide-react';
import FadeIn from '../common/FadeIn';
import { CONTACT_LINKS, PERSONAL } from '../../data/portfolio';

/** Maps icon string identifiers to Lucide components */
const ICON_MAP = { Mail, Linkedin, Github };

const Footer = () => (
  <footer id="contact" className="footer section" style={{ borderBottom: 'none' }}>
    <FadeIn>
      <h2 className="footer-title">
        Let&apos;s<br /><em>Connect.</em>
      </h2>
    </FadeIn>

    <FadeIn delay={0.1}>
      <div className="footer-contact-grid">
        {CONTACT_LINKS.map((contact) => {
          const IconComponent = ICON_MAP[contact.icon];
          return (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto') ? undefined : '_blank'}
              rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="contact-card"
              aria-label={`Contact via ${contact.label}`}
            >
              {IconComponent && <IconComponent size={16} style={{ color: '#6B6B6B', marginBottom: 4 }} />}
              <span className="contact-label">{contact.label}</span>
              <span className="contact-value">{contact.value}</span>
            </a>
          );
        })}
      </div>
    </FadeIn>

    <FadeIn delay={0.15}>
      <div className="footer-bottom">
        <p className="footer-copy">&copy; 2026 {PERSONAL.name} · XIM University</p>
        <a href="#home" className="footer-copy" style={{ color: '#0D0D0D', textDecoration: 'none' }}>
          ↑ Back to Top
        </a>
        <p className="footer-copy">{PERSONAL.role} · {PERSONAL.tagline}</p>
      </div>
    </FadeIn>
  </footer>
);

export default Footer;
