/* ═══════════════════════════════════════════════════════════════
   projects.js — Curated Portfolio Data for Shubra Garments
   Structured across the 4 core pillars with 100% UNIQUE images:
   1. Real projects (6 authentic commissions in /images/work/)
   2. Corporate projects (4 enterprise fleets in /images/corporate/)
   3. Custom creations (4 bespoke commissions in /images/custom/)
   4. View Our Work (Curated Lookbook Gallery & Archives)
   ═══════════════════════════════════════════════════════════════ */

/* ── 1. Real Projects Data (Exclusive /images/work/ assets) ─── */
export const realProjectsData = [
  {
    id: 'work-jumeirah-resorts',
    client: 'Jumeirah Luxury Resorts',
    projectType: 'Hospitality & Front-of-House Wardrobe',
    category: 'Hospitality',
    location: 'Dubai & Abu Dhabi, UAE',
    year: '2025',
    image: '/images/work/hospitality.jpg',
    description:
      'Engineered an architectural wardrobe for over 1,200 concierge, valet, and VIP lounge ambassadors. Woven with stain-resistant Italian merino wool and breathable bamboo silks designed for the Gulf climate.',
    tags: ['1,250+ Ensembles', 'Nanotech Wool', 'Bespoke Fit'],
  },
  {
    id: 'work-difc-power-suits',
    client: 'DIFC Executive Guild',
    projectType: 'Bespoke Boardroom Suiting',
    category: 'Executive Suiting',
    location: 'DIFC, Dubai, UAE',
    year: '2025',
    image: '/images/work/difc-suits.jpg',
    description:
      'Handcrafted three-piece power suits commissioned for senior partners and directors. Featuring Vitale Barberis Canonico Super 150s cloth, floating horsehair canvas chest pieces, and monogrammed silk linings.',
    tags: ['Super 150s Wool', 'Floating Canvas', 'Hand-Stitched'],
  },
  {
    id: 'work-royal-aviation',
    client: 'Royal Gulf Aviation',
    projectType: 'Private Jet Fleet Attire',
    category: 'Aviation',
    location: 'Dubai South (DWC), UAE',
    year: '2024',
    image: '/images/work/royal-aviation.jpg',
    description:
      'Tailored long-haul crew attire balancing lightweight 4-way stretch wool-elastane with gold bullion insignia embroidery. Engineered with hidden boarding pass pockets and wrinkle-recovery memory.',
    tags: ['450+ Crew Outfitted', 'Wrinkle Memory', 'Gold Bullion'],
  },
  {
    id: 'work-bulgari-resort',
    client: 'Bulgari Resort & Residences',
    projectType: 'Private Island Concierge & Butler Uniforms',
    category: 'Luxury Hospitality',
    location: 'Jumeira Bay Island, Dubai',
    year: '2024',
    image: '/images/work/bulgari-resort.jpg',
    description:
      'Exclusively tailored Italian linen-silk tunics and tailored cream trousers for private island butlers. Finished with mother-of-pearl buttons and discreet hand-finished pick stitching.',
    tags: ['Linen-Silk Blend', 'Mother-of-Pearl', 'Hand-Finished'],
  },
  {
    id: 'work-diplomatic-mission',
    client: 'Diplomatic Protocol & Delegations',
    projectType: 'Ceremonial & Diplomatic Overcoats',
    category: 'Ceremonial',
    location: 'Abu Dhabi, UAE',
    year: '2023',
    image: '/images/work/diplomatic.jpg',
    description:
      'Double-breasted cashmere overcoats cut with structured pagoda shoulders and regal satin facings, designed for high-level diplomatic delegations and international state visits.',
    tags: ['100% Cashmere', 'Pagoda Shoulder', 'Regal Satin'],
  },
  {
    id: 'work-al-habtoor-polo',
    client: 'Al Habtoor Polo Resort & Club',
    projectType: 'VIP Club Member & Umpire Blazers',
    category: 'Sports & Leisure',
    location: 'Dubailand, Dubai, UAE',
    year: '2024',
    image: '/images/work/polo-club.jpg',
    description:
      'Bespoke navy hopsack wool blazers bearing hand-embroidered metallic club crests and gold-plated equestrian shank buttons for championship finals and VIP owners enclosure.',
    tags: ['Hopsack Wool', 'Hand Crest', 'Gold Shank Buttons'],
  },
];

// Backwards compatibility alias for existing imports
export const ourWorkProjects = realProjectsData;

/* ── 2. Corporate Projects Data (Exclusive /images/corporate/ assets) ── */
export const corporateProjectsData = [
  {
    id: 'corp-aviation',
    title: 'Aviation & Airline Cabin Fleets',
    sector: 'Commercial & Private Aviation',
    image: '/images/corporate/corp-aviation.jpg',
    scope: 'Flight Attendants, Flight Deck Crew & Ground Operations',
    description:
      'End-to-end turnkey wardrobe engineering for regional carriers and private charter fleets. Built with climate-adaptive bi-stretch tropical wools, stain guard finish, and bespoke metallic epaulette cresting.',
    highlights: [
      'Wrinkle-free recovery memory cloth',
      'Tested for 50,000+ flight miles',
      'Japanese Tajima precision bullion crests',
      'Rapid size replacement logistics across UAE airports',
    ],
    clientScale: '15,000+ Crew Members Deployed',
  },
  {
    id: 'corp-hospitality',
    title: '5-Star Luxury Hospitality & Resorts',
    sector: 'Hotels, Palaces & Private Islands',
    image: '/images/corporate/corp-hospitality.jpg',
    scope: 'Concierge, Front-of-House, Butler Corps & Fine Dining',
    description:
      'Architectural uniform programs tailored for the UAE’s world-renowned hospitality brands. Seamlessly harmonizes property interior colorways with durable, stain-resistant European weaves.',
    highlights: [
      'Nanotech fluid-repellent Italian wools',
      'Custom mother-of-pearl and horn buttons',
      'Department-specific colorway hierarchy',
      'Full seasonal summer & winter wardrobe sets',
    ],
    clientScale: '1,200+ Ensembles per Property',
  },
  {
    id: 'corp-banking',
    title: 'Banking & Financial Executive Suiting',
    sector: 'Banks, Wealth Management & Legal Guilds',
    image: '/images/corporate/corp-banking.jpg',
    scope: 'Branch Management, Client Relationship Officers & Boardrooms',
    description:
      'Impeccable executive tailoring establishing corporate prestige across hundreds of branch locations. Tailored with floating canvas construction and shape retention engineered for daily executive wear.',
    highlights: [
      'Vitale Barberis Canonico Super 130s & 150s',
      'Monogrammed silk corporate linings',
      'On-site corporate tailor measurement days',
      'Consistent master-pattern batch reproduction',
    ],
    clientScale: '8,500+ Officers Outfitted',
  },
  {
    id: 'corp-medical',
    title: 'Healthcare & Clinical Aesthetics Fleets',
    sector: 'Hospitals, Polyclinics & Luxury Medical Spas',
    image: '/images/corporate/corp-medical.jpg',
    scope: 'Physicians, Nursing Staff, Lab Technicians & Aesthetics',
    description:
      'Medical garments engineered for clinical sterility without sacrificing sartorial dignity. Tailored from antimicrobial, fluid-resistant, breathable 4-way stretch fabrics that endure industrial thermal laundering.',
    highlights: [
      'Antimicrobial silver-ion yarn treatment',
      'Thermal autoclave & bleach-safe dyeing',
      'Ergonomic motion-gusseted shoulders',
      'Discreet instrument pockets & magnetic badge tabs',
    ],
    clientScale: '6,000+ Clinical Uniforms',
  },
];

/* ── 3. Custom Creations Data (Exclusive /images/custom/ assets) ─── */
export const customCreationsData = [
  {
    id: 'custom-tuxedo',
    title: 'Bespoke Midnight Peak-Lapel Tuxedo',
    clientProfile: 'Private Diplomat & Black-Tie Gala Commission',
    image: '/images/custom/custom-tuxedo.webp',
    cloth: 'Vitale Barberis Canonico Super 150s Wool & Silk Satin',
    features: [
      'Hand-padded floating horsehair canvas chest piece',
      'Hand-turned silk grosgrain peak lapels',
      'Milanese buttonhole hand-stitched with silk cordonnet',
      'Custom silk jacquard lining with personalized initials',
    ],
    craftTime: '45+ Atelier Craft Hours',
  },
  {
    id: 'custom-cashmere-overcoat',
    title: 'Pure Mongolian Cashmere Double-Breasted Coat',
    clientProfile: 'Private Executive Wardrobe Commission',
    image: '/images/custom/custom-cashmere-overcoat.webp',
    cloth: '100% Pure Mongolian Cashmere (520gsm) in Camel Beige',
    features: [
      'Sculpted pagoda shoulders and broad peak lapels',
      'Genuine polished water buffalo horn buttons',
      'Full floating canvas with natural horsehair interlining',
      'Discreet passport & cigar interior welt pockets',
    ],
    craftTime: '55+ Atelier Craft Hours',
  },
  {
    id: 'custom-ceremonial-bisht',
    title: 'Ceremonial Royal Bisht & Hand-Embroidered Robe',
    clientProfile: 'Dignitary & State Protocol Commission',
    image: '/images/custom/custom-ceremonial-bisht.webp',
    cloth: 'Fine Najafi Wool with French Metallic Gold Thread (Zari)',
    features: [
      '100% hand-stitched Zari embroidery along the collar and hem',
      'Custom gold tassels with artisanal knotting',
      'Lightweight summer-weight breathable sheer wool',
      'Delivered in personalized cedar presentation case',
    ],
    craftTime: '70+ Atelier Craft Hours',
  },
  {
    id: 'custom-giza-shirts',
    title: 'Artisanal Egyptian Giza 87 Monogrammed Shirts',
    clientProfile: 'Bespoke Executive Wardrobe Suite (12 Pieces)',
    image: '/images/custom/custom-giza-shirts.webp',
    cloth: '100% Egyptian Giza 87 2-Ply Cotton (200s Count)',
    features: [
      'Hand-turned spread collar with removable mother-of-pearl stays',
      '22 stitches per inch fine single-needle seam construction',
      'Australian mother-of-pearl buttons cross-stitched with crow’s foot',
      'Discreet ton-sur-ton hand-embroidered monogram on left gauntlet',
    ],
    craftTime: '15+ Atelier Craft Hours per Shirt',
  },
];

/* ── 4. View Our Work (Curated Lookbook Gallery & Archives) ──── */
export const viewOurWorkGallery = [
  {
    id: 'gal-1',
    title: 'Jumeirah Concierge Uniform Suite',
    category: 'Real Projects',
    badge: 'Real Project',
    image: '/images/gallery/gal-01.webp',
    year: '2025',
    specs: 'Nanotech Wool • 1,250 Pieces',
  },
  {
    id: 'gal-2',
    title: 'Executive Midnight Suiting',
    category: 'Corporate Projects',
    badge: 'Corporate',
    image: '/images/gallery/gal-02.webp',
    year: '2025',
    specs: 'Vitale Barberis • Boardroom Fleet',
  },
  {
    id: 'gal-3',
    title: 'Private Jet Fleet Crew Attire',
    category: 'Real Projects',
    badge: 'Real Project',
    image: '/images/gallery/gal-03.webp',
    year: '2024',
    specs: 'Aviation 4-Way Stretch • Gold Crests',
  },
  {
    id: 'gal-4',
    title: 'Bespoke Super 150s Power Suit',
    category: 'Custom Creations',
    badge: 'Custom',
    image: '/images/gallery/gal-04.webp',
    year: '2025',
    specs: 'Floating Canvas • Hand-Padded Lapels',
  },
  {
    id: 'gal-5',
    title: 'Double-Breasted Pure Cashmere Coat',
    category: 'Custom Creations',
    badge: 'Custom',
    image: '/images/gallery/gal-05.webp',
    year: '2024',
    specs: '100% Cashmere • Horn Buttons',
  },
  {
    id: 'gal-6',
    title: 'Private Island Butler & Concierge Linen',
    category: 'Real Projects',
    badge: 'Real Project',
    image: '/images/gallery/gal-06.webp',
    year: '2024',
    specs: 'Italian Linen-Silk • Hand Pick-Stitch',
  },
  {
    id: 'gal-7',
    title: 'Diplomatic State Visit Overcoat',
    category: 'Real Projects',
    badge: 'Real Project',
    image: '/images/gallery/gal-07.webp',
    year: '2023',
    specs: 'Pure Cashmere • Satin Facings',
  },
  {
    id: 'gal-8',
    title: 'VIP Polo Club Finalists Blazers',
    category: 'Real Projects',
    badge: 'Real Project',
    image: '/images/gallery/gal-08.webp',
    year: '2024',
    specs: 'Hopsack Wool • Gold Shank Crests',
  },
  {
    id: 'gal-9',
    title: 'Midnight Peak-Lapel Tuxedo',
    category: 'Custom Creations',
    badge: 'Custom',
    image: '/images/gallery/gal-09.webp',
    year: '2025',
    specs: 'Super 150s • Silk Grosgrain Lapels',
  },
];
