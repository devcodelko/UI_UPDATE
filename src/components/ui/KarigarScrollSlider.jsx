import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const karigarCards = [
  {
    badge: 'वाराणसी • बढ़ई शिल्प',
    badgeClass: 'bg-brand-orange',
    name: 'वकील प्रसाद',
    quote: '"राह चलते राहगीर से मिली सलाह ने मेरी जिंदगी बदल दी। VSSY योजना के तहत UPICON ट्रेनिंग और टूलकिट मिलने के बाद ₹400 की मजदूरी अब खुद की वर्कशॉप में बदल गई।"',
    metaCategory: 'Monthly Growth',
    metaLocation: 'SEP 2026 • Varanasi',
    image: '/assets/images/karigar-varanasi-vakeel-prasad.jpg',
    alt: 'वकील प्रसाद - वाराणसी • बढ़ई शिल्प'
  },
  {
    badge: 'गाजीपुर • मिनी ऑइल मिल',
    badgeClass: 'bg-brand-teal',
    name: 'प्रिंस मौर्य',
    quote: '"जो कल तक खुद मजदूरी के लिए भटकता था, उसने आज तीन मजदूरों को अपनी ऑइल मिल में रोजगार दे दिया है। अब प्रिंस सम्मान से अपने परिवार का भरण-पोषण कर रहे हैं।"',
    metaCategory: 'Direct Impact',
    metaLocation: 'AUG 2026 • Ghazipur',
    image: '/assets/images/karigar-gazzipur-prince.jpg',
    alt: 'प्रिंस मौर्य - गाजीपुर • मिनी ऑइल मिल'
  },
  {
    badge: 'सिद्धार्थनगर • ब्यूटी व वेलनेस',
    badgeClass: 'bg-brand-orange',
    name: 'ललिता दीक्षित',
    quote: '"ककरहवा जैसे साधारण गांव से निकलकर ललिता ने न सिर्फ अपना ब्यूटी पार्लर स्थापित किया, बल्कि गांव की अन्य बेटियों को भी प्रशिक्षित कर आत्मनिर्भर बना रही हैं।"',
    metaCategory: 'Women Enterprise',
    metaLocation: 'JUL 2026 • Siddharthnagar',
    image: '/assets/images/karigar-siddharthnagar-lalita.jpg',
    alt: 'ललिता दीक्षित - सिद्धार्थनगर • ब्यूटी व वेलनेस'
  },
  {
    badge: 'बहराइच • गेहूं डंठल शिल्प',
    badgeClass: 'bg-brand-teal',
    name: 'गोपाल गुप्ता',
    quote: '"गेहूं के सूखे डंठल (स्ट्रॉ) से सोने जैसी चमचमाती कलाकृतियां गढ़ने वाले गोपाल गुप्ता UPICON सहयोग से अपनी टीम के साथ इस कला को राष्ट्रीय स्तर पर ले जा रहे हैं।"',
    metaCategory: 'Heritage Craft',
    metaLocation: 'JUN 2026 • Bahraich',
    image: '/assets/images/karigar-bahraich-gopal.jpg',
    alt: 'गोपाल गुप्ता - बहराइच • गेहूं डंठल शिल्प'
  }
];

export default function KarigarScrollSlider() {
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!container || !viewport || !track) return;

    function calibrateHeight() {
      const trackWidth = track.scrollWidth;
      const viewportWidth = viewport.clientWidth;
      const travel = Math.max(0, trackWidth - viewportWidth);
      const maxTravel = Math.max(500, travel);
      container.style.height = `${window.innerHeight + maxTravel}px`;
      return maxTravel;
    }

    let maxTravel = calibrateHeight();

    function onScroll() {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalScrollable = container.offsetHeight - windowH;

      if (totalScrollable <= 0) return;

      const currentScrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollable));
      targetXRef.current = -(progress * maxTravel);
    }

    function render() {
      currentXRef.current += (targetXRef.current - currentXRef.current) * 0.12;
      if (track) {
        track.style.transform = `translate3d(${currentXRef.current.toFixed(2)}px, 0, 0)`;
      }
      animFrameRef.current = requestAnimationFrame(render);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    if (window.lenis) {
      window.lenis.on('scroll', onScroll);
    }
    window.addEventListener('resize', () => {
      maxTravel = calibrateHeight();
      onScroll();
    });

    // Touch gesture support on mobile
    let touchStartX = 0;
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - touchStartX;
        touchStartX = e.touches[0].clientX;
        const scrollDelta = -deltaX * 1.5;
        if (window.lenis) {
          window.lenis.scrollTo(window.scrollY + scrollDelta, { immediate: true });
        } else {
          window.scrollBy({ top: scrollDelta, behavior: 'auto' });
        }
      }
    };

    viewport.addEventListener('touchstart', handleTouchStart, { passive: true });
    viewport.addEventListener('touchmove', handleTouchMove, { passive: true });

    onScroll();
    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (window.lenis) {
        window.lenis.off('scroll', onScroll);
      }
      viewport.removeEventListener('touchstart', handleTouchStart);
      viewport.removeEventListener('touchmove', handleTouchMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <section className="karigar-pin-container bg-white" id="up-karigar" ref={containerRef}>
      <div className="karigar-sticky-frame bg-white" id="karigar-sticky-frame">
        <div className="max-w-[1420px] mx-auto px-4 lg:px-12 w-full h-full relative z-10 flex items-center">
          <div className="karigar-split-grid">
            {/* LEFT COLUMN: "UP ke Karigar" Title, Description & Controls (Like Screenshot) */}
            <div className="karigar-split-left" data-aos="fade-right">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  UP ke Karigar
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Celebrating the master craftsmen and indigenous artisans of Uttar Pradesh across 75 districts — empowered
                with modern toolkits, zero-defect quality training, and sovereign enterprise credit by UPICON.
              </p>

              {/* Link */}
              <div className="pt-1">
                <Link
                  to="/karigar"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-dark transition-colors shrink-0"
                >
                  <span>View All 75 District Karigars</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="karigar-split-right" data-aos="fade-left" data-aos-delay="150">
              <div id="karigar-scroll-viewport" ref={viewportRef} className="karigar-scroll-viewport">
                <div id="karigar-scroll-track" ref={trackRef} className="karigar-scroll-track">
                  {karigarCards.map((card, idx) => (
                    <div key={idx} className="karigar-hero-card group">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="karigar-hero-card-img"
                      />
                      <div className="karigar-hero-overlay"></div>

                      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between text-white z-10 pointer-events-none">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`${card.badgeClass} text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md`}
                          >
                            {card.badge}
                          </span>
                        </div>

                        <div className="flex flex-col gap-2.5">
                          <div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                              {card.name}
                            </h3>
                          </div>

                          <p className="text-sm sm:text-base text-slate-100 leading-relaxed italic line-clamp-2">
                            {card.quote}
                          </p>

                          <div className="pt-2.5 border-t border-white/15 flex items-center justify-between gap-3 pointer-events-auto">
                            <div>
                              <span className="text-[9px] text-slate-400 block font-semibold uppercase tracking-wider">
                                {card.metaCategory}
                              </span>
                              <span className="text-xs sm:text-sm font-extrabold text-brand-orange">
                                {card.metaLocation}
                              </span>
                            </div>

                            <Link
                              to="/karigar"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all group/btn"
                            >
                              <span>Read More</span>
                              <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                                arrow_forward
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Link to="/karigar" className="karigar-hero-card karigar-view-more-card group">
                    <img
                      src="/assets/images/odop-retail-mart.jpg"
                      alt="View more - UP ke Karigar"
                      className="karigar-hero-card-img"
                    />

                    <div className="karigar-view-more-overlay" style={{ background: 'rgba(4, 12, 22, 0.85)' }}></div>

                    <div className="karigar-view-more-content">
                      <div className="karigar-view-more-icon">
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </div>

                      <span className="karigar-view-more-text">
                        View more
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
