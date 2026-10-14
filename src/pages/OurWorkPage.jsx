/* ═══════════════════════════════════════════════════════════════
   OurWorkPage.jsx — Dedicated Our Work Page
   Structured across the 4 core sections in alternating zigzag layouts:
   1. Real projects (6 Alternating Zigzag Commissions)
   2. Corporate projects (4 Alternating Zigzag Fleet Programs)
   3. Custom creations (4 Alternating Zigzag Bespoke Masterpieces)
   4. View Our Work (Curated Lookbook Gallery & Verified Archives)
   ═══════════════════════════════════════════════════════════════ */

import React from 'react';
import {
  realProjectsData,
} from '../data/projects';
import PageHeroSlider from '../components/PageHeroSlider/PageHeroSlider';
import './OurWorkPage.css';

const OUR_WORK_HERO_SLIDES = [
  { image: '/images/work/ourwork-hero-bg.jpg', caption: 'Atelier Portfolio • UAE' },
  { image: '/images/work/royal-aviation.jpg', caption: 'Royal & Private Fleet Uniforms' },
  { image: '/images/work/difc-suits.jpg', caption: 'Executive Power Suiting' },
  { image: '/images/work/bulgari-resort.jpg', caption: 'Luxury Hospitality Attire' },
];

const OurWorkPage = ({ onNavigate }) => {

  const handleContactClick = (e, subject = 'General Commission') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('contact');
    } else {
      window.location.hash = '#/contact';
    }
  };

  return (
    <div className="ourwork-page">
      {/* ── Page Header / 5-Second Swipeable Hero Slider ──────── */}
      <PageHeroSlider
        badge="Atelier Portfolio"
        title={
          <>
            Our Work &amp; <em>Craftsmanship</em>
          </>
        }
        description="Explore three decades of sartorial commissions engineered inside our UAE atelier—from authentic client projects and corporate fleets to institutional bespoke uniforms."
        slides={OUR_WORK_HERO_SLIDES}
      />

      {/* ═══════════════════════════════════════════════════════
          SECTION 1: REAL PROJECTS (Zigzag Alternating Layout)
          ═══════════════════════════════════════════════════════ */}
      <section
        id="real-projects"
        className="ourwork-section ourwork-section--real"
        aria-label="Real Projects"
      >
        <div className="container">
          <div className="ourwork-section-header">
            <h2 className="ourwork-section-header__title">Corporate projects</h2>
            <p className="ourwork-section-header__desc">
              Explore real bespoke wardrobes, institutional uniforms, and private client attires engineered by Shubra Garments across the UAE and GCC.
            </p>
          </div>

          <div className="ourwork-zigzag-list">
            {realProjectsData.map((project, index) => {
              const isEven = index % 2 === 1;
              return (
                <article
                  key={project.id}
                  className={`ourwork-zigzag-row ${isEven ? 'ourwork-zigzag-row--reverse' : ''}`}
                >
                  {/* Media Column with Minimal Image */}
                  <div className="ourwork-zigzag-media">
                    <img
                      src={project.image}
                      alt={`${project.client} - ${project.projectType}`}
                      className="ourwork-zigzag-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="ourwork-zigzag-overlay" aria-hidden="true" />
                    <div className="ourwork-zigzag-media-tags">
                      <span className="ourwork-zigzag-tag-category">{project.category}</span>
                      <span className="ourwork-zigzag-tag-year">{project.year}</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="ourwork-zigzag-content">
                    <span className="ourwork-zigzag-meta-loc">{project.location}</span>
                    <h3 className="ourwork-zigzag-title">{project.client}</h3>
                    <h4 className="ourwork-zigzag-subtitle">{project.projectType}</h4>
                    <p className="ourwork-zigzag-desc">{project.description}</p>

                    <div className="ourwork-zigzag-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="ourwork-zigzag-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="ourwork-zigzag-actions">
                      <a
                        href="#/contact"
                        className="ourwork-btn ourwork-btn--primary"
                        onClick={(e) => handleContactClick(e, `Enquiry about ${project.client}`)}
                      >
                        Inquire for Similar Project →
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Enterprise Capabilities & SLA Banner (B2B Contract Advantage) */}
          <div className="corporate-sla-card" style={{ marginTop: 'clamp(4rem, 7vw, 6rem)' }}>
            <div className="corporate-sla-card__content">
              <span className="corporate-sla-card__badge">B2B CONTRACT ADVANTAGE</span>
              <h3 className="corporate-sla-card__title">
                Ready to Equip Your Corporate Workforce?
              </h3>
              <p className="corporate-sla-card__desc">
                From initial design consultation and fabric testing to on-site master tailor sizing and scheduled replenishments, we deliver high-capacity manufacturing without compromising bespoke fit.
              </p>
              <div className="corporate-sla-card__stats">
                <div className="corporate-sla-stat">
                  <strong>50,000+</strong>
                  <span>Monthly Output Capacity</span>
                </div>
                <div className="corporate-sla-stat">
                  <strong>42-Point</strong>
                  <span>Quality Control Checks</span>
                </div>
                <div className="corporate-sla-stat">
                  <strong>7–14 Days</strong>
                  <span>Rapid Reorder Turnaround</span>
                </div>
                <div className="corporate-sla-stat">
                  <strong>100%</strong>
                  <span>UAE Atelier Manufactured</span>
                </div>
              </div>
            </div>

            <div className="corporate-sla-card__actions">
              <a
                href="#/contact"
                className="ourwork-btn ourwork-btn--primary"
                onClick={(e) => handleContactClick(e, 'Corporate Fleet Proposal')}
              >
                Request Corporate Proposal →
              </a>
              <a
                href="https://wa.me/971500000000?text=Hello%20Shubra%20Garments,%20we%20are%20inquiring%20about%20a%20corporate%20uniform%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="ourwork-btn ourwork-btn--wa"
              >
                WhatsApp Enterprise Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;
