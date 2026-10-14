/* ═══════════════════════════════════════════════════════════════
   AboutPage.jsx — Dedicated Brand Heritage & Atelier Page
   Sections:
   1. Page Hero Banner
   2. Our Story (Craftsmanship & 30+ Years Heritage)
   3. Why Shubra (4 Alternating Zigzag Distinction Pillars with Minimal Imagery)
   4. Who Wears Shubra (Prestigious Clients & Executive Fleets)
   5. Our Expertise (Sartorial & Manufacturing Capabilities)
   6. Our Process (6 Alternating Zigzag Manufacturing Stages with Minimal Imagery)
   7. Testimonials (Client Appreciation & Reviews)
   ═══════════════════════════════════════════════════════════════ */

import React from 'react';
import Craftsmanship from '../components/Craftsmanship/Craftsmanship';
import TrustedBy from '../components/TrustedBy/TrustedBy';
import Testimonials from '../components/Testimonials/Testimonials';
import './AboutPage.css';

/* ── Why Shubra Pillars (with Minimal Editorial Images) ───────── */
const WHY_SHUBRA_PILLARS = [
  {
    title: 'Individual Anatomical Drafting',
    tagline: 'Zero off-the-rack blocks. 100% personalized silhouette.',
    desc: 'Every garment commences with a dedicated individual pattern developed to your precise skeletal geometry. From digitized 3D conceptual drafts to physical master tailor canvas modeling, we realize individual commissions and bespoke private fleets with unmatched creative freedom.',
    image: '/images/about/why-anatomical-drafting.jpg',
    highlights: [
      'Individual 3D body pattern drafting',
      'Over 1,200 luxury European fabric swatches',
      'Customized horn, mother-of-pearl, and gold metal hardware',
      'Bespoke monogramming and personalized Jacquard linings',
    ],
    metric: '100% Anatomical Fit',
  },
  {
    title: 'UAE-Based Atelier & Factory',
    tagline: 'Crafted locally in Dubai & Sharjah with lightning regional execution.',
    desc: 'Operating fully equipped cutting and finishing ateliers within the UAE ensures transparent oversight, zero import delays, and immediate responsiveness. Our traveling master tailors conduct private on-site fittings directly at your corporate headquarters, residence, or luxury hotel across all seven Emirates.',
    image: '/images/about/why-uae-atelier.jpg',
    highlights: [
      'Ateliers in Dubai Industrial City & Al Quoz',
      'Rapid turnaround with zero international customs delays',
      'Traveling master tailors across Abu Dhabi, Dubai & Sharjah',
      'Same-day VIP alteration and fitting emergency support',
    ],
    metric: 'All 7 Emirates Covered',
  },
  {
    title: 'Floating Horsehair Canvas',
    tagline: 'Authentic floating chest canvas & certified European textiles.',
    desc: 'We reject stiff fused glues and synthetic interlinings. Shubra suiting is crafted with genuine floating Mongolian horsehair chest canvases that naturally conform to the wearer’s contours over time, paired with certified European mills like Vitale Barberis Canonico, Loro Piana, and Reda.',
    image: '/images/about/why-floating-canvas.jpg',
    highlights: [
      '100% full floating horsehair canvas construction',
      'Hand-sewn Milanese lapel buttonholes with silk gimp',
      'Certified Super 130s to Super 180s worsted wools',
      '42-point quality inspection before client sign-off',
    ],
    metric: '42-Point QC Certified',
  },
  {
    title: 'End-to-End Client Care',
    tagline: 'From initial sketch to lifetime wardrobe and fleet maintenance.',
    desc: 'Our relationship extends far beyond initial handover. We maintain digitized pattern archives for every client and corporate entity, enabling effortless seasonal reorders, emergency garment replacements within 48 hours, and complimentary biannual pressing and alterations.',
    image: '/images/about/why-client-concierge.jpg',
    highlights: [
      'Dedicated sartorial account director per corporate client',
      'Permanent digital pattern vault for rapid one-click reorders',
      'Comprehensive 12-month seam and structure warranty',
      'Complimentary corporate staff on-site measurement clinics',
    ],
    metric: '48-Hour Reorder Dispatch',
  },
];

/* ── Who Wears Shubra Categories ─────────────────────────────── */
const WHO_WEAR_SEGMENTS = [
  {
    icon: '🏨',
    title: '5-Star Luxury Hospitality',
    desc: 'Connoisseurs at Sofitel Dubai Jumeirah Beach, JW Marriott Marquis, Mandarin Oriental, Jumeirah Hotels, and Sheraton Grand wearing front-of-house concierge and executive management tailoring.',
  },
  {
    icon: '✈️',
    title: 'Aviation & Flag Carriers',
    desc: 'Flight captains, executive cabin crews, and ground operations teams across Emirates, Etihad, and flydubai outfitted in climate-tested, crease-resistant uniform suiting.',
  },
  {
    icon: '🏢',
    title: 'Corporate Headquarters & Sovereigns',
    desc: 'Boardroom executives and enterprise teams at DP World, ADNOC, Emaar, Aldar, Damac, and Al Rostamani Group representing their brand with sartorial prestige.',
  },
  {
    icon: '👑',
    title: 'VIP Connoisseurs & Convocations',
    desc: 'Diplomats, high-net-worth patrons, and private bespoke collectors commissioning personalized silk-lined evening suits, cashmere overcoats, and luxury bespoke wardrobes.',
  },
];

/* ── Our 6-Step Manufacturing Process (with Minimal Editorial Images) ── */
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Fabric Curation',
    headline: 'Noble Natural Fibers & Micro-Climatic Weaves',
    desc: 'Each commission begins with certified natural textiles—from Super 150s worsted wools to pure Mongolian cashmere and Bemberg cupro, lab-tested for Gulf climate resilience and shape memory.',
    image: '/images/process/process-01-fabric.jpg',
    metric: 'Super 150s & Pure Cashmere',
  },
  {
    step: '02',
    title: 'Precision Cutting',
    headline: 'Anatomical Drafting & Pattern Alignment',
    desc: 'Bespoke individual pattern templates are hand-chalked and cut with heavy tailor shears. Pattern grain symmetry is aligned across lapels, pockets, and seams for millimeter perfection.',
    image: '/images/process/process-02-cutting.jpg',
    metric: 'Sub-Millimeter Tolerance',
  },
  {
    step: '03',
    title: 'Artisan Assembly',
    headline: 'Full Floating Horsehair Canvas Construction',
    desc: 'Rejecting stiff synthetic glues, our jackets are built with authentic floating horsehair chest canvases and multi-point hand-basting that naturally contours to the wearer’s physique.',
    image: '/images/process/process-03-assembly.jpg',
    metric: '100% Floating Canvas',
  },
  {
    step: '04',
    title: 'Sculpted Finishing',
    headline: 'Multi-Stage Steam Press & Roll Shaping',
    desc: 'Over sixty separate hand-pressing operations mold the three-dimensional architecture of the shoulders, chest drape, and soft lapel roll using heavy brass irons and tailored pressing bucks.',
    image: '/images/process/process-04-finishing.jpg',
    metric: '60+ Pressing Operations',
  },
  {
    step: '05',
    title: 'Quality Inspection',
    headline: '42-Point Hand Verification Protocol',
    desc: 'Master auditors inspect stitch tension, Milanese buttonhole gimp, lining ease, seam tensile strength, and pocket alignment against rigorous atelier specifications before client sign-off.',
    image: '/images/process/process-05-inspection.jpg',
    metric: '42-Point QC Certified',
  },
  {
    step: '06',
    title: 'White-Glove Delivery',
    headline: 'Gold-Embossed Presentation & Valet Dispatch',
    desc: 'Garments are mounted on sculpted cedar hangers inside breathable matte espresso garment bags with brushed brass hardware and sealed in bespoke packaging for executive doorstep delivery.',
    image: '/images/process/process-06-delivery.jpg',
    metric: 'White-Glove Delivery',
  },
];

import PageHeroSlider from '../components/PageHeroSlider/PageHeroSlider';

const ABOUT_HERO_SLIDES = [
  { image: '/images/about/about-hero-bg.jpg', caption: 'Heritage Atelier • Dubai' },
  { image: '/images/about/why-uae-atelier.jpg', caption: 'In-House Manufacturing • UAE' },
  { image: '/images/about/our-story-atelier.jpg', caption: '30+ Years Master Tailoring' },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* ── Page Header / 5-Second Swipeable Hero Slider ───────── */}
      <PageHeroSlider
        badge="Since 1994 • Dubai & Sharjah, UAE"
        title={
          <>
            All About <em>Shubra Garments</em>
          </>
        }
        description="For more than three decades, Shubra Garments has stood at the intersection of heritage Savile Row tailoring and modern UAE corporate manufacturing—dressing the teams and leaders shaping the Middle East."
        slides={ABOUT_HERO_SLIDES}
      />

      {/* ── 1. Our Story ─────────────────────────────────────── */}
      <section id="our-story" className="about-story-wrap" aria-label="Our Story">
        <div className="about-section-header about-section-header--story" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', marginBottom: 0 }}>
          <span className="about-section-header__tag">Heritage & Atelier</span>
          <h2 className="about-section-header__title">Our Story</h2>
          <p className="about-section-header__desc about-section-header__desc--story">
            Thirty years of dedication, local manufacturing sovereignty, and relentless pursuit of garment perfection.
          </p>
        </div>
        <Craftsmanship
          image="/images/shubra-garment-building.png"
          imageWebp="/images/shubra-garment-building.webp"
          imageAlt="Shubra Garments Building — Production and Design Headquarters"
          isStoryPage={true}
        />
      </section>

      {/* ── 2. Why Shubra (Zigzag Alternating Layout) ────────── */}
      <section id="why-shubra" className="about-why" aria-label="Why Shubra">
        <div className="container">
          <div className="about-section-header">
            <span className="about-section-header__tag">The Shubra Distinction</span>
            <h2 className="about-section-header__title">Why Shubra Garments</h2>
            <p className="about-section-header__desc">
              Four fundamental pillars that distinguish our atelier from mass off-the-rack uniform suppliers.
            </p>
          </div>

          <div className="about-zigzag-list">
            {WHY_SHUBRA_PILLARS.map((pillar, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <article
                  key={pillar.title}
                  className={`about-zigzag-row ${isEven ? 'about-zigzag-row--reverse' : ''}`}
                >
                  {/* Media Column with Minimal Image */}
                  <div className="about-zigzag-media">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="about-zigzag-img"
                      loading="lazy"
                    />
                    <div className="about-zigzag-overlay" />
                    <span className="about-zigzag-metric-badge">{pillar.metric}</span>
                  </div>

                  {/* Content Column */}
                  <div className="about-zigzag-content">
                    <h3 className="about-zigzag-title">{pillar.title}</h3>
                    <h4 className="about-zigzag-tagline">{pillar.tagline}</h4>
                    <p className="about-zigzag-desc">{pillar.desc}</p>
                    <ul className="about-zigzag-highlights">
                      {pillar.highlights.map((h, i) => (
                        <li key={i} className="about-zigzag-highlight-item">
                          <span className="about-zigzag-check">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Who Wears Shubra ──────────────────────────────── */}
      <section id="who-wear" className="about-whowear" aria-label="Who Wear Shubra">
        <div className="container">
          <div className="about-section-header">
            <span className="about-section-header__tag">Clientele & Prestige</span>
            <h2 className="about-section-header__title">Who Wears Shubra</h2>
            <p className="about-section-header__desc">
              From global 5-star hotel front-of-house teams to commercial airline captains, top corporate boardrooms, and sovereign state leaders.
            </p>
          </div>

          <div className="about-whowear__categories">
            {WHO_WEAR_SEGMENTS.map((seg) => (
              <div key={seg.title} className="about-whowear__cat-card">
                <div className="about-whowear__cat-icon">{seg.icon}</div>
                <h3 className="about-whowear__cat-title">{seg.title}</h3>
                <p className="about-whowear__cat-desc">{seg.desc}</p>
              </div>
            ))}
          </div>

          <div className="about-whowear__logos-title">Trusted By Renowned Institutions Across the UAE</div>
          <div className="about-whowear__trusted-slider">
            <TrustedBy />
          </div>
        </div>
      </section>

      {/* ── 4. Our Process (Redesigned Editorial Stage Architecture) ── */}
      <section id="our-process" className="about-process" aria-label="Our Process">
        <div className="container">
          <div className="about-section-header">
            <span className="about-section-header__tag">ATELIER JOURNEY</span>
            <h2 className="about-section-header__title">Our Process</h2>
            <p className="about-section-header__desc">
              Six meticulous stages behind every tailored garment, upholding the highest standards of luxury production.
            </p>
          </div>

          {/* 6-Stage Curated Editorial Cards Grid */}
          <div className="about-process__grid">
            {PROCESS_STEPS.map((step) => (
              <article
                key={step.step}
                id={`process-stage-${step.step}`}
                className="about-process__card"
              >
                {/* Media Stage */}
                <div className="about-process__media">
                  <img
                    src={step.image}
                    alt={`${step.title} — ${step.headline}`}
                    className="about-process__img"
                    loading="lazy"
                  />
                  <div className="about-process__overlay" />
                  <div className="about-process__badge-row">
                    <span className="about-process__stage-badge">STAGE {step.step}</span>
                    <span className="about-process__metric-badge">{step.metric}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="about-process__content">
                  <h3 className="about-process__title">{step.title}</h3>
                  <h4 className="about-process__headline">{step.headline}</h4>
                  <p className="about-process__desc">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Client Appreciation & Reviews (Testimonials) ──── */}
      <section id="about-testimonials" aria-label="Client Testimonials">
        <Testimonials />
      </section>

    </div>
  );
};

export default AboutPage;
