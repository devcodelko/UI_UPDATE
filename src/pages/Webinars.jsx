import React from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

export default function Webinars() {
  useInteractiveEffects();

  return (
    <main className="min-h-screen">
      <section
        className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] py-16 lg:py-24 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]">
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center flex flex-col items-center gap-4"
          data-aos="fade-up">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white" to="/" >
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">Webinars &amp; Podcasts</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Webinars, Podcasts &amp; Masterclasses
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Access expert talks, CM YUVA DPR workshops, SIDBI credit guidance sessions, and leader podcasts designed to keep
            Uttar Pradesh's entrepreneurs ahead of the curve.
          </p>
        </div>
      </section>

      {/*  Featured Masterclass Player Card  */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div
            className="bg-slate-900 text-white p-6 sm:p-10 shadow-xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            data-aos="fade-up">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider">Live
                  Broadcast Recording</span>
                <span className="text-xs text-slate-400 font-medium">Oct 2026 • 45 Mins</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Masterclass: How to Prepare a Bankable DPR for CM YUVA &amp; PMEGP Loans
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Step-by-step guidance by UPICON senior chartered engineers on calculating debt service coverage ratios
                (DSCR), break-even points, and machinery capital expenditure for bank sanction.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">SK</span>
                <div>
                  <span className="text-xs font-bold text-white block">Er. Sanjay Kumar</span>
                  <span className="text-[11px] text-slate-400 block">Chief Technical Advisor, UPICON</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div
                className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group cursor-pointer shadow-lg"
                onClick={() => { }}>
                <img alt="Masterclass Video Thumbnail"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  src="assets/images/webinar-hero.jpg" />
                <div
                  className="absolute w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">play_arrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Webinar Grid  */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="mb-10" data-aos="fade-up">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">On-Demand Knowledge
              Bank</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Recent Sessions &amp; Podcasts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*  Episode 1  */}
            <div
              className="bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-lg transition-all p-6 sm:p-7 flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">Video Webinar</span>
                  <span className="text-xs text-slate-500 font-medium">35 Mins</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">Navigating
                  Nivesh Mitra Single-Window Clearances</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Interactive session with MSME department officers on getting fast statutory approvals for new industrial
                  land plots.
                </p>
              </div>
              <button onClick={() => { }}
                className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-xs font-bold text-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer bg-white">
                <span className="material-symbols-outlined text-base">play_circle</span>
                <span>Watch Session</span>
              </button>
            </div>

            {/*  Episode 2  */}
            <div
              className="bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-lg transition-all p-6 sm:p-7 flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-bold">Audio Podcast</span>
                  <span className="text-xs text-slate-500 font-medium">22 Mins</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">ODOP Export
                  Packaging &amp; Global Branding</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Podcast discussion with international packaging experts on improving shelf-life and brand positioning for
                  UP crafts.
                </p>
              </div>
              <button onClick={() => { }}
                className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-amber-600 hover:text-amber-600 text-xs font-bold text-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer bg-white">
                <span className="material-symbols-outlined text-base">graphic_eq</span>
                <span>Listen Episode</span>
              </button>
            </div>

            {/*  Episode 3  */}
            <div
              className="bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-lg transition-all p-6 sm:p-7 flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="300">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">Green Tech</span>
                  <span className="text-xs text-slate-500 font-medium">40 Mins</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">World Bank
                  RAMP Green Audits &amp; ZED Subsidy</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Learn how MSMEs can claim up to ₹5 Lakh grants for energy audits and ZED bronze/silver/gold
                  certifications.
                </p>
              </div>
              <button onClick={() => { }}
                className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-emerald-600 hover:text-emerald-600 text-xs font-bold text-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer bg-white">
                <span className="material-symbols-outlined text-base">play_circle</span>
                <span>Watch Session</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
