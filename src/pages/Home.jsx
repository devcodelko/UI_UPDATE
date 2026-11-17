import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import StatCounter from '../components/ui/StatCounter';
import WhoWeAreStack from '../components/ui/WhoWeAreStack';
import WhatWeDoSlider from '../components/ui/WhatWeDoSlider';
import KarigarScrollSlider from '../components/ui/KarigarScrollSlider';

const heroSlides = [
  {
    image: '/assets/images/hero.jpg',
    alt: 'ODOP Banana Fiber Artisan in UP',
    eyebrow: 'INSIGHTS',
    title: "Powering Growth in UP's Evolving Enterprise Ecosystem",
    desc: 'Explore how UPICON delivers end-to-end industrial consultancy, turnkey project reports (DPRs), and grassroots enterprise facilitation across all 75 districts.',
    tabLabel: 'Industrial Ecosystem'
  },
  {
    image: '/assets/images/hero-1.png',
    alt: 'Senior UPICON consultant analyzing project blueprints',
    eyebrow: 'SOVEREIGN LEADERSHIP',
    title: '50+ Years of Industrial Advisory & Institutional Governance',
    desc: 'Established in 1974 as a joint venture institution by the Government of Uttar Pradesh, SIDBI, IFCI, and Nationalized Banks to accelerate sovereign MSME performance.',
    tabLabel: 'Sovereign Leadership'
  },
  {
    image: '/assets/images/hero-2.png',
    alt: 'Industrial Food Processing Audit in UP',
    eyebrow: 'QUALITY & COMPLIANCE',
    title: 'Auditing 1,200+ Industrial Units with Technical Precision',
    desc: 'Executing rigorous third-party quality compliance audits, statutory EIA clearances, and techno-economic feasibility studies for industrial clusters statewide.',
    tabLabel: 'Quality Compliance'
  },
  {
    image: '/assets/images/hero-3.png',
    alt: 'ODOP Banana Fiber Artisan in UP',
    eyebrow: 'UP KE KARIGAR',
    title: 'Empowering Grassroots Artisans & Indigenous Craft Clusters',
    desc: 'Empowering handicraft clusters and traditional master craftspeople across 75 districts with Common Facility Centers, standardized branding, and global mart access.',
    tabLabel: 'Artisan Clusters'
  },
  {
    image: '/assets/images/hero-4.png',
    alt: 'Skill Training Center in Uttar Pradesh',
    eyebrow: 'STATE FLAGSHIP SCHEME',
    title: 'Mukhyamantri Yuva Udyami Vikas Abhiyan (CM YUVA)',
    desc: 'Transforming ambitious educated youth into confident enterprise founders through zero-interest capital financing, preparation of bankable dossiers, and statutory clearances.',
    tabLabel: 'CM Yuva Abhiyan'
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper('.home2-full-swiper', {
      modules: [Autoplay, EffectFade],
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 1000,
      on: {
        slideChange: (s) => {
          setActiveTab(s.realIndex);
        }
      }
    });

    swiperInstanceRef.current = swiper;

    return () => {
      if (swiper && !swiper.destroyed) {
        swiper.destroy(true, false);
      }
    };
  }, []);

  // Stacking Sector Cards: Blur & Scale as next card overlaps
  useEffect(() => {
    const handleSectorStackScroll = () => {
      const sectorCards = document.querySelectorAll('.sector-stack-card');
      if (!sectorCards.length) return;

      for (let i = 0; i < sectorCards.length; i++) {
        const currentCard = sectorCards[i];
        const nextCard = sectorCards[i + 1];

        if (nextCard) {
          const currentRect = currentCard.getBoundingClientRect();
          const nextRect = nextCard.getBoundingClientRect();

          const overlapDistance = currentRect.bottom - nextRect.top;

          if (overlapDistance > 0 && currentRect.height > 0) {
            const thresholdDistance = currentRect.height * 0.5;
            const overlapRatio = Math.max(0, Math.min(1, overlapDistance / thresholdDistance));

            const scaleVal = (1 - overlapRatio * 0.05).toFixed(3);

            currentCard.style.transform = `scale(${scaleVal})`;
            currentCard.classList.toggle('is-stacked-behind', overlapRatio > 0.1);
          } else {
            currentCard.style.transform = 'none';
            currentCard.classList.remove('is-stacked-behind');
          }
        } else {
          currentCard.style.transform = 'none';
          currentCard.classList.remove('is-stacked-behind');
        }
      }
    };

    window.addEventListener('scroll', handleSectorStackScroll, { passive: true });
    if (window.lenis) {
      window.lenis.on('scroll', handleSectorStackScroll);
    }
    handleSectorStackScroll();

    return () => {
      window.removeEventListener('scroll', handleSectorStackScroll);
      if (window.lenis) {
        window.lenis.off('scroll', handleSectorStackScroll);
      }
    };
  }, []);

  const goToSlide = (idx) => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slideToLoop(idx);
    }
  };

  const nextSlide = () => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slidePrev();
    }
  };

  const togglePlayPause = () => {
    if (swiperInstanceRef.current) {
      if (isPlaying) {
        swiperInstanceRef.current.autoplay.stop();
        setIsPlaying(false);
      } else {
        swiperInstanceRef.current.autoplay.start();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="home-page-wrapper">
      {/* 3. HERO SECTION (Full-Width Interactive Slider)           */}
      <section className="relative w-full home2-hero-compact overflow-hidden bg-slate-950 border-b border-slate-800" id="hero">
        <div className="swiper home2-full-swiper w-full h-full">
          <div className="swiper-wrapper">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className="swiper-slide relative w-full h-full overflow-hidden"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transform scale-105 transition-transform duration-[8000ms]"
                />
                <div className="home2-hero-overlay"></div>

                <div className="slide-content-wrap" {...(idx === 0 ? { 'data-aos': 'fade-up' } : {})}>
                  <div className="max-w-[1420px] mx-auto px-4 lg:px-12 w-full">
                    <div className="max-w-3xl flex flex-col gap-2">
                      <span className="hero-slide-eyebrow">{slide.eyebrow}</span>
                      <h1 className="hero-slide-title" style={{ whiteSpace: 'pre-line' }}>{slide.title}</h1>
                      <div className="hero-slide-desc-box">
                        <p className="hero-slide-desc">{slide.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-bottom-bar pointer-events-auto" data-aos="fade-up" data-aos-delay="150">
            <div className="max-w-[1420px] mx-auto px-4 lg:px-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div className="hero-tabs-wrap flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar flex-1 pb-1">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`hero-story-tab ${idx === activeTab ? 'active' : ''} border-0 bg-transparent cursor-pointer text-left p-0`}
                    data-slide-index={idx}
                  >
                    <div className="tab-line"></div>
                    <span className="tab-text">{slide.tabLabel}</span>
                  </button>
                ))}
              </div>

              <div className="hero-controls flex items-center gap-2.5 shrink-0 pb-1">
                <button
                  type="button"
                  id="hero-prev-btn"
                  onClick={prevSlide}
                  className="hero-control-btn"
                  aria-label="Previous slide"
                  title="Previous slide"
                >
                  <span className="material-symbols-outlined text-lg sm:text-xl">arrow_back</span>
                </button>
                <button
                  type="button"
                  id="hero-next-btn"
                  onClick={nextSlide}
                  className="hero-control-btn"
                  aria-label="Next slide"
                  title="Next slide"
                >
                  <span className="material-symbols-outlined text-lg sm:text-xl">arrow_forward</span>
                </button>
                <button
                  type="button"
                  id="hero-play-pause-btn"
                  onClick={togglePlayPause}
                  className="hero-control-btn"
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  <span id="play-pause-icon" className="material-symbols-outlined text-lg sm:text-xl">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL STAKEHOLDER STRIP                        */}
      <section className="bg-slate-50 py-7 border-b border-slate-200/80">
        <div className="max-w-[1420px] mx-auto px-4 lg:px-12 flex flex-col items-center gap-4" data-aos="fade-up">
          <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500 text-center">
            Institutional Backing &amp; Sovereign Development Partners
          </span>
          <div className="w-full flex flex-wrap items-center justify-around gap-6 lg:gap-10 text-slate-600">
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors" data-aos="fade-up" data-aos-delay="100">
              <span className="material-symbols-outlined text-brand-teal text-2xl">account_balance</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">Dept. of MSME &amp; Export Promotion</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors" data-aos="fade-up" data-aos-delay="150">
              <span className="material-symbols-outlined text-brand-teal text-2xl">domain</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">SIDBI</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors" data-aos="fade-up" data-aos-delay="200">
              <span className="material-symbols-outlined text-brand-teal text-2xl">corporate_fare</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">IFCI Limited</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors" data-aos="fade-up" data-aos-delay="250">
              <span className="material-symbols-outlined text-brand-teal text-2xl">public</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">World Bank RAMP</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors" data-aos="fade-up" data-aos-delay="300">
              <span className="material-symbols-outlined text-brand-teal text-2xl">payments</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">Nationalized Banks</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors" data-aos="fade-up" data-aos-delay="350">
              <span className="material-symbols-outlined text-brand-teal text-2xl">workspace_premium</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">Skill India (NSDC)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card transition-all relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-1.5 h-12 bg-brand-teal absolute left-0 top-6 rounded-r"></div>
              <div className="flex flex-col pl-3">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-brand-teal transition-colors animate-counter">
                  <StatCounter target="50" suffix="+ Years" />
                </span>
                <span className="text-sm font-bold text-slate-800 mt-1">Industrial Legacy</span>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Founded 1974 as a Joint Venture of SIDBI, IFCI, and Government of UP for sovereign enterprise advisory.
                </p>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card transition-all relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-1.5 h-12 bg-brand-orange absolute left-0 top-6 rounded-r"></div>
              <div className="flex flex-col pl-3">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-brand-orange transition-colors animate-counter">
                  <StatCounter target="75" suffix=" / 75" />
                </span>
                <span className="text-sm font-bold text-slate-800 mt-1">Districts Connected</span>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Operational Youth Adda enterprise clinics and DPR formulation cells active in every district of Uttar
                  Pradesh.
                </p>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card transition-all relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-1.5 h-12 bg-brand-teal absolute left-0 top-6 rounded-r"></div>
              <div className="flex flex-col pl-3">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-brand-teal transition-colors animate-counter">
                  <StatCounter target="500000" suffix="+" />
                </span>
                <span className="text-sm font-bold text-slate-800 mt-1">Founders Mentored</span>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Artisans, rural youth, and MSME proprietors empowered through certified TVET and capacity-building
                  workshops.
                </p>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card transition-all relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-1.5 h-12 bg-brand-orange absolute left-0 top-6 rounded-r"></div>
              <div className="flex flex-col pl-3">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-brand-orange transition-colors animate-counter">
                  <StatCounter target="1000" prefix="₹" suffix="+ Cr" />
                </span>
                <span className="text-sm font-bold text-slate-800 mt-1">Credit Mobilized</span>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Institutional debt and subsidy linkages channeled via CGTMSE, PMEGP, CM YUVA, and ODOP schemes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EDITORIAL "WHO WE ARE" (Annual-Report Style Split)      */}
      <section
        className="bg-slate-50/70 border-b border-slate-100 overflow-hidden"
        id="about"
        style={{ paddingTop: '50px', paddingBottom: '50px' }}
      >
        <div className="max-w-[1420px] mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col items-center" data-aos="fade-right">
              <WhoWeAreStack />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6 justify-center" data-aos="fade-left" data-aos-delay="200">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Who We Are</span>
                <span className="h-px w-8 bg-brand-orange"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Five Decades of Building Enterprise Opportunities Across Uttar Pradesh
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                UP Industrial Consultants Limited (UPICON) was conceived in 1974 as the sovereign technical powerhouse to
                accelerate the state's transformation into an industrial engine. Under the administrative supervision of the
                Department of MSME &amp; Export Promotion, UPICON acts as an institutional bridge connecting sovereign
                policy objectives with industrial capital, grassroots craftspeople, and aspiring first-generation founders.
              </p>
              <div className="pt-1 flex justify-content-end">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-dark transition-colors shrink-0"
                >
                  <span>Read More...</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CORE SERVICES (Deloitte-Style Dual Slider)              */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-100 overflow-hidden" id="services">
        <div className="max-w-[1420px] mx-auto px-4 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" data-aos="fade-up">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">What We Do</span>
                <span className="h-px w-8 bg-brand-teal"></span>
              </div>
            </div>
            <a
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-dark transition-colors shrink-0"
              href="#dpr-catalog"
            >
              <span>View All Advisory Offerings</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>

          <WhatWeDoSlider />
        </div>
      </section>

      {/* 8. FLAGSHIP INITIATIVES SHOWCASE (Sector Stack Cards)     */}
      <section className="sector-stack-section bg-slate-has pt-16 lg:pt-20 border-b border-slate-100 relative" id="initiatives">
        <div className="max-w-[1420px] mx-auto px-4 lg:px-12 w-full">
          <div className="sector-title-sticky bg-slate-has pb-6" data-aos="fade-up">
            <div className="sector-title-badge">
              <span className="badge-text">State-Sponsored Catalysts</span>
              <span className="badge-line"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Transforming Key Economic Sectors
            </h2>
          </div>

          <div className="sector-cards-deck relative">
            <article className="sector-stack-card bg-slate-has" id="sector-card-0" data-card-index="0" style={{ '--stack-idx': 0 }}>
              <div className="sector-card-grid" data-aos="fade-up" data-aos-duration="600">
                <div className="sector-card-media">
                  <img
                    src="/assets/images/ramp-call-centre.jpg"
                    alt="World Bank RAMP Enterprise Facilitation and Call Centre in Uttar Pradesh"
                  />
                  <div className="sector-card-overlay">
                    <h3 className="sector-card-headline">World Bank RAMP</h3>
                  </div>
                </div>

                <div className="sector-card-content">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                      Raising and Accelerating MSME Performance (RAMP)
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-2.5">
                      UPICON is executing sovereign RAMP interventions across Uttar Pradesh: modernizing micro-enterprises
                      through green manufacturing audits, zero-defect quality accreditations (ZED), clean energy adoptions,
                      and rapid mediation clinics for delayed payments.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-teal block">₹5 Lakh</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">Green Tech Subsidy</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-teal block">100% Grant</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">ZED Certification Aid</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-orange block">45 Days</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">Fast Dispute Redressal</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link to="/msme" className="sector-readmore-btn group">
                      <span>Read More</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className="sector-stack-card bg-slate-has" id="sector-card-1" data-card-index="1" style={{ '--stack-idx': 1 }}>
              <div className="sector-card-grid" data-aos="fade-up" data-aos-duration="600">
                <div className="sector-card-media">
                  <img
                    src="/assets/images/one-district-one-product.jpg"
                    alt="One District One Product (ODOP) Uttar Pradesh Exhibition Display"
                  />
                  <div className="sector-card-overlay">
                    <h3 className="sector-card-headline">ODOP Common Facility Centers</h3>
                  </div>
                </div>

                <div className="sector-card-content">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                      One District One Product (ODOP) Common Facility Centers
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-2.5">
                      Empowering indigenous product clusters across UP with state-of-the-art Common Facility Centers,
                      standardized export packaging, brand positioning, and direct integration onto government e-Marketplace
                      (GeM) and global marts.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-teal block">75 Products</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">Covered Statewide</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-teal block">₹2.5 Cr</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">CFC Infrastructure Grants</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-orange block">38+ Marts</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">Dedicated Retail Outlets</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link to="/odop" className="sector-readmore-btn group">
                      <span>Read More</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className="sector-stack-card bg-slate-has" id="sector-card-2" data-card-index="2" style={{ '--stack-idx': 2 }}>
              <div className="sector-card-grid" data-aos="fade-up" data-aos-duration="600">
                <div className="sector-card-media">
                  <img
                    src="/assets/images/youth-add-inauguration.jpg"
                    alt="Chief Minister Yogi Adityanath Inaugurating UPICON Youth Adda for CM YUVA Scheme"
                  />
                  <div className="sector-card-overlay">
                    <h3 className="sector-card-headline">CM YUVA Abhiyan</h3>
                  </div>
                </div>

                <div className="sector-card-content">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                      Mukhyamantri Yuva Udyami Vikas Abhiyan (CM YUVA)
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-2.5">
                      Transforming ambitious educated youth into successful micro-entrepreneurs. UPICON facilitates
                      zero-interest capital financing, preparation of bankable project dossiers, and digital bookkeeping
                      mentoring.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-teal block">₹5 Lakh</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">Interest-Free Tranche</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-teal block">1,00,000</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">Youth Mentored Yearly</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-orange block">Zero</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">Collateral Required</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link to="/cmyuva" className="sector-readmore-btn group">
                      <span>Read More</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className="sector-stack-card bg-slate-has" id="sector-card-3" data-card-index="3" style={{ '--stack-idx': 3 }}>
              <div className="sector-card-grid" data-aos="fade-up" data-aos-duration="600">
                <div className="sector-card-media">
                  <img
                    src="/assets/images/youth-adda-clinic.jpg"
                    alt="UPICON District Youth Adda Enterprise Advisory Clinic in Uttar Pradesh"
                  />
                  <div className="sector-card-overlay">
                    <h3 className="sector-card-headline">District Youth Adda Clinics</h3>
                  </div>
                </div>

                <div className="sector-card-content">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                      District Youth Adda Network &amp; Enterprise Clinics
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-2.5">
                      Physical ground hubs in all 75 districts bridging the distance between remote founders and sovereign
                      enterprise incentives. Walk in for real-time DPR appraisal, statutory clearances, and bank loan
                      documentation.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-teal block">75 Districts</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">Live Physical Footprint</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-teal block">Daily</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">MSME Escalation Clinics</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <span className="text-base sm:text-xl font-extrabold text-brand-orange block">1,200+</span>
                      <span className="block text-[11px] font-medium text-slate-500 mt-0.5">Consultations Weekly</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link to="/contact#district-network" className="sector-readmore-btn group">
                      <span>Read More</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 9. UP KE KARIGAR - SPLIT PINNED HORIZONTAL SHOWCASE       */}
      <KarigarScrollSlider />

      {/* 10. LATEST NEWS & INSTITUTIONAL NOTICES (EDITORIAL LAYOUT) */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-100" id="notices">
        <div className="max-w-[1420px] mx-auto px-4 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2" data-aos="fade-up">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Latest Updates &amp; Research</span>
              <span className="h-px w-8 bg-brand-teal"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest News &amp; Institutional Notices
            </h2>
          </div>

          <div
            className="newsroom-editorial-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 items-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <article className="newsroom-featured-card flex flex-col group cursor-pointer">
              <Link to="/articles" className="newsroom-featured-img-wrap block overflow-hidden bg-slate-100 mb-4 relative">
                <span className="newsroom-badge newsroom-badge-research absolute top-3 left-3 z-10">Research</span>
                <img
                  src="/assets/images/upicon-news-bimaru.jpg"
                  alt="यूपी : बीमारू के दाग से ‘टॉप थ्री इकोनॉमी’ के ताज तक"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <h3 className="newsroom-card-title text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-brand-orange transition-colors">
                <Link to="/articles">
                  यूपी : बीमारू के दाग से 'टॉप थ्री इकोनॉमी' के ताज तक
                </Link>
              </h3>
              <p className="newsroom-card-excerpt text-sm text-slate-600 mt-2.5 leading-relaxed">
                बीमारू राज्य! यह आपने भी कभी न कभी सुना होगा। कभी 'बीमारू' कहे जाने वाला उत्तर प्रदेश आज देश की टॉप थ्री
                इकोनॉमी में शामिल है। जानिए यूपी की पूरी ग्रोथ स्टोरी।
              </p>
              <div className="newsroom-meta text-xs text-slate-500 font-medium mt-3.5 flex items-center gap-2">
                <span>18 Aug 2026</span>
                <span className="newsroom-meta-divider text-slate-300">|</span>
                <span>Lucknow, Uttar Pradesh</span>
              </div>
            </article>

            <article className="newsroom-featured-card flex flex-col group cursor-pointer">
              <Link to="/articles" className="newsroom-featured-img-wrap block overflow-hidden bg-slate-100 mb-4 relative">
                <span className="newsroom-badge newsroom-badge-article absolute top-3 left-3 z-10">Article</span>
                <img
                  src="/assets/images/upicon-news-act-east.png"
                  alt="12 Years: A Journey To the 'Act East'"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <h3 className="newsroom-card-title text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-brand-orange transition-colors">
                <Link to="/articles">
                  12 Years: A Journey To the 'Act East'
                </Link>
              </h3>
              <p className="newsroom-card-excerpt text-sm text-slate-600 mt-2.5 leading-relaxed">
                Over a decade, how India has reformed its economy, Security, and Society! India has changed and cemented a
                strong foundation for future growth.
              </p>
              <div className="newsroom-meta text-xs text-slate-500 font-medium mt-3.5 flex items-center gap-2">
                <span>24 July 2026</span>
                <span className="newsroom-meta-divider text-slate-300">|</span>
                <span>New Delhi, India</span>
              </div>
            </article>

            <div className="newsroom-text-col flex flex-col justify-between h-full pt-1">
              <article className="newsroom-text-item group cursor-pointer">
                <div className="mb-2">
                  <span className="newsroom-badge newsroom-badge-article">Article</span>
                </div>
                <h3 className="newsroom-card-title text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-orange transition-colors">
                  <Link to="/articles">
                    सीएम युवा-यूथ अड्डा 'बिज़नेस कैसे शुरू करें', है सिखाना युवा उद्यमियों का भरोसेमंद ठिकाना
                  </Link>
                </h3>
                <div className="newsroom-meta text-xs text-slate-500 font-medium mt-2 flex items-center gap-2">
                  <span>26 June 2026</span>
                  <span className="newsroom-meta-divider text-slate-300">|</span>
                  <span>Lucknow, UP</span>
                </div>
              </article>

              <div className="newsroom-divider-dash w-6 h-[2px] bg-slate-500 my-5 sm:my-6"></div>

              <article className="newsroom-text-item group cursor-pointer">
                <div className="mb-2">
                  <span className="newsroom-badge newsroom-badge-industry">Industry News</span>
                </div>
                <h3 className="newsroom-card-title text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-orange transition-colors">
                  <Link to="/articles">
                    From Expressways to Aerospace: UP as All Set to Become the Largest Defence Hub in India
                  </Link>
                </h3>
                <div className="newsroom-meta text-xs text-slate-500 font-medium mt-2 flex items-center gap-2">
                  <span>30 May 2026</span>
                  <span className="newsroom-meta-divider text-slate-300">|</span>
                  <span>Uttar Pradesh</span>
                </div>
              </article>

              <div className="newsroom-divider-dash w-6 h-[2px] bg-slate-500 my-5 sm:my-6"></div>

              <article className="newsroom-text-item group cursor-pointer">
                <div className="mb-2">
                  <span className="newsroom-badge newsroom-badge-insight">Research</span>
                </div>
                <h3 className="newsroom-card-title text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-orange transition-colors">
                  <Link to="/articles">
                    ओडीओसीः उत्तर प्रदेश में 'कुज़ीन' से करियर की नई राह
                  </Link>
                </h3>
                <div className="newsroom-meta text-xs text-slate-500 font-medium mt-2 flex items-center gap-2">
                  <span>18 May 2026</span>
                  <span className="newsroom-meta-divider text-slate-300">|</span>
                  <span>Uttar Pradesh</span>
                </div>
              </article>
            </div>
          </div>

          <div className="flex justify-center mt-6 lg:mt-8" data-aos="fade-up">
            <Link
              to="/articles"
              className="newsroom-cta-btn inline-flex items-center justify-center px-8 py-3 bg-white border border-slate-900 text-slate-900 hover:text-white font-bold text-sm tracking-wide transition-all shadow-sm"
            >
              <span>View More</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
