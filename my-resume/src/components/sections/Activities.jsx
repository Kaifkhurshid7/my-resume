/**
 * @file Activities.jsx
 * @description Achievements and leadership roles section.
 *
 * Two-column layout:
 * - Left: Major achievements with badges, descriptions, and metadata
 * - Right: Positions of responsibility with role chips
 *
 * Uses dangerouslySetInnerHTML for role descriptions that contain
 * <strong> tags for emphasis (data is author-controlled, not user input).
 */

import { Award, Sparkles, MapPin, Calendar } from 'lucide-react';
import FadeIn from '../common/FadeIn';
import { ACHIEVEMENTS, ROLES } from '../../data/portfolio';

/** Maps icon string identifiers to Lucide components */
const ICON_MAP = { Award, Sparkles };

const Activities = () => (
  <section id="activities" className="section">
    {/* Section header */}
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
          <p className="section-note">
            Recognition, leadership, and community-building beyond just writing code.
          </p>
        </FadeIn>
      </div>
    </div>

    <div className="achieve-layout">
      {/* Achievements column */}
      <div className="achieve-main">
        {ACHIEVEMENTS.map((item, i) => {
          const IconComponent = ICON_MAP[item.icon];
          return (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="achieve-card">
                <div className="achieve-badge">
                  {IconComponent && <IconComponent size={11} />}
                  {item.badge}
                </div>
                <h3 className="achieve-title" style={{ whiteSpace: 'pre-line' }}>
                  {item.title}
                </h3>
                <p className="achieve-desc">{item.desc}</p>
                <div className="achieve-meta">
                  <span className="achieve-meta-item">
                    <MapPin size={10} />{item.location}
                  </span>
                  <span className="achieve-meta-item">
                    <Calendar size={10} />{item.date}
                  </span>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Roles column */}
      <div className="roles-col">
        <p className="section-eyebrow" style={{ padding: '28px 40px', borderBottom: '1px solid var(--rule)' }}>
          Positions of Responsibility
        </p>

        {ROLES.map((role, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="role-card">
              <span className="role-chip">{role.chip}</span>
              <h4 className="role-title">{role.title}</h4>
              {/* Safe: content is author-controlled from data/portfolio.js */}
              <p
                className="role-desc"
                dangerouslySetInnerHTML={{ __html: role.desc }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Activities;
