/* ═══════════════════════════════════════════════════════════════
   CollectionPage.jsx — Dedicated Luxury Garment Collection Page
   Sections:
   1. Page Header Hero
   2. Collections Component (Interactive catalog with filters & cart)
   ═══════════════════════════════════════════════════════════════ */

import React from 'react';
import Collections from '../components/Collections/Collections';
import './CollectionPage.css';

const CollectionPage = () => {
  return (
    <div className="collection-page">
      <header className="collection-hero">
        <div className="collection-hero__container">
          <span className="collection-hero__badge">Signature Catalog</span>
          <h1 className="collection-hero__title">
            The Atelier <em>Collection</em>
          </h1>
          <p className="collection-hero__desc">
            Discover our permanent seasonal wardrobe crafted from pure cashmere, Italian Super worsted wools, and Egyptian cottons. Tailored to perfection with individual custom fitting.
          </p>
        </div>
      </header>

      {/* ── 1. Interactive Collections Catalog ───────────────── */}
      <section id="catalog-section">
        <Collections />
      </section>
    </div>
  );
};

export default CollectionPage;
