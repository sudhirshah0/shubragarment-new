/* ═══════════════════════════════════════════════════════════════
   CustomDesignPage.jsx — Dedicated Live Interactive Design Page
   Sections:
   1. Page Header Hero
   2. CustomDesigner Canvas Component (Live customizer engine)
   3. The Atelier Collection (Ready-to-wear catalog with filters & cart)
   ═══════════════════════════════════════════════════════════════ */

import React, { Suspense, lazy } from 'react';
import Collections from '../components/Collections/Collections';
import PageHeroSlider from '../components/PageHeroSlider/PageHeroSlider';
import './CustomDesignPage.css';

const CustomDesigner = lazy(() => import('../components/CustomDesigner/CustomDesigner'));

const CUSTOM_DESIGN_HERO_SLIDES = [
  { image: '/images/custom/customdesign-hero-bg.jpg', caption: 'Interactive Studio • 3D Atelier' },
  { image: '/images/services/service-custom-design.jpg', caption: 'Bespoke Fabrics & Horn Buttons' },
  { image: '/images/hero/custom-design.jpg', caption: 'Master Tailor Drafting' },
];

const CustomDesignPage = ({ onNavigate }) => {
  return (
    <div className="customdesign-page">
      {/* ── Page Header / 5-Second Swipeable Hero Slider ──────── */}
      <PageHeroSlider
        badge="Interactive Studio"
        title={
          <>
            Live Custom <em>Designer</em>
          </>
        }
        description="Personalize suits, overcoats, shirts, and polos in real-time. Select premium European fabrics, horn buttons, personalized silk linings, and custom monogram embroidery with instant visual rendering."
        slides={CUSTOM_DESIGN_HERO_SLIDES}
      />

      {/* ── 1. Live Interactive Custom Designer Studio ──────── */}
      <section id="custom-designer-engine">
        <Suspense fallback={<div style={{ minHeight: '600px', backgroundColor: 'var(--cream, #F7F2EC)' }} />}>
          <CustomDesigner />
        </Suspense>
      </section>

      {/* ── 2. The Atelier Collection (Below Custom Designer) ─ */}
      <section id="custom-design-collections" className="customdesign-collections-wrap">
        <Collections />
      </section>
    </div>
  );
};

export default CustomDesignPage;
