/**
 * @file App.jsx
 * @description Root application component — portfolio layout orchestrator.
 *
 * Responsibilities:
 * - Manages intro loader visibility (letter-by-letter name → initials → exit)
 * - Manages mobile menu open/close state
 * - Composes all page sections in correct order
 * - Imports global stylesheet (loaded once at app root)
 *
 * Architecture decision: Single-page layout without routing since this
 * is a personal portfolio with smooth-scroll navigation between sections.
 */

import { useState, useCallback } from 'react';

// Layout
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import MobileMenu from './components/layout/MobileMenu';

// Sections (rendered in page order)
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import TechStack from './components/sections/TechStack';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Activities from './components/sections/Activities';
import Footer from './components/sections/Footer';

// Styles
import './styles/global.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Loader isVisible={isLoading} onComplete={handleLoaderComplete} />

      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <Hero />
        <Marquee />
        <TechStack />
        <Experience />
        <Education />
        <Projects />
        <Activities />
        <Footer />
      </main>
    </>
  );
};

export default App;
