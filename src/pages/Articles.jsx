import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

export default function Articles() {
  useInteractiveEffects();
  const [filter, setFilter] = useState('all');

  const filterButtons = [
    { key: 'all', label: 'All Publications', icon: 'apps', count: '06' },
    { key: 'news', label: 'News', icon: 'newspaper', count: '01' },
    { key: 'article', label: 'Articles', icon: 'article', count: '02' },
    { key: 'research', label: 'Research', icon: 'science', count: '02' },
    { key: 'industry-news', label: 'Industry News', icon: 'domain', count: '01' }
  ];

  const cardsData = [
    {
      id: 1,
      category: 'research',
      badgeText: 'Research',
      badgeColor: 'bg-[#7c3aed]',
      image: 'assets/images/cag-report.jpg',
      imageAlt: 'UP Economy Research',
      title: "यूपी : बीमारू के दाग से 'टॉप थ्री इकोनॉमी' के ताज तक",
      description: "बीमारू राज्य! यह आपने भी कभी न कभी सुना होगा। लेकिन यह बीमारू राज्य होता क्या है? क्या राज्य भी इंसानों की तरह बीमार होते हैं? जानिए यूपी के आर्थिक परिवर्तन की पूरी रिपोर्ट...",
      footerTag: 'Economic Policy Study',
      delay: '100'
    },
    {
      id: 2,
      category: 'article',
      badgeText: 'Article',
      badgeColor: 'bg-[#0d9488]',
      image: 'assets/images/odop-hub.jpg',
      imageAlt: 'Act East Policy',
      title: "12 Years: A Journey To the 'Act East'",
      description: "Over a decade, how India has reformed its economy, Security, and Society! India has changed! The perspective of global trade and regional connectivity...",
      footerTag: 'International Trade',
      delay: '200'
    },
    {
      id: 3,
      category: 'article',
      badgeText: 'Article',
      badgeColor: 'bg-[#0d9488]',
      image: 'assets/images/cmyuva-event.jpg',
      imageAlt: 'CM Yuva Youth Adda Event',
      title: "सीएम युवा-यूथ अड्डा 'बिज़नेस कैसे शुरू करें', है सिखाना युवा उद्यमियों का भरोसे...",
      description: "नौकरी या बिज़नेस? यह सवाल अक्सर युवाओं से भी पूछा जाता है। ज्यादातर का जवाब होता है—खुद का बिज़नेस। लेकिन कई बार जहां चाह वहां राह आसान करने के लिए यूपीआईकॉन आगे आया है...",
      footerTag: 'CM YUVA Mentorship',
      delay: '300'
    },
    {
      id: 4,
      category: 'industry-news',
      badgeText: 'Industry News',
      badgeColor: 'bg-[#2563eb]',
      image: 'assets/images/art-policy.jpg',
      imageAlt: 'UP Defence Expressway',
      title: "From Expressways to Aerospace: UP as All Set to Become the Largest...",
      description: "Uttar Pradesh has been known for its prosperous agriculture, divine spirituality, rich culture, and traditional skilled defense production nodes being set up in Kanpur, Lucknow & Jhansi...",
      footerTag: 'Aerospace & Defense',
      delay: '400'
    },
    {
      id: 5,
      category: 'news',
      badgeText: 'News',
      badgeColor: 'bg-[#ea580c]',
      image: 'assets/images/art-advisory.jpg',
      imageAlt: 'World MSME Day UPICON',
      title: "World MSME Day: UPICON Celebrates 1 Year of Youth Adda Impact",
      description: "Commemorating International MSME Day with major achievements across 75 district centers, facilitating over ₹250 Crores in collateral-free debt credit to young founders.",
      footerTag: 'State MSME Mission',
      delay: '100'
    },
    {
      id: 6,
      category: 'research',
      badgeText: 'Research',
      badgeColor: 'bg-[#7c3aed]',
      image: 'assets/images/art-analytics.jpg',
      imageAlt: 'RAMP World Bank Study',
      title: "Evaluating World Bank RAMP Grants in ODOP Artisan Clusters",
      description: "An empirical study on green manufacturing audits, zero-defect quality accreditations (ZED), and export unit realization gains across Moradabad and Bhadohi.",
      footerTag: 'World Bank Study',
      delay: '200'
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] py-16 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center flex flex-col items-center gap-4" data-aos="fade-up">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white" to="/">
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">Articles &amp; Research Papers</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Articles, News &amp; Research Papers
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Stay updated with policy briefs, economic research, CM YUVA updates, and industrial news shaping Uttar Pradesh's manufacturing and MSME ecosystem.
          </p>
        </div>
      </section>

      {/* MAIN ARTICLES SECTION & FILTER BAR */}
      <section className="py-16 lg:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          {/* Filter Bar */}
          <div className="flex justify-center mb-3" data-aos="fade-up">
            <div className="p-2 bg-white rounded-2xl lg:rounded-full border border-slate-200/90 shadow-md flex flex-wrap items-center justify-center gap-2 max-w-5xl" id="article-filters">
              {filterButtons.map((btn) => {
                const isActive = filter === btn.key;
                return (
                  <button
                    key={btn.key}
                    className={`art-filter-btn px-4 py-2.5 rounded-xl lg:rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border-0 ${isActive
                        ? 'bg-brand-teal text-white shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                      }`}
                    onClick={() => setFilter(btn.key)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base">{btn.icon}</span>
                    <span>{btn.label}</span>
                    <span
                      className={`tab-count px-2 py-0.5 rounded-full text-[10px] font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                        }`}
                    >
                      {btn.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="articles-grid">
            {cardsData.map((card) => {
              const isVisible = filter === 'all' || filter === card.category;
              if (!isVisible) return null;

              return (
                <Link
                  key={card.id}
                  className="art-card p-6 lg:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-card hover:border-brand-teal/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-slate-900 no-underline"
                  data-aos="fade-up"
                  data-aos-delay={card.delay}
                  data-category={card.category}
                  to="/news-details"
                >
                  <div>
                    <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-100 mb-3">
                      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-sm z-10 ${card.badgeColor} uppercase tracking-wider`}>
                        {card.badgeText}
                      </span>
                      <img
                        alt={card.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        src={card.image}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug line-clamp-2">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mt-2.5 font-normal line-clamp-3">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-orange relative z-10">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      {card.footerTag}
                    </span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
