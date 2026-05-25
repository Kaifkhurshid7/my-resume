/**
 * @file Education.jsx
 * @description Academic timeline section displaying education history.
 *
 * Renders a 3-column grid (stacks on mobile) of education cards.
 * Active/ongoing education is visually distinguished with a dark pill badge.
 * Data is driven entirely from the EDUCATION array in the data store.
 */

import { Calendar } from 'lucide-react';
import FadeIn from '../common/FadeIn';
import { EDUCATION } from '../../data/portfolio';

const Education = () => (
  <section id="education" className="section">
    {/* Section header */}
    <div className="section-header">
      <div className="section-header-left">
        <FadeIn>
          <p className="section-eyebrow">Academic Path</p>
          <h2 className="section-title">The<br /><em>Timeline.</em></h2>
        </FadeIn>
      </div>
      <div className="section-header-right">
        <FadeIn delay={0.1}>
          <p className="section-note">
            Three chapters of learning — building toward a future in software engineering and data science.
          </p>
        </FadeIn>
      </div>
    </div>

    {/* Education cards */}
    <div className="edu-grid">
      {EDUCATION.map((edu, i) => (
        <FadeIn key={i} delay={i * 0.07}>
          <div className="edu-card">
            <div>
              <p className="edu-degree">{edu.degree}</p>
              <h3 className="edu-title">{edu.title}</h3>
              <p className="edu-school">{edu.school}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--rule)', marginTop: 24 }}>
              <span className="edu-badge">
                <Calendar size={11} />
                {edu.year}
              </span>
              {edu.active && (
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
);

export default Education;
