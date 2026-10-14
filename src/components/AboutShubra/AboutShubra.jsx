/* ═══════════════════════════════════════════════════════════════
   AboutShubra.jsx — Detailed "About Shubra" Showcase for Home Page
   Features:
   - Left Column: Shubra Garments Headquarters & Tailoring Atelier Image
     with an authentic luxury "30+ Years in UAE" badge/tag overlay
   - Right Column: In-depth narrative about Shubra heritage, master tailoring,
     local UAE ateliers, verified statistics, and quick navigation CTAs
   ═══════════════════════════════════════════════════════════════ */

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutShubra.css';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_HIGHLIGHTS = [
  {
    num: '30+',
    label: 'Years in the UAE',
    sub: 'Established in 1994, dressing leaders & luxury fleets across the GCC.',
  },
  {
    num: '100%',
    label: 'In-House Ateliers',
    sub: 'Full pattern cutting, hand stitching & finishing in Dubai & Sharjah.',
  },
  {
    num: '1,200+',
    label: 'European Textiles',
    sub: 'Super worsted wools, Mongolian cashmeres & Egyptian Giza cottons.',
  },
  {
    num: '42-Pt',
    label: 'Inspection Protocol',
    sub: 'Strict master-tailor verification on every single seam and silhouette.',
  },
];

const AboutShubra = ({ onNavigate }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // Subtle parallax on the building image
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -4, scale: 1.02 },
          {
            yPercent: 4,
            scale: 1.02,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );
      }

      // Smooth fade-in for narrative contents
      gsap.fromTo(
        '.about-shubra__content > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleLearnMore = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('about');
    } else {
      window.location.hash = '#/about';
    }
  };

  const handleServices = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('services');
    } else {
      window.location.hash = '#/services';
    }
  };

  return (
    <section
      ref={sectionRef}
      className="about-shubra section"
      id="about-shubra"
      aria-label="About Shubra Garments"
    >
      <div className="container about-shubra__container">
        <div className="about-shubra__grid">
          {/* ── Left Column: Headquarters Building with 30+ Years Tag & Atelier Caption ── */}
          <div className="about-shubra__media-col">
            <div className="about-shubra__image-frame">
              {/* Backglow pedestal */}
              <div className="about-shubra__image-glow" aria-hidden="true" />

              <picture>
                <source srcSet="/images/shubra-headquarters.jpg" type="image/jpeg" />
                <img
                  ref={imageRef}
                  src="/images/shubra-headquarters.jpg"
                  alt="Shubra Garments Headquarters and Tailoring Atelier in the UAE"
                  className="about-shubra__img"
                  loading="lazy"
                />
              </picture>

              {/* 30+ Years Floating Badge Overlay on Image */}
              <div className="about-shubra__badge-tag">
                <span className="about-shubra__badge-number">30+</span>
                <div className="about-shubra__badge-text">
                  <span className="about-shubra__badge-title">Years in UAE</span>
                  <span className="about-shubra__badge-subtitle">Heritage &amp; Sartorial Trust</span>
                </div>
              </div>

              {/* Atelier Location Micro-pill */}
              <div className="about-shubra__location-tag">
                <span className="about-shubra__location-dot" />
                <span>Headquarters &amp; Atelier • Dubai &amp; Sharjah</span>
              </div>
            </div>

            {/* Left-side descriptive paragraph to achieve balanced alignment with right column */}
            <div className="about-shubra__media-caption">
              <p className="about-shubra__media-desc">
                Our purpose-built facilities house master pattern cutters, bespoke bench tailors, and cutting-edge computerized embroidery lines under one roof. Operating fully in-house across Dubai and Sharjah, every creation is managed from raw European cloth to certified hand delivery.
              </p>
            </div>
          </div>

          {/* ── Right Column: In-Depth Narrative Content ── */}
          <div className="about-shubra__content">
            <div className="about-shubra__eyebrow-wrap">
              <span className="about-shubra__eyebrow-dot" />
              <span className="about-shubra__eyebrow">ABOUT SHUBRA GARMENTS</span>
            </div>

            <h2 className="about-shubra__heading">
              Three Decades of Mastery &amp;<br className="about-shubra__heading-br" />
              <em>UAE Sartorial Production.</em>
            </h2>

            <div className="about-shubra__paragraphs">
              <p className="about-shubra__p about-shubra__p--lead">
                Founded in 1994, <strong>Shubra Garments</strong> stands as one of the UAE’s foremost bespoke tailoring institutions and enterprise uniform manufacturers. For more than <strong>30+ years</strong>, we have woven timeless Savile Row precision with cutting-edge regional production to outfit the leaders, airlines, and 5-star hospitality icons defining the Middle East.
              </p>
            </div>

            {/* Key Fact Pillars Grid */}
            <div className="about-shubra__stats-grid">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <div key={item.label} className="about-shubra__stat-card">
                  <span className="about-shubra__stat-num">{item.num}</span>
                  <h4 className="about-shubra__stat-label">{item.label}</h4>
                  <p className="about-shubra__stat-sub">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="about-shubra__actions">
              <a
                href="#/about"
                className="about-shubra__btn about-shubra__btn--primary"
                onClick={handleLearnMore}
              >
                Discover Our Heritage →
              </a>
              <a
                href="#/services"
                className="about-shubra__btn about-shubra__btn--secondary"
                onClick={handleServices}
              >
                View Atelier Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShubra;
