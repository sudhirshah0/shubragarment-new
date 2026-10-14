/* ═══════════════════════════════════════════════════════════════
   ServicesPage.jsx — Dedicated Services & Tailoring Solutions Page
   Sections:
   1. Services Header Hero
   2. Services Zigzag List (Alternating minimal imagery and content):
      - 01 Garment Manufacturing (Image Left, Content Right)
      - 02 Custom Design (Content Left, Image Right)
      - 03 Corporate Uniforms (Image Left, Content Right)
      - 04 Embroidery & Printing (Content Left, Image Right)
      - 05 Bulk Production (Image Left, Content Right)
      - 06 View All Services (Content Left, Image Right)
   3. Bulk Corporate (Enterprise Fleets & Institutional Programs)
   ═══════════════════════════════════════════════════════════════ */

import React from 'react';
import BulkCorporate from '../components/BulkCorporate/BulkCorporate';
import PageHeroSlider from '../components/PageHeroSlider/PageHeroSlider';
import './ServicesPage.css';

const SERVICES_CATALOG = [
  {
    num: '01',
    title: 'Garment Manufacturing',
    tagline: 'Savile Row anatomical pattern drafting & floating canvas assembly',
    desc: 'Complete in-house pattern drafting, cutting, assembly, and fine finishing. From floating horsehair canvas executive suits to luxury cashmere coats, bespoke trousers, and artisanal dress shirts.',
    image: '/images/services/service-garment-manufacturing.jpg',
    features: [
      'Full floating Mongolian horsehair canvas',
      '100% in-house UAE cutting & artisan sewing',
      'Certified Super worsted wools & noble cashmeres',
    ],
    quoteSlug: 'Garment Manufacturing',
    isCustomDesign: false,
    isFeatured: false,
    btnLabel: 'Get a quote',
  },
  {
    num: '02',
    title: 'Custom Design',
    tagline: 'Interactive 3D digital tailor studio with instant rendering',
    desc: 'Interactive online 3D & 2D customizer studio. Select European fabric swatches, collar geometries, horn or mother-of-pearl buttons, and personalized monograms with instant visual rendering.',
    image: '/images/services/service-custom-design.jpg',
    features: [
      'Real-time 3D & 2D interactive canvas',
      'Over 1,200 European luxury fabric swatches',
      'Personalized monograms & bespoke hardware selections',
    ],
    quoteSlug: 'Custom Design',
    isCustomDesign: true,
    isFeatured: false,
    btnLabel: 'Start Designing',
  },
  {
    num: '03',
    title: 'Corporate Uniforms',
    tagline: 'Institutional uniform fleets for airlines, hotels & financial groups',
    desc: 'Smart, durable institutional uniform fleets engineered for 5-star hospitality, airline crews, corporate boardrooms, banks, and commercial teams across the UAE and GCC.',
    image: '/images/services/service-corporate-uniforms.jpg',
    features: [
      'Breathable, stain-resistant Gulf-climate fabrics',
      'Comprehensive departmental hierarchy styling',
      'Mobile on-site tailor sizing clinics across all 7 Emirates',
    ],
    quoteSlug: 'Corporate Uniforms',
    isCustomDesign: false,
    isFeatured: false,
    btnLabel: 'Get a quote',
  },
  {
    num: '04',
    title: 'Embroidery & Printing',
    tagline: 'Tajima multi-head gold bullion crests & industrial screen prints',
    desc: 'High-definition Japanese Tajima multi-head embroidery, metallic gold bullion crests, precision silkscreen, and heat-transfer branding tested to withstand commercial laundering.',
    image: '/images/services/service-embroidery-printing.jpg',
    features: [
      'Gold & silver metallic bullion insignia threads',
      'Wash-tested up to 90°C industrial laundry cycles',
      'Sub-millimeter Japanese embroidery precision',
    ],
    quoteSlug: 'Embroidery & Printing',
    isCustomDesign: false,
    isFeatured: false,
    btnLabel: 'Get a quote',
  },
  {
    num: '05',
    title: 'Bulk Production',
    tagline: 'High-volume contract manufacturing up to 50,000+ units monthly',
    desc: 'High-capacity contract manufacturing for orders from 100 to 50,000+ units. Tiered volume wholesale discounts, strict 42-point quality inspection, and zero import customs delays.',
    image: '/images/services/service-bulk-production.jpg',
    features: [
      'Tiered wholesale enterprise volume pricing',
      'Strict 42-point quality inspection protocol',
      'Local UAE factory dispatch with zero customs bottlenecks',
    ],
    quoteSlug: 'Bulk Production',
    isCustomDesign: false,
    isFeatured: false,
    btnLabel: 'Volume Quote',
  },
  {
    num: '06',
    title: 'View All Services',
    tagline: 'Bespoke tailoring, fleet logistics & VIP concierge appointments',
    desc: 'Explore our complete atelier portfolio: traveling VIP master tailor concierge, institutional uniform fleet management, climate-engineered fabrics, and private showroom consultations.',
    image: '/images/services/service-view-all.jpg',
    features: [
      'Traveling master tailor private appointments',
      'Permanent digitized pattern archives for instant reorders',
      'Comprehensive 12-month seam and fit guarantee',
    ],
    quoteSlug: 'All Services & Consultations',
    isCustomDesign: false,
    isFeatured: true,
    btnLabel: 'Explore All Services',
  },
];

const SERVICES_HERO_SLIDES = [
  { image: '/images/services/services-hero-bg.jpg', caption: 'Bespoke Atelier • Capabilities' },
  { image: '/images/services/service-corporate-uniforms.jpg', caption: 'Institutional Fleet Suiting' },
  { image: '/images/services/service-custom-design.jpg', caption: 'Custom 3D Pattern Design' },
  { image: '/images/services/service-garment-manufacturing.jpg', caption: 'In-House Precision Cutting' },
];

const ServicesPage = ({ onNavigate }) => {
  const handleQuoteClick = (e, slug) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('contact');
    } else {
      window.location.hash = '#/contact';
    }
  };

  return (
    <div className="services-page">
      {/* ── 1. Page Header / 5-Second Swipeable Hero Slider ───── */}
      <PageHeroSlider
        badge="Atelier Capabilities"
        title={
          <>
            Our Services &amp; <em>Tailoring Solutions</em>
          </>
        }
        description="Complete in-house pattern drafting, bespoke custom design, corporate uniform programs, precision embroidery, and high-capacity bulk manufacturing across the UAE and GCC."
        slides={SERVICES_HERO_SLIDES}
      />

      {/* ── 2. The 6 Core Services in Alternating Zigzag Layout ─ */}
      <section className="services-overview">
        <div className="container">
          <div className="services-overview__header-wrap">
            <span className="services-overview__badge">6 Core Capabilities</span>
            <h2 className="services-overview__heading">Precision Manufacturing &amp; Design</h2>
            <p className="services-overview__sub">
              Every garment is designed, cut, stitched, and finished completely in-house within our UAE atelier.
            </p>
          </div>

          <div className="services-zigzag-list">
            {SERVICES_CATALOG.map((item, index) => {
              const isEven = index % 2 === 1;
              const waMessage = encodeURIComponent(
                `Hello Shubra Garments, I have an enquiry about ${item.quoteSlug}.`
              );

              return (
                <article
                  key={item.num}
                  className={`services-zigzag-row ${isEven ? 'services-zigzag-row--reverse' : ''}`}
                >
                  {/* Media Column with Minimal Image */}
                  <div className="services-zigzag-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="services-zigzag-img"
                      loading="lazy"
                    />
                    <div className="services-zigzag-overlay" />
                    <span className="services-zigzag-num-badge">{item.num}</span>
                  </div>

                  {/* Content Column */}
                  <div className="services-zigzag-content">
                    <span className="services-zigzag-tag">CAPABILITY {item.num}</span>
                    <h3 className="services-zigzag-title">{item.title}</h3>
                    <h4 className="services-zigzag-tagline">{item.tagline}</h4>
                    <p className="services-zigzag-desc">{item.desc}</p>

                    <ul className="services-zigzag-features">
                      {item.features.map((feat, i) => (
                        <li key={i}>
                          <span className="services-zigzag-check">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="services-zigzag-actions">
                      {item.isCustomDesign ? (
                        <a
                          href="#/custom-design"
                          className="services-overview__btn services-overview__btn--primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (onNavigate) onNavigate('custom-design');
                            else window.location.hash = '#/custom-design';
                          }}
                        >
                          {item.btnLabel} →
                        </a>
                      ) : item.isFeatured ? (
                        <a
                          href="#/about"
                          className="services-overview__btn services-overview__btn--primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (onNavigate) onNavigate('about');
                            else window.location.hash = '#/about';
                          }}
                        >
                          {item.btnLabel} →
                        </a>
                      ) : (
                        <a
                          href="#/contact"
                          className="services-overview__btn services-overview__btn--primary"
                          onClick={(e) => handleQuoteClick(e, item.quoteSlug)}
                        >
                          {item.btnLabel} →
                        </a>
                      )}

                      <a
                        href={`https://wa.me/971500000000?text=${waMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="services-overview__btn services-overview__btn--wa"
                        aria-label={`WhatsApp enquiry about ${item.title}`}
                      >
                        WhatsApp Enquiry
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Bulk Corporate / B2B Uniforms ─────────────────── */}
      <section id="corporate-fleet">
        <BulkCorporate />
      </section>
    </div>
  );
};

export default ServicesPage;
