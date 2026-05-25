/**
 * @file Projects.jsx
 * @description Featured projects section with card grid layout.
 *
 * Displays project cards in a 2-column grid (1-col on mobile).
 * Each card includes:
 * - Large decorative number (background)
 * - Project type, title, description
 * - Tech stack tags
 * - GitHub + live demo links
 *
 * Hover effects add editorial flair (italic title, background shift).
 */

import { Github, ExternalLink } from 'lucide-react';
import FadeIn from '../common/FadeIn';
import { PROJECTS, PERSONAL } from '../../data/portfolio';

const Projects = () => (
  <section id="work" className="section">
    {/* Section header */}
    <div className="section-header">
      <div className="section-header-left">
        <FadeIn>
          <p className="section-eyebrow">Portfolio Selection</p>
          <h2 className="section-title">Featured<br /><em>Projects.</em></h2>
        </FadeIn>
      </div>
      <div className="section-header-right">
        <FadeIn delay={0.1}>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={13} /> More on GitHub
          </a>
        </FadeIn>
      </div>
    </div>

    {/* Project cards grid */}
    <div className="projects-grid">
      {PROJECTS.map((project, i) => (
        <FadeIn key={i} delay={i * 0.06}>
          <div className="project-card">
            <span className="project-num serif">{project.num}</span>
            <p className="project-type">{project.type}</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="project-footer">
              <div className="project-tags">
                {project.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                  style={{ width: 36, height: 36 }}
                  aria-label={`${project.title} GitHub repository`}
                >
                  <Github size={14} />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    style={{ width: 36, height: 36, background: '#0D0D0D', borderColor: '#0D0D0D', color: '#fff' }}
                    aria-label={`${project.title} live demo`}
                  >
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
);

export default Projects;
