import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const articlesData = [
  {
    id: 1,
    category: 'research',
    badgeText: 'Research',
    badgeBg: 'bg-[#7c3aed]',
    image: '/assets/images/cag-report.jpg',
    alt: 'UP Economy Research',
    title: "यूपी : बीमारू के दाग से 'टॉप थ्री इकोनॉमी' के ताज तक",
    desc: "बीमारू राज्य! यह आपने भी कभी न कभी सुना होगा। लेकिन यह बीमारू राज्य होता क्या है? क्या राज्य भी इंसानों की तरह बीमार होते हैं? जानिए यूपी के आर्थिक परिवर्तन की पूरी रिपोर्ट...",
    badge: 'Economic Policy Study',
    delay: '100'
  },
  {
    id: 2,
    category: 'article',
    badgeText: 'Article',
    badgeBg: 'bg-[#0d9488]',
    image: '/assets/images/odop-hub.jpg',
    alt: 'Act East Policy',
    title: "12 Years: A Journey To the 'Act East'",
    desc: 'Over a decade, how India has reformed its economy, Security, and Society! India has changed! The perspective of global trade and regional connectivity...',
    badge: 'International Trade',
    delay: '200'
  },
  {
    id: 3,
    category: 'article',
    badgeText: 'Article',
    badgeBg: 'bg-[#0d9488]',
    image: '/assets/images/cmyuva-event.jpg',
    alt: 'CM Yuva Youth Adda Event',
    title: "सीएम युवा-यूथ अड्डा 'बिज़नेस कैसे शुरू करें', है सिखाना युवा उद्यमियों का भरोसे...",
    desc: 'नौकरी या बिज़नेस? यह सवाल अक्सर युवाओं से भी पूछा जाता है। ज्यादातर का जवाब होता है—खुद का बिज़नेस। लेकिन कई बार जहां चाह वहां राह आसान करने के लिए यूपीआईकॉन आगे आया है...',
    badge: 'CM YUVA Mentorship',
    delay: '300'
  },
  {
    id: 4,
    category: 'industry-news',
    badgeText: 'Industry News',
    badgeBg: 'bg-[#2563eb]',
    image: '/assets/images/art-policy.jpg',
    alt: 'UP Defence Expressway',
    title: 'From Expressways to Aerospace: UP as All Set to Become the Largest...',
    desc: 'Uttar Pradesh has been known for its prosperous agriculture, divine spirituality, rich culture, and traditional skilled defense production nodes being set up in Kanpur, Lucknow & Jhansi...',
    badge: 'Aerospace & Defense',
    delay: '400'
  },
  {
    id: 5,
    category: 'news',
    badgeText: 'News',
    badgeBg: 'bg-[#ea580c]',
    image: '/assets/images/art-advisory.jpg',
    alt: 'World MSME Day UPICON',
    title: 'World MSME Day: UPICON Celebrates 1 Year of Youth Adda Impact',
    desc: 'Commemorating International MSME Day with major achievements across 75 district centers, facilitating over ₹250 Crores in collateral-free debt credit to young founders.',
    badge: 'State MSME Mission',
    delay: '100'
  },
  {
    id: 6,
    category: 'research',
    badgeText: 'Research',
    badgeBg: 'bg-[#7c3aed]',
    image: '/assets/images/art-analytics.jpg',
    alt: 'RAMP World Bank Study',
    title: 'Evaluating World Bank RAMP Grants in ODOP Artisan Clusters',
    desc: 'An empirical study on green manufacturing audits, zero-defect quality accreditations (ZED), and export unit realization gains across Moradabad and Bhadohi.',
    badge: 'World Bank Study',
    delay: '200'
  }
];

const Articles = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredArticles =
    activeFilter === 'all'
      ? articlesData
      : articlesData.filter((art) => art.category === activeFilter);

  return (
    <div className="articles-page">
      {/* Hero Banner */}
      <PageHeader
        breadcrumb="Articles & Research Papers"
        title="Articles, News & Research Papers"
        subtitle="Stay updated with policy briefs, economic research, CM YUVA updates, and industrial news shaping Uttar Pradesh's manufacturing and MSME ecosystem."
      />

      {/* Main Articles Grid with Filter Bar */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex justify-center mb-10" data-aos="fade-up">
            <div
              className="p-2 bg-white rounded-2xl lg:rounded-full border border-slate-200/90 shadow-md flex flex-wrap items-center justify-center gap-2 max-w-5xl"
              id="article-filters"
            >
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`art-filter-btn px-4 py-2.5 rounded-xl lg:rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border-0 ${activeFilter === 'all'
                  ? 'active-tab bg-brand-teal text-white shadow-sm'
                  : 'inactive-tab bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
              >
                <span className="material-symbols-outlined text-base">apps</span>
                <span>All Publications</span>
                <span className={`tab-count px-2 py-0.5 rounded-full text-[10px] font-mono ${activeFilter === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'}`}>
                  06
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('news')}
                className={`art-filter-btn px-4 py-2.5 rounded-xl lg:rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border-0 ${activeFilter === 'news'
                  ? 'active-tab bg-brand-teal text-white shadow-sm'
                  : 'inactive-tab bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
              >
                <span className="material-symbols-outlined text-base">newspaper</span>
                <span>News</span>
                <span className={`tab-count px-2 py-0.5 rounded-full text-[10px] font-mono ${activeFilter === 'news' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'}`}>
                  01
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('article')}
                className={`art-filter-btn px-4 py-2.5 rounded-xl lg:rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border-0 ${activeFilter === 'article'
                  ? 'active-tab bg-brand-teal text-white shadow-sm'
                  : 'inactive-tab bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
              >
                <span className="material-symbols-outlined text-base">article</span>
                <span>Articles</span>
                <span className={`tab-count px-2 py-0.5 rounded-full text-[10px] font-mono ${activeFilter === 'article' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'}`}>
                  02
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('research')}
                className={`art-filter-btn px-4 py-2.5 rounded-xl lg:rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border-0 ${activeFilter === 'research'
                  ? 'active-tab bg-brand-teal text-white shadow-sm'
                  : 'inactive-tab bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
              >
                <span className="material-symbols-outlined text-base">science</span>
                <span>Research</span>
                <span className={`tab-count px-2 py-0.5 rounded-full text-[10px] font-mono ${activeFilter === 'research' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'}`}>
                  02
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('industry-news')}
                className={`art-filter-btn px-4 py-2.5 rounded-xl lg:rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border-0 ${activeFilter === 'industry-news'
                  ? 'active-tab bg-brand-teal text-white shadow-sm'
                  : 'inactive-tab bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
              >
                <span className="material-symbols-outlined text-base">domain</span>
                <span>Industry News</span>
                <span className={`tab-count px-2 py-0.5 rounded-full text-[10px] font-mono ${activeFilter === 'industry-news' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'}`}>
                  01
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="articles-grid">
            {filteredArticles.map((art) => (
              <Link
                key={art.id}
                to="/news-details"
                className="art-card p-6 lg:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-card hover:border-brand-teal/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-slate-900 no-underline"
                data-aos="fade-up"
                data-aos-delay={art.delay}
              >
                <div>
                  <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-100 mb-3">
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-sm z-10 ${art.badgeBg} uppercase tracking-wider`}
                    >
                      {art.badgeText}
                    </span>
                    <img
                      alt={art.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      src={art.image}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug line-clamp-2">
                      {art.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2.5 font-normal line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-orange relative z-10">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    {art.badge}
                  </span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform duration-300">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
