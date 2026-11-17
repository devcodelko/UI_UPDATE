import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { artisanData } from '../data/artisanData';
import PageHeader from '../components/common/PageHeader';

const artisanList = [
  { id: 'varanasi-vakeel-prasad', num: '01', date: 'SEP | 2026', label: 'Varanasi • वकील प्रसाद' },
  { id: 'gazzipur-prince', num: '02', date: 'AUG | 2026', label: 'Ghazipur • प्रिंस मौर्य' },
  { id: 'siddharthnagar-lalita', num: '03', date: 'JUL | 2026', label: 'Siddharthnagar • ललिता दीक्षित' },
  { id: 'bahraich-gopal', num: '04', date: 'JUN | 2026', label: 'Bahraich • गोपाल गुप्ता' },
  { id: 'kanpur-abhishek', num: '05', date: 'MAY | 2026', label: 'Kanpur • अभिषेक कुमार' },
  { id: 'lucknow-usha', num: '06', date: 'APR | 2026', label: 'Lucknow • उषा' },
  { id: 'mirzapur-kalluram', num: '07', date: 'MAR | 2026', label: 'Mirzapur • कल्लूराम मौर्या' },
  { id: 'Kanpur-Dehat', num: '08', date: 'FEB | 2026', label: 'Kanpur Dehat • ब्रजमोहन' },
  { id: 'lalitpur', num: '09', date: 'JAN | 2026', label: 'Lalitpur • देवीलाल पंथ' },
  { id: 'banda', num: '10', date: 'DEC | 2025', label: 'Banda • निक्की' }
];

const Karigar = () => {
  const [activeArtisanId, setActiveArtisanId] = useState('varanasi-vakeel-prasad');
  const activeArtisan = artisanData[activeArtisanId] || artisanData['varanasi-vakeel-prasad'];

  return (
    <div className="karigar-page">
      <PageHeader
        breadcrumb="Karigar"
        title="Honouring the Master Artisans & Craftsmen of UP"
        subtitle="UPICON provides technical skill upgrading, modern toolkit distribution, bank credit linkages, and direct market
            access to traditional artisans across all 75 districts under Vishwakarma Shram Samman Yojana."
      />

      {/* MAIN ARTISAN SHOWCASE & LEFT LIST SIDEBAR SECTION */}
      <section className="py-12 lg:py-20 bg-slate-50 relative">
        <div className="max-w-[1420px] mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Side: Artisan List Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-3 lg:sticky lg:top-28" data-aos="fade-right">
              <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Select Edition &amp; District</span>
                <span className="text-[11px] font-semibold text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-full">
                  10 Artisans
                </span>
              </div>

              <div className="flex flex-col gap-2.5" id="karigar-list-container">
                {artisanList.map((item) => {
                  const isActive = item.id === activeArtisanId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveArtisanId(item.id)}
                      className={`page-item-btn ${isActive ? 'active' : ''
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

            {/* Right Side: Featured Artisan Showcase */}
            <div className="lg:col-span-8" data-aos="fade-left" data-aos-delay="200">
              <div id="artisan-showcase-card" className="flex flex-col gap-6 transition-all duration-500">
                {/* 1. Title (Image ke upar) */}
                <h2
                  id="artisan-title"
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#d86520] leading-snug"
                >
                  {activeArtisan.title}
                </h2>

                {/* 2. Image (Top pe, title ke niche, details ke upar - fully visible, no cropping) */}
                <div className="w-full flex justify-center">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-white">
                    <img
                      id="artisan-image"
                      src={activeArtisan.image}
                      alt={activeArtisan.title}
                      className="w-auto max-w-full max-h-[520px] sm:max-h-[580px] h-auto object-contain block mx-auto"
                    />
                  </div>
                </div>

                {/* 3. Details (Image ke niche) */}
                <div className="flex flex-col gap-4">
                  <h3
                    id="artisan-tagline"
                    className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 leading-relaxed border-l-4 border-[#d86520] pl-4 py-1 bg-white/60 rounded-r-xl"
                    dangerouslySetInnerHTML={{ __html: activeArtisan.tagline }}
                  ></h3>

                  <div id="artisan-story" className="space-y-4 text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
                    {activeArtisan.story.map((paragraph, idx) => (
                      <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Karigar;
