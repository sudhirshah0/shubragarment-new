/* ═══════════════════════════════════════════════════════════════════
   PageHeroSlider.jsx — Shared 5-Second Swipeable Page Hero Header
   Features:
   - Smooth 5-second automatic right-to-left slide animation
   - Touch / pointer swipe support on mobile devices (finger swiping)
   - Left/right arrow navigation and clickable pill progress dots
   - High performance CSS translate3d transitions with cubic-bezier easing
   - Perfectly responsive across mobile, tablet, and widescreen desktop
   - Zero layout loss, preserving page headers, badges, titles & descriptions
   ═══════════════════════════════════════════════════════════════════ */

import { useState, useRef, useEffect, useCallback } from 'react';
import './PageHeroSlider.css';

const AUTOPLAY_INTERVAL = 5000;

const PageHeroSlider = ({
  badge = 'Shubra Garments',
  title = '',
  description = '',
  slides = [],
  ctaText = '',
  ctaLink = '#/contact',
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const totalSlides = slides.length || 1;

  const autoplayTimerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchCurrentXRef = useRef(0);
  const isSwipingRef = useRef(false);

  /* ── Autoplay handling ─────────────────────────────────────── */
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    if (totalSlides <= 1) return;

    autoplayTimerRef.current = setInterval(() => {
      setSlideDirection('next');
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_INTERVAL);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setSlideDirection('next');
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    startAutoplay();
  }, [totalSlides, startAutoplay]);

  const prevSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setSlideDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    startAutoplay();
  }, [totalSlides, startAutoplay]);

  const goToSlide = useCallback((index) => {
    if (index === currentIndex) return;
    setSlideDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    startAutoplay();
  }, [currentIndex, startAutoplay]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    startAutoplay();
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [startAutoplay]);

  /* ── Mobile Touch Swiping ───────────────────────────────────── */
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

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
      if (e.cancelable) e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    if (!isSwipingRef.current) return;
    isSwipingRef.current = false;
    const deltaX = touchCurrentXRef.current - touchStartXRef.current;
    const threshold = 35;

    if (deltaX < -threshold) {
      nextSlide();
    } else if (deltaX > threshold) {
      prevSlide();
    }
  };

  return (
    <header
      className={`page-hero-slider ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label={badge}
    >
      {/* ── Background Sliding Images ─────────────────────────── */}
      <div
        className={`page-hero-slider__bg-track page-hero-slider__bg-track--dir-${slideDirection}`}
        aria-hidden="true"
      >
        {slides.map((slide, idx) => {
          let posClass = 'page-hero-slider__slide--inactive';
          if (idx === currentIndex) {
            posClass = 'page-hero-slider__slide--active';
          } else if (idx === (currentIndex + 1) % totalSlides) {
            posClass = 'page-hero-slider__slide--next';
          } else if (idx === (currentIndex - 1 + totalSlides) % totalSlides) {
            posClass = 'page-hero-slider__slide--prev';
          }

          const imgSrc = typeof slide === 'string' ? slide : slide.image;
          const imgCaption = typeof slide === 'string' ? '' : slide.caption;

          return (
            <div
              key={`page-hero-slide-${idx}`}
              className={`page-hero-slider__slide ${posClass}`}
            >
              <img
                src={imgSrc}
                alt=""
                className="page-hero-slider__image"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              {imgCaption && (
                <div className="page-hero-slider__image-caption">
                  <span>{imgCaption}</span>
                </div>
              )}
            </div>
          );
        })}

        {/* Ambient Quiet Luxury Veil (Left to Right text readability gradient) */}
        <div className="page-hero-slider__overlay" />
      </div>

      {/* ── Foreground Header Typography ───────────────────────── */}
      <div className="container page-hero-slider__container">
        <div className="page-hero-slider__content-box">
          {badge && <span className="page-hero-slider__badge">{badge}</span>}
          <h1 className="page-hero-slider__title">{title}</h1>
          {description && <p className="page-hero-slider__desc">{description}</p>}

          {ctaText && (
            <div className="page-hero-slider__actions">
              <a href={ctaLink} className="page-hero-slider__cta-btn">
                <span>{ctaText}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>

        {/* ── Slide Navigation Controls (Visible if multiple slides) ── */}
        {totalSlides > 1 && (
          <div className="page-hero-slider__controls">
            <div
              className="page-hero-slider__dots"
              role="tablist"
              aria-label="Slide navigation"
            >
              {slides.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  type="button"
                  className={`page-hero-slider__dot ${
                    idx === currentIndex ? 'page-hero-slider__dot--active' : ''
                  }`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-selected={idx === currentIndex}
                  role="tab"
                />
              ))}
            </div>

            <div className="page-hero-slider__arrows">
              <button
                type="button"
                className="page-hero-slider__arrow"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="page-hero-slider__arrow"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeroSlider;
