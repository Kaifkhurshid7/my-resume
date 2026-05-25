/**
 * @file Navbar.jsx
 * @description Fixed top navigation bar with desktop links and mobile menu trigger.
 *
 * Renders a frosted-glass sticky nav with:
 * - Logo / name on the left
 * - Desktop navigation links (hidden on mobile)
 * - CTA button + mobile hamburger toggle
 *
 * The mobile menu itself is rendered separately (MobileMenu.jsx) and
 * controlled via the `onMenuOpen` callback prop.
 */

import { Menu, Mail } from 'lucide-react';
import { NAV_LINKS, PERSONAL } from '../../data/portfolio';

const Navbar = ({ onMenuOpen }) => (
  <nav className="nav" role="navigation" aria-label="Main navigation">
    <div className="nav-logo">{PERSONAL.name}</div>

    <ul className="nav-links">
      {NAV_LINKS.map((link) => (
        <li key={link.id}>
          <a href={`#${link.id}`}>{link.name}</a>
        </li>
      ))}
    </ul>

    <div className="nav-cta">
      <a href="#contact" className="btn-fill" style={{ fontSize: '9px' }}>
        Get In Touch
      </a>
      <button
        onClick={onMenuOpen}
        className="mobile-menu-btn"
        aria-label="Open navigation menu"
      >
        <Menu size={20} />
      </button>
    </div>
  </nav>
);

export default Navbar;
