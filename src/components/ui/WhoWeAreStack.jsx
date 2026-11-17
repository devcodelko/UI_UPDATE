import React, { useState, useEffect, useRef, useCallback } from 'react';

const slides = [
  {
    image: '/assets/images/about-1.png',
    title: 'Technical Quality Compliance Audits across Uttar Pradesh',
    alt: 'Technical Quality Compliance Audit'
  },
  {
    image: '/assets/images/about-2.png',
    title: 'Sovereign Advisory & High-Impact State Policy Support',
    alt: 'Sovereign Advisory & Policy Support'
  },
  {
    image: '/assets/images/about-3.png',
    title: 'ODOP & Cluster Development Common Facility Centers',
    alt: 'Cluster and ODOP Development'
  }
];

function getResponsiveSteps() {
  if (typeof window === 'undefined') return { step1: 62, step2: 114, isTiny: false };
  const w = window.innerWidth;
  const isMobile = w < 640;
  const isTablet = w >= 640 && w < 1024;
  const isTiny = w < 400;

  let step1, step2;
  if (isMobile) {
    step1 = isTiny ? 30 : 40;
    step2 = isTiny ? 56 : 74;
  } else if (isTablet) {
    step1 = 52;
    step2 = 96;
  } else {
    step1 = 62;
    step2 = 114;
  }
  return { step1, step2, isTiny };
}

export default function WhoWeAreStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [captionFade, setCaptionFade] = useState(false);
  const [steps, setSteps] = useState(getResponsiveSteps);
  const total = slides.length;
  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    const handleResize = () => setSteps(getResponsiveSteps());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goTo = useCallback((index) => {
    setCaptionFade(true);
    setCurrentIndex((index + total) % total);
    setTimeout(() => {
      setCaptionFade(false);
    }, 180);
  }, [total]);

  const next = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex]);
  const prev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex]);

  const startAutoplay = useCallback(() => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCaptionFade(true);
        setCurrentIndex((prevIdx) => (prevIdx + 1) % total);
        setTimeout(() => {
          setCaptionFade(false);
        }, 180);
      }, 4500);
    }
  }, [total]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const resetAutoplay = useCallback(() => {
    stopAutoplay();
    startAutoplay();
  }, [stopAutoplay, startAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) prev();
      else next();
      resetAutoplay();
    }
  };

  return (
    <div
      className="whoweare-stack-wrapper w-full"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="whoweare-stack-cards" id="whoweare-stack-cards">
        {slides.map((slide, i) => {
          let diff = (i - currentIndex) % total;
          if (diff < -Math.floor(total / 2)) diff += total;
          if (diff > Math.floor(total / 2)) diff -= total;

          const { step1, step2, isTiny } = steps;

          let transform = '';
          let zIndex = 1;
          let opacity = 0;
          let filter = 'brightness(0.3)';
          let cursor = 'default';
          let pointerEvents = 'none';

          if (diff === 0) {
            transform = 'translate3d(0, 0, 0) scale(1)';
            zIndex = 10;
            opacity = 1;
            filter = 'brightness(1)';
            pointerEvents = 'auto';
            cursor = 'default';
          } else if (diff === -1) {
            transform = `translate3d(-${step1}px, 0, -40px) scale(0.88)`;
            zIndex = 6;
            opacity = 0.9;
            filter = 'brightness(0.65)';
            pointerEvents = 'auto';
            cursor = 'pointer';
          } else if (diff === 1) {
            transform = `translate3d(${step1}px, 0, -40px) scale(0.88)`;
            zIndex = 6;
            opacity = 0.9;
            filter = 'brightness(0.65)';
            pointerEvents = 'auto';
            cursor = 'pointer';
          } else if (diff === -2) {
            transform = `translate3d(-${step2}px, 0, -80px) scale(0.76)`;
            zIndex = 3;
            opacity = isTiny ? 0 : 0.65;
            filter = 'brightness(0.42)';
            pointerEvents = isTiny ? 'none' : 'auto';
            cursor = isTiny ? 'default' : 'pointer';
          } else if (diff === 2) {
            transform = `translate3d(${step2}px, 0, -80px) scale(0.76)`;
            zIndex = 3;
            opacity = isTiny ? 0 : 0.65;
            filter = 'brightness(0.42)';
            pointerEvents = isTiny ? 'none' : 'auto';
            cursor = isTiny ? 'default' : 'pointer';
          }

          return (
            <div
              key={i}
              className="whoweare-stack-card"
              style={{
                transform,
                zIndex,
                opacity,
                filter,
                cursor,
                pointerEvents,
                borderRadius: '0',
                boxShadow: 'none',
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
              onClick={() => {
                if (diff !== 0) {
                  goTo(i);
                  resetAutoplay();
                }
              }}
            >
              <img src={slide.image} alt={slide.alt} />
            </div>
          );
        })}
      </div>

      <div className="whoweare-stack-nav">
        <button
          className="whoweare-nav-btn"
          id="whoweare-prev"
          aria-label="Previous slide"
          onClick={() => {
            prev();
            resetAutoplay();
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div
          className={`whoweare-stack-caption ${captionFade ? 'whoweare-caption-fade' : ''}`}
          id="whoweare-caption"
          aria-live="polite"
        >
          {slides[currentIndex].title}
        </div>
        <button
          className="whoweare-nav-btn"
          id="whoweare-next"
          aria-label="Next slide"
          onClick={() => {
            next();
            resetAutoplay();
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
