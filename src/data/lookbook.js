/* ═══════════════════════════════════════════════════════════════
   lookbook.js — Luxury Editorial Lookbook Curated Catalogue
   Features:
   - 4 Curated Editorial Sections:
     1. Formalwear (Haute Couture, Sovereign Suiting & Bespoke Velvet)
     2. Casualwear (Luxury Knitwear, Italian Linen & Artisanal Leather)
     3. Tailoring Details (Hand-Rolled Lapels, Floating Canvas, Horn Buttons)
     4. Corporate Apparel (VIP Aviation, Diplomatic Protocol & Bespoke Fleet)
   - Real brand assets and clearly labeled concept imagery
   - Editorial specifications (fabric, cut, silhouette, edition)
   ═══════════════════════════════════════════════════════════════ */

export const lookbookEditorialMeta = {
  volume: 'VOLUME MMXXVI',
  issue: 'EDITORIAL COMPENDIUM N° 04',
  title: 'THE ATELIER LOOKBOOK',
  subtitle: 'An archival study in architectural drape, hand-finished canvassing, and contemporary silhouette engineering across the Emirates.',
  season: 'FALL / WINTER & RESORT HAUTE COUTURE',
};

export const lookbookCategories = [
  { id: 'all', label: 'All Editions' },
  { id: 'formalwear', label: 'Formalwear' },
  { id: 'casualwear', label: 'Casualwear' },
  { id: 'tailoring', label: 'Tailoring Details' },
  { id: 'corporate', label: 'Corporate Apparel' },
];

export const lookbookItems = [
  /* ── 1. Formalwear ── */
  {
    id: 'formal-01',
    category: 'formalwear',
    categoryLabel: 'Formalwear',
    title: 'Imperial Paisley Double-Breasted Dinner Coat',
    subtitle: 'Midnight Navy & Gold Filigree Silk Brocade',
    lookNumber: 'LOOK 01 / FORMAL',
    image: '/images/collection1/Unknown-35 1.png',
    badge: 'Atelier Signature',
    aspect: 'tall', // masonry styling
    palette: ['#0f1c3f', '#c5a059', '#1a1a2e'],
    details: [
      { label: 'Cloth', value: '70% Silk Brocade, 30% Metallic Filament' },
      { label: 'Construction', value: 'Full Floating Horsehair Canvas' },
      { label: 'Lapel', value: 'Midnight Blue Velvet Peak Facings' },
      { label: 'Buttons', value: 'Gilded Crest Shank Buttons' },
      { label: 'Origin', value: 'Hand-Tailored in Sharjah Atelier' },
    ],
    editorialNote:
      'Woven on historical jacquard looms, this double-breasted sovereign coat reinterprets Arabian heritage filigree through Savile Row architectural shoulders.',
    isConcept: false,
  },
  {
    id: 'formal-02',
    category: 'formalwear',
    categoryLabel: 'Formalwear',
    title: 'Sovereign Crimson & Gilded Tapestry Blazer',
    subtitle: 'Deep Burgundy Velvet with Hand-Stitched Cordwork',
    lookNumber: 'LOOK 02 / FORMAL',
    image: '/images/collection1/Unknown-30 1.png',
    badge: 'Limited Run',
    aspect: 'medium',
    palette: ['#4a1525', '#c89d54', '#260a12'],
    details: [
      { label: 'Cloth', value: 'Burgundy Silk Damask with Gold Thread' },
      { label: 'Cut', value: 'Dramatic 6x2 Double-Breasted Silhouette' },
      { label: 'Interior', value: 'Full Bemberg Silk Monogrammed Lining' },
      { label: 'Pockets', value: 'Jet-Slanted Velvet Flap Closures' },
    ],
    editorialNote:
      'Engineered for state galas and private VIP receptions. Hand-finished with pick-stitched satin edges and deep jewel tone depth.',
    isConcept: false,
  },
  {
    id: 'formal-03',
    category: 'formalwear',
    categoryLabel: 'Formalwear',
    title: 'Heritage British Tartan Double-Breasted Smoking Jacket',
    subtitle: 'Sandstone Twill with Cerulean & Russet Windowpane',
    lookNumber: 'LOOK 03 / FORMAL',
    image: '/images/collection1/Unknown-28 1.png',
    badge: 'Archival Cut',
    aspect: 'tall',
    palette: ['#b89b7b', '#2c4763', '#7b2e2e'],
    details: [
      { label: 'Cloth', value: 'Super 140s Pure Wool Glenurquhart Plaid' },
      { label: 'Silhouette', value: 'Sculpted English Pagoda Shoulder' },
      { label: 'Vents', value: 'Dual Side Deep Crown Vents' },
      { label: 'Buttons', value: 'Polished Horn Double Fasteners' },
    ],
    editorialNote:
      'A master study in pattern-matching across seams, collar lapels, and breast welt pockets with millimeter accuracy.',
    isConcept: false,
  },
  {
    id: 'formal-04',
    category: 'formalwear',
    categoryLabel: 'Formalwear',
    title: 'Midnight Sovereign 3-Piece Tuxedo Ensembles',
    subtitle: 'Vitale Barberis Canonico Super 150s Pure Wool',
    lookNumber: 'LOOK 04 / FORMAL',
    image: '/images/work/difc-suits.jpg',
    badge: 'Bespoke Power Suit',
    aspect: 'wide',
    palette: ['#1d2434', '#ffffff', '#a67c2e'],
    details: [
      { label: 'Fabric', value: 'VBC Super 150s Worsted Wool (Italy)' },
      { label: 'Waistcoat', value: 'Horseshoe Low-Cut Tuxedo Vest' },
      { label: 'Trousers', value: 'Side Adjusters with Grosgrain Stripe' },
    ],
    editorialNote:
      'Crafted for DIFC boardrooms and Dubai Opera galas with wrinkle-recovery memory and hand-padded chest canvases.',
    isConcept: false,
  },

  /* ── 2. Casualwear ── */
  {
    id: 'casual-01',
    category: 'casualwear',
    categoryLabel: 'Casualwear',
    title: 'Hand-Burnished Cognac Lambskin Flight Jacket',
    subtitle: 'Vegetable-Tanned Italian Nappa with Antiqued Hardware',
    lookNumber: 'LOOK 05 / CASUAL',
    image: '/images/collection1/Unknown-67 1.png',
    badge: 'Hand-Crafted Leather',
    aspect: 'tall',
    palette: ['#6c3f25', '#3c2315', '#a67c2e'],
    details: [
      { label: 'Hide', value: '100% Full-Grain Vegetable-Tanned Lambskin' },
      { label: 'Collar', value: 'Mandarin Snap-Button Moto Collar' },
      { label: 'Hardware', value: 'Gunmetal YKK Excella Dual Zippers' },
      { label: 'Lining', value: 'Breathable Cotton-Cupro Blend' },
    ],
    editorialNote:
      'Buttery-soft full-grain leather hand-waxed by our artisans in Sharjah, gaining unique patina with every wear.',
    isConcept: false,
  },
  {
    id: 'casual-02',
    category: 'casualwear',
    categoryLabel: 'Casualwear',
    title: 'Savanna Tan Café Racer Leather Blouson',
    subtitle: 'Lightweight Sandstone Nubuck for Gulf Evenings',
    lookNumber: 'LOOK 06 / CASUAL',
    image: '/images/collection1/Unknown-69 1.png',
    badge: 'Atelier Leather',
    aspect: 'medium',
    palette: ['#b37d4e', '#593a20', '#ebd8be'],
    details: [
      { label: 'Hide', value: 'Aniline Lambskin with Natural Grain' },
      { label: 'Closure', value: 'Asymmetric Zip with Storm Under-Flap' },
      { label: 'Cuffs', value: 'Gusseted Zipper Expansion Cuffs' },
    ],
    editorialNote:
      'Engineered specifically for GCC spring and autumn temperatures with ergonomic bi-swing shoulder pleats.',
    isConcept: false,
  },
  {
    id: 'casual-03',
    category: 'casualwear',
    categoryLabel: 'Casualwear',
    title: 'Riviera Navy Safari Overshirt with Suede Accents',
    subtitle: 'Heavyweight Egyptian Cotton Drill with Nubuck Contrast',
    lookNumber: 'LOOK 07 / CASUAL',
    image: '/images/collection1/Unknown-43 1.png',
    badge: 'Utility Luxury',
    aspect: 'tall',
    palette: ['#1c2842', '#4b4844', '#dfdbd4'],
    details: [
      { label: 'Cloth', value: '340gsm Compact Cotton Drill' },
      { label: 'Pockets', value: 'Quad Bellows Pockets with Storm Flaps' },
      { label: 'Reinforcement', value: 'Charcoal Suede Elbow Patches' },
      { label: 'Closure', value: 'Hidden Horn Button Front Placket' },
    ],
    editorialNote:
      'The definitive weekend transitional garment. Structural durability meets high-society sporting weekend aesthetics.',
    isConcept: false,
  },
  {
    id: 'casual-04',
    category: 'casualwear',
    categoryLabel: 'Casualwear',
    title: 'Emerald Damask Jacquard Six-Panel Clubhouse Cap',
    subtitle: 'Metallic Gilded Filigree on Forest Green Canvas',
    lookNumber: 'LOOK 08 / CASUAL',
    image: '/images/collection1/Unknown-37 1.png',
    badge: 'Artisanal Accessory',
    aspect: 'medium',
    palette: ['#1f3d2b', '#bda05e', '#13261a'],
    details: [
      { label: 'Crown', value: 'Structured High-Profile Jacquard' },
      { label: 'Sweatband', value: 'Anti-Bacterial Egyptian Cotton' },
      { label: 'Back Closure', value: 'Brass Slide Buckle with Calfskin Strap' },
    ],
    editorialNote:
      'A crossover accessory blending bespoke upholstery fabric weaving with high-performance clubhouse headwear.',
    isConcept: false,
  },

  /* ── 3. Tailoring Details ── */
  {
    id: 'tailoring-01',
    category: 'tailoring',
    categoryLabel: 'Tailoring Details',
    title: 'Master Cutting & Chalk Draftsmanship',
    subtitle: 'The 28-Measurement Bespoke Blueprint',
    lookNumber: 'STUDY 01 / ANATOMY',
    image: '/images/manufacturing/cutting.jpg',
    badge: 'Hand-Drafted',
    aspect: 'wide',
    palette: ['#2b211a', '#a67c2e', '#efe7dc'],
    details: [
      { label: 'Process', value: 'Individual Hard-Paper Pattern Draft' },
      { label: 'Inlays', value: 'Generous 2.5-Inch Seam Allowances' },
      { label: 'Alignment', value: 'Zero-Tolerance Stripe & Check Matching' },
    ],
    editorialNote:
      'Every bespoke silhouette begins with hand-drawn chalk lines directly onto cloth, respecting the natural roll of the fiber grain.',
    isConcept: false,
  },
  {
    id: 'tailoring-02',
    category: 'tailoring',
    categoryLabel: 'Tailoring Details',
    title: 'Floating Horsehair Canvas Chest Piece',
    subtitle: 'Unstructured Natural Movement & Breathability',
    lookNumber: 'STUDY 02 / ANATOMY',
    image: '/images/manufacturing/sewing.jpg',
    badge: 'Savile Row Grade',
    aspect: 'tall',
    palette: ['#3b2d23', '#d9bc7a', '#f7f2ec'],
    details: [
      { label: 'Canvas', value: 'Multi-Layer Mongolian Horsehair Canvas' },
      { label: 'Pad-Stitching', value: 'Over 1,400 Hand Stitches per Lapel' },
      { label: 'Molding', value: 'Hand-Steamed Over Anatomical Iron Busts' },
    ],
    editorialNote:
      'Unlike fused mass garments, our floating canvas conforms organically to the wearer’s torso posture over time.',
    isConcept: false,
  },
  {
    id: 'tailoring-03',
    category: 'tailoring',
    categoryLabel: 'Tailoring Details',
    title: 'Textile Curation & European Cloth Vault',
    subtitle: 'Cashmere, Vicuña & Merino Selections',
    lookNumber: 'STUDY 03 / ANATOMY',
    image: '/images/manufacturing/fabric.jpg',
    badge: 'Imported Mills',
    aspect: 'medium',
    palette: ['#28211b', '#8c765f', '#ddd0be'],
    details: [
      { label: 'Mills', value: 'Loro Piana, Zegna, Vitale Barberis Canonico' },
      { label: 'Weights', value: '210gsm Summer Tropical to 540gsm Cashmere' },
      { label: 'Inspection', value: 'Dual-Pass Light Table Defect Detection' },
    ],
    editorialNote:
      'Sourced directly from Biella, Italy and Huddersfield, England to ensure unrivaled hand feel, tensile integrity, and drape memory.',
    isConcept: false,
  },
  {
    id: 'tailoring-04',
    category: 'tailoring',
    categoryLabel: 'Tailoring Details',
    title: 'Hand-Finished Milanese Buttonholes & Pick Stitching',
    subtitle: 'The Art of the Final 100 Stitches',
    lookNumber: 'STUDY 04 / ANATOMY',
    image: '/images/manufacturing/finishing.jpg',
    badge: 'Hand-Sewn',
    aspect: 'tall',
    palette: ['#1f1812', '#a67c2e', '#f7f2ec'],
    details: [
      { label: 'Buttonhole', value: 'Hand-Gimped Raised Silk Cord' },
      { label: 'Edges', value: '2mm AMF Hand-Guided Pick Stitching' },
      { label: 'Buttons', value: 'Hand-Turned Water Buffalo Horn & MOP' },
    ],
    editorialNote:
      'The quiet signature of genuine bespoke craftsmanship—visible upon close inspection by discerning connoisseurs.',
    isConcept: false,
  },

  /* ── 4. Corporate Apparel ── */
  {
    id: 'corp-01',
    category: 'corporate',
    categoryLabel: 'Corporate Apparel',
    title: 'Emirates Diplomatic Protocol & State Fleet Uniform',
    subtitle: 'Deep Burgundy Gabardine with Gold Aviation Braid',
    lookNumber: 'FLEET 01 / CORPS',
    image: '/images/collection1/Unknown-57 1.png',
    badge: 'Aviation Fleet',
    aspect: 'tall',
    palette: ['#5b1725', '#c89e52', '#ffffff'],
    details: [
      { label: 'Client', value: 'Private Aviation & VIP Protocol' },
      { label: 'Cloth', value: 'Wrinkle-Recovery Wool-Poly Gabardine' },
      { label: 'Accents', value: 'Gold Metallic Bullion Rank Braid' },
      { label: 'Fleet Scale', value: '450+ Crew Outfitted' },
    ],
    editorialNote:
      'Engineered for long-haul pressurized cabins with nano liquid repellent finish, wrinkle recovery, and tailored elegance.',
    isConcept: false,
  },
  {
    id: 'corp-02',
    category: 'corporate',
    categoryLabel: 'Corporate Apparel',
    title: 'Executive Aircrew Charcoal 3-Piece Service Uniform',
    subtitle: 'Structured Wool Blend with Metallic Insignia Tie',
    lookNumber: 'FLEET 02 / CORPS',
    image: '/images/collection1/Unknown-58 1.png',
    badge: 'VIP Jet Wardrobe',
    aspect: 'tall',
    palette: ['#3b3c40', '#9da2a6', '#ffffff'],
    details: [
      { label: 'Client', value: 'Royal Flight Operations Dubai' },
      { label: 'Fabric', value: 'Bi-Stretch Superfine Tropical Wool' },
      { label: 'Features', value: 'Concealed Boarding Pass Passport Pocket' },
    ],
    editorialNote:
      'Modern executive suiting scaled across cockpit captains and senior flight service directors.',
    isConcept: false,
  },
  {
    id: 'corp-03',
    category: 'corporate',
    categoryLabel: 'Corporate Apparel',
    title: 'Hospitality Concierge Front-of-House Ensemble',
    subtitle: 'Midnight Navy Tailored Blazer with Silk Scarf & Pencil Skirt',
    lookNumber: 'FLEET 03 / CORPS',
    image: '/images/collection1/Unknown-52 1.png',
    badge: 'Luxury Resort',
    aspect: 'medium',
    palette: ['#1c2742', '#a8202d', '#ffffff'],
    details: [
      { label: 'Client', value: '5-Star Resort Properties Dubai' },
      { label: 'Cloth', value: 'Breathable Bamboo Silk & Wool Blend' },
      { label: 'Details', value: 'Crimson Belt Piping & Gold Shank Buttons' },
      { label: 'Deployment', value: '1,200+ Team Members' },
    ],
    editorialNote:
      'Designed to endure 12-hour high-motion hospitality service shifts while retaining razor-sharp silhouette drape.',
    isConcept: false,
  },
  {
    id: 'corp-04',
    category: 'corporate',
    categoryLabel: 'Corporate Apparel',
    title: 'High-Visibility Technical Site Engineering Uniform',
    subtitle: 'Navy & Solar Yellow with 3M Scotchlite Retroreflective Tape',
    lookNumber: 'FLEET 04 / CORPS',
    image: '/images/collection1/Unknown-44 1.png',
    badge: 'Industrial Fleet',
    aspect: 'medium',
    palette: ['#e4d023', '#2a2f3d', '#ffffff'],
    details: [
      { label: 'Standard', value: 'EN ISO 20471 Class 2 Safety Certified' },
      { label: 'Fabric', value: 'Ripstop Cordura with Hydrophobic Coating' },
      { label: 'Ergonomics', value: 'Articulated Sleeves & Radio Harness Loops' },
    ],
    editorialNote:
      'Heavy-duty industrial attire engineered for mega-infrastructure and engineering sites across the GCC.',
    isConcept: false,
  },
];
