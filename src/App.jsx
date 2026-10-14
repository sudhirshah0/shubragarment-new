/* ═══════════════════════════════════════════════════════════════════
   App.jsx — Root multi-page layout component
   Manages dedicated page routing:
   1. About (Our Story, Why Shubra, Who Wear, Our Expertise, Our Process, Testimonials)
   2. Services (Hero Service Slider, Bulk Corporate, Services Catalog)
   3. Our Work (OurWork Craftsmanship, ClientsWork Lookbook)
   4. Collection (The Atelier Collection Catalog with Filters & Bag)
   5. Custom Design (Live Interactive 3D/2D Customizer)
   6. Contact (Atelier Inquiries, Consultations, Showroom Map)

   Shared on all pages:
   - Sticky Navbar on top
   - Luxury Footer at bottom
   - Floating WhatsApp Concierge in corner
   - Lenis smooth scroll
   ═══════════════════════════════════════════════════════════════════ */

import { useState, useEffect, useCallback } from 'react';

/* ── Styles ──────────────────────────────────────────────────────── */
import './styles/global.css';
import './App.css';

/* ── Hooks ───────────────────────────────────────────────────────── */
import useLenis from './hooks/useLenis';
import useScrollReveal from './hooks/useScrollReveal';

/* ── Shared Layout Components ────────────────────────────────────── */
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

/* ── Dedicated Pages ─────────────────────────────────────────────── */
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import OurWorkPage from './pages/OurWorkPage';
import CollectionPage from './pages/CollectionPage';
import CustomDesignPage from './pages/CustomDesignPage';
import ContactPage from './pages/ContactPage';

const normalizePageFromHash = (hash) => {
  const clean = (hash || '').replace(/^#\/?/, '').toLowerCase().trim();
  if (clean === 'home' || clean === '') return 'home';
  if (clean === 'about' || clean === 'why-shubra' || clean === 'our-story') return 'about';
  if (clean === 'services' || clean === 'service' || clean === 'corporate') return 'services';
  if (clean === 'our-work' || clean === 'work' || clean === 'lookbook') return 'our-work';
  if (clean === 'collection' || clean === 'collections') return 'custom-design';
  if (clean === 'custom-design' || clean === 'custom-designer' || clean === 'designer') return 'custom-design';
  if (clean === 'contact') return 'contact';
  return 'home'; // Default home page
};

const App = () => {
  /* ── Loader state ────────────────────────────────────────────── */
  const [isLoading, setIsLoading] = useState(true);

  /* ── Dedicated Page State ────────────────────────────────────── */
  const [currentPage, setCurrentPage] = useState(() =>
    normalizePageFromHash(window.location.hash)
  );

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
    document.body.classList.remove('scroll-locked');
    window.dispatchEvent(new CustomEvent('shubra:loader-complete'));
  }, []);

  /* ── Lenis smooth scroll ─────────────────────────────────────── */
  const lenisRef = useLenis();

  /* ── Scroll reveal animation ─────────────────────────────────── */
  useScrollReveal();

  /* ── Centralized Page Navigation Function ────────────────────── */
  const navigateTo = useCallback((page) => {
    const validPage = normalizePageFromHash(page);
    setCurrentPage(validPage);
    window.location.hash = `#/${validPage}`;

    // Scroll to top cleanly
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  /* ── Synchronize with URL hash changes & custom events ───────── */
  useEffect(() => {
    const handleHashChange = () => {
      const targetPage = normalizePageFromHash(window.location.hash);
      setCurrentPage((prev) => {
        if (prev !== targetPage) {
          if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          return targetPage;
        }
        return prev;
      });
    };

    const handleCustomNavigate = (e) => {
      if (e.detail && e.detail.page) {
        navigateTo(e.detail.page);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('shubra:navigate', handleCustomNavigate);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('shubra:navigate', handleCustomNavigate);
    };
  }, [navigateTo]);

  /* ── Render Active Page Component ────────────────────────────── */
  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'services':
        return <ServicesPage onNavigate={navigateTo} />;
      case 'our-work':
        return <OurWorkPage onNavigate={navigateTo} />;
      case 'collection':
        return <CustomDesignPage onNavigate={navigateTo} />;
      case 'custom-design':
        return <CustomDesignPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <>
      {/* Keyboard accessible skip-to-content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Full-screen intro loader */}
      {isLoading && <Loader onComplete={handleLoaderComplete} />}

      {/* Sticky navigation on top of all pages */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Active Dedicated Page View */}
      <main id="main-content" tabIndex={-1}>
        {renderActivePage()}
      </main>

      {/* Shared Footer on all pages */}
      <Footer currentPage={currentPage} onNavigate={navigateTo} />

      {/* Floating round WhatsApp concierge action in bottom corner */}
      <FloatingWhatsApp />
    </>
  );
};

export default App;
