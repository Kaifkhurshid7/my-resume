import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Github, Linkedin, Mail, Download, Terminal,
  Database, Brain, Globe, ExternalLink, Menu, X,
  Zap, Award, ChevronRight, Code, Sparkles, MapPin, Calendar, GraduationCap
} from 'lucide-react';
import kaifImg from './assets/kaif.jpg';

// ─── INLINE STYLES ────────────────────────────────────────────────────────────
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #FAF9F6;
    --white: #FFFFFF;
    --ink: #0D0D0D;
    --ink2: #1A1A1A;
    --mid: #6B6B6B;
    --light: #C8C8C8;
    --rule: #E5E2DC;
    --accent: #1A1A1A;
    --blue: #0A66FF;
    --yellow: #F5C518;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--cream);
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  ::selection { background: var(--ink); color: var(--white); }

  .serif { font-family: 'DM Serif Display', serif; }
  .mono { font-family: 'Space Mono', monospace; }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; width: 100%; z-index: 100;
    padding: 20px 40px;
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 1px solid var(--rule);
    background: rgba(250, 249, 246, 0.92);
    backdrop-filter: blur(12px);
    transition: padding 0.3s;
  }

  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 1.1rem;
    color: var(--ink);
    letter-spacing: -0.02em;
  }

  .nav-links {
    display: flex; gap: 36px; list-style: none;
  }

  .nav-links a {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--mid);
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--ink); }

  .nav-cta {
    display: flex; align-items: center; gap: 16px;
  }

  .btn-outline {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 10px 20px;
    border: 1px solid var(--ink);
    border-radius: 100px;
    color: var(--ink);
    background: transparent;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s;
    display: flex; align-items: center; gap: 8px;
  }
  .btn-outline:hover { background: var(--ink); color: var(--white); }

  .btn-fill {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 12px 28px;
    border-radius: 100px;
    color: var(--white);
    background: var(--ink);
    cursor: pointer;
    text-decoration: none;
    border: none;
    display: flex; align-items: center; gap: 8px;
    transition: all 0.25s;
  }
  .btn-fill:hover { background: #333; transform: translateY(-1px); }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding-top: 80px;
    border-bottom: 1px solid var(--rule);
  }

  .hero-left {
    padding: 80px 60px 80px 40px;
    display: flex; flex-direction: column; justify-content: space-between;
    border-right: 1px solid var(--rule);
  }

  .hero-right {
    padding: 80px 40px 80px 60px;
    display: flex; flex-direction: column; justify-content: space-between;
  }

  .hero-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: var(--mid);
    display: flex; align-items: center; gap: 12px;
  }
  .hero-tag::before {
    content: '';
    width: 24px; height: 1px;
    background: var(--mid);
    display: inline-block;
  }

  .hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(56px, 8vw, 110px);
    line-height: 0.92;
    letter-spacing: -0.03em;
    color: var(--ink);
    margin: 32px 0;
  }
  .hero-title em { font-style: italic; color: var(--mid); }

  .hero-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    line-height: 1.75;
    color: var(--mid);
    max-width: 380px;
    font-weight: 300;
  }

  .hero-actions {
    display: flex; align-items: center; gap: 16px;
    margin-top: 48px;
    flex-wrap: wrap;
  }

  .icon-link {
    width: 44px; height: 44px;
    border: 1px solid var(--rule);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: var(--mid);
    text-decoration: none;
    transition: all 0.2s;
  }
  .icon-link:hover { border-color: var(--ink); color: var(--ink); background: var(--ink); color: var(--white); }

  .hero-photo-wrap {
    position: relative;
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
  }

  .hero-photo {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    border-radius: 24px;
    display: block;
    filter: none;
  }

  .hero-badge {
    position: absolute;
    bottom: -16px; right: -16px;
    background: var(--white);
    color: var(--ink);
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    padding: 14px 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .hero-stats {
    display: flex; gap: 48px;
    margin-top: 64px;
    padding-top: 32px;
    border-top: 1px solid var(--rule);
  }
  .stat-num {
    font-family: 'DM Serif Display', serif;
    font-size: 36px;
    color: var(--ink);
    display: block;
    letter-spacing: -0.03em;
  }
  .stat-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--mid);
  }

  /* SECTION SHARED */
  .section {
    border-bottom: 1px solid var(--rule);
  }

  .section-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid var(--rule);
  }

  .section-header-left {
    padding: 60px 60px 60px 40px;
    border-right: 1px solid var(--rule);
  }

  .section-header-right {
    padding: 60px 40px 60px 60px;
    display: flex; align-items: flex-end;
  }

  .section-eyebrow {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: var(--mid);
    margin-bottom: 20px;
    display: flex; align-items: center; gap: 12px;
  }
  .section-eyebrow::before {
    content: '';
    width: 20px; height: 1px;
    background: var(--mid);
  }

  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(40px, 5vw, 72px);
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--ink);
  }
  .section-title em { font-style: italic; color: var(--mid); }

  .section-note {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    line-height: 1.7;
    color: var(--mid);
    font-weight: 300;
    max-width: 280px;
  }

  /* TECH GRID */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 0;
  }

  .tech-card {
    padding: 48px 40px;
    border-right: 1px solid var(--rule);
    transition: background 0.3s;
  }
  .tech-card:last-child { border-right: none; }
  .tech-card:hover { background: var(--white); }

  .tech-icon {
    width: 48px; height: 48px;
    border: 1px solid var(--rule);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 28px;
    color: var(--ink2);
    transition: all 0.2s;
  }
  .tech-card:hover .tech-icon { border-color: var(--ink); background: var(--ink); color: var(--white); }

  .tech-card-title {
    font-family: 'DM Serif Display', serif;
    font-size: 18px;
    color: var(--ink);
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }

  .tech-tag {
    display: inline-block;
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--mid);
    border: 1px solid var(--rule);
    padding: 5px 10px;
    border-radius: 100px;
    margin: 3px 2px;
    transition: all 0.2s;
  }
  .tech-card:hover .tech-tag { border-color: var(--ink); color: var(--ink); }

  .tech-card-dark {
    background: var(--ink);
    padding: 48px 40px;
    display: flex; flex-direction: column; justify-content: space-between;
  }

  /* EDUCATION */
  .edu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .edu-card {
    padding: 48px 40px;
    border-right: 1px solid var(--rule);
    display: flex; flex-direction: column; justify-content: space-between;
    min-height: 320px;
    transition: background 0.3s;
  }
  .edu-card:last-child { border-right: none; }
  .edu-card:hover { background: var(--white); }

  .edu-degree {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--mid);
    margin-bottom: 12px;
  }

  .edu-title {
    font-family: 'DM Serif Display', serif;
    font-size: 24px;
    line-height: 1.1;
    color: var(--ink);
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }

  .edu-school {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: var(--mid);
    font-weight: 400;
    line-height: 1.5;
  }

  .edu-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--mid);
  }

  /* PROJECTS */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .project-card {
    padding: 56px 56px 48px;
    border-right: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    transition: background 0.3s;
    display: flex; flex-direction: column;
    position: relative;
    overflow: hidden;
  }
  .project-card:nth-child(2n) { border-right: none; }
  .project-card:nth-child(3), .project-card:nth-child(4) { border-bottom: none; }
  .project-card:hover { background: var(--white); }

  .project-num {
    font-family: 'DM Serif Display', serif;
    font-size: 96px;
    color: var(--rule);
    line-height: 1;
    letter-spacing: -0.05em;
    position: absolute;
    top: 24px; right: 32px;
    transition: color 0.3s;
    pointer-events: none;
  }
  .project-card:hover .project-num { color: #E8E5DF; }

  .project-type {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--mid);
    margin-bottom: 16px;
  }

  .project-title {
    font-family: 'DM Serif Display', serif;
    font-size: 32px;
    line-height: 1.05;
    color: var(--ink);
    letter-spacing: -0.025em;
    margin-bottom: 20px;
    transition: font-style 0.2s;
  }
  .project-card:hover .project-title { font-style: italic; }

  .project-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    line-height: 1.75;
    color: var(--mid);
    font-weight: 300;
    flex-grow: 1;
    margin-bottom: 28px;
  }

  .project-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 24px;
    border-top: 1px solid var(--rule);
    flex-wrap: wrap;
    gap: 12px;
  }

  .project-tags {
    display: flex; flex-wrap: wrap; gap: 6px;
  }

  .project-links {
    display: flex; gap: 8px;
  }

  /* ACHIEVEMENTS */
  .achieve-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .achieve-main {
    border-right: 1px solid var(--rule);
  }

  .achieve-card {
    padding: 56px 60px 56px 40px;
    border-bottom: 1px solid var(--rule);
    transition: background 0.3s;
  }
  .achieve-card:last-child { border-bottom: none; }
  .achieve-card:hover { background: var(--white); }

  .achieve-badge {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    padding: 8px 14px;
    border: 1px solid var(--rule);
    border-radius: 100px;
    color: var(--mid);
    margin-bottom: 28px;
  }

  .achieve-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(26px, 3vw, 40px);
    line-height: 1.1;
    color: var(--ink);
    letter-spacing: -0.025em;
    margin-bottom: 16px;
  }

  .achieve-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    line-height: 1.75;
    color: var(--mid);
    font-weight: 300;
    max-width: 440px;
    margin-bottom: 24px;
  }

  .achieve-meta {
    display: flex; gap: 24px; flex-wrap: wrap;
  }
  .achieve-meta-item {
    display: flex; align-items: center; gap: 6px;
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--light);
  }

  /* ROLES */
  .roles-col {
    display: flex; flex-direction: column;
  }

  .role-card {
    padding: 40px;
    border-bottom: 1px solid var(--rule);
    flex: 1;
    transition: background 0.3s;
  }
  .role-card:last-child { border-bottom: none; }
  .role-card:hover { background: var(--white); }

  .role-chip {
    font-family: 'Space Mono', monospace;
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--mid);
    border: 1px solid var(--rule);
    padding: 4px 10px;
    border-radius: 100px;
    display: inline-block;
    margin-bottom: 16px;
  }

  .role-title {
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    color: var(--ink);
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }

  .role-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    line-height: 1.7;
    color: var(--mid);
    font-weight: 300;
  }

  /* FOOTER */
  .footer {
    padding: 120px 40px 60px;
  }

  .footer-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(60px, 10vw, 140px);
    line-height: 0.9;
    letter-spacing: -0.04em;
    color: var(--ink);
    margin-bottom: 80px;
  }
  .footer-title em { font-style: italic; color: var(--rule); }

  .footer-contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border: 1px solid var(--rule);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 80px;
  }

  .contact-card {
    padding: 36px 32px;
    border-right: 1px solid var(--rule);
    text-decoration: none;
    transition: background 0.2s;
    display: flex; flex-direction: column; gap: 8px;
  }
  .contact-card:last-child { border-right: none; }
  .contact-card:hover { background: var(--ink); }
  .contact-card:hover * { color: var(--white) !important; }

  .contact-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--mid);
  }

  .contact-value {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--ink);
    font-weight: 500;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 32px;
    border-top: 1px solid var(--rule);
    flex-wrap: wrap;
    gap: 16px;
  }

  .footer-copy {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--light);
  }

  /* MOBILE MENU */
  .mobile-menu {
    position: fixed; inset: 0; z-index: 200;
    background: var(--white);
    padding: 40px;
    display: flex; flex-direction: column; justify-content: center;
  }

  /* MARQUEE */
  .marquee-wrap {
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    padding: 16px 0;
    overflow: hidden;
    background: var(--ink);
  }

  .marquee-track {
    display: flex; gap: 0;
    animation: scroll-marquee 20s linear infinite;
    white-space: nowrap;
  }

  .marquee-item {
    font-family: 'DM Serif Display', serif;
    font-size: 13px;
    font-style: italic;
    color: rgba(255,255,255,0.6);
    padding: 0 32px;
    display: flex; align-items: center; gap: 24px;
    flex-shrink: 0;
  }
  .marquee-item::after {
    content: '·';
    color: rgba(255,255,255,0.2);
  }

  @keyframes scroll-marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--ink);
    padding: 8px;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .nav { padding: 16px 20px; }
    .nav-links { display: none; }
    .nav-cta a { display: none; }
    .mobile-menu-btn { display: block; }
    .hero { grid-template-columns: 1fr; padding-top: 72px; }
    .hero-left { padding: 48px 24px; border-right: none; border-bottom: 1px solid var(--rule); }
    .hero-right { padding: 48px 24px; }
    .section-header { grid-template-columns: 1fr; }
    .section-header-left { padding: 48px 24px; border-right: none; border-bottom: 1px solid var(--rule); }
    .section-header-right { padding: 32px 24px; }
    .tech-grid { grid-template-columns: 1fr 1fr; }
    .tech-card { border-right: none; border-bottom: 1px solid var(--rule); }
    .tech-card-dark { border-bottom: 1px solid var(--rule); }
    .edu-grid { grid-template-columns: 1fr; }
    .edu-card { border-right: none; border-bottom: 1px solid var(--rule); }
    .projects-grid { grid-template-columns: 1fr; }
    .project-card { border-right: none; }
    .achieve-layout { grid-template-columns: 1fr; }
    .achieve-main { border-right: none; border-bottom: 1px solid var(--rule); }
    .footer-contact-grid { grid-template-columns: 1fr; }
    .contact-card { border-right: none; border-bottom: 1px solid var(--rule); }
    .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
    .footer { padding: 80px 24px 48px; }
  }
`;
document.head.appendChild(style);

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

const FadeIn = ({ children, delay = 0, y = 24 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// ─── APP ───────────────────────────────────────────────────────────────────────
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Intro', id: 'home' },
    { name: 'Tech', id: 'tech' },
    { name: 'Work', id: 'work' },
    { name: 'Activities', id: 'activities' },
    { name: 'Contact', id: 'contact' },
  ];

  const marqueeItems = [
    'MERN Stack',
    'Machine Learning',
    'Artificial Intelligence',
    'Deep Learning',
    'Natural Language Processing',
    'Big Data',
    'Data Science',
    'Operating Systems',
    'Database Systems',
    'System Design'
  ];

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">Kaif Khurshid</div>
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.id}><a href={`#${link.id}`}>{link.name}</a></li>
          ))}
        </ul>
        <div className="nav-cta">
          <a href="mailto:kaifkhurshid18@gmail.com" className="btn-outline" style={{ display: 'none' }}>
            <Mail size={13} /> Email
          </a>
          <a href="#contact" className="btn-fill" style={{ fontSize: '9px' }}>
            Get In Touch
          </a>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="mobile-menu-btn"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
          >
            <button onClick={() => setIsMenuOpen(false)} style={{ position: 'absolute', top: 32, right: 32, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={24} />
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
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

      <main>

        {/* ── HERO ── */}
        <section id="home" className="hero section">
          <div className="hero-left">
            <FadeIn>
              <p className="hero-tag">Software Engineer</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="hero-title">
                Building<br />
                <em>Scalable</em><br />
                Systems.
              </h1>
              <p className="hero-desc">
                Kaif Khurshid is a pre-final year B.Tech (Hons.) CSE student at XIM University, Bhubaneswar — passionate about building impactful solutions. He works with the MERN stack and is actively exploring Data Science and Machine Learning.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="hero-actions">
                <a href="#" className="btn-fill">
                  <Download size={13} /> Resume
                </a>
                <a href="https://github.com/Kaifkhurshid7" target="_blank" className="icon-link"><Github size={16} /></a>
                <a href="https://linkedin.com/in/kaif-khurshid" target="_blank" className="icon-link"><Linkedin size={16} /></a>
                <a href="mailto:kaifkhurshid18@gmail.com" className="icon-link"><Mail size={16} /></a>
              </div>
              {/* 
           <div className="hero-stats">
  <div>
    <span className="stat-num">10+</span>
    <span className="stat-label">Projects Completed</span>
  </div>
  <div>
    <span className="stat-num">300+</span>
    <span className="stat-label">DSA Problems Solved</span>
  </div>
  <div>
    <span className="stat-num">5+</span>
    <span className="stat-label">Technologies Mastered</span>
  </div>
</div> */}
            </FadeIn>
          </div>

          <div className="hero-right" style={{ alignItems: 'center' }}>
            <FadeIn delay={0.15}>
              <div className="hero-photo-wrap">
                <img src={kaifImg} alt="Kaif Khurshid" className="hero-photo" />
                <div className="hero-badge">Data Science Enthusiast</div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-wrap">
          <div className="marquee-track">
            {marqueeItems.map((item, i) => (
              <span className="marquee-item" key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* ── TECH ── */}
        <section id="tech" className="section">
          <div className="section-header">
            <div className="section-header-left">
              <FadeIn>
                <p className="section-eyebrow">Technical Capabilities</p>
                <h2 className="section-title">My<br /><em>Wallet.</em></h2>
              </FadeIn>
            </div>
            <div className="section-header-right">
              <FadeIn delay={0.1}>
                <p className="section-note">
                  Specialized in backend architectures, machine learning integration, and scalable system design.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="tech-grid">
            <FadeIn delay={0}>
              <div className="tech-card">
                <div className="tech-icon"><Terminal size={20} /></div>
                <p className="tech-card-title">Languages</p>
                <div>
                  {['Python', 'Java', 'C', 'JavaScript', 'SQL'].map(l => (
                    <span className="tech-tag" key={l}>{l}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="tech-card">
                <div className="tech-icon"><Database size={20} /></div>
                <p className="tech-card-title">Backend</p>
                <div style={{ marginBottom: 16 }}>
                  <p className="section-eyebrow" style={{ marginBottom: 8, fontSize: 8 }}>Frameworks</p>
                  {['Node.js', 'Express', 'Flask'].map(l => (
                    <span className="tech-tag" key={l}>{l}</span>
                  ))}
                </div>
                <div>
                  <p className="section-eyebrow" style={{ marginBottom: 8, fontSize: 8 }}>Persistence</p>
                  {['MySQL', 'MongoDB', 'Redis'].map(l => (
                    <span className="tech-tag" key={l}>{l}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="tech-card">
                <div className="tech-icon"><Brain size={20} /></div>
                <p className="tech-card-title">AI & Research</p>
                <div>
                  {['TensorFlow', 'Scikit-Learn', 'OpenCV', 'Pandas', 'NumPy', 'NLTK'].map(l => (
                    <span className="tech-tag" key={l}>{l}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="tech-card-dark">
                <div>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>Currently Learning</p>
                  <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 28, color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 16 }}>
                    Machine Learning<br /><em style={{ color: 'rgba(255,255,255,0.5)' }}>& Data Science</em>
                  </p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontWeight: 300 }}>
                    Exploring ML algorithms and Data Science concepts for future data science roles.
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 32 }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)' }}>For Data Science Role</span>
                  <ChevronRight size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="section">
          <div className="section-header">
            <div className="section-header-left">
              <FadeIn>
                <p className="section-eyebrow">Academic Path</p>
                <h2 className="section-title">The<br /><em>Timeline.</em></h2>
              </FadeIn>
            </div>
            <div className="section-header-right">
              <FadeIn delay={0.1}>
                <p className="section-note">Three chapters of learning — building toward a future in software engineering and data science.</p>
              </FadeIn>
            </div>
          </div>

          <div className="edu-grid">
            {[
              {
                degree: 'B.Tech (Hons.) · Ongoing',
                title: 'Computer Science & Engineering',
                school: 'XIM University (New Campus)',
                year: '2023 — 2027',
                live: true,
              },
              {
                degree: 'CBSE Class XII · Completed',
                title: 'Higher Secondary Education',
                school: 'Agrasen Dav Public School, Ramgarh Jharkhand',
                year: '2021 — 2023',
                live: false,
              },
              {
                degree: 'CBSE Class X · Completed',
                title: 'Secondary Education',
                school: 'Agrasen Dav Public School, Ramgarh Jharkhand',
                year: '2020 — 2021',
                live: false,
              },
            ].map((e, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="edu-card">
                  <div>
                    <p className="edu-degree">{e.degree}</p>
                    <h3 className="edu-title">{e.title}</h3>
                    <p className="edu-school">{e.school}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--rule)', marginTop: 24 }}>
                    <span className="edu-badge">
                      <Calendar size={11} />
                      {e.year}
                    </span>
                    {e.live && (
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.15em', background: '#0D0D0D', color: '#fff', padding: '5px 12px', borderRadius: 100 }}>
                        Active
                      </span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="work" className="section">
          <div className="section-header">
            <div className="section-header-left">
              <FadeIn>
                <p className="section-eyebrow">Portfolio Selection</p>
                <h2 className="section-title">Featured<br /><em>Projects.</em></h2>
              </FadeIn>
            </div>
            <div className="section-header-right">
              <FadeIn delay={0.1}>
                <a href="https://github.com/Kaifkhurshid7" target="_blank" className="btn-outline">
                  <Github size={13} /> More on GitHub
                </a>
              </FadeIn>
            </div>
          </div>

          <div className="projects-grid">
            {[
              {
                num: '01',
                type: 'Fullstack System',
                title: 'ACM-XIM Envoy',
                desc: 'A real-time engagement platform for the ACM Student Chapter. Features secure JWT authentication and Socket.io messaging.',
                tech: ['Node.js', 'MongoDB', 'Socket.io', 'React'],
                github: 'https://github.com/Kaifkhurshid7/ACM-XIM-Envoy',
                live: 'https://acmmedia-frontend.vercel.app/',
              },
              {
                num: '02',
                type: 'AI & Signal Processing',
                title: 'Instrument Recognition',
                desc: 'A machine learning pipeline for musical instrument identification using Librosa for spectral feature extraction.',
                tech: ['Python', 'Flask', 'Librosa', 'TensorFlow'],
                github: 'https://github.com/Kaifkhurshid7/Instrument-Recognition',
                live: null,
              },
              {
                num: '03',
                type: 'OCR & Computer Vision',
                title: 'Swaralipi OCR System',
                desc: 'An OCR-based recognition system for Indian musical notation that detects and classifies swara symbols from scanned manuscript images for structured digital transcription.',
                tech: ['Python', 'FastAPI', 'YOLOv8', 'PyTorch', 'React', 'TypeScript', 'Vite', 'SQLite'],
                github: 'https://github.com/Kaifkhurshid7/swara-detection',
                live: null,
              },
              {
                num: '04',
                type: 'Computer Vision & Graph Analysis',
                title: 'Intelligent Node Detection',
                desc: 'An end-to-end computer vision pipeline that converts diagram images into directed graphs using OpenCV, OCR, NLP heuristics, and rule-based node reconstruction.',
                tech: ['Python', 'OpenCV', 'OCR', 'NLP', 'Graph Analysis'],
                github: 'https://github.com/Kaifkhurshid7/intelligent-node-detection',
                live: null,
              },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="project-card">
                  <span className="project-num serif">{p.num}</span>
                  <p className="project-type">{p.type}</p>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-footer">
                    <div className="project-tags">
                      {p.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
                    </div>
                    <div className="project-links">
                      <a href={p.github} target="_blank" className="icon-link" style={{ width: 36, height: 36 }}><Github size={14} /></a>
                      {p.live && (
                        <a href={p.live} target="_blank" className="icon-link" style={{ width: 36, height: 36, background: '#0D0D0D', borderColor: '#0D0D0D', color: '#fff' }}>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── ACTIVITIES ── */}
        <section id="activities" className="section">
          <div className="section-header">
            <div className="section-header-left">
              <FadeIn>
                <p className="section-eyebrow" style={{ color: '#8A6F00' }}>
                  <Award size={11} style={{ display: 'inline', marginRight: 8 }} />
                  Honors & Impact
                </p>
                <h2 className="section-title">Beyond the<br /><em>Codebase.</em></h2>
              </FadeIn>
            </div>
            <div className="section-header-right">
              <FadeIn delay={0.1}>
                <p className="section-note">Recognition, leadership, and community-building beyond just writing code.</p>
              </FadeIn>
            </div>
          </div>

          <div className="achieve-layout">
            {/* ACHIEVEMENTS */}
            <div className="achieve-main">
              <FadeIn>
                <div className="achieve-card">
                  <div className="achieve-badge">
                    <Award size={11} />
                    National Winner
                  </div>
                  <h3 className="achieve-title">1st Prize —<br />ACM India Summit</h3>
                  <p className="achieve-desc">
                    Ranked #1 among 50+ nationwide teams. Recognized for outstanding technical innovation and community leadership within the ACM network.
                  </p>
                  <div className="achieve-meta">
                    <span className="achieve-meta-item"><MapPin size={10} />Indore, India</span>
                    <span className="achieve-meta-item"><Calendar size={10} />December 2025</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="achieve-card">
                  <div className="achieve-badge">
                    <Sparkles size={11} />
                    Innovation Award
                  </div>
                  <h3 className="achieve-title">Runner-up —<br />Xamboree Idea Competition</h3>
                  <p className="achieve-desc">
                    Awarded among participants from 30+ universities for designing and pitching a viable tech-driven solution.
                  </p>
                  <div className="achieve-meta">
                    <span className="achieve-meta-item"><MapPin size={10} />Bhubaneswar</span>
                    <span className="achieve-meta-item"><Calendar size={10} />March 2025</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ROLES */}
            <div className="roles-col">
              <p className="section-eyebrow" style={{ padding: '28px 40px', borderBottom: '1px solid var(--rule)' }}>
                Positions of Responsibility
              </p>

              <FadeIn>
                <div className="role-card">
                  <span className="role-chip">Leadership</span>
                  <h4 className="role-title">Chairperson — ACM Chapter</h4>
                  <p className="role-desc">
                    Led ACM XIM as Chairperson by building a coding and project development community, mentoring <strong>60+ students</strong> through real-world collaboration, technical upskilling, and peer-driven learning initiatives.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.05}>
                <div className="role-card">
                  <span className="role-chip">Placement</span>
                  <h4 className="role-title">Executive — Career Advisory</h4>
                  <p className="role-desc">
                    Served as liaison between students and corporate recruiters, organizing peer-to-peer coding bootcamps and guidance sessions to strengthen technical placement preparation.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="role-card">
                  <span className="role-chip">Events</span>
                  <h4 className="role-title">Coordinator — Synchronize 4.0</h4>
                  <p className="role-desc">
                    Coordinated a 3-day annual technical fest at SCSE, XIM University, with <strong>700+ participants</strong> from 15+ colleges across Odisha. Led 100+ volunteers across technical, esports, robotics, and cultural events.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FOOTER / CONTACT ── */}
        <footer id="contact" className="footer section" style={{ borderBottom: 'none' }}>
          <FadeIn>
            <h2 className="footer-title">
              Let's<br /><em>Connect.</em>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="footer-contact-grid">
              <a href="mailto:kaifkhurshid18@gmail.com" className="contact-card">
                <Mail size={16} style={{ color: '#6B6B6B', marginBottom: 4 }} />
                <span className="contact-label">Email</span>
                <span className="contact-value">kaifkhurshid18@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/kaif-khurshid" target="_blank" className="contact-card">
                <Linkedin size={16} style={{ color: '#6B6B6B', marginBottom: 4 }} />
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">/in/kaif-khurshid</span>
              </a>
              <a href="https://github.com/Kaifkhurshid7" target="_blank" className="contact-card">
                <Github size={16} style={{ color: '#6B6B6B', marginBottom: 4 }} />
                <span className="contact-label">GitHub</span>
                <span className="contact-value">Kaifkhurshid7</span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="footer-bottom">
              <p className="footer-copy">© 2026 Kaif Khurshid · XIM University</p>
              <a href="#home" className="footer-copy" style={{ color: '#0D0D0D', textDecoration: 'none' }}>↑ Back to Top</a>
              <p className="footer-copy">Software Engineer · Data Science Enthusiast</p>
            </div>
          </FadeIn>
        </footer>

      </main>
    </>
  );
};

export default App;
