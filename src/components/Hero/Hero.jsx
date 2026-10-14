/* ═══════════════════════════════════════════════════════════════
   Hero.jsx — Full-Screen Luxury Service Slider
   Full-screen architectural image carousel with quiet luxury aesthetic.
   Features:
   - Fullscreen 16:9 panoramic studio photography background
   - 6 Core Services with minimal editorial copy
   - Autoplay every 6 seconds with pause on hover/touch
   - Dual actions: "Get a quote" (#contact) & "WhatsApp" (or "Start designing")
   - Smooth 0.8s crossfade and soft slide transitions
   - Keyboard arrows, swipe gestures, elongated dots & arrow buttons
   - Full accessibility (carousel ARIA roles, focus rings, reduced-motion)
   ═══════════════════════════════════════════════════════════════ */

import { useState, useEffect, useRef, useCallback } from 'react';
import TrustedBy from '../TrustedBy/TrustedBy';
import './Hero.css';

/* ── 6 Core Services Data ────────────────────────────────────── */
const HERO_SERVICES = [
  {
    id: 'corporate-uniforms',
    name: 'Corporate Uniforms',
    description: 'Smart, durable uniforms made for your whole team.',
    image: '/images/hero/corporate-uniforms.jpg',
    alt: 'Shubra Garments Tailored Corporate Uniforms for UAE Enterprises',
    isCustomDesign: false,
  },
  {
    id: 'suits-blazers',
    name: 'Suits & Blazers',
    description: 'Tailored suits and blazers, made in-house.',
    image: '/images/hero/suits-and-blazers.jpg',
    alt: 'Shubra Garments In-House Bespoke Suits and Blazers',
    isCustomDesign: false,
  },
  {
    id: 'coats-outerwear',
    name: 'Coats & Outerwear',
    description: 'Coats and jackets, tailored to your brand.',
    image: '/images/hero/coats-and-outerwear.jpg',
    alt: 'Shubra Garments Luxury Tailored Coats and Outerwear Jackets',
    isCustomDesign: false,
  },
  {
    id: 'workwear',
    name: 'Workwear',
    description: 'Practical, hard-wearing workwear for every role.',
    image: '/images/hero/workwear.jpg',
    alt: 'Shubra Garments Heavy-Duty Precision Workwear and Industrial Uniforms',
    isCustomDesign: false,
  },
  {
    id: 'polo-tshirts',
    name: 'Polo & Promotional T-shirts',
    description: 'Custom polos and t-shirts, branded with your logo.',
    image: '/images/hero/polo-and-tshirts.jpg',
    alt: 'Shubra Garments Custom Embroidered Polos and Promotional T-Shirts',
    isCustomDesign: false,
  },
  {
    id: 'custom-design',
    name: 'Custom Design',
    description: 'Design your own garment online in minutes.',
    image: '/images/hero/custom-design.jpg',
    alt: 'Shubra Garments Interactive Online Custom Garment Designer',
    isCustomDesign: true,
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds interval per user request

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' = swiping right-to-left
  const [imageErrors, setImageErrors] = useState({});

  const totalSlides = HERO_SERVICES.length;
  const autoplayTimerRef = useRef(null);
  const heroRef = useRef(null);

  // Touch / Pointer Swipe Handling
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchCurrentXRef = useRef(0);
  const isSwipingRef = useRef(false);

  /* ── Missing Image Verification & Console Logging ───────────── */
  useEffect(() => {
    HERO_SERVICES.forEach((service) => {
      const img = new Image();
      img.src = service.image;
      img.onerror = () => {
        console.warn(
          `[Hero Slider] Missing image file: "${service.image}" for service "${service.name}".`
        );
        setImageErrors((prev) => ({ ...prev, [service.id]: true }));
      };
    });
  }, []);

  const handleImageError = (service) => {
    console.warn(
      `[Hero Slider] Image failed to load: "${service.image}" for service "${service.name}".`
    );
    setImageErrors((prev) => ({ ...prev, [service.id]: true }));
  };

  /* ── Slider Navigation & Autoplay Reset ─────────────────────── */
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    autoplayTimerRef.current = setInterval(() => {
      setSlideDirection('next');
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_INTERVAL);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setSlideDirection('next');
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    startAutoplay();
  }, [totalSlides, startAutoplay]);

  const prevSlide = useCallback(() => {
    setSlideDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    startAutoplay();
  }, [totalSlides, startAutoplay]);

  const goToSlide = useCallback((index) => {
    setSlideDirection(index >= currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    startAutoplay();
  }, [currentIndex, startAutoplay]);

  /* ── Autoplay (3 Seconds Interval) ──────────────────────────── */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    startAutoplay();

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [startAutoplay]);

  /* ── Keyboard Navigation (ArrowLeft / ArrowRight) ──────────── */
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  /* ── Finger Swipe Handlers (Touch & Mouse Drag) ─────────────── */
  const handleTouchStart = (e) => {
    const touch = e.touches ? e.touches[0] : e;
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    touchCurrentXRef.current = touch.clientX;
    isSwipingRef.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwipingRef.current) return;
    const touch = e.touches ? e.touches[0] : e;
    touchCurrentXRef.current = touch.clientX;
    const diffX = touchCurrentXRef.current - touchStartXRef.current;
    const diffY = touch.clientY - touchStartYRef.current;

    // If clearly horizontal swiping with finger, prevent browser interference
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isSwipingRef.current) return;
    isSwipingRef.current = false;

    const deltaX = touchCurrentXRef.current - touchStartXRef.current;
    const threshold = 30; // 30px swipe threshold for effortless responsiveness

    if (deltaX < -threshold) {
      nextSlide();
    } else if (deltaX > threshold) {
      prevSlide();
    }
  };

  const handlePointerDown = (e) => {
    if (e.target.closest('a, button')) return;
    touchStartXRef.current = e.clientX;
    touchStartYRef.current = e.clientY;
    touchCurrentXRef.current = e.clientX;
    isSwipingRef.current = true;
  };

  const handlePointerMove = (e) => {
    if (!isSwipingRef.current) return;
    touchCurrentXRef.current = e.clientX;
  };

  return (
    <section
      ref={heroRef}
      className="hero hero--fullscreen-slider"
      aria-label="Shubra Garments Services"
      aria-roledescription="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handleTouchEnd}
      onPointerCancel={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background ambient lighting glows */}
      <div className="hero__bg-glow hero__bg-glow--top" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--bottom" aria-hidden="true" />

      {/* ── 1. Top of Hero: Trusted by Leading Brands Strip ────── */}
      <div className="hero__trusted-wrapper">
        <TrustedBy />
      </div>

      {/* ── 2. Hero Stage Area (Strictly below the Trusted Brands Strip) ── */}
      <div className="hero__stage-wrapper">
        {/* Fullscreen Background Image Slider strictly within stage below TrustedBy */}
        <div
          className={`hero-fullscreen-bg hero-fullscreen-bg--dir-${slideDirection}`}
          aria-hidden="true"
        >
          {HERO_SERVICES.map((service, index) => {
            const isActive = index === currentIndex;
            const isMissing = imageErrors[service.id];
            // Calculate relative offset for smooth horizontal swiping
            const diff = (index - currentIndex + totalSlides) % totalSlides;
            let posClass = 'hero-fullscreen-bg__slide--inactive';
            if (isActive) {
              posClass = 'hero-fullscreen-bg__slide--active';
            } else if (diff === 1) {
              posClass = 'hero-fullscreen-bg__slide--next';
            } else if (diff === totalSlides - 1) {
              posClass = 'hero-fullscreen-bg__slide--prev';
            }

            return (
              <div
                key={`bg-slide-${service.id}`}
                className={`hero-fullscreen-bg__slide ${posClass}`}
              >
                {!isMissing ? (
                  <img
                    src={service.image}
                    alt=""
                    className="hero-fullscreen-bg__image"
                    onError={() => handleImageError(service)}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                ) : (
                  <div className="hero-fullscreen-bg__fallback-pattern" />
                )}
                {/* Editorial warm gradient veil */}
                <div className="hero-fullscreen-bg__overlay" />
              </div>
            );
          })}
        </div>

        {/* ── Main Editorial Content Layer ──────────────────────── */}
        <div className="hero__container container">
          <div className="hero-slider hero-slider--fullscreen">
          {/* Editorial Slide Content */}
          <div className="hero-slider__content-col">
            {HERO_SERVICES.map((service, index) => {
              const isActive = index === currentIndex;
              const whatsappUrl = `https://wa.me/971500000000?text=${encodeURIComponent(
                `Hello Shubra Garments, I have an enquiry about ${service.name}.`
              )}`;

              return (
                <div
                  key={`text-${service.id}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${totalSlides}`}
                  aria-hidden={!isActive}
                  className={`hero-slide__text-pane ${isActive ? 'hero-slide__text-pane--active' : ''}`}
                >
                  <span className="hero-slide__label">30+ years in the UAE</span>
                  <h1 className="hero-slide__title">{service.name}</h1>
                  <p className="hero-slide__description">{service.description}</p>

                  <div className="hero-slide__actions">
                    <a
                      href="#/contact"
                      className="hero-btn hero-btn--primary"
                      tabIndex={isActive ? 0 : -1}
                      onClick={(e) => {
                        e.preventDefault();
                        window.dispatchEvent(new CustomEvent('shubra:navigate', { detail: { page: 'contact' } }));
                      }}
                    >
                      Get a quote
                    </a>

                    {service.isCustomDesign ? (
                      <a
                        href="#/custom-design"
                        className="hero-btn hero-btn--outline"
                        tabIndex={isActive ? 0 : -1}
                        onClick={(e) => {
                          e.preventDefault();
                          window.dispatchEvent(new CustomEvent('shubra:navigate', { detail: { page: 'custom-design' } }));
                        }}
                      >
                        Start designing
                      </a>
                    ) : (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-btn hero-btn--outline hero-btn--wa"
                        tabIndex={isActive ? 0 : -1}
                        aria-label={`Inquire about ${service.name} on WhatsApp`}
                      >
                        <svg
                          className="hero-btn__wa-icon"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 17.8c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a7.92 7.92 0 0 1-1.22-4.2c0-4.41 3.59-8 8-8 2.14 0 4.15.83 5.66 2.34a7.96 7.96 0 0 1 2.34 5.66c0 4.41-3.59 8-7.99 8zm4.39-5.99c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                        </svg>
                        WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Controls: Navigation Arrows, Progress Indicator & Dots ── */}
          <div className="hero-slider__footer-bar">
            {/* Dots Indicator (active dot is longer) */}
            <div className="hero-slider__dots" role="tablist" aria-label="Service carousel navigation">
              {HERO_SERVICES.map((service, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={`dot-${service.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Slide ${index + 1} of ${totalSlides}: ${service.name}`}
                    className={`hero-slider__dot ${isActive ? 'hero-slider__dot--active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                );
              })}
            </div>

            {/* Arrow Buttons */}
            <div className="hero-slider__arrows">
              <button
                type="button"
                className="hero-slider__arrow hero-slider__arrow--prev"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="hero-slider__arrow hero-slider__arrow--next"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
