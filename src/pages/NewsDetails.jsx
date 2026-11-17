import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const relatedNewsData = [
  {
    badge: 'Latest News',
    badgeBg: 'bg-brand-orange',
    date: 'October 2026 • Executive Partnership',
    title: 'UPICON Signs Sovereign MoU with SIDBI for Micro-Enterprise Credit under CM YUVA',
    desc: 'Strategic institutional partnership established to accelerate interest-free capital financing and bankable DPR appraisals across all 75 districts.',
    img: '/assets/images/hero-consultant.jpg'
  },
  {
    badge: 'Whitepaper',
    badgeBg: 'bg-brand-teal',
    date: 'PDF • 4.2 MB • Research Synthesis',
    title: 'Uttar Pradesh Industrial Roadmap: Catalyzing the $1 Trillion Economy',
    desc: 'An authoritative research report outlining cluster acceleration, expressway logistics nodes, and defense corridor supply-chain linkages.',
    img: '/assets/images/msme-audit.jpg'
  },
  {
    badge: 'ODOP Spotlight',
    badgeBg: 'bg-brand-orange',
    date: 'Cluster Success • 38+ Marts',
    title: 'Empowering 50,000+ Grassroots Artisans via Common Facility Centers',
    desc: 'UPICON establishes state-of-the-art export packaging, digital GeM portal onboarding, and direct retail mart linkages for ODOP artisans.',
    img: '/assets/images/banana-fiber-artisan.jpg'
  },
  {
    badge: 'Public Notice',
    badgeBg: 'bg-emerald-500',
    date: 'Updated Yesterday • CAG Audited',
    title: 'Public Tenders, Technical RFPs & Statutory Audited Disclosures 2026',
    desc: 'Official notification for empanelment of technical audit agencies, smart classroom TVET infrastructure, and audited balance sheets.',
    img: '/assets/images/msme-audit.jpg'
  }
];

const NewsDetails = () => {
  const swiperRef = useRef(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Article URL copied to clipboard!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="news-details-page">
      {/* Top Banner */}
      <section className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] pt-28 pb-12 lg:pt-36 lg:pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300 mb-6">
            <Link to="/" className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white">
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link to="/articles" className="hover:text-brand-orange transition-colors text-slate-300">
              Knowledge Bank
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">News Details</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-snug max-w-5xl">
            UPICON Inks Landmark MoU with World Bank &amp; MSME Department to Launch ₹500 Cr Industrial Facilitation Hubs Across 75 Districts
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-4xl leading-relaxed mt-4 font-normal">
            Strategic tripartite alliance accelerates Uttar Pradesh’s vision of a $1 Trillion economy through rapid bankable
            DPR creation, green ZED certifications, and grassroots CM YUVA entrepreneurship facilitation.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm border border-white/20">
                  UP
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold">UPICON Corporate Communications</span>
                  <span className="text-slate-400 text-[11px]">Dept. of MSME &amp; Export Promotion</span>
                </div>
              </div>
              <span className="hidden sm:inline text-slate-600">|</span>

              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-brand-orange">calendar_today</span>
                <span>October 07, 2026</span>
              </div>
              <span className="hidden sm:inline text-slate-600">|</span>

              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-brand-teal">schedule</span>
                <span>5 Min Read</span>
              </div>
              <span className="hidden sm:inline text-slate-600">|</span>

              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-emerald-400">location_on</span>
                <span>Lucknow, Uttar Pradesh</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center gap-1.5 transition-colors border border-white/10 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
                <span className="hidden sm:inline">Copy Link</span>
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center gap-1.5 transition-colors border border-white/10 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">print</span>
                <span className="hidden sm:inline">Print</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <figure className="rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm m-0">
                <div className="relative w-full h-72 sm:h-96 bg-slate-900 overflow-hidden">
                  <img
                    alt="MoU Signing Ceremony UPICON and World Bank"
                    className="w-full h-full object-cover"
                    src="/assets/images/mou-signing.jpg"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                    Official Press Photo • Lucknow Secretariat
                  </div>
                </div>
                <figcaption className="p-4 bg-white text-xs text-slate-600 border-t border-slate-100 flex items-center justify-between gap-4">
                  <span>
                    <strong>Above:</strong> Senior officials of UPICON Limited, Department of MSME &amp; Export
                    Promotion, and World Bank Delegation exchanging executed MoU documents at Yojana Bhawan, Lucknow.
                  </span>
                </figcaption>
                <div className="p-6 space-y-4 text-slate-700 leading-relaxed text-sm">
                  <p className="text-lg font-medium text-slate-900 leading-relaxed">
                    LUCKNOW — In a decisive step toward institutionalizing high-velocity MSME growth and grassroots
                    industrial empowerment, <strong>U.P. Industrial Consultants Limited (UPICON)</strong> has formally
                    executed a landmark Memorandum of Understanding (MoU) with the{' '}
                    <strong>Department of MSME &amp; Export Promotion, Govt. of Uttar Pradesh</strong> and the{' '}
                    <strong>World Bank Delegation</strong>.
                  </p>

                  <p>
                    The tripartite partnership under the flagship World Bank-assisted{' '}
                    <em>Raising and Accelerating MSME Performance (RAMP)</em> initiative outlines a strategic framework to
                    set up tech-enabled <strong>Industrial Facilitation Hubs</strong> across all 75 districts of Uttar
                    Pradesh. The initiative will directly empower over 50,000 micro, small, and medium enterprises by
                    resolving critical operational bottlenecks, improving bank syndication rates, and facilitating
                    statutory environmental clearances.
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-slate-900 italic leading-snug border-l-4 border-brand-teal pl-4 my-4">
                    “This agreement signifies a fundamental shift from transactional consultancy to ecosystem-driven
                    industrial transformation. By leveraging UPICON’s 52-year legacy and district-level
                    boots-on-the-ground network, we are ensuring that every young entrepreneur in Uttar Pradesh receives
                    world-class project feasibility support, bank loan linkage, and green accreditation.”
                  </p>
                </div>
              </figure>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/articles"
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-teal flex items-center gap-3 group text-slate-900 transition-all no-underline"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand-teal group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                  </span>
                  <div className="flex flex-col truncate">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Back to Overview</span>
                    <span className="text-xs font-bold truncate group-hover:text-brand-teal">
                      All Articles &amp; Research
                    </span>
                  </div>
                </Link>

                <Link
                  to="/articles"
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-teal flex items-center justify-between gap-3 group text-slate-900 transition-all text-right no-underline"
                >
                  <div className="flex flex-col truncate text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Next Story</span>
                    <span className="text-xs font-bold truncate group-hover:text-brand-teal">
                      12 Years: A Journey To the 'Act East'
                    </span>
                  </div>
                  <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand-teal group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right 4 Cols: Sidebar */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              {/* Recent Press Releases */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand-teal text-base">newspaper</span>
                    <span>Recent Press Releases</span>
                  </h3>
                  <Link to="/articles" className="text-xs font-bold text-brand-teal hover:underline">
                    View All
                  </Link>
                </div>

                <div className="flex flex-col gap-4">
                  <Link to="/news-details" className="flex gap-3 group text-slate-900 no-underline">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                      <img
                        alt="CM Yuva Event"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        src="/assets/images/cmyuva-event.jpg"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-bold text-brand-orange uppercase">October 02, 2026</span>
                      <h4 className="text-xs font-bold group-hover:text-brand-teal line-clamp-2 leading-snug">
                        CM YUVA Scheme Reaches 1 Lakh Loan Disbursals Milestone
                      </h4>
                    </div>
                  </Link>

                  <Link to="/news-details" className="flex gap-3 group text-slate-900 no-underline">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                      <img
                        alt="ODOP Airport Hub"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        src="/assets/images/odop-hub.jpg"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-bold text-brand-teal uppercase">September 28, 2026</span>
                      <h4 className="text-xs font-bold group-hover:text-brand-teal line-clamp-2 leading-snug">
                        ODOP Craft Experience Center Inaugurated at Noida Airport
                      </h4>
                    </div>
                  </Link>

                  <Link to="/news-details" className="flex gap-3 group text-slate-900 no-underline">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                      <img
                        alt="CAG Audit"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        src="/assets/images/cag-report.jpg"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">September 15, 2026</span>
                      <h4 className="text-xs font-bold group-hover:text-brand-teal line-clamp-2 leading-snug">
                        UPICON Releases CAG Compliant Annual Disclosures Report 2025-26
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Advisory CTA Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c2f35] to-[#094b5c] text-white shadow-card flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl pointer-events-none"></div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-orange text-white uppercase tracking-wider w-fit">
                  Turnkey Advisory
                </span>
                <h3 className="text-lg font-bold leading-snug">Need a Bankable DPR or TEV Study for your Project?</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Connect with UPICON’s institutional consultants across 75 districts for DPR preparation, CGTMSE credit
                  assistance, and government subsidy clearances.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs shadow-sm transition-all text-center no-underline"
                >
                  <span>Request DPR Consultation</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              {/* Press Bureau Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col gap-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 pb-2 border-b border-slate-100">
                  <span className="material-symbols-outlined text-sm text-brand-teal">call</span>
                  Institutional Press Bureau
                </h3>
                <div className="flex flex-col gap-2.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-base text-brand-teal shrink-0 mt-0.5">location_on</span>
                    <span>
                      <strong>UPICON Headquarters:</strong> 5th Floor, U.P. Handloom Bhawan, Hathkargha Bhawan, Kanpur
                      Road, Lucknow – 226008
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-brand-orange shrink-0">mail</span>
                    <span>
                      <strong>Media Email:</strong>{' '}
                      <a href="mailto:media@upicon.in" className="text-brand-teal font-medium hover:underline">
                        media@upicon.in
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-emerald-600 shrink-0">phone</span>
                    <span>
                      <strong>Helpline:</strong> 1800-180-2026 (Toll-Free)
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related News Slider */}
      <section className="py-16 lg:py-16 border-b border-slate-100 bg-white" id="notices">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">Related News</h2>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="notices-swiper-prev w-9 h-9 rounded-full bg-slate-100 hover:bg-brand-teal hover:text-white flex items-center justify-center cursor-pointer transition-colors border-0"
                aria-label="Previous related news"
              >
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="notices-swiper-next w-9 h-9 rounded-full bg-slate-100 hover:bg-brand-teal hover:text-white flex items-center justify-center cursor-pointer transition-colors border-0"
                aria-label="Next related news"
              >
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          </div>

          <Swiper
            onSwiper={(s) => {
              swiperRef.current = s;
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            speed={700}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 }
            }}
            className="w-full"
          >
            {relatedNewsData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card transition-all overflow-hidden flex flex-col justify-between h-full group">
                  <div className="relative overflow-hidden h-48 w-full bg-slate-100 shrink-0">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.img}
                    />
                    <span
                      className={`absolute top-3 left-3 ${item.badgeBg} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col gap-2.5 flex-1 justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] font-semibold text-slate-400">{item.date}</span>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        to="/news-details"
                        className="font-bold text-brand-teal group-hover:text-brand-orange transition-colors flex items-center gap-1 no-underline"
                      >
                        <span>Read more</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default NewsDetails;
