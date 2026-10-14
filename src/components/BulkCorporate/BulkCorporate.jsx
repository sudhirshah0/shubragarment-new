/* ═══════════════════════════════════════════════════════════════
   BulkCorporate — Enterprise Fleet & Corporate Orders
   Features:
   - 6 Institutional uniform benefits & UAE mobile fitting guarantees
   - 3 Scalable volume tiers with wholesale discount pricing
   - Interactive corporate inquiry form with WhatsApp concierge routing
   ═══════════════════════════════════════════════════════════════ */

import { corporateBenefits } from '../../data/bulkCorporate';
import './BulkCorporate.css';

const BulkCorporate = () => {

  return (
    <section
      className="bulk-corporate section"
      id="corporate"
      aria-label="Bulk and Corporate Uniform Orders"
    >
      <div className="bulk-corporate__container container">
        {/* ── Section Header (Centered) ─────────────────────── */}
        <div className="bulk-corporate__header">
          <div className="bulk-corporate__title-row">
            <h2 className="bulk-corporate__title">Outfit Your Entire Enterprise</h2>
            <p className="bulk-corporate__subtitle tagline">
              Elevating the presence of Dubai’s finest institutions with bespoke-cut corporate wear, on-site master measuring, and rapid replenishment.
            </p>
          </div>
        </div>

        {/* ── 6 Corporate Benefits Grid with Images ─────────── */}
        <div className="bulk-corporate__benefits-grid">
          {corporateBenefits.map((b) => (
            <article key={b.title} className="bulk-corporate__benefit-card">
              <div className="bulk-corporate__benefit-media">
                <img
                  src={b.image}
                  alt={b.title}
                  className="bulk-corporate__benefit-img"
                  loading="lazy"
                />
                <div className="bulk-corporate__benefit-overlay" />
                <span className="bulk-corporate__benefit-tag">{b.tag}</span>
                <span className="bulk-corporate__benefit-icon-float" aria-hidden="true">{b.icon}</span>
              </div>
              <div className="bulk-corporate__benefit-body">
                <h3 className="bulk-corporate__benefit-title">{b.title}</h3>
                <p className="bulk-corporate__benefit-desc">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BulkCorporate;
