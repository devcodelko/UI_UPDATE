import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HeroSliderOne() {

  const location = useLocation();


  return (
    <section className="relative w-full home2-hero-compact overflow-hidden bg-slate-950 border-b border-slate-800" id="hero">
      {/*  Swiper Full Width Hero Container  */}
      <div className="swiper home2-full-swiper w-full h-full">
        <div className="swiper-wrapper">
          <div className="swiper-slide relative w-full h-full overflow-hidden">
            <img src="assets/images/hero.jpg" alt="ODOP Banana Fiber Artisan in UP"
              className="w-full h-full object-cover object-position-top transform scale-105 transition-transform duration-[8000ms]" />
            {/*  Dark Gradient Mask  */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>

            {/*  Slide Content Overlay Container  */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full">
                <div className="max-w-3xl flex flex-col gap-3 sm:gap-3.5">
                  {/*  Eyebrow Pill  */}
                  <div
                    className="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider w-fit shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                    <span>One District One Product (ODOP) Innovation</span>
                  </div>
                  {/*  Headline  */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-3">
                    Powering Industrial Growth. <br />
                    <span className="text-brand-teal">Enabling MSME</span> &amp;
                    <span className="text-brand-orange">Transformation.</span>
                  </h1>
                  {/*  Body Text  */}
                  <p className="text-sm sm:text-base text-slate-200 leading-normal max-w-2xl font-normal d-none d-md-block">
                    Established as a premier joint venture by the Government of Uttar Pradesh, SIDBI, IFCI, and
                    Nationalized Banks. UPICON delivers end-to-end industrial consultancy, turnkey project reports (DPRs),
                    and grassroots enterprise facilitation across all 75 districts of Uttar Pradesh.
                  </p>
                  {/*  CTA Action Buttons  */}
                  <div className="flex flex-wrap items-center gap-3 pt-1.5">
                    <Link to="/odop"
                      className="px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5">
                      <span>Explore ODOP Products</span>
                      <span className="material-symbols-outlined text-sm">category</span>
                    </Link>
                    <Link to="/karigar"
                      className="px-5 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5">
                      <span>UP KE Karigar Directory</span>
                      <span className="material-symbols-outlined text-sm">group</span>
                    </Link>
                  </div>
                  {/*  Trust Badges Bar  */}
                  <div
                    className="pt-3 mt-1 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-5 text-[11px] sm:text-xs text-slate-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-teal text-base sm:text-lg">public</span>
                      <span>World Bank RAMP Partner</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-teal text-base sm:text-lg">payments</span>
                      <span>Grants up to ₹5 Lakh</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="material-symbols-outlined text-brand-orange text-base sm:text-lg">workspace_premium</span>
                      <span>Master Craftsmen Recognition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Slide 1: Sovereign Industrial Leadership  */}
          <div className="swiper-slide relative w-full h-full overflow-hidden">
            <img src="assets/images/hero-1.png" alt="Senior UPICON consultant analyzing project blueprints"
              className="w-full h-full object-cover transform scale-105 transition-transform duration-[8000ms]" />
            {/*  Dark Gradient Mask for Contrast & Legibility  */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>

            {/*  Slide Content Overlay Container  */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full">
                <div className="max-w-3xl flex flex-col gap-3 sm:gap-3.5" data-aos="fade-right">
                  {/*  Eyebrow Pill  */}
                  <div
                    className="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider w-fit shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                    <span>50+ Years of Sovereign Industrial Leadership (1974 – 2026)</span>
                  </div>
                  {/*  Headline  */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-3">
                    Powering Industrial Growth.<br />
                    <span className="text-brand-teal">Enabling MSME</span>
                    <span className="text-brand-orange">Transformation.</span>
                  </h1>
                  {/*  Body Text  */}
                  <p className="text-sm sm:text-base text-slate-200 leading-normal max-w-2xl font-normal d-none d-md-block">
                    Established as a premier joint venture by the Government of Uttar Pradesh, SIDBI, IFCI, and Lead
                    Banks. Delivering turnkey project reports (DPRs), policy advisory, and grassroots facilitation across
                    all 75 districts.
                  </p>
                  {/*  CTA Action Buttons  */}
                  <div className="flex flex-wrap items-center gap-3 pt-1.5">
                    <Link to="/business-units"
                      className="px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5">
                      <span>Explore Advisory Services</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                    <a href="#initiatives"
                      className="px-5 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5">
                      <span>Discover Flagship Initiatives</span>
                      <span className="material-symbols-outlined text-sm">explore</span>
                    </a>
                  </div>
                  {/*  Trust Badges Bar  */}
                  <div
                    className="pt-3 mt-1 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-5 text-[11px] sm:text-xs text-slate-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-teal text-base sm:text-lg">verified</span>
                      <span>CAG Audited Institutional JV</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="material-symbols-outlined text-brand-teal text-base sm:text-lg">workspace_premium</span>
                      <span>ISO 9001:2015 Certified</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="material-symbols-outlined text-brand-orange text-base sm:text-lg">account_balance</span>
                      <span>SIDBI &amp; Lead Banks Empanelled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Slide 2: Quality Control & MSME Audits  */}
          <div className="swiper-slide relative w-full h-full overflow-hidden">
            <img src="assets/images/hero-2.png" alt="Industrial Food Processing Audit in UP"
              className="w-full h-full object-cover transform scale-105 transition-transform duration-[8000ms]" />
            {/*  Dark Gradient Mask  */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>

            {/*  Slide Content Overlay Container  */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full">
                <div className="max-w-3xl flex flex-col gap-3 sm:gap-3.5">
                  {/*  Eyebrow Pill  */}
                  <div
                    className="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider w-fit shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Statewide Technical Quality Compliance &amp; Audits</span>
                  </div>
                  {/*  Headline  */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-3">
                    Auditing 1,200+ MSME Units.<br />
                    <span className="text-brand-teal">Quality Inspection</span> &amp;
                    <span className="text-brand-orange">State Compliance.</span>
                  </h1>
                  {/*  Body Text  */}
                  <p className="text-sm sm:text-base text-slate-200 leading-normal max-w-2xl font-normal d-none d-md-block">
                    Executing rigorous third-party quality compliance audits, statutory EIA clearances, and
                    techno-economic feasibility assessments for food processing and industrial units across Uttar Pradesh.
                  </p>
                  {/*  CTA Action Buttons  */}
                  <div className="flex flex-wrap items-center gap-3 pt-1.5">
                    <Link to="/msme"
                      className="px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5">
                      <span>View Technical Audit Services</span>
                      <span className="material-symbols-outlined text-sm">verified</span>
                    </Link>
                    <Link to="/cmyuva"
                      className="px-5 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5">
                      <span>Browse Bankable DPRs</span>
                      <span className="material-symbols-outlined text-sm">description</span>
                    </Link>
                  </div>
                  {/*  Trust Badges Bar  */}
                  <div
                    className="pt-3 mt-1 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-5 text-[11px] sm:text-xs text-slate-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-teal text-base sm:text-lg">fact_check</span>
                      <span>1,200+ Industrial Audits</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="material-symbols-outlined text-brand-teal text-base sm:text-lg">integration_instructions</span>
                      <span>Nivesh Mitra Single-Window</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-orange text-base sm:text-lg">map</span>
                      <span>75 Districts Covered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Slide 3: ODOP & Artisan Empowerment  */}
          <div className="swiper-slide relative w-full h-full overflow-hidden">
            <img src="assets/images/hero-3.png" alt="ODOP Banana Fiber Artisan in UP"
              className="w-full h-full object-cover transform scale-105 transition-transform duration-[8000ms]" />
            {/*  Dark Gradient Mask  */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>

            {/*  Slide Content Overlay Container  */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full">
                <div className="max-w-3xl flex flex-col gap-3 sm:gap-3.5">
                  {/*  Eyebrow Pill  */}
                  <div
                    className="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider w-fit shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                    <span>One District One Product (ODOP) Innovation</span>
                  </div>
                  {/*  Headline  */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-3">
                    Transforming Local Crafts.<br />
                    <span className="text-brand-teal">Grassroots Artisans</span> &amp;
                    <span className="text-brand-orange">Global Markets.</span>
                  </h1>
                  {/*  Body Text  */}
                  <p className="text-sm sm:text-base text-slate-200 leading-normal max-w-2xl font-normal d-none d-md-block">
                    Empowering handicraft clusters and traditional craftspeople across 75 districts of UP with modern DPR
                    financing, ZED certification, and direct global export linkages.
                  </p>
                  {/*  CTA Action Buttons  */}
                  <div className="flex flex-wrap items-center gap-3 pt-1.5">
                    <Link to="/odop"
                      className="px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5">
                      <span>Explore ODOP Products</span>
                      <span className="material-symbols-outlined text-sm">category</span>
                    </Link>
                    <Link to="/karigar"
                      className="px-5 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5">
                      <span>UP KE Karigar Directory</span>
                      <span className="material-symbols-outlined text-sm">group</span>
                    </Link>
                  </div>
                  {/*  Trust Badges Bar  */}
                  <div
                    className="pt-3 mt-1 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-5 text-[11px] sm:text-xs text-slate-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-teal text-base sm:text-lg">public</span>
                      <span>World Bank RAMP Partner</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-teal text-base sm:text-lg">payments</span>
                      <span>Grants up to ₹5 Lakh</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="material-symbols-outlined text-brand-orange text-base sm:text-lg">workspace_premium</span>
                      <span>Master Craftsmen Recognition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Slide 4: Skill Development & TVET Ecosystem  */}
          <div className="swiper-slide relative w-full h-full overflow-hidden">
            <img src="assets/images/hero-4.png" alt="Skill Training Center in Uttar Pradesh"
              className="w-full h-full object-cover transform scale-105 transition-transform duration-[8000ms]" />
            {/*  Dark Gradient Mask  */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>

            {/*  Slide Content Overlay Container  */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full">
                <div className="max-w-3xl flex flex-col gap-3 sm:gap-3.5">
                  {/*  Eyebrow Pill  */}
                  <div
                    className="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider w-fit shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                    <span>Youth Entrepreneurship &amp; Skill TVET Ecosystem</span>
                  </div>
                  {/*  Headline  */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-3">
                    Upskilling 500,000+ Youth.<br />
                    <span className="text-brand-teal">CM YUVA Scheme</span> &amp;
                    <span className="text-brand-orange">District Youth Addas.</span>
                  </h1>
                  {/*  Body Text  */}
                  <p className="text-sm sm:text-base text-slate-200 leading-normal max-w-2xl font-normal d-none d-md-block">
                    Providing collateral-free project loans up to ₹5 Lakhs at 0% interest and establishing District Youth
                    Adda clinics for first-generation founders across Uttar Pradesh.
                  </p>
                  {/*  CTA Action Buttons  */}
                  <div className="flex flex-wrap items-center gap-3 pt-1.5">
                    <Link to="/cmyuva"
                      className="px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5">
                      <span>View CM YUVA Portal</span>
                      <span className="material-symbols-outlined text-sm">bolt</span>
                    </Link>
                    <a href="#district-network"
                      className="px-5 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5">
                      <span>Locate District Clinics</span>
                      <span className="material-symbols-outlined text-sm">location_on</span>
                    </a>
                  </div>
                  {/*  Trust Badges Bar  */}
                  <div
                    className="pt-3 mt-1 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-5 text-[11px] sm:text-xs text-slate-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-teal text-base sm:text-lg">percent</span>
                      <span>0% Interest Loans</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-teal text-base sm:text-lg">savings</span>
                      <span>₹25,000 Capital Subsidy</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-orange text-base sm:text-lg">school</span>
                      <span>500,000+ Youth Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Slide 5: Mega Infrastructure & Capital Linkages  */}
          <div className="swiper-slide relative w-full h-full overflow-hidden">
            <img src="assets/images/hero-5.png" alt="Industrial Project Planning in UP"
              className="w-full h-full object-cover transform scale-105 transition-transform duration-[8000ms]" />
            {/*  Dark Gradient Mask  */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>

            {/*  Slide Content Overlay Container  */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full">
                <div className="max-w-3xl flex flex-col gap-3 sm:gap-3.5">
                  {/*  Eyebrow Pill  */}
                  <div
                    className="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider w-fit shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Institutional Advisory &amp; Turnkey Consultancy</span>
                  </div>
                  {/*  Headline  */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-3">
                    Building Capital Infrastructure.<br />
                    <span className="text-brand-teal">₹5,000+ Crore</span>
                    <span className="text-brand-orange">Capital Linkages.</span>
                  </h1>
                  {/*  Body Text  */}
                  <p className="text-sm sm:text-base text-slate-200 leading-normal max-w-2xl font-normal d-none d-md-block">
                    Partnering with state departments, financial institutions, and global development agencies to
                    conceive, finance, and execute mega industrial projects.
                  </p>
                  {/*  CTA Action Buttons  */}
                  <div className="flex flex-wrap items-center gap-3 pt-1.5">
                    <Link to="/contact"
                      className="px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5">
                      <span>Contact Institutional Desk</span>
                      <span className="material-symbols-outlined text-sm">call</span>
                    </Link>
                    <Link to="/success-stories"
                      className="px-5 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5">
                      <span>Browse Success Stories</span>
                      <span className="material-symbols-outlined text-sm">star</span>
                    </Link>
                  </div>
                  {/*  Trust Badges Bar  */}
                  <div
                    className="pt-3 mt-1 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-5 text-[11px] sm:text-xs text-slate-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="material-symbols-outlined text-brand-teal text-base sm:text-lg">account_balance_wallet</span>
                      <span>₹5,000+ Cr Credit Mobilized</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-teal text-base sm:text-lg">history_edu</span>
                      <span>50+ Years State Trust</span>
                    </div>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-brand-orange text-base sm:text-lg">support_agent</span>
                      <span>24/7 Sovereign Desk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/*  Centered Bottom Navigation Buttons (Above Pagination)  */}
        <div className="home2-hero-nav-wrapper">
          <button
            className="home2-full-prev"
            aria-label="Previous slide"
            type="button">
            <span className="material-symbols-outlined notranslate" translate="no">chevron_left</span>
          </button>
          <button
            className="home2-full-next"
            aria-label="Next slide"
            type="button">
            <span className="material-symbols-outlined notranslate" translate="no">chevron_right</span>
          </button>
        </div>

        {/*  Pagination Bullets  */}
        <div className="home2-full-pagination"></div>
      </div>
    </section>
  );
}
