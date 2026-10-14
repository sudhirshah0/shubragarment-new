import React from 'react';
import './TrustedBy.css';

/* ═══════════════════════════════════════════════════════════════
   Authentic SVG Brand Logos of Top UAE & Global Hospitality Leaders
   Inspired by the reference image
   ═══════════════════════════════════════════════════════════════ */

const CapitalCateringLogo = () => (
  <div className="trusted-logo trusted-logo--capital" title="Capital Catering Abu Dhabi">
    <svg viewBox="0 0 130 38" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="15" textAnchor="middle" fill="#2B211A" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
        capital
      </text>
      <text x="50%" y="28" textAnchor="middle" fill="#009ec5" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
        catering
      </text>
      <circle cx="48" cy="4" r="1.5" fill="#009ec5" />
      <text x="50%" y="37" textAnchor="middle" fill="#009ec5" fontFamily="'Segoe UI', Tahoma, Arial, sans-serif" fontSize="7.5" fontWeight="600">
        كابيتال للضيافة
      </text>
    </svg>
  </div>
);

const EmiratesLogo = () => (
  <div className="trusted-logo trusted-logo--emirates" title="Emirates">
    <svg viewBox="0 0 120 40" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Emirates Red Emblem with Calligraphy */}
      <rect x="44" y="2" width="32" height="19" rx="2" fill="#D71921" />
      <path d="M49 14.5c1.4-2.8 4-5 8-5s6.6 2.2 8 5c-2.4-.9-5.2-1.3-8-1.3s-5.6.4-8 1.3z" fill="#FFF" />
      <path d="M57 6c1 1.2 2.5 1.8 3.5 1.8.8 0 1.5-.4 1.8-1 0 2-1.5 3.2-3.2 3.2-1.2 0-2.1-.6-2.1-1.5 0-.8.7-1.5 1.5-1.5.3 0 .6.1.8.2-.2-.5-.7-.8-1.3-.8-.5 0-1 .3-1 0.6z" fill="#FFF" />
      <circle cx="54" cy="8" r="0.9" fill="#FFF" />
      <circle cx="64" cy="9.5" r="0.9" fill="#FFF" />
      {/* Emirates Wordmark */}
      <text x="50%" y="35" textAnchor="middle" fill="#D71921" fontFamily="Georgia, 'Times New Roman', serif" fontSize="13.5" fontWeight="700" letterSpacing="0.03em">
        Emirates
      </text>
    </svg>
  </div>
);

const SofitelLogo = () => (
  <div className="trusted-logo trusted-logo--sofitel" title="Sofitel Dubai Jumeirah Beach">
    <svg viewBox="0 0 150 40" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="17" textAnchor="middle" fill="#2B211A" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.42em">
        SOFITEL
      </text>
      {/* Diamond accent over O */}
      <polygon points="56,4 58.5,1.5 61,4 58.5,6.5" fill="#A67C2E" />
      <text x="50%" y="27" textAnchor="middle" fill="#675748" fontFamily="'Segoe UI', Tahoma, Arial, sans-serif" fontSize="7" fontWeight="500">
        سوفيتل دبي جميرا بيتش
      </text>
      <text x="50%" y="36" textAnchor="middle" fill="#7E5F22" fontFamily="'DM Sans', sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="0.18em">
        DUBAI JUMEIRAH BEACH
      </text>
    </svg>
  </div>
);

const AlRostamaniLogo = () => (
  <div className="trusted-logo trusted-logo--alrostamani" title="Al Rostamani Group">
    <svg viewBox="0 0 170 38" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Arabic and English Group Titles */}
      <text x="10" y="16" fill="#2B211A" fontFamily="'Segoe UI', Tahoma, Arial, sans-serif" fontSize="12" fontWeight="700">
        مجموعة الرستماني
      </text>
      <text x="10" y="29" fill="#2B211A" fontFamily="'DM Sans', sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.06em">
        AL ROSTAMANI GROUP
      </text>
      {/* Iconic Flying Cyan Bird Falcon Emblem */}
      <g transform="translate(136, 6)">
        <path
          d="M0 12 C4 8, 10 3, 17 0 C15 6, 12 11, 7 14 C12 12, 18 10, 24 11 C18 15, 12 19, 5 21 C11 20, 16 21, 20 23 C13 25, 6 26, 0 24 C4 20, 2 16, 0 12 Z"
          fill="#00A8E8"
        />
        <circle cx="15" cy="5" r="1.2" fill="#00A8E8" />
      </g>
    </svg>
  </div>
);

const JWMarriottLogo = () => (
  <div className="trusted-logo trusted-logo--marriott" title="JW Marriott Marquis Dubai">
    <svg viewBox="0 0 150 42" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Griffin Crest Emblem */}
      <g transform="translate(67, 1) scale(0.65)">
        <path
          d="M8 0 C10 2, 13 4, 15 2 C14 5, 12 7, 13 10 C15 8, 18 8, 20 6 C18 10, 16 13, 16 16 C18 15, 21 16, 23 18 C19 19, 16 21, 14 24 C13 21, 10 20, 8 20 C7 23, 6 25, 4 27 C5 22, 5 18, 4 14 C3 10, 4 6, 8 0 Z"
          fill="#595048"
        />
        <circle cx="14" cy="5" r="1" fill="#FFF" />
      </g>
      <text x="50%" y="27" textAnchor="middle" fill="#2B211A" fontFamily="'DM Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.14em">
        JW MARRIOTT
      </text>
      <text x="50%" y="37" textAnchor="middle" fill="#7E5F22" fontFamily="'DM Sans', sans-serif" fontSize="7" fontWeight="600" letterSpacing="0.32em">
        MARQUIS
      </text>
    </svg>
  </div>
);

const SheratonGrandLogo = () => (
  <div className="trusted-logo trusted-logo--sheraton" title="Sheraton Grand Hotel Dubai">
    <svg viewBox="0 0 145 42" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Laurel Wreath Roundel with S */}
      <g transform="translate(63, 0)">
        <circle cx="9" cy="9" r="8" stroke="#675748" strokeWidth="0.8" fill="none" strokeDasharray="1.5 1" />
        <path d="M5 9c0-3 2-4.5 4-4.5s4 1.5 4 4.5" stroke="#675748" strokeWidth="0.8" fill="none" />
        <path d="M5 9c0 3 2 4.5 4 4.5s4-1.5 4-4.5" stroke="#675748" strokeWidth="0.8" fill="none" />
        <text x="9" y="12.5" textAnchor="middle" fill="#2B211A" fontFamily="Georgia, serif" fontSize="9" fontWeight="700">
          S
        </text>
      </g>
      <text x="50%" y="26" textAnchor="middle" fill="#2B211A" fontFamily="Georgia, 'Times New Roman', serif" fontSize="10.5" fontWeight="700" letterSpacing="0.12em">
        SHERATON
      </text>
      <text x="50%" y="33" textAnchor="middle" fill="#7E5F22" fontFamily="'DM Sans', sans-serif" fontSize="6.5" fontWeight="700" letterSpacing="0.22em">
        GRAND
      </text>
      <text x="50%" y="40" textAnchor="middle" fill="#675748" fontFamily="'DM Sans', sans-serif" fontSize="5.5" fontWeight="400" letterSpacing="0.08em">
        Hotel Dubai
      </text>
    </svg>
  </div>
);

const MandarinOrientalLogo = () => (
  <div className="trusted-logo trusted-logo--mandarin" title="Mandarin Oriental Jumeira Dubai">
    <svg viewBox="0 0 160 42" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Golden Fan Emblem (11 Fan Blades) */}
      <g transform="translate(68, 2)">
        <path d="M12 14 L0 7 A14 14 0 0 1 24 7 Z" fill="#C5A059" opacity="0.25" />
        <path d="M12 14 L1 7 M12 14 L4 4.5 M12 14 L8 2.5 M12 14 L12 2 M12 14 L16 2.5 M12 14 L20 4.5 M12 14 L23 7" stroke="#A67C2E" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="12" cy="14" r="1.5" fill="#7E5F22" />
      </g>
      <text x="50%" y="27" textAnchor="middle" fill="#2B211A" fontFamily="Georgia, 'Times New Roman', serif" fontSize="9.5" fontWeight="700" letterSpacing="0.16em">
        MANDARIN ORIENTAL
      </text>
      <text x="50%" y="37" textAnchor="middle" fill="#7E5F22" fontFamily="'DM Sans', sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="0.22em">
        JUMEIRA DUBAI
      </text>
    </svg>
  </div>
);

const DamacLogo = () => (
  <div className="trusted-logo trusted-logo--damac" title="DAMAC Luxury">
    <svg viewBox="0 0 120 38" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Modern Stylized 'da' Emblem */}
      <text x="50%" y="24" textAnchor="middle" fill="#2B211A" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="28" fontWeight="600" fontStyle="italic" letterSpacing="-0.04em">
        da
      </text>
      <text x="50%" y="34" textAnchor="middle" fill="#7E5F22" fontFamily="'DM Sans', sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="0.3em">
        DAMAC
      </text>
    </svg>
  </div>
);

const JumeirahGroupLogo = () => (
  <div className="trusted-logo trusted-logo--jumeirah" title="Jumeirah Hotels & Resorts">
    <svg viewBox="0 0 145 38" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M72 1c-3 3-5 7-5 10 0 4 3 6 6 6s6-2 6-6c0-3-2-7-5-10" fill="#A67C2E" opacity="0.35" />
      <text x="50%" y="23" textAnchor="middle" fill="#2B211A" fontFamily="Georgia, 'Times New Roman', serif" fontSize="14" fontWeight="600" letterSpacing="0.08em">
        Jumeirah
      </text>
      <text x="50%" y="33" textAnchor="middle" fill="#7E5F22" fontFamily="'DM Sans', sans-serif" fontSize="6.5" fontWeight="500" letterSpacing="0.25em">
        HOTELS & RESORTS
      </text>
    </svg>
  </div>
);

const EmaarLogo = () => (
  <div className="trusted-logo trusted-logo--emaar" title="Emaar Properties Dubai">
    <svg viewBox="0 0 130 38" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="22" textAnchor="middle" fill="#2B211A" fontFamily="'DM Sans', sans-serif" fontSize="15" fontWeight="700" letterSpacing="0.26em">
        EMAAR
      </text>
      <text x="50%" y="32" textAnchor="middle" fill="#675748" fontFamily="'DM Sans', sans-serif" fontSize="6.5" fontWeight="500" letterSpacing="0.3em">
        DUBAI
      </text>
    </svg>
  </div>
);

const AldarLogo = () => (
  <div className="trusted-logo trusted-logo--aldar" title="Aldar Abu Dhabi">
    <svg viewBox="0 0 130 38" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Geometric Triangular Monogram */}
      <g transform="translate(24, 8)">
        <polygon points="10,0 20,18 0,18" stroke="#A67C2E" strokeWidth="1.5" fill="none" />
        <polygon points="10,5 16,16 4,16" fill="#A67C2E" opacity="0.3" />
      </g>
      <text x="75" y="22" textAnchor="middle" fill="#2B211A" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.18em">
        ALDAR
      </text>
      <text x="75" y="31" textAnchor="middle" fill="#7E5F22" fontFamily="'DM Sans', sans-serif" fontSize="6.5" fontWeight="500" letterSpacing="0.16em">
        ABU DHABI
      </text>
    </svg>
  </div>
);

const EtihadAirwaysLogo = () => (
  <div className="trusted-logo trusted-logo--etihad" title="Etihad Airways">
    <svg viewBox="0 0 140 40" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Faceted geometric emblem */}
      <g transform="translate(16, 9)">
        <polygon points="11,0 22,6 22,18 11,24 0,18 0,6" fill="#BD9B60" opacity="0.25" />
        <polygon points="11,0 22,6 11,12 0,6" fill="#A67C2E" />
        <polygon points="22,6 22,18 11,12" fill="#BD9B60" />
        <polygon points="11,24 0,18 11,12" fill="#87672B" />
      </g>
      <text x="48" y="21" fill="#2B211A" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.18em">
        ETIHAD
      </text>
      <text x="48" y="32" fill="#7E5F22" fontFamily="'DM Sans', sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="0.25em">
        AIRWAYS
      </text>
    </svg>
  </div>
);

const DPWorldLogo = () => (
  <div className="trusted-logo trusted-logo--dpworld" title="DP World">
    <svg viewBox="0 0 135 38" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* DP World distinctive connected arcs */}
      <g transform="translate(10, 7)">
        <path d="M12 2 A10 10 0 0 1 22 12 A10 10 0 0 1 12 22" stroke="#00A3E0" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <path d="M12 2 A10 10 0 0 0 2 12 A10 10 0 0 0 12 22" stroke="#0A2540" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="12" r="3.5" fill="#00A3E0" />
      </g>
      <text x="42" y="23" fill="#0A2540" fontFamily="'DM Sans', sans-serif" fontSize="14" fontWeight="800" letterSpacing="0.04em">
        DP WORLD
      </text>
    </svg>
  </div>
);

const EmiratesNBDLogo = () => (
  <div className="trusted-logo trusted-logo--emiratesnbd" title="Emirates NBD">
    <svg viewBox="0 0 145 38" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Diamond Spark Monogram */}
      <g transform="translate(12, 7)">
        <polygon points="12,0 24,12 12,24 0,12" fill="#003B70" />
        <path d="M12 5 L14 12 L21 12 L15 16 L17 22 L12 18 L7 22 L9 16 L3 12 L10 12 Z" fill="#FDB813" transform="scale(0.5) translate(12, 12)" />
      </g>
      <text x="42" y="19" fill="#003B70" fontFamily="'DM Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.02em">
        Emirates NBD
      </text>
      <text x="42" y="29" fill="#675748" fontFamily="'Segoe UI', Tahoma, sans-serif" fontSize="7" fontWeight="600">
        بنك الإمارات دبي الوطني
      </text>
    </svg>
  </div>
);

const ADNOCLogo = () => (
  <div className="trusted-logo trusted-logo--adnoc" title="ADNOC">
    <svg viewBox="0 0 130 38" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ADNOC Emblem */}
      <g transform="translate(12, 6)">
        <circle cx="12" cy="12" r="11" fill="#002D62" />
        <path d="M12 5 C8 10, 6 13, 6 16 C6 19.3, 8.7 22, 12 22 C15.3 22, 18 19.3, 18 16 C18 13, 16 10, 12 5 Z" fill="#009CDE" />
        <circle cx="12" cy="16" r="3" fill="#FFF" />
      </g>
      <text x="42" y="22" fill="#002D62" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="800" letterSpacing="0.08em">
        ADNOC
      </text>
      <text x="42" y="31" fill="#009CDE" fontFamily="'Segoe UI', Tahoma, sans-serif" fontSize="7" fontWeight="700">
        أدنوك
      </text>
    </svg>
  </div>
);

const AtlantisDubaiLogo = () => (
  <div className="trusted-logo trusted-logo--atlantis" title="Atlantis Dubai">
    <svg viewBox="0 0 140 38" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Royal Arch Crest */}
      <path d="M70 3 C66 7, 63 12, 63 16 C63 19, 65 21, 70 21 C75 21, 77 19, 77 16 C77 12, 74 7, 70 3 Z" fill="#A67C2E" opacity="0.35" />
      <text x="50%" y="22" textAnchor="middle" fill="#2B211A" fontFamily="'DM Sans', sans-serif" fontSize="12" fontWeight="700" letterSpacing="0.22em">
        ATLANTIS
      </text>
      <text x="50%" y="32" textAnchor="middle" fill="#7E5F22" fontFamily="'DM Sans', sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="0.28em">
        THE PALM • DUBAI
      </text>
    </svg>
  </div>
);

const FABLogo = () => (
  <div className="trusted-logo trusted-logo--fab" title="First Abu Dhabi Bank (FAB)">
    <svg viewBox="0 0 120 38" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Star Wing Emblem */}
      <g transform="translate(14, 7)">
        <path d="M0 12 L12 0 L15 6 L6 15 Z" fill="#E4002B" />
        <path d="M12 0 L24 12 L15 15 L12 6 Z" fill="#002D62" />
        <polygon points="6,15 15,15 12,24" fill="#002D62" />
      </g>
      <text x="42" y="23" fill="#002D62" fontFamily="'DM Sans', sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.08em">
        FAB
      </text>
    </svg>
  </div>
);

const FlydubaiLogo = () => (
  <div className="trusted-logo trusted-logo--flydubai" title="flydubai">
    <svg viewBox="0 0 125 38" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="23" textAnchor="middle" fill="#0072CE" fontFamily="'DM Sans', sans-serif" fontSize="14" fontWeight="700" letterSpacing="-0.01em">
        fly<tspan fill="#F58220">dubai</tspan>
      </text>
      <path d="M22 27 C45 31, 80 31, 103 27" stroke="#F58220" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

const BRAND_COMPONENTS = [
  { id: 'emirates', Component: EmiratesLogo },
  { id: 'etihad', Component: EtihadAirwaysLogo },
  { id: 'jumeirah', Component: JumeirahGroupLogo },
  { id: 'emaar', Component: EmaarLogo },
  { id: 'dpworld', Component: DPWorldLogo },
  { id: 'sofitel', Component: SofitelLogo },
  { id: 'emiratesnbd', Component: EmiratesNBDLogo },
  { id: 'alrostamani', Component: AlRostamaniLogo },
  { id: 'adnoc', Component: ADNOCLogo },
  { id: 'marriott', Component: JWMarriottLogo },
  { id: 'damac', Component: DamacLogo },
  { id: 'sheraton', Component: SheratonGrandLogo },
  { id: 'atlantis', Component: AtlantisDubaiLogo },
  { id: 'aldar', Component: AldarLogo },
  { id: 'fab', Component: FABLogo },
  { id: 'mandarin', Component: MandarinOrientalLogo },
  { id: 'flydubai', Component: FlydubaiLogo },
  { id: 'capital', Component: CapitalCateringLogo },
];

/**
 * TrustedBy Component
 * Displays the static 'TRUSTED BY LEADING BRANDS' label on the left with a hairline divider,
 * and an infinite marquee of top UAE enterprise & hospitality logos scrolling in from the right.
 */
const TrustedBy = () => {
  return (
    <div className="trusted-by" aria-label="Trusted by leading UAE corporate and hospitality brands">
      <div className="trusted-by__inner">
        {/* Fixed Left Header Label & Hairline Divider */}
        <div className="trusted-by__label-block">
          <span className="trusted-by__label">TRUSTED BY LEADING BRANDS</span>
          <span className="trusted-by__divider" aria-hidden="true" />
        </div>

        {/* Continuous Smooth Infinite Marquee Scrolling from Right */}
        <div className="trusted-by__marquee-wrapper" tabIndex={0} aria-label="Scrolling list of client partner logos">
          <div className="trusted-by__marquee-track">
            {/* Primary Set */}
            <div className="trusted-by__marquee-group">
              {BRAND_COMPONENTS.map(({ id, Component }) => (
                <div key={`logo-primary-${id}`} className="trusted-by__item">
                  <Component />
                </div>
              ))}
            </div>

            {/* Seamless Duplicate Set for Infinite 60fps Loop */}
            <div className="trusted-by__marquee-group" aria-hidden="true">
              {BRAND_COMPONENTS.map(({ id, Component }) => (
                <div key={`logo-duplicate-${id}`} className="trusted-by__item">
                  <Component />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
