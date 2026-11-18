import React from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

export default function Home() {
  useInteractiveEffects();

  return (
    <main className="min-h-screen">
      <section className="relative bg-white pt-8 pb-16 lg:py-20 overflow-hidden border-b border-slate-100">
        {/* <!-- Subtle architectural background graphic tints --> */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal-light rounded-full blur-3xl pointer-events-none">
        </div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange-light rounded-full blur-3xl pointer-events-none">
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* <!-- Left Column: Authoritative Editorial Copy --> */}
            <div className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1" data-aos="fade-right">
              {/* <!-- Eyebrow Pill --> */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal-light border border-brand-teal/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                <span className="text-xs font-bold text-brand-teal tracking-wide uppercase">
                  50+ Years of Sovereign Industrial Leadership (1974 – 2026)
                </span>
              </div>
              {/* <!-- Master Headline --> */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Powering Industrial Growth. <br className="hidden sm:inline" />
                <span className="text-brand-teal">Enabling MSME</span>
                <span className="text-brand-orange">Transformation.</span>
              </h1>
              {/* <!-- Body Description --> */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Established as a premier joint venture by the Government of Uttar Pradesh, SIDBI, IFCI, and Nationalized
                Banks. UPICON delivers end-to-end industrial consultancy, turnkey project reports (DPRs), and grassroots
                enterprise facilitation across all 75 districts of Uttar Pradesh.
              </p>
              {/* <!-- Core Action Buttons --> */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  href="#services">
                  <span>Explore Advisory Services</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-bold text-sm transition-all"
                  href="#initiatives">
                  <span>Discover Flagship Initiatives</span>
                  <span className="material-symbols-outlined text-base">explore</span>
                </a>
              </div>
              {/* <!-- Quick Discovery Links --> */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-slate-700">
                <a className="inline-flex items-center gap-1.5 text-brand-teal hover:text-brand-orange transition-colors"
                  href="#dpr-catalog">
                  <span className="material-symbols-outlined text-base text-brand-teal">menu_book</span>
                  <span>Browse 500+ Bankable DPRs</span>
                  <span className="text-slate-400">→</span>
                </a>
                <a className="inline-flex items-center gap-1.5 text-brand-teal hover:text-brand-orange transition-colors"
                  href="#district-network">
                  <span className="material-symbols-outlined text-base text-brand-orange">store</span>
                  <span>Locate District Youth Adda Clinics</span>
                  <span className="text-slate-400">→</span>
                </a>
              </div>
              {/* <!-- Trust Badges Bar --> */}
              <div
                className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-brand-teal">verified</span>
                  <span>CAG Audited Institutional JV</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-brand-teal">workspace_premium</span>
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-brand-orange">account_balance</span>
                  <span>Empanelled with SIDBI, IFCI &amp; Lead Banks</span>
                </div>
              </div>
            </div>
            {/* <!-- Right Column: Sophisticated Editorial Multi-Image Composition --> */}
            <div className="lg:col-span-5 relative order-1 lg:order-2 w-full" data-aos="fade-left" data-aos-delay="200">
              <div className="relative mx-auto w-full max-w-full">
                {/* <!-- Dominant Photograph (Senior Consultant & Entrepreneur) -->
            <!-- Swiper Slider Hero Showcase --> */}
                <div
                  className="swiper hero-swiper rounded-2xl overflow-hidden shadow-card border border-slate-200/80 bg-slate-100 relative group">
                  <div className="swiper-wrapper">
                    {/* <!-- Slide 1: Technical Advisory --> */}
                    <div className="swiper-slide relative">
                      <img alt="Senior UPICON consultant and female industrial entrepreneur analyzing project blueprints"
                        className="w-full h-[320px] sm:h-[400px] lg:h-[440px]  object-cover transition-transform duration-700 group-hover:scale-105"
                        src="assets/images/hero-1.png" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      {/* <!-- Floating Pill on Slide 1 --> */}
                      <div
                        className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-subtle border border-slate-200/60 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Consulting In Action •
                          Lucknow HQ</span>
                      </div>

                    </div>

                    {/* <!-- Slide 2: Quality Audits & MSME Facilitation --> */}
                    <div className="swiper-slide relative">
                      <img alt="Modern food processing MSME unit audit in Uttar Pradesh"
                        className="w-full h-[320px] sm:h-[400px] lg:h-[440px]  object-cover transition-transform duration-700 group-hover:scale-105"
                        src="assets/images/hero-2.png" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      {/* <!-- Floating Pill on Slide 2 --> */}
                      <div
                        className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-subtle border border-slate-200/60 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Quality Control •
                          Statewide Audit</span>
                      </div>

                    </div>

                    {/* <!-- Slide 3: ODOP & Rural Skill Development --> */}
                    <div className="swiper-slide relative">
                      <img alt="ODOP Banana Fiber Artisan in Kushinagar, Uttar Pradesh"
                        className="w-full h-[320px] sm:h-[400px] lg:h-[440px]  object-cover transition-transform duration-700 group-hover:scale-105"
                        src="assets/images/hero-3.png" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      {/* <!-- Floating Pill on Slide 3 --> */}
                      <div
                        className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-subtle border border-slate-200/60 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">ODOP Innovation • Micro
                          Enterprises</span>
                      </div>

                    </div>
                    {/* <!-- Slide 4: ODOP & Rural Skill Development --> */}
                    <div className="swiper-slide relative">
                      <img alt="ODOP Banana Fiber Artisan in Kushinagar, Uttar Pradesh"
                        className="w-full h-[320px] sm:h-[400px] lg:h-[440px]  object-cover transition-transform duration-700 group-hover:scale-105"
                        src="assets/images/hero-4.png" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      {/* <!-- Floating Pill on Slide 3 --> */}
                      <div
                        className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-subtle border border-slate-200/60 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">ODOP Innovation • Micro
                          Enterprises</span>
                      </div>

                    </div>
                    {/* <!-- Slide 5: ODOP & Rural Skill Development --> */}
                    <div className="swiper-slide relative">
                      <img alt="ODOP Banana Fiber Artisan in Kushinagar, Uttar Pradesh"
                        className="w-full h-[320px] sm:h-[400px] lg:h-[440px]  object-cover transition-transform duration-700 group-hover:scale-105"
                        src="assets/images/hero-5.png" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      {/* <!-- Floating Pill on Slide 3 --> */}
                      <div
                        className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-subtle border border-slate-200/60 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">ODOP Innovation • Micro
                          Enterprises</span>
                      </div>

                    </div>
                  </div>

                  {/* <!-- Navigation Controls --> */}
                  <div className="swiper-button-prev hero-swiper-prev">
                    <span className="material-symbols-outlined text-base">chevron_left</span>
                  </div>
                  <div className="swiper-button-next hero-swiper-next">
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </div>

                  {/* <!-- Pagination Dots --> */}
                  <div className="swiper-pagination hero-swiper-pagination"></div>
                </div>
                {/* <!-- Overlapping Bottom Supporting Card with Second Image --> */}
                <div
                  className="hidden sm:flex z-10 items-center gap-3 absolute -bottom-8 -left-8 bg-white p-3 rounded-2xl shadow-card border border-slate-100 max-w-xs animate-fade-in">
                  <img alt="Modern food processing MSME unit audit in Uttar Pradesh"
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-100"
                    src="assets/images/msme-audit.jpg" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-brand-orange">Quality Certified</span>
                    <span className="text-xs font-extrabold text-slate-900">1,200+ Industrial Audits</span>
                    <span className="text-[10px] text-slate-500">Statewide food &amp; agro facilities</span>
                  </div>
                </div>
                {/* <!-- Overlapping Top Right Metric Badge --> */}
                <div
                  className="hidden absolute -top-4 -right-4 z-10 bg-white px-4 py-2.5 rounded-xl shadow-card border border-slate-100 sm:flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-lg">currency_rupee</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-900">₹1,000+ Cr</span>
                    <span className="text-[10px] text-slate-500 font-medium">Credit Mobilized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  4. INSTITUTIONAL STAKEHOLDER STRIP                         */}

      <section className="bg-slate-50 py-7 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col items-center gap-4" data-aos="fade-up">
          <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500 text-center">
            Institutional Backing &amp; Sovereign Development Partners
          </span>
          <div className="w-full flex flex-wrap items-center justify-around gap-6 lg:gap-10 text-slate-600">
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <span className="material-symbols-outlined text-brand-teal text-2xl">account_balance</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">Dept. of MSME &amp; Export Promotion</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <span className="material-symbols-outlined text-brand-teal text-2xl">domain</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">SIDBI</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <span className="material-symbols-outlined text-brand-teal text-2xl">corporate_fare</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">IFCI Limited</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <span className="material-symbols-outlined text-brand-teal text-2xl">public</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">World Bank RAMP</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <span className="material-symbols-outlined text-brand-teal text-2xl">payments</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">Nationalized Banks</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <span className="material-symbols-outlined text-brand-teal text-2xl">workspace_premium</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">Skill India (NSDC)</span>
            </div>
          </div>
        </div>
      </section>


      {/*  5. DYNAMIC IMPACT NUMBERS (Light Background + Accents)     */}

      <section className="bg-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/*  Card 1  */}
            <div
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card transition-all relative overflow-hidden group"
              data-aos="fade-up" data-aos-delay="100">
              <div className="w-1.5 h-12 bg-brand-teal absolute left-0 top-6 rounded-r"></div>
              <div className="flex flex-col pl-3">
                <span
                  className="text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-brand-teal transition-colors animate-counter"
                  data-target="50" data-suffix="+ Years">50+ Years</span>
                <span className="text-sm font-bold text-slate-800 mt-1">Industrial Legacy</span>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Founded 1974 as a Joint Venture of SIDBI, IFCI, and Government of UP for sovereign enterprise advisory.
                </p>
              </div>
            </div>
            {/*  Card 2  */}
            <div
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card transition-all relative overflow-hidden group"
              data-aos="fade-up" data-aos-delay="200">
              <div className="w-1.5 h-12 bg-brand-orange absolute left-0 top-6 rounded-r"></div>
              <div className="flex flex-col pl-3">
                <span
                  className="text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-brand-orange transition-colors animate-counter"
                  data-target="2000" data-suffix="+">2,000+</span>
                <span className="text-sm font-bold text-slate-800 mt-1">Projects</span>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Turnkey DPR formulation, industrial project reports, and infrastructure feasibility studies successfully delivered.
                </p>
              </div>
            </div>
            {/*  Card 3  */}
            <div
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card transition-all relative overflow-hidden group"
              data-aos="fade-up" data-aos-delay="300">
              <div className="w-1.5 h-12 bg-brand-teal absolute left-0 top-6 rounded-r"></div>
              <div className="flex flex-col pl-3">
                <span
                  className="text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-brand-teal transition-colors animate-counter"
                  data-target="500000" data-suffix="+">5,00,000+</span>
                <span className="text-sm font-bold text-slate-800 mt-1">Founders Mentored</span>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Artisans, rural youth, and MSME proprietors empowered through certified TVET and capacity-building
                  workshops.
                </p>
              </div>
            </div>
            {/*  Card 4  */}
            <div
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card transition-all relative overflow-hidden group"
              data-aos="fade-up" data-aos-delay="400">
              <div className="w-1.5 h-12 bg-brand-orange absolute left-0 top-6 rounded-r"></div>
              <div className="flex flex-col pl-3">
                <span
                  className="text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-brand-orange transition-colors animate-counter"
                  data-target="100" data-suffix="+">100+</span>
                <span className="text-sm font-bold text-slate-800 mt-1">Partnerships</span>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Strategic alliances with state departments, financial institutions, global development agencies, and lead banks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  6. EDITORIAL "WHO WE ARE" (Annual-Report Style Split)       */}

      <section className="bg-slate-50/70 py-16 lg:py-20 border-b border-slate-100" id="about">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/*  Left: Real Documentary Facility Swiper Slider  */}
            <div className="lg:col-span-5 flex flex-col gap-3" data-aos="fade-right">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200/80 bg-white group">
                <div className="swiper whoweare-swiper whoweare-swiper-compact">
                  <div className="swiper-wrapper">
                    {/*  Slide 1: Technical Quality Compliance  */}
                    <div className="swiper-slide relative overflow-hidden">
                      <img src="assets/images/about-1.png" alt="Technical Quality Compliance Audit"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    </div>

                    {/*  Slide 2: Sovereign Advisory  */}
                    <div className="swiper-slide relative overflow-hidden">
                      <img src="assets/images/about-2.png" alt="Sovereign Advisory & Policy Support"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    </div>

                    {/*  Slide 3: ODOP & Cluster Development  */}
                    <div className="swiper-slide relative overflow-hidden">
                      <img src="assets/images/about-3.png" alt="Cluster and ODOP Development"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    </div>

                  </div>

                  {/*  Navigation Controls  */}
                  <button
                    className="whoweare-swiper-prev absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                    aria-label="Previous slide">
                    <span className="material-symbols-outlined text-xl">chevron_left</span>
                  </button>
                  <button
                    className="whoweare-swiper-next absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                    aria-label="Next slide">
                    <span className="material-symbols-outlined text-xl">chevron_right</span>
                  </button>

                  {/*  Pagination  */}
                  <div className="whoweare-swiper-pagination absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5">
                  </div>
                </div>
              </div>
              <div
                className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-subtle flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span> State Technical Partner
                </span>
                <span className="text-slate-500 font-medium">50+ Years of Enterprise Excellence</span>
              </div>
            </div>
            {/*  Right: Narrative & Milestone Bar  */}
            <div className="lg:col-span-7 flex flex-col gap-5" data-aos="fade-left" data-aos-delay="200">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Who We Are</span>
                <span className="h-px w-8 bg-brand-orange"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Five Decades of Building Enterprise Opportunities Across Uttar Pradesh
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                UP Industrial Consultants Limited (UPICON) was conceived in 1974 as the sovereign technical powerhouse to
                accelerate the state's transformation into an industrial engine. Under the administrative supervision of the
                Department of MSME &amp; Export Promotion, UPICON acts as an institutional bridge connecting sovereign
                policy objectives with industrial capital, grassroots craftspeople, and aspiring first-generation founders.
              </p>
              {/*  Milestone Interactive Bar  */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                <div
                  className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-brand-teal transition-colors">
                  <span className="text-xs font-extrabold text-brand-teal">1974</span>
                  <span className="block text-[11px] font-bold text-slate-800 mt-0.5">Foundation</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block leading-tight">JV of SIDBI &amp; GoUP</span>
                </div>
                <div
                  className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-brand-teal transition-colors">
                  <span className="text-xs font-extrabold text-brand-teal">1995</span>
                  <span className="block text-[11px] font-bold text-slate-800 mt-0.5">DPR Cell</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block leading-tight">Bank project reports</span>
                </div>
                <div
                  className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-brand-orange transition-colors">
                  <span className="text-xs font-extrabold text-brand-orange">2018</span>
                  <span className="block text-[11px] font-bold text-slate-800 mt-0.5">ODOP Boost</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block leading-tight">Common Facility Centers</span>
                </div>
                <div
                  className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-brand-teal transition-colors">
                  <span className="text-xs font-extrabold text-brand-teal">2024</span>
                  <span className="block text-[11px] font-bold text-slate-800 mt-0.5">RAMP &amp; YUVA</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block leading-tight">World Bank modernization</span>
                </div>
                <div
                  className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-brand-orange transition-colors">
                  <span className="text-xs font-extrabold text-brand-orange">2026</span>
                  <span className="block text-[11px] font-bold text-slate-800 mt-0.5">Digital UP</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block leading-tight">AI &amp; Smart Clusters</span>
                </div>
              </div>
              <div className="pt-2">
                <a className="inline-flex items-center gap-2 text-sm font-bold text-brand-teal hover:text-brand-orange transition-colors"
                  href="#governance">
                  <span>Read Institutional Governance &amp; Board Structure</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  7. CORE SERVICES (Asymmetric Grid with Visual Rhythm)       */}

      <section className="bg-white py-16 lg:py-20 border-b border-slate-100" id="services">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-10">
          {/*  Section Header  */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" data-aos="fade-up">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">What We Do</span>
                <span className="h-px w-8 bg-brand-teal"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                Integrated Advisory &amp; Enterprise Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                From technical project appraisals and statutory clearances to grassroot artisan clusters and TVET skilling
                centers.
              </p>
            </div>
            <a className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-dark transition-colors shrink-0"
              href="#dpr-catalog">
              <span>View All Advisory Offerings</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
          {/*  Asymmetric Bento Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/*  Large Hero Card (5 Cols Desktop)  */}
            <div
              className="lg:col-span-5 rounded-2xl service-card-hero p-8 flex flex-col justify-between"
              data-aos="fade-right" data-aos-delay="100">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl service-icon-hero flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">architecture</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Flagship Consultancy</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    Turnkey Industrial Consultancy &amp; Bankable DPRs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Complete techno-economic feasibility studies, statutory environmental EIA approvals, single-window
                    Nivesh Mitra clearances, and bank-empanelled Detailed Project Reports trusted by public sector lenders
                    across India.
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 pt-2 text-xs font-medium text-slate-700 p-0 m-0 list-none">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-brand-teal">check_circle</span>
                    <span>Statutory Clearances &amp; Single-Window Facilitation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-brand-teal">check_circle</span>
                    <span>Bank-Compliant TEV &amp; Financial Appraisal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-brand-teal">check_circle</span>
                    <span>Pollution Control &amp; Green EIA Compliance</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-brand-teal/15 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-teal">500+ Project Profiles Ready</span>
                <a className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-teal text-white text-xs font-semibold hover:bg-brand-teal-dark transition-colors"
                  href="#dpr-catalog">
                  <span>Browse Catalog</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
            {/*  4-Pack Cards Grid (7 Cols Desktop)  */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/*  Card 2: Financial Facilitation  */}
              <div
                className="rounded-2xl service-card-orange p-6 flex flex-col justify-between group"
                data-aos="fade-up" data-aos-delay="100">
                <div className="flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl service-icon-orange flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">MSME Scale-up &amp; Credit Facilitation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct debt linkage, interest subvention advisory, CGTMSE credit coverage, and loan structuring under CM
                    YUVA and state industrial schemes.
                  </p>
                </div>
                <a className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-orange group-hover:text-brand-orange-dark"
                  href="#initiatives">
                  <span>Financial Structuring</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              {/*  Card 3: Skill Training & TVET  */}
              <div
                className="rounded-2xl service-card-teal p-6 flex flex-col justify-between group"
                data-aos="fade-up" data-aos-delay="200">
                <div className="flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl service-icon-teal flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-xl">school</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Skill Training &amp; TVET Modernization</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Curriculum modernization for industrial ITIs, smart technical laboratories, sector skill councils, and
                    industry-sponsored apprenticeship programs.
                  </p>
                </div>
                <a className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-teal group-hover:text-brand-teal-dark"
                  href="#services">
                  <span>TVET Infrastructure</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              {/*  Card 4: Govt Implementation & M&E  */}
              <div
                className="rounded-2xl service-card-sky p-6 flex flex-col justify-between group"
                data-aos="fade-up" data-aos-delay="300">
                <div className="flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl service-icon-sky flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-xl">fact_check</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Government Implementation &amp; Audits</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Third-party evaluation, baseline socio-economic field research, CAG compliance tracking, and turnkey
                    project management units (PMUs).
                  </p>
                </div>
                <a className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700 group-hover:text-sky-800"
                  href="#cag">
                  <span>Third-Party Audits</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              {/*  Card 5: ODOP Marts & Clusters  */}
              <div
                className="rounded-2xl service-card-amber p-6 flex flex-col justify-between group"
                data-aos="fade-up" data-aos-delay="400">
                <div className="flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl service-icon-amber flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-xl">storefront</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">ODOP &amp; Retail Mart Development</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Common Facility Centers (CFCs), standardized export branding, GeM government portal onboarding, and
                    specialized state retail mart networks.
                  </p>
                </div>
                <a className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-800"
                  href="#initiatives">
                  <span>Cluster Transformation</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  8. FLAGSHIP INITIATIVES SHOWCASE (Editorial Tabbed Panel)  */}

      <section className="bg-slate-50/70 py-16 lg:py-20 border-b border-slate-100" id="initiatives">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-8">
          <div className="flex flex-col gap-2" data-aos="fade-up">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">State-Sponsored Catalysts</span>
              <span className="h-px w-8 bg-brand-orange"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Transforming Key Economic Sectors
            </h2>
          </div>
          {/*  Horizontal Tabs  */}
          <div
            className="flex flex-nowrap sm:flex-wrap overflow-x-auto no-scrollbar gap-2 p-1.5 bg-white rounded-xl w-full sm:w-fit border border-slate-200/80 shadow-2xs"
            data-aos="fade-up" data-aos-delay="100">
            <button
              className="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-brand-teal text-white shadow-sm border-0 shrink-0"
              id="tab-btn-ramp" onClick={() => { }}>
              World Bank RAMP
            </button>
            <button
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-brand-teal transition-all border-0 bg-transparent shrink-0"
              id="tab-btn-odop" onClick={() => { }}>
              ODOP Common Facility Centers
            </button>
            <button
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-brand-teal transition-all border-0 bg-transparent shrink-0"
              id="tab-btn-yuva" onClick={() => { }}>
              CM YUVA Abhiyan
            </button>
            <button
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-brand-teal transition-all border-0 bg-transparent shrink-0"
              id="tab-btn-youthadda" onClick={() => { }}>
              District Youth Adda Clinics
            </button>
          </div>
          {/*  Tab Content Card  */}
          <div className="bg-white rounded-2xl p-6 lg:p-10 border border-slate-200/80 shadow-card" data-aos="zoom-in"
            data-aos-delay="200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/*  Content Left  */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-teal-light text-brand-teal text-[11px] font-bold"
                    id="tab-badge">
                    RAMP Phase II (2024-2027)
                  </span>
                  <span className="text-slate-400 text-xs">• World Bank &amp; Ministry of MSME</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug" id="tab-heading">
                  Raising and Accelerating MSME Performance (RAMP)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed" id="tab-body">
                  UPICON is executing sovereign RAMP interventions across Uttar Pradesh: modernizing micro-enterprises
                  through green manufacturing audits, zero-defect quality accreditations (ZED), clean energy adoptions, and
                  rapid mediation clinics for delayed payments.
                </p>
                {/*  3 Stat Badges  */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-base sm:text-lg font-extrabold text-brand-teal" id="tab-stat1-val">₹5 Lakh</span>
                    <span className="block text-[11px] font-medium text-slate-500" id="tab-stat1-lbl">Green Tech Subsidy</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-base sm:text-lg font-extrabold text-brand-teal" id="tab-stat2-val">100% Grant</span>
                    <span className="block text-[11px] font-medium text-slate-500" id="tab-stat2-lbl">ZED Certification
                      Aid</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-base sm:text-lg font-extrabold text-brand-orange" id="tab-stat3-val">45 Days</span>
                    <span className="block text-[11px] font-medium text-slate-500" id="tab-stat3-lbl">Fast Dispute
                      Redressal</span>
                  </div>
                </div>
                {/*  Action Controls  */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-xs shadow-sm transition-all"
                    to="/contact" >
                    <span>Apply for Scheme Assistance</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                  <span className="text-xs text-slate-400">Zero processing fee for registered MSMEs</span>
                </div>
              </div>
              {/*  Craft/Artisan Right Photography  */}
              <div className="lg:col-span-5 flex flex-col gap-2">
                <div className="rounded-xl overflow-hidden shadow-subtle border border-slate-200/80 bg-slate-100">
                  <img alt="World Bank RAMP MSME Enterprise Audit in Uttar Pradesh"
                    className="w-full h-[320px] object-cover transition-all duration-300" src="assets/images/msme-audit.jpg"
                    id="tab-image" />
                </div>
                <span className="text-[11px] text-slate-500 italic text-right" id="tab-image-caption">
                  RAMP Green Technology &amp; Quality Certification Facility — UPICON
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  9. GRASSROOTS IMPACT: "UP KE KARIGAR" (Case Study)         */}

      <section className="bg-white py-16 lg:py-20 border-b border-slate-100" id="projects">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2" data-aos="fade-up">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Ground Realities &amp; Impact</span>
              <span className="h-px w-8 bg-brand-teal"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              UP Ke Karigar: Empowering Local Enterprise
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Witness how traditional craft clusters transform into commercially viable, export-grade enterprises through
              UPICON’s end-to-end technical incubation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/*  Featured Large Narrative Card (8 Cols)  */}
            <div
              className="lg:col-span-8 rounded-2xl p-8 story-card-hero flex flex-col justify-between"
              data-aos="fade-right" data-aos-delay="100">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Kushinagar Cluster • ODOP Spotlight
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full bg-white text-brand-teal text-[11px] font-bold border border-brand-teal/20">
                    Eco-Friendly Fiber
                  </span>
                </div>
                <blockquote className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  “Before UPICON set up our Common Facility Center, banana tree stems were discarded as waste after harvest.
                  Today, over 400 women in our village weave export-grade lifestyle products with direct bank credit
                  linkages.”
                </blockquote>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  UPICON structured the cluster DPR, supervised the installation of automated fiber extraction machinery,
                  trained 420 women artisans under state skilling programs, and established commercial marketing linkages
                  with domestic retail chains and eco-exporters in Western Europe.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900">420+</span>
                    <span className="text-[11px] text-slate-500 font-medium">Artisans Employed</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-extrabold text-brand-teal">₹1.8 Cr</span>
                    <span className="text-[11px] text-slate-500 font-medium">Annual Revenue</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-extrabold text-brand-orange">100%</span>
                    <span className="text-[11px] text-slate-500 font-medium">Biodegradable</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-teal/15 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Shanti Devi • Kushinagar Cluster Lead</span>
                <Link className="inline-flex items-center gap-1 text-xs font-bold text-brand-teal hover:text-brand-orange transition-colors"
                  to="/contact" >
                  <span>Read Full Case Study</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/*  Supporting Stories (4 Cols)  */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div
                className="p-6 rounded-2xl story-card-kanpur flex flex-col justify-between flex-1 group"
                data-aos="fade-left" data-aos-delay="200">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-brand-orange uppercase">Kanpur Leather Cluster</span>
                  <h4 className="text-sm font-bold text-slate-900">Zero Liquid Discharge &amp; Modern Cutting</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Assisted 64 footwear tanneries to adopt automated laser die-cutting and solar effluent treatment with
                    35% capital subsidy under RAMP.
                  </p>
                </div>
                <div
                  className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900">
                  <span className="text-brand-teal">Export Readiness: +48%</span>
                  <span className="material-symbols-outlined text-brand-teal text-base">trending_up</span>
                </div>
              </div>
              <div
                className="p-6 rounded-2xl story-card-varanasi flex flex-col justify-between flex-1 group"
                data-aos="fade-left" data-aos-delay="300">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-brand-teal uppercase">Varanasi Handloom Cluster</span>
                  <h4 className="text-sm font-bold text-slate-900">Digital Jacquard Card Punching</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Modernized 120 traditional silk handloom master artisans with CAD-based design software and direct GI
                    authentication tags.
                  </p>
                </div>
                <div
                  className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900">
                  <span className="text-brand-orange">Turnaround: 2 Days</span>
                  <span className="material-symbols-outlined text-brand-orange text-base">speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  10. 75 DISTRICT PRESENCE & YOUTH ADDA LOCATOR               */}

      <section className="bg-slate-50/70 py-16 lg:py-20 border-b border-slate-100" id="district-network">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2" data-aos="fade-up">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Statewide Institutional
                Network</span>
              <span className="h-px w-8 bg-brand-orange"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Presence Across All 75 Districts of Uttar Pradesh
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Walk into your nearest UPICON Youth Adda MSME Clinic for one-on-one consultation with certified industrial
              advisors, DPR reviews, and direct scheme filings.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/*  Left: Flat Minimal Schematic UP Map  */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle flex flex-col gap-4"
              data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">District Facilitation Hubs</span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-teal-light text-brand-teal text-[11px] font-bold">
                  75 Units Active
                </span>
              </div>
              {/*  Stylized Schematic Vector Graphic  */}
              <div
                className="w-full h-64 bg-slate-50 rounded-xl relative overflow-hidden border border-slate-100 flex items-center justify-center p-4">
                <svg className="w-full h-full text-brand-teal/25" fill="none" viewBox="0 0 400 240"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 80 Q 80 40 160 50 T 280 40 T 360 90 Q 380 150 320 200 T 160 210 T 60 170 Z"
                    fill="currentColor" fillOpacity="0.12" stroke="#138D9E" strokeWidth="1.5"></path>
                  {/*  Map Points  */}
                  <circle cx="175" cy="115" fill="#138D9E" r="6"></circle>
                  <text fill="#0F172A" fontSize="11" fontWeight="700" x="185" y="119">Lucknow (HQ)</text>
                  <circle cx="145" cy="135" fill="#E06714" r="5"></circle>
                  <text fill="#C2560E" fontSize="10" fontWeight="600" x="105" y="145">Kanpur</text>
                  <circle cx="280" cy="115" fill="#138D9E" r="5"></circle>
                  <text fill="#0E7490" fontSize="10" fontWeight="600" x="290" y="119">Gorakhpur</text>
                  <circle cx="260" cy="165" fill="#E06714" r="5"></circle>
                  <text fill="#C2560E" fontSize="10" fontWeight="600" x="270" y="170">Varanasi</text>
                  <circle cx="75" cy="85" fill="#138D9E" r="5"></circle>
                  <text fill="#0E7490" fontSize="10" fontWeight="600" x="45" y="80">Meerut</text>
                  <circle cx="65" cy="110" fill="#138D9E" r="5"></circle>
                  <text fill="#0E7490" fontSize="10" fontWeight="600" x="30" y="125">Noida</text>
                  <circle cx="190" cy="170" fill="#138D9E" r="5"></circle>
                  <text fill="#0E7490" fontSize="10" fontWeight="600" x="200" y="175">Prayagraj</text>
                </svg>
                <div className="absolute bottom-2 left-3 text-[10px] text-slate-500 font-medium">
                  Regional Zones: Western UP • Central • Purvanchal • Bundelkhand
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Operating hours: 9:30 AM – 6:00 PM</span>
                <span className="font-bold text-brand-teal">Helpline: 1800-180-2026</span>
              </div>
            </div>
            {/*  Right: Interactive District Selector and Details Panel  */}
            <div
              className="lg:col-span-7 bg-white p-6 lg:p-8 rounded-2xl border border-slate-200/80 shadow-subtle flex flex-col gap-5"
              data-aos="fade-left" data-aos-delay="200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <label className="text-sm font-bold text-slate-900" htmlFor="district-selector">
                  Select Your District Youth Adda:
                </label>
                <select
                  className="bg-slate-50 text-slate-900 text-xs font-semibold rounded-lg p-2.5 border border-slate-200 focus:ring-2 focus:ring-brand-teal cursor-pointer"
                  id="district-selector" onChange={(e) => { }}>
                  <option value="lucknow">Lucknow (Central HQ)</option>
                  <option value="kanpur">Kanpur Nagar</option>
                  <option value="varanasi">Varanasi</option>
                  <option value="gorakhpur">Gorakhpur</option>
                  <option value="meerut">Meerut</option>
                  <option value="prayagraj">Prayagraj</option>
                  <option value="kushinagar">Kushinagar</option>
                  <option value="noida">Gautam Buddha Nagar (Noida)</option>
                </select>
              </div>
              {/*  Dynamic Hub Details Card  */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-slate-900" id="card-hub-name">Lucknow District Youth Adda</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-orange-light text-brand-orange text-[10px] font-bold">
                    State Central Clinic
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-slate-500 font-medium">Physical Facility Address:</span>
                    <span className="text-slate-800 font-semibold leading-relaxed" id="card-hub-address">
                      UPICON Bhawan, 5th Floor, Vibhuti Khand, Gomti Nagar, Lucknow - 226010
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-slate-500 font-medium">Nodal Advisory Officer:</span>
                    <span className="text-slate-800 font-semibold" id="card-hub-officer">
                      Er. Rakesh K. Srivastava (Senior Industrial Advisor)
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-slate-500 font-medium">Direct Desk Email:</span>
                    <span className="text-slate-800 font-semibold" id="card-hub-email">
                      lucknow.youthadda@upicon.in
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-slate-500 font-medium">Direct Hotline:</span>
                    <span className="text-slate-800 font-semibold" id="card-hub-phone">
                      +91 (0522) 272-0850 / 0851
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-3">
                  <button
                    className="px-4 py-2 rounded-lg bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-xs shadow-2xs transition-colors border-0"
                    onClick={() => { }}>
                    Book Walk-in Consultation
                  </button>
                  <Link className="text-xs font-semibold text-brand-orange hover:underline" to="/contact" >
                    Download All 75 District Directory (PDF)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  11. EXPLORE BANKABLE PROJECT REPORTS (DPR CATALOG) - HIDDEN */}

      <section className="hidden bg-white py-16 lg:py-20 border-b border-slate-100" id="dpr-catalog">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" data-aos="fade-up">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Bank-Empanelled Catalogs</span>
                <span className="h-px w-8 bg-brand-teal"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                Explore Bankable Project Reports (DPRs)
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl">
                Pre-vetted Detailed Project Reports prepared per SIDBI, PMEGP, and national banking guidelines for instant
                credit appraisal.
              </p>
            </div>
            <Link className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-dark transition-colors shrink-0"
              to="/contact" >
              <span>Search All 500+ DPRs</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
          {/*  Sector Filter Pills  */}
          <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto no-scrollbar gap-2 pb-1" data-aos="fade-up"
            data-aos-delay="100">
            <button
              className="px-4 py-1.5 rounded-full bg-brand-teal text-white text-xs font-bold shadow-2xs border-0 shrink-0">
              All Sectors (500+)
            </button>
            <button
              className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors border-0 shrink-0">
              Agri &amp; Food Processing
            </button>
            <button
              className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors border-0 shrink-0">
              Textiles &amp; Handloom
            </button>
            <button
              className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors border-0 shrink-0">
              Green Tech &amp; Renewables
            </button>
            <button
              className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors border-0 shrink-0">
              Engineering &amp; Fabrication
            </button>
          </div>
          {/*  DPR Cards Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/*  DPR Card 1  */}
            <div
              className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Food Processing</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                  Automatic Dal &amp; Grain Processing Mill
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Complete unit with sorting, grading, polishing, and automated packaging lines.
                </p>
                <div className="flex flex-col gap-1.5 pt-3 mt-1 border-t border-slate-100 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Project Capital:</span>
                    <span className="font-bold text-slate-900">₹24.50 Lakh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Break-Even ROI:</span>
                    <span className="font-bold text-slate-900">14 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Subsidies:</span>
                    <span className="font-bold text-brand-teal">Up to 35% PMEGP</span>
                  </div>
                </div>
              </div>
              <button
                className="mt-4 w-full py-2 rounded-lg bg-slate-50 hover:bg-brand-teal hover:text-white text-slate-700 font-bold text-xs border border-slate-200 transition-all flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Download DPR Synopsis</span>
              </button>
            </div>
            {/*  DPR Card 2  */}
            <div
              className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">ODOP Crafts</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                  Banana Fiber Extraction &amp; Craft Yarn
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Decortication setup, fiber treatment, weaving handloom units, and handicraft shaping.
                </p>
                <div className="flex flex-col gap-1.5 pt-3 mt-1 border-t border-slate-100 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Project Capital:</span>
                    <span className="font-bold text-slate-900">₹7.20 Lakh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Break-Even ROI:</span>
                    <span className="font-bold text-slate-900">9 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Subsidies:</span>
                    <span className="font-bold text-brand-teal">ODOP Margin Money</span>
                  </div>
                </div>
              </div>
              <button
                className="mt-4 w-full py-2 rounded-lg bg-slate-50 hover:bg-brand-teal hover:text-white text-slate-700 font-bold text-xs border border-slate-200 transition-all flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Download DPR Synopsis</span>
              </button>
            </div>
            {/*  DPR Card 3  */}
            <div
              className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="300">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Renewable Energy</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                  Biomass Briquetting &amp; Pelleting Unit
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Utilizing crop residue and parali waste for eco-briquettes supplied to industrial boilers.
                </p>
                <div className="flex flex-col gap-1.5 pt-3 mt-1 border-t border-slate-100 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Project Capital:</span>
                    <span className="font-bold text-slate-900">₹45.00 Lakh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Break-Even ROI:</span>
                    <span className="font-bold text-slate-900">18 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Subsidies:</span>
                    <span className="font-bold text-brand-teal">Bio-Energy Policy UP</span>
                  </div>
                </div>
              </div>
              <button
                className="mt-4 w-full py-2 rounded-lg bg-slate-50 hover:bg-brand-teal hover:text-white text-slate-700 font-bold text-xs border border-slate-200 transition-all flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Download DPR Synopsis</span>
              </button>
            </div>
            {/*  DPR Card 4  */}
            <div
              className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="400">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Automotive Tech</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                  EV 2W/3W Battery Pack Assembly
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Semi-automated laser welding, BMS integration, testing lab, and safety validation.
                </p>
                <div className="flex flex-col gap-1.5 pt-3 mt-1 border-t border-slate-100 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Project Capital:</span>
                    <span className="font-bold text-slate-900">₹52.00 Lakh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Break-Even ROI:</span>
                    <span className="font-bold text-slate-900">12 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Subsidies:</span>
                    <span className="font-bold text-brand-teal">UP EV Policy 2022</span>
                  </div>
                </div>
              </div>
              <button
                className="mt-4 w-full py-2 rounded-lg bg-slate-50 hover:bg-brand-teal hover:text-white text-slate-700 font-bold text-xs border border-slate-200 transition-all flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Download DPR Synopsis</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/*  12. KNOWLEDGE HUB, NOTICES & CAG AUDIT DISCLOSURES         */}

      <section className="notices-section-bg py-16 lg:py-20 border-b border-slate-100" id="notices">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4" data-aos="fade-up">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Latest Updates &amp;
                  Research</span>
                <span className="h-px w-8 bg-brand-teal"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                Latest News &amp; Institutional Notices
              </h2>
            </div>
            {/*  Custom Swiper Navigation Controls  */}
            <div className="flex items-center gap-2.5">
              <div className="notices-swiper-prev">
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </div>
              <div className="notices-swiper-next">
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </div>
            </div>
          </div>

          {/*  Swiper Slider Container  */}
          <div className="swiper notices-swiper">
            <div className="swiper-wrapper">
              {/*  Slide 1: Sovereign MoU Press Release  */}
              <div className="swiper-slide">
                <div
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card transition-all overflow-hidden flex flex-col justify-between h-full group">
                  <div className="relative overflow-hidden h-48 w-full bg-slate-100 shrink-0">
                    <img alt="UPICON and SIDBI MoU Signing Ceremony for CM YUVA scheme"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="assets/images/hero-consultant.jpg" />
                    <span
                      className="absolute top-3 left-3 bg-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Latest News
                    </span>
                  </div>
                  <div className="p-5 flex flex-col gap-2.5 flex-1 justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] font-semibold text-slate-400">October 2026 • Executive Partnership</span>
                      <h4
                        className="text-base font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                        UPICON Signs Sovereign MoU with SIDBI for Micro-Enterprise Credit under CM YUVA
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Strategic institutional partnership established to accelerate interest-free capital financing and
                        bankable DPR appraisals across all 75 districts.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Press Release</span>
                      <Link className="font-bold text-brand-teal group-hover:text-brand-orange transition-colors flex items-center gap-1"
                        to="/contact" >
                        <span>Read Full Story</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Slide 2: Industrial Roadmap Whitepaper  */}
              <div className="swiper-slide">
                <div
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card transition-all overflow-hidden flex flex-col justify-between h-full group">
                  <div className="relative overflow-hidden h-48 w-full bg-slate-100 shrink-0">
                    <img alt="Uttar Pradesh Industrial Roadmap Report"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="assets/images/msme-audit.jpg" />
                    <span
                      className="absolute top-3 left-3 bg-brand-teal text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Whitepaper
                    </span>
                  </div>
                  <div className="p-5 flex flex-col gap-2.5 flex-1 justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] font-semibold text-slate-400">PDF • 4.2 MB • Research Synthesis</span>
                      <h4
                        className="text-base font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                        Uttar Pradesh Industrial Roadmap: Catalyzing the $1 Trillion Economy
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        An authoritative research report outlining cluster acceleration, expressway logistics nodes, and
                        defense corridor supply-chain linkages.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Policy Report</span>
                      <Link className="font-bold text-brand-teal group-hover:text-brand-orange transition-colors flex items-center gap-1"
                        to="/contact" >
                        <span>Download Report</span>
                        <span className="material-symbols-outlined text-sm">file_download</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Slide 3: ODOP Artisan Success  */}
              <div className="swiper-slide">
                <div
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card transition-all overflow-hidden flex flex-col justify-between h-full group">
                  <div className="relative overflow-hidden h-48 w-full bg-slate-100 shrink-0">
                    <img alt="ODOP Craft Artisan Enterprise Facilitation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="assets/images/banana-fiber-artisan.jpg" />
                    <span
                      className="absolute top-3 left-3 bg-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      ODOP Spotlight
                    </span>
                  </div>
                  <div className="p-5 flex flex-col gap-2.5 flex-1 justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] font-semibold text-slate-400">Cluster Success • 38+ Marts</span>
                      <h4
                        className="text-base font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                        Empowering 50,000+ Grassroots Artisans via Common Facility Centers
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        UPICON establishes state-of-the-art export packaging, digital GeM portal onboarding, and direct
                        retail mart linkages for ODOP artisans.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Field Feature</span>
                      <a className="font-bold text-brand-teal group-hover:text-brand-orange transition-colors flex items-center gap-1"
                        href="#initiatives">
                        <span>View Cluster Story</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Slide 4: Public Notices & CAG Audit  */}
              <div className="swiper-slide">
                <div
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card transition-all overflow-hidden flex flex-col justify-between h-full group"
                  id="cag">
                  <div className="relative overflow-hidden h-48 w-full bg-slate-100 shrink-0">
                    <img alt="Public Notices and Audited CAG Disclosures"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="assets/images/msme-audit.jpg" />
                    <span
                      className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Public Notice
                    </span>
                  </div>
                  <div className="p-5 flex flex-col gap-2.5 flex-1 justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] font-semibold text-slate-400">Updated Yesterday • CAG Audited</span>
                      <h4
                        className="text-base font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                        Public Tenders, Technical RFPs &amp; Statutory Audited Disclosures 2026
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Official notification for empanelment of technical audit agencies, smart classroom TVET
                        infrastructure, and audited balance sheets.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Compliance</span>
                      <a className="font-bold text-brand-teal group-hover:text-brand-orange transition-colors flex items-center gap-1"
                        href="#notices">
                        <span>View All Notices</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Slide 5: RAMP Phase II Milestone  */}
              <div className="swiper-slide">
                <div
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card transition-all overflow-hidden flex flex-col justify-between h-full group">
                  <div className="relative overflow-hidden h-48 w-full bg-slate-100 shrink-0">
                    <img alt="World Bank RAMP Audit Facility"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="assets/images/hero-consultant.jpg" />
                    <span
                      className="absolute top-3 left-3 bg-brand-teal text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      RAMP Milestone
                    </span>
                  </div>
                  <div className="p-5 flex flex-col gap-2.5 flex-1 justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] font-semibold text-slate-400">Statewide Audit • 75 Districts</span>
                      <h4
                        className="text-base font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                        1,200+ Food &amp; Agro Units Complete Quality Audit Under RAMP Phase II
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Statewide technical verification and ZED certification completed across 75 districts under World
                        Bank RAMP Phase II.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Impact Brief</span>
                      <Link className="font-bold text-brand-teal group-hover:text-brand-orange transition-colors flex items-center gap-1"
                        to="/contact" >
                        <span>View Impact Report</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/*  Pagination Dots  */}
            <div className="swiper-pagination notices-swiper-pagination"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
