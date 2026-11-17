import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { storyData } from '../data/storyData';
import PageHeader from '../components/common/PageHeader';
const storyList = [
  { id: 'kanpur', num: '01', date: 'SEP | 2026', label: 'Kanpur • EcoJute Innovations' },
  { id: 'agra', num: '02', date: 'AUG | 2026', label: 'Agra • Organic Oil Expeller' },
  { id: 'gorakhpur', num: '03', date: 'JUL | 2026', label: 'Gorakhpur • Solar Assembly' },
  { id: 'varanasi', num: '04', date: 'JUN | 2026', label: 'Varanasi • Ayush Herbal Oils' },
  { id: 'barabanki', num: '05', date: 'MAY | 2026', label: 'Barabanki • अजय कुमार (शुद्धिमा डेयरी)' },
  { id: 'moradabad', num: '06', date: 'APR | 2026', label: 'Moradabad • ZED Brass Foundry' }
];

const SuccessStories = () => {
  const [activeStoryId, setActiveStoryId] = useState('kanpur');
  const activeStory = storyData[activeStoryId] || storyData['kanpur'];

  return (
    <div className="success-stories-page">
      <PageHeader
        title="Transforming Dreams into Self-Reliant MSME Reality"
        subtitle="Discover how UPICON’s turn-key advisory, bankable DPR preparation, and EDP mentorship empowered over 50,000 first-generation founders to build high-growth enterprises across Uttar Pradesh."
        breadcrumb="Success Stories"
      />
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] pt-28 pb-16 lg:pt-36 lg:pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center flex flex-col items-center gap-4" data-aos="fade-up">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link to="/" className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white">
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">Success Stories</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Transforming Dreams into Self-Reliant MSME Reality
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Discover how UPICON’s turn-key advisory, bankable DPR preparation, and EDP mentorship empowered over 50,000
            first-generation founders to build high-growth enterprises across Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* MAIN SUCCESS STORIES SHOWCASE & LEFT LIST SIDEBAR SECTION */}
      <section className="py-12 lg:py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Side: Success Stories List Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-3" data-aos="fade-right">
              <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select Featured Impact Story
                </span>
                <span className="text-[11px] font-semibold text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-full">
                  6 Stories
                </span>
              </div>

              <div className="flex flex-col gap-2.5" id="story-list-container">
                {storyList.map((item) => {
                  const isActive = item.id === activeStoryId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveStoryId(item.id)}
                      className={`story-item-btn ${isActive ? 'active' : ''
                        } w-full text-left p-3.5 sm:p-4 rounded-2xl flex items-center justify-between cursor-pointer group transition-all`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="item-badge w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0">
                          {item.num}
                        </span>
                        <div className="flex flex-col items-start">
                          <span className="text-[11px] font-mono tracking-wide text-slate-400 font-semibold">{item.date}</span>
                          <span className="item-title text-sm font-extrabold">{item.label}</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined item-icon text-xl">chevron_right</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Featured Story Showcase Card */}
            <div className="lg:col-span-8" data-aos="fade-left" data-aos-delay="200">
              <div
                id="story-showcase-card"
                className="bg-[#c6d7d2] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-300/80 shadow-md transition-all duration-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Left Text Content */}
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <h2
                      id="story-title"
                      className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#d86520] mb-3 leading-snug"
                    >
                      {activeStory.title}
                    </h2>
                    <h3
                      id="story-tagline"
                      className="text-sm sm:text-base font-semibold text-slate-800 mb-3.5 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: activeStory.tagline }}
                    ></h3>

                    <div id="story-body" className="space-y-3 text-slate-800 text-xs sm:text-sm font-normal leading-relaxed">
                      {activeStory.story.map((paragraph, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                      ))}
                    </div>
                  </div>

                  {/* Right Enterprise Image Container */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-xs h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border-4 border-[#aabeb8] shadow-lg bg-slate-200">
                      <img
                        id="story-image"
                        alt={activeStory.title}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        src={activeStory.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATEWIDE ENTERPRISE ROLL GRID SECTION */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">
              Statewide Enterprise Roll
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Featured Entrepreneurs Across Uttar Pradesh
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Empowering first-generation founders with technology, bankable DPRs, and market access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Story 1 */}
            <div
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-card transition-all"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold text-base border border-brand-orange/20">
                    AS
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">इंजीनियर अजय सिंह</h3>
                    <span className="text-xs text-slate-500 font-medium">इकोजूट पैकेजिंग (EcoJute) • कानपुर</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  "UPICON की बैंकेबल DPR रिपोर्ट और CM YUVA ऋण सहायता से मेरी इकाई ₹1.8 करोड़ वार्षिक कारोबार के साथ 42
                  युवाओं को रोजगार दे रही है।"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-orange">CM YUVA Beneficiary</span>
                <span className="text-slate-400">Kanpur District</span>
              </div>
            </div>

            {/* Story 2 */}
            <div
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-card transition-all"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center font-bold text-base border border-brand-teal/20">
                    AK
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">अजय कुमार (64 वर्ष)</h3>
                    <span className="text-xs text-slate-500 font-medium">शुद्धिमा डेयरी फार्म • बाराबंकी</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  "लोक निर्माण विभाग से रिटायरमेंट के बाद UPICON की सलाह से SBI से ₹2.72 करोड़ लोन स्वीकृत हुआ और आधुनिक
                  हाइजीनिक डेयरी फार्म शुरू हुआ।"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-teal">MAY 2026 Beneficiary</span>
                <span className="text-slate-400">Barabanki District</span>
              </div>
            </div>

            {/* Story 3 */}
            <div
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-card transition-all"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold text-base border border-brand-orange/20">
                    SY
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">सुनीता यादव</h3>
                    <span className="text-xs text-slate-500 font-medium">जैविक ऑइल एक्सपैलर • आगरा</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  "UPICON EDP ट्रेनिंग और PMEGP सब्सिडी से स्वचालित सरसों तेल निष्कर्षण इकाई स्थापित की। आज वार्षिक कारोबार
                  ₹65 लाख है।"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-orange">PMEGP Beneficiary</span>
                <span className="text-slate-400">Agra District</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
