/**
 * @file TechStack.jsx
 * @description Technical skills section with categorized skill cards.
 *
 * Renders a 4-column grid (responsive to 2-col on tablet, 1-col on mobile):
 * - Dynamic skill category cards driven by TECH_CATEGORIES data
 * - A special dark "Currently Learning" card for emphasis
 *
 * Each category can have flat items or subcategories (e.g., Backend
 * splits into Frameworks and Persistence).
 */

import { Terminal, Database, Brain, Globe, ChevronRight } from 'lucide-react';
import FadeIn from '../common/FadeIn';
import { TECH_CATEGORIES, CURRENTLY_LEARNING } from '../../data/portfolio';

/** Maps icon string identifiers to Lucide components */
const ICON_MAP = { Terminal, Database, Brain, Globe };

const TechStack = () => (
  <section id="tech" className="section">
    {/* Section header */}
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

    {/* Skills grid */}
    <div className="tech-grid">
      {TECH_CATEGORIES.map((cat, i) => {
        const IconComponent = ICON_MAP[cat.icon];
        return (
          <FadeIn key={cat.id} delay={i * 0.05}>
            <div className="tech-card">
              <div className="tech-icon">
                {IconComponent && <IconComponent size={20} />}
              </div>
              <p className="tech-card-title">{cat.title}</p>

              {/* Flat items list */}
              {cat.items && (
                <div>
                  {cat.items.map((item) => (
                    <span className="tech-tag" key={item}>{item}</span>
                  ))}
                </div>
              )}

              {/* Subcategorized items (e.g., Backend) */}
              {cat.subcategories && cat.subcategories.map((sub, idx) => (
                <div key={sub.label} style={{ marginBottom: idx < cat.subcategories.length - 1 ? 16 : 0 }}>
                  <p className="section-eyebrow" style={{ marginBottom: 8, fontSize: 8 }}>
                    {sub.label}
                  </p>
                  {sub.items.map((item) => (
                    <span className="tech-tag" key={item}>{item}</span>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>
        );
      })}

      {/* Currently Learning — dark accent card */}
      <FadeIn delay={0.15}>
        <div className="tech-card-dark">
          <div>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
              Currently Learning
            </p>
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 28, color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 16 }}>
              {CURRENTLY_LEARNING.title}<br />
              <em style={{ color: 'rgba(255,255,255,0.5)' }}>{CURRENTLY_LEARNING.subtitle}</em>
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontWeight: 300 }}>
              {CURRENTLY_LEARNING.description}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 32 }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)' }}>
              {CURRENTLY_LEARNING.label}
            </span>
            <ChevronRight size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default TechStack;
