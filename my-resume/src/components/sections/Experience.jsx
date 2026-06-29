/**
 * @file Experience.jsx
 * @description Professional experience timeline section.
 *
 * Renders a grid of experience cards displaying internships and work history.
 * Each card shows company, role, duration, location, description, and tech stack.
 * Data is driven entirely from the EXPERIENCE array in the data store.
 */

import { MapPin, Calendar } from 'lucide-react';
import FadeIn from '../common/FadeIn';
import { EXPERIENCE } from '../../data/portfolio';

const Experience = () => (
  <section id="experience" className="section">
    {/* Section header */}
    <div className="section-header">
      <div className="section-header-left">
        <FadeIn>
          <p className="section-eyebrow">Professional Journey</p>
          <h2 className="section-title">Work<br /><em>Experience.</em></h2>
        </FadeIn>
      </div>
      <div className="section-header-right">
        <FadeIn delay={0.1}>
          <p className="section-note">
            Building scalable backend systems and real-time applications across diverse platforms and user roles.
          </p>
        </FadeIn>
      </div>
    </div>

    {/* Experience cards */}
    <div className="exp-grid">
      {EXPERIENCE.map((exp, i) => (
        <FadeIn key={i} delay={i * 0.07}>
          <div className="exp-card">
            <div>
              <p className="exp-company">{exp.company}</p>
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-desc">{exp.desc}</p>
            </div>

            {/* Tech stack */}
            <div className="exp-tech">
              {exp.tech.map((t, idx) => (
                <span key={idx} className="exp-tech-tag">{t}</span>
              ))}
            </div>

            {/* Footer with meta info */}
            <div className="exp-footer">
              <div className="exp-meta">
                <span className="exp-meta-item">
                  <Calendar size={11} />
                  {exp.duration}
                </span>
                <span className="exp-meta-item">
                  <MapPin size={11} />
                  {exp.location}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default Experience;
