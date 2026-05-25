/**
 * @file Hero.jsx
 * @description Above-the-fold hero section with personal introduction.
 *
 * Two-column layout (stacks on mobile):
 * - Left: role tag, headline, bio, action buttons + social links
 * - Right: profile photo with floating badge
 *
 * All personal data is sourced from the centralized data store,
 * keeping this component purely presentational.
 */

import { Github, Linkedin, Mail, Download } from 'lucide-react';
import FadeIn from '../common/FadeIn';
import { PERSONAL } from '../../data/portfolio';
import kaifImg from '../../assets/kaif.jpg';

const Hero = () => (
  <section id="home" className="hero section">
    {/* Left column — text content */}
    <div className="hero-left">
      <FadeIn>
        <p className="hero-tag">{PERSONAL.role}</p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="hero-title">
          Building<br />
          <em>Scalable</em><br />
          Systems.
        </h1>
        <p className="hero-desc">{PERSONAL.bio}</p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="hero-actions">
          <a href={PERSONAL.resumeUrl} className="btn-fill">
            <Download size={13} /> Resume
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub profile"
          >
            <Github size={16} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="icon-link"
            aria-label="Send email"
          >
            <Mail size={16} />
          </a>
        </div>
      </FadeIn>
    </div>

    {/* Right column — profile photo */}
    <div className="hero-right" style={{ alignItems: 'center' }}>
      <FadeIn delay={0.15}>
        <div className="hero-photo-wrap">
          <img
            src={kaifImg}
            alt={`${PERSONAL.name} — ${PERSONAL.role}`}
            className="hero-photo"
            loading="eager"
          />
          <div className="hero-badge">{PERSONAL.tagline}</div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default Hero;
