/* ═══════════════════════════════════════════════════════════════
   HomePage.jsx — Main Atelier Landing Page
   Sections:
   1. Hero Service Slider + Trusted By Marquee (Etihad, Emirates, etc.)
   2. Short Brand Statement ("Wear Your Own Premium Design")
      + "Create Your Design" CTA & "Explore Collections" CTA
   3. Bulk Corporate & Institutional Uniform Programs
   4. Atelier Services Highlights in Alternating Zigzag Layout
   ═══════════════════════════════════════════════════════════════ */

import React from 'react';
import Hero from '../components/Hero/Hero';
import AboutShubra from '../components/AboutShubra/AboutShubra';
import HomeBrandStatement from '../components/HomeBrandStatement/HomeBrandStatement';
import BulkCorporate from '../components/BulkCorporate/BulkCorporate';
import './HomePage.css';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="home-page">
      {/* ── 1. Hero Service Slider & Big UAE Companies Marquee ── */}
      <Hero />

      {/* ── 2. About Shubra: In-depth Heritage, Local Atelier & 30+ Years Tag ── */}
      <AboutShubra onNavigate={onNavigate} />

      {/* ── 3. Bulk Corporate Uniform Programs ───────────────── */}
      <section id="corporate-fleet">
        <BulkCorporate />
      </section>

      {/* ── 4. Short Brand Statement ("Wear Your Own Premium Design") right before Footer ── */}
      <HomeBrandStatement onNavigate={onNavigate} />
    </div>
  );
};

export default HomePage;
