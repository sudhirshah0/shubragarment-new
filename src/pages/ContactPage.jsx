/* ═══════════════════════════════════════════════════════════════
   ContactPage.jsx — Dedicated Contact & Enquiries Page
   Sections:
   1. Page Header Hero
   2. Contact Component (Enquiry form, showroom address, map)
   ═══════════════════════════════════════════════════════════════ */

import React from 'react';
import Contact from '../components/Contact/Contact';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contactpage">
      {/* ── Contact Form & Atelier Details ──────────────────── */}
      <section id="contact-enquiries">
        <Contact />
      </section>
    </div>
  );
};

export default ContactPage;
