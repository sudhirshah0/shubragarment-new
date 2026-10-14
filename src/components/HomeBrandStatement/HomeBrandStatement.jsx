/* ═══════════════════════════════════════════════════════════════
   HomeBrandStatement.jsx — Brand Statement & Primary CTAs
   Features:
   - "Wear Your Own Premium Design" Statement
   - "Create Your Design" CTA (routes to #/custom-design)
   - "Explore Collections" CTA (routes to #/collection)
   - 3 Atelier Credential Badges
   ═══════════════════════════════════════════════════════════════ */

import React from 'react';
import './HomeBrandStatement.css';

const HomeBrandStatement = ({ onNavigate }) => {
  const handleCreateDesignClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('custom-design');
    } else {
      window.location.hash = '#/custom-design';
    }
  };

  const handleExploreCollectionsClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('custom-design');
    } else {
      window.location.hash = '#/custom-design';
    }
    // Smooth scroll down to collection section after transition
    setTimeout(() => {
      const el = document.getElementById('custom-design-collections');
      if (el) {
        if (window.lenis) {
          window.lenis.scrollTo(el, { offset: -80 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 150);
  };

  return (
    <section className="home-brand-statement" id="brand-statement" aria-label="Brand Statement">
      {/* Background Watermark Emblem */}
      <img
        src="/images/logo.png"
        alt=""
        className="home-brand-statement__bg-watermark"
        aria-hidden="true"
        loading="lazy"
      />

      <div className="home-brand-statement__container">
        {/* Eyebrow Pill */}
        <div className="home-brand-statement__tag-wrap">
          <span className="home-brand-statement__diamond" aria-hidden="true" />
          <span className="home-brand-statement__tag">Atelier Shubra • Dubai &amp; Sharjah</span>
          <span className="home-brand-statement__diamond" aria-hidden="true" />
        </div>

        {/* Display Headline */}
        <h2 className="home-brand-statement__headline">
          Wear Your Own <em>Premium Design.</em>
        </h2>

        {/* Short Brand Statement */}
        <p className="home-brand-statement__desc">
          For over 30 years in the UAE, Shubra Garments has combined Savile Row bespoke craftsmanship with 100% in-house manufacturing. From individualized bespoke suiting and luxury outerwear to signature corporate fleet programs, we craft garments engineered for elegance, durability, and a flawless anatomical fit.
        </p>

        {/* Action Buttons: Create Your Design & Explore Collections */}
        <div className="home-brand-statement__actions">
          <a
            href="#/custom-design"
            className="home-brand-statement__btn home-brand-statement__btn--primary"
            onClick={handleCreateDesignClick}
          >
            {/* Customizer Magic Pencil / Drafting Icon */}
            <svg
              className="home-brand-statement__btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Create Your Design
          </a>

          <a
            href="#/custom-design"
            className="home-brand-statement__btn home-brand-statement__btn--secondary"
            onClick={handleExploreCollectionsClick}
          >
            Explore Collections
            <span className="home-brand-statement__arrow-icon" aria-hidden="true">→</span>
          </a>
        </div>

        {/* 3 Verified Credential Stats */}
        <div className="home-brand-statement__credentials">
          <div className="home-brand-statement__cred-item">
            <span className="home-brand-statement__cred-value">30+ Years</span>
            <span className="home-brand-statement__cred-label">Master Tailoring Heritage in the UAE</span>
          </div>
          <div className="home-brand-statement__cred-item">
            <span className="home-brand-statement__cred-value">1,200+</span>
            <span className="home-brand-statement__cred-label">Certified European Fabric Swatches</span>
          </div>
          <div className="home-brand-statement__cred-item">
            <span className="home-brand-statement__cred-value">100% In-House</span>
            <span className="home-brand-statement__cred-label">Anatomical Cutting &amp; Finishing in Dubai</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBrandStatement;
