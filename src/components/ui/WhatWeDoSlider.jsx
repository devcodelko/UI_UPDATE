import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const capabilities = [
  {
    title: 'MSME Scale-up & Credit Facilitation',
    desc: 'Direct debt linkage, interest subvention advisory, CGTMSE credit coverage, and loan structuring under CM YUVA and state industrial schemes.',
    image: '/assets/images/financial-advisory.jpg',
    alt: 'MSME Scale-up & Credit Facilitation'
  },
  {
    title: 'Skill Training & TVET Modernization',
    desc: 'Curriculum modernization for industrial ITIs, smart technical laboratories, sector skill councils, and industry-sponsored apprenticeship programs.',
    image: '/assets/images/cmyuva_training_thumb.jpg',
    alt: 'Skill Training & TVET Modernization'
  },
  {
    title: 'Government Implementation & Audits',
    desc: 'Third-party evaluation, baseline socio-economic field research, CAG compliance tracking, and turnkey project management units (PMUs).',
    image: '/assets/images/cag-report.jpg',
    alt: 'Government Implementation & Audits'
  },
  {
    title: 'ODOP & Retail Mart Development',
    desc: 'Common Facility Centers (CFCs), standardized export branding, GeM government portal onboarding, and specialized state retail mart networks.',
    image: '/assets/images/odop-retail-mart.jpg',
    alt: 'ODOP & Retail Mart Development'
  }
];

// Matched transition duration (800ms) and autoplay display duration (4500ms)
const SLIDE_DURATION = 800;
const AUTOPLAY_DELAY = 4500;

export default function WhatWeDoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootContainerRef = useRef(null);
  const textSwiperRef = useRef(null);
  const mediaSwiperRef = useRef(null);
  const textSwiperInstance = useRef(null);
  const mediaSwiperInstance = useRef(null);

  const total = capabilities.length;

  useEffect(() => {
    if (!textSwiperRef.current || !mediaSwiperRef.current) return;

    // Destroy existing instances if any (e.g. in React StrictMode)
    if (textSwiperRef.current.swiper) {
      try {
        textSwiperRef.current.swiper.destroy(true, true);
      } catch {
        // ignore
      }
    }
    if (mediaSwiperRef.current.swiper) {
      try {
        mediaSwiperRef.current.swiper.destroy(true, true);
      } catch {
        // ignore
      }
    }

    // 1. Text Swiper (Fade effect with matching transition duration)
    const textSwiper = new Swiper(textSwiperRef.current, {
      modules: [EffectFade],
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: SLIDE_DURATION,
      autoHeight: true,
      allowTouchMove: false,
      observer: true,
      observeParents: true,
    });

    // 2. Media Swiper (Carousel driving the synchronized autoplay)
    const mediaSwiper = new Swiper(mediaSwiperRef.current, {
      modules: [Autoplay],
      slidesPerView: 1.02,
      spaceBetween: 16,
      speed: SLIDE_DURATION,
      rewind: true,
      autoplay: {
        delay: AUTOPLAY_DELAY,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      grabCursor: true,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        320: {
          slidesPerView: 1.02,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1.02,
          spaceBetween: 14,
        },
        1024: {
          slidesPerView: 1.02,
          spaceBetween: 16,
        },
        1400: {
          slidesPerView: 1.02,
          spaceBetween: 18,
        },
      },
    });

    textSwiperInstance.current = textSwiper;
    mediaSwiperInstance.current = mediaSwiper;

    // Synchronize Text Swiper and active index on media slide change with matched speed
    mediaSwiper.on('slideChange', () => {
      const currentIdx = mediaSwiper.activeIndex;
      setActiveIndex(currentIdx);
      if (textSwiper && !textSwiper.destroyed && textSwiper.activeIndex !== currentIdx) {
        textSwiper.slideTo(currentIdx, SLIDE_DURATION);
      }
    });

    // Pause autoplay on mouse hover over the entire container (so reading text is uninterrupted)
    const rootEl = rootContainerRef.current;
    const onMouseEnter = () => {
      if (mediaSwiper && !mediaSwiper.destroyed && mediaSwiper.autoplay?.running) {
        mediaSwiper.autoplay.stop();
      }
    };
    const onMouseLeave = () => {
      if (mediaSwiper && !mediaSwiper.destroyed && mediaSwiper.autoplay && !mediaSwiper.autoplay.running) {
        mediaSwiper.autoplay.start();
      }
    };

    if (rootEl) {
      rootEl.addEventListener('mouseenter', onMouseEnter);
      rootEl.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      if (rootEl) {
        rootEl.removeEventListener('mouseenter', onMouseEnter);
        rootEl.removeEventListener('mouseleave', onMouseLeave);
      }
      if (textSwiper && !textSwiper.destroyed) {
        try {
          textSwiper.destroy(true, true);
        } catch {
          // ignore
        }
      }
      if (mediaSwiper && !mediaSwiper.destroyed) {
        try {
          mediaSwiper.destroy(true, true);
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const handlePrev = (e) => {
    e?.preventDefault();
    if (mediaSwiperInstance.current) {
      if (mediaSwiperInstance.current.activeIndex > 0) {
        mediaSwiperInstance.current.slidePrev(SLIDE_DURATION);
      } else {
        mediaSwiperInstance.current.slideTo(total - 1, SLIDE_DURATION);
      }
    }
  };

  const handleNext = (e) => {
    e?.preventDefault();
    if (mediaSwiperInstance.current) {
      if (mediaSwiperInstance.current.activeIndex < total - 1) {
        mediaSwiperInstance.current.slideNext(SLIDE_DURATION);
      } else {
        mediaSwiperInstance.current.slideTo(0, SLIDE_DURATION);
      }
    }
  };

  const handleSlideTo = (idx) => {
    if (mediaSwiperInstance.current) {
      mediaSwiperInstance.current.slideTo(idx, SLIDE_DURATION);
    }
  };

  return (
    <div ref={rootContainerRef} className="cmp-dual-slider relative w-full" data-aos="fade-up" data-aos-delay="100">
      <div className="cmp-dual-slider__container flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14">
        <div className="cmp-dual-slider__left-wrapper w-full lg:w-[42%] shrink-0">
          <div ref={textSwiperRef} className="swiper whatwedo-text-swiper">
            <div className="swiper-wrapper">
              {capabilities.map((item, idx) => (
                <div key={idx} className="swiper-slide flex flex-col">
                  <div className="flex flex-col cmp-dual-text-w">
                    <h3 className="whatwedo-slide-title">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cmp-dual-slider__right-wrapper w-full lg:w-[58%] min-w-0 overflow-visible">
          <div ref={mediaSwiperRef} className="swiper whatwedo-media-swiper overflow-visible">
            <div className="swiper-wrapper">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="swiper-slide cursor-pointer group"
                  onClick={() => handleSlideTo(idx)}
                >
                  <div className="whatwedo-media-card">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="cmp-dual-slider__controls mt-8 flex items-center justify-between gap-6">
        <div
          className="cmp-dual-slider__segments flex-1 flex items-center gap-[3px] cursor-pointer"
          id="whatwedo-segments-track"
          role="tablist"
          aria-label="Slide indicators"
        >
          {capabilities.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-slide-index={idx}
              className={`whatwedo-segment-item flex-1 h-[4px] rounded-none transition-colors duration-300 cursor-pointer p-0 border-0 ${idx === activeIndex ? 'active' : 'bg-[#e2e8f0] hover:bg-slate-300'
                }`}
              style={{
                backgroundColor: idx === activeIndex ? '#138D9E' : undefined
              }}
              onClick={() => handleSlideTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="cmp-dual-slider__prevnext flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            id="whatwedo-prev"
            type="button"
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:text-brand-orange hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer"
            aria-label="Previous capability"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span
            id="whatwedo-fraction"
            className="text-xs sm:text-sm font-semibold text-slate-800 tracking-wider min-w-[46px] text-center select-none"
          >
            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <button
            id="whatwedo-next"
            type="button"
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:text-brand-orange hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer"
            aria-label="Next capability"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
