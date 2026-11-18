import React from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

export default function CmYuva() {
  useInteractiveEffects();

  return (
    <main className="min-h-screen">
      <section className="py-16 lg:py-24 text-white relative overflow-hidden bg-hero-teal-gradient">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-radial-dots"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-orange-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-teal-glow"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/*  Hero Left Column  */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5" data-aos="fade-right">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Link className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white text-white-solid"
                  to="/" >
                  <span className="material-symbols-outlined text-sm">home</span> Home
                </Link>
                <span className="text-slate-400-solid">/</span>
                <span className="font-bold text-brand-orange-solid">CM YUVA Abhiyan</span>
              </nav>

              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border badge-flagship-pill">
                <span className="w-2 h-2 rounded-full animate-pulse bg-amber-500-solid"></span>
                <span>Government of Uttar Pradesh Flagship Initiative</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white-bold-800">
                Mukhyamantri YUVA Udyami Vikas Abhiyan
              </h1>

              <p className="text-sm sm:text-base max-w-2xl leading-relaxed text-slate-300-imp">
                Empowering youth across Uttar Pradesh through NCVET entrepreneurship training, collateral-free financial
                support up to ₹5-10 Lakhs, and structured franchise business opportunities.
              </p>

              <div className="flex flex-wrap gap-4 pt-3">
                <a href="https://training.upicon.in" target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all transform hover:-translate-y-0.5 btn-brand-orange">
                  <span>Register for EDP Course</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <a href="#calculator"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border transition-all btn-glass-white">
                  <span>Calculate Loan Benefits</span>
                </a>
              </div>
            </div>

            {/*  Hero Right Info Card  */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-6 sm:p-8 border shadow-2xl flex flex-col gap-5 card-hero-glass" data-aos="fade-left"
                data-aos-delay="200">
                <div className="flex items-center justify-between border-b pb-4 border-white-15">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">Quick Scheme Facts</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase badge-teal-glass">UPICON
                    Executed</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 icon-box-amber">
                      <span className="material-symbols-outlined text-lg">payments</span>
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-slate-300-solid">0% Interest Financial Aid</h3>
                      <p className="text-sm font-bold text-white-solid">Up to ₹5 Lakhs (Phase 1) & ₹10 Lakhs (Phase 2)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 icon-box-emerald">
                      <span className="material-symbols-outlined text-lg">workspace_premium</span>
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-slate-300-solid">NCVET Approved Certification</h3>
                      <p className="text-sm font-bold text-white-solid">5-Day Online EDP Course via UPICON</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 icon-box-sky">
                      <span className="material-symbols-outlined text-lg">storefront</span>
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-slate-300-solid">Franchise Opportunities</h3>
                      <p className="text-sm font-bold text-white-solid">Connect with 30+ Reputed Franchise Brands</p>
                    </div>
                  </div>
                </div>

                <a href="https://whatsapp.com" target="_blank"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 mt-1 btn-whatsapp-green">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Join Official WhatsApp Channel</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  2. CM YUVA ENTREPRENEURSHIP TRAINING PROGRAM (SS 1 MATCH)  */}

      <section className="py-12 lg:py-16 bg-white border-b border-slate-100" id="overview">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-8">

          {/*  Section Header with WhatsApp CTA  */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" data-aos="fade-up">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal-solid">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-teal-solid"></span>
                <span>Institutional EDP Training</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-extrabold">
                CM Yuva Entrepreneurship Training Program
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base leading-relaxed max-w-5xl text-slate-600-imp">
            CM YUVA Entrepreneurship Training Program, approved by NCVET (National Council for Vocational Education and
            Training), is the first step towards Mukhyamantri YUVA Udyami Vikas Abhiyan, conducted by UPICON (U.P.
            Industrial Consultants Limited). Participants must complete a 5-day online training and qualify for a 90-minute
            online assessment. Upon successful completion, they receive a certification that can help them secure a bank
            loan of up to ₹5 lakhs to start their own business or entrepreneurial venture.
          </p>

          {/*  1:1 RECREATION OF THE USER SCREENSHOT CONTAINER  */}
          <div className="flex flex-col gap-6 mt-2">

            {/*  6 Feature Cards (Left) + Video Card (Right) Grid  */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

              {/*  Left Grid: 6 Feature Cards (2 Cols x 3 Rows)  */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-right" data-aos-delay="100">

                {/*  Card 1: 5-Day Online EDP  */}
                <div
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-blue">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-blue">
                      <span className="material-symbols-outlined text-xl">laptop_mac</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">5-Day Online EDP</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">5-day online
                        Entrepreneurial Development Program training.</p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </div>
                </div>

                {/*  Card 2: 30-Hour Content  */}
                <div
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-teal">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-teal">
                      <span className="material-symbols-outlined text-xl">assignment</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">30-Hour Content</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">Structured total learning
                        content.</p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </div>
                </div>

                {/*  Card 3: ₹5 Lakh Bank Loan  */}
                <div
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-purple">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-purple">
                      <span className="material-symbols-outlined text-xl">savings</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">₹5 Lakh Bank Loan</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">Eligible to apply for a
                        bank loan up to ₹5,00,000.</p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </div>
                </div>

                {/*  Card 4: NCVET Certification  */}
                <div
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-amber">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-amber">
                      <span className="material-symbols-outlined text-xl">workspace_premium</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">NCVET Certification</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">NCVET approved
                        certificate upon completion.</p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </div>
                </div>

                {/*  Card 5: 90-Min Assessment  */}
                <div
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-rose">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-rose">
                      <span className="material-symbols-outlined text-xl">account_balance</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">90-Min Assessment</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">90-minute online
                        assessment.</p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </div>
                </div>

                {/*  Card 6: Ideal for UP Youth  */}
                <div
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-sky">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-sky">
                      <span className="material-symbols-outlined text-xl">groups</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">Ideal for UP Youth</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">Ideal for self-employment
                        & first-time entrepreneurs in Uttar Pradesh.</p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </div>
                </div>

              </div>

              {/*  Right Video Card Showcase (1:1 SS Match)  */}
              <div className="lg:col-span-5 h-full flex flex-col">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-xl group border border-slate-200 bg-slate-900 h-full min-h-[280px] flex items-center justify-center"
                  data-aos="fade-left" data-aos-delay="200">
                  <img src="assets/images/cmyuva_training_thumb.jpg" alt="CM YUVA Training Video Cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent flex flex-col justify-between p-5">
                    {/*  Top Badges  */}
                    <div className="flex items-center justify-between">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-brand-orange-solid">OFFICIAL
                        VIDEO GUIDE</span>
                      <div
                        className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span>CM YUVA</span>
                      </div>
                    </div>

                    {/*  Center Glowing Orange Play Button  */}
                    <a href="https://training.upicon.in" target="_blank"
                      className="self-center w-16 h-16 rounded-full text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all play-btn-orange">
                      <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                    </a>

                    {/*  Bottom Title & Dots  */}
                    <div className="flex flex-col gap-1">
                      <h5 className="text-base sm:text-lg font-black text-white leading-snug">CM YUVA EDP Training Walkthrough
                      </h5>
                      <p className="text-xs text-slate-300 font-semibold flex items-center gap-2">
                        <span>Learn</span> • <span>Build</span> • <span>Grow</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      <section className="roadmap-section bg-slate-50/70 py-16 lg:py-20 border-b border-slate-100" data-aos="fade-up">
        <div className="roadmap-container max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-8">

          {/*  Header  */}
          <div className="">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">VISUAL ROADMAP</span>
              <span className="h-px w-8 bg-brand-orange"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Step-by-Step
              <span> Registration &amp; Certification Flow</span>
            </h2>

          </div>

          {/*  Roadmap  */}
          <div className="roadmap">

            {/*  Step 1  */}
            <div className="roadmap-item">
              <div className="roadmap-card step-blue" data-aos="fade-up" data-aos-delay="100">

                <div className="step-number">01</div>

                <div className="step-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="14" rx="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="M6 15c1-2 5-2 6 0"></path>
                    <path d="M16 11l4 4"></path>
                    <path d="M17 15h3v-3"></path>
                  </svg>
                </div>

                <h3>Visit Portal</h3>

                <p>
                  Visit
                  <a href="https://training.upicon.in/" target="_blank">
                    training.upicon.in ↗
                  </a>
                  <br />
                  &amp; click Register
                </p>

                <div className="step-action">
                  <span>↗</span>
                  Portal Access
                </div>
              </div>


            </div>


            {/*  Step 2  */}
            <div className="roadmap-item">
              <div className="roadmap-card step-green" data-aos="fade-up" data-aos-delay="200">

                <div className="step-number">02</div>

                <div className="step-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="4" y="3" width="16" height="18" rx="2"></rect>
                    <path d="M8 8h8"></path>
                    <path d="M8 12h5"></path>
                    <path d="M8 16h3"></path>
                    <path d="M15 15l4 4"></path>
                    <path d="M18 14l2 2-4 4-2-2z"></path>
                  </svg>
                </div>

                <h3>Fetch Details</h3>

                <p>
                  Enter CM YUVA
                  application ID &amp; fetch info
                </p>

                <div className="step-action">
                  <span>▤</span>
                  Application ID
                </div>
              </div>


            </div>


            {/*  Step 3  */}
            <div className="roadmap-item">
              <div className="roadmap-card step-purple" data-aos="fade-up" data-aos-delay="300">

                <div className="step-number">03</div>

                <div className="step-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 3h9l4 4v14H6z"></path>
                    <path d="M15 3v5h5"></path>
                    <path d="M9 13h6"></path>
                    <path d="M9 17h4"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <path d="M16 17l1 1 2-2"></path>
                  </svg>
                </div>

                <h3>Complete Reg.</h3>

                <p>
                  Fill in registration
                  form &amp; submit
                </p>

                <div className="step-action">
                  <span>▣</span>
                  Form Submission
                </div>
              </div>


            </div>


            {/*  Step 4  */}
            <div className="roadmap-item">
              <div className="roadmap-card step-orange" data-aos="fade-up" data-aos-delay="400">

                <div className="step-number">04</div>

                <div className="step-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="10" cy="8" r="4"></circle>
                    <path d="M3 21c0-4 3-6 7-6s7 2 7 6"></path>
                    <rect x="16" y="13" width="5" height="7" rx="1"></rect>
                    <path d="M17.5 13v-1a1.5 1.5 0 013 0v1"></path>
                  </svg>
                </div>

                <h3>Login &amp; Pay</h3>

                <p>
                  Log in &amp; complete
                  course enrollment
                  payment
                </p>

                <div className="step-action">
                  <span>▣</span>
                  Payment
                </div>
              </div>


            </div>


            {/*  Step 5  */}
            <div className="roadmap-item">
              <div className="roadmap-card step-cyan" data-aos="fade-up" data-aos-delay="500">

                <div className="step-number">05</div>

                <div className="step-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="14" rx="2"></rect>
                    <path d="M8 21h8"></path>
                    <path d="M12 18v3"></path>
                    <path d="M8 8h8"></path>
                    <path d="M10 11h4"></path>
                  </svg>
                </div>

                <h3>5-Day Training</h3>

                <p>
                  Complete 30-hrs training
                  content &amp; assessment
                </p>

                <div className="step-action">
                  <span>◇</span>
                  Online Learning
                </div>
              </div>

            </div>


            {/*  Step 6  */}
            <div className="roadmap-item">
              <div className="roadmap-card step-pink" data-aos="fade-up" data-aos-delay="600">

                <div className="step-number">06</div>

                <div className="step-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4h16v12H4z"></path>
                    <path d="M7 8h10"></path>
                    <path d="M7 11h6"></path>
                    <circle cx="17" cy="17" r="4"></circle>
                    <path d="M15.5 17l1 1 2-2"></path>
                  </svg>
                </div>

                <h3>NCVET Certificate</h3>

                <p>
                  Certificate &amp; Loan
                  Get NCVET certificate &amp;
                  apply for ₹5 Lakh loan
                </p>

                <div className="step-action">
                  <span>♙</span>
                  Certification &amp; Loan
                </div>
              </div>
            </div>

          </div>

          {/*  Bottom Timeline  */}
          <div className="timeline">

            <div className="timeline-line"></div>

            <span className="timeline-dot blue"></span>
            <span className="timeline-dot green"></span>
            <span className="timeline-dot purple"></span>
            <span className="timeline-dot orange"></span>
            <span className="timeline-dot cyan"></span>
            <span className="timeline-dot pink"></span>

          </div>

        </div>
      </section>


      {/*  4. CM YUVA UDYAMI (FRANCHISE) ABHIYAN (SS 3 ENHANCED)      */}

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">CM YUVA Udyami (Franchise)
                Abhiyan</span>
              <span className="h-px w-8 bg-brand-teal"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Empowering Youth, Building Businesses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Your Gateway to Entrepreneurship
            </p>
          </div>
          <div className="">
            <p className="text-sm sm:text-base leading-relaxed max-w-5xl mb-8 text-slate-600-imp">
              Entrepreneurship is one of the key drivers of economic growth, and CM YUVA Udyami (Franchise) Abhiyan is
              committed to promoting a new wave of business leaders in Uttar Pradesh. This initiative, led by UPICON in
              collaboration with GAME & Franchise India, provides a structured platform for the youth to start their own
              businesses through established franchise models.
            </p>

            <h4 className="text-base sm:text-lg font-bold mb-4 text-navy-bold">
              Being a part of this event, you will get a chance to:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold icon-bg-amber">
                  <span className="material-symbols-outlined">storefront</span>
                </div>
                <h5 className="text-sm font-bold text-navy-solid">30+ Franchise Brands</h5>
                <p className="text-xs text-slate-500">Explore 30+ trusted franchise opportunities across sectors.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold icon-bg-light-teal">
                  <span className="material-symbols-outlined">savings</span>
                </div>
                <h5 className="text-sm font-bold text-navy-solid">₹5-10 Lakh Loan</h5>
                <p className="text-xs text-slate-500">Avail ₹5-10 lakh collateral-free, interest-free loan under CM YUVA.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold icon-bg-blue">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h5 className="text-sm font-bold text-navy-solid">Expert Mentorship</h5>
                <p className="text-xs text-slate-500">Gain essential mentorship and guidance on business management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  5. WHY THIS INITIATIVE?  */}

      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-light-teal">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="initiative-layout grid lg:grid-cols-12 overflow-hidden rounded-[2rem] shadow-xl bg-white-solid"
            data-aos="fade-up">
            {/*  Editorial intro panel  */}
            <div
              className="lg:col-span-4 p-7 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden bg-purpose-teal-gradient"
              data-aos="fade-right">
              <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full border border-white/10"></div>
              <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full border border-white/10"></div>
              <div className="relative z-10">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-widest badge-purpose-amber">
                  <span className="material-symbols-outlined text-base">lightbulb</span> The purpose
                </span>
                <h3 className="mt-7 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white-imp">
                  Why this <span className="text-amber-300-solid">initiative?</span>
                </h3>
                <p className="mt-5 text-base leading-relaxed text-teal-light-imp">
                  The CM YUVA Udyami (Franchise) Abhiyan turns ambition into enterprise with the right support at every
                  step.
                </p>
              </div>
              <div className="relative z-10 mt-10 pt-6 border-t border-white-20">
                <p className="text-sm font-semibold text-teal-soft-imp">A pathway to</p>
                <p className="mt-1 text-xl font-bold text-white-imp">Independent youth entrepreneurship</p>
              </div>
            </div>

            {/*  Four benefits as a numbered pathway  */}
            <div className="initiative-pillars lg:col-span-8 p-6 sm:p-10 lg:p-12" data-aos="fade-left" data-aos-delay="200">
              <div className="flex items-end justify-between gap-4 mb-7 sm:mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-teal-600-solid">Four pillars of support
                  </p>
                  <h4 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-navy-imp">Built for
                    your next step</h4>
                </div>
                <span className="hidden sm:block text-sm font-semibold text-slate-400-solid">01 — 04</span>
              </div>
              <div className="initiative-benefit-grid grid sm:grid-cols-2">
                <article className="py-6 border-t flex gap-4 border-slate-200-solid">
                  <span className="text-sm font-extrabold pt-1 text-teal-600-solid">01</span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-xl text-teal-600-solid">rocket_launch</span>
                      <h5 className="font-bold text-navy-imp">Guided Franchise Support</h5>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500-imp">A well-defined franchise
                      model with guidance to help young entrepreneurs get started.</p>
                  </div>
                </article>
                <article className="py-6 border-t flex gap-4 border-slate-200-solid">
                  <span className="text-sm font-extrabold pt-1 text-amber-600-solid">02</span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-xl text-amber-600-solid">credit_score</span>
                      <h5 className="font-bold text-navy-imp">100% Interest-Free Loans</h5>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500-imp">Collateral-free financial
                      support makes business ownership more accessible.</p>
                  </div>
                </article>
                <article className="py-6 border-t flex gap-4 border-slate-200-solid">
                  <span className="text-sm font-extrabold pt-1 text-blue-600-solid">03</span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-xl text-blue-600-solid">hub</span>
                      <h5 className="font-bold text-navy-imp">30+ Brand Network</h5>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500-imp">Connect with established
                      franchise brands to reduce risk and unlock growth.</p>
                  </div>
                </article>
                <article className="py-6 border-t flex gap-4 border-slate-200-solid">
                  <span className="text-sm font-extrabold pt-1 text-emerald-600-solid">04</span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-xl text-emerald-600-solid">psychology</span>
                      <h5 className="font-bold text-navy-imp">Skills into Self-Reliance</h5>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500-imp">Apply knowledge in real
                      business settings and build lasting entrepreneurial skills.</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="initiative-impact px-6 pb-6 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12" data-aos="fade-up"
              data-aos-delay="100">
              <div className="rounded-2xl p-5 sm:px-7 sm:py-6 flex items-start gap-4 box-impact-teal">
                <span className="material-symbols-outlined text-2xl shrink-0 text-teal-600-solid">verified</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-700-solid">The impact</p>
                  <p className="mt-1 text-sm sm:text-base leading-relaxed font-medium text-teal-800-imp">
                    Practical guidance, financial support, and structured opportunities help youth start and scale their
                    entrepreneurial ventures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  6. WHO CAN APPLY? & KEY BENEFITS (SS 5 ENHANCED)           */}

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-10">

          {/*  Card 1: Who can Apply?  */}
          <div className="section-info-panel eligibility-panel" data-aos="fade-up">
            <div className="section-card-header">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 icon-box-light-teal-amber">
                <span className="material-symbols-outlined text-xl">groups</span>
              </div>
              <div>
                <h3 className="section-card-title">
                  Who can <span>Apply?</span>
                </h3>
                <p className="section-card-subtitle">Eligibility criteria & applicant requirements</p>
              </div>
            </div>

            <div className="eligibility-content">
              <div className="eligibility-age">
                <div className="eligibility-age-copy">
                  <span className="material-symbols-outlined">badge</span>
                  <div><span className="eligibility-age-label">Age limit</span><strong>21–40 <small>years</small></strong></div>
                </div>
                <p className="eligibility-age-note">Applicants must be between 21 and 40 years of age.</p>
              </div>

              <div className="eligibility-criteria">
                <div className="eligibility-criteria-heading"><span>Applicant profile</span>
                  <p>Qualification, business intent, and Uttar Pradesh domicile</p>
                </div>
                <article className="eligibility-item">
                  <span className="eligibility-step"><span className="material-symbols-outlined">school</span></span>
                  <div>
                    <h5>Minimum Qualification</h5>
                    <p>8th pass or equivalent educational qualification.</p>
                  </div>
                  <span className="eligibility-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </article>
                <article className="eligibility-item">
                  <span className="eligibility-step"><span className="material-symbols-outlined">trending_up</span></span>
                  <div>
                    <h5>Aspiring Entrepreneurs</h5>
                    <p>Youth looking to start a business via franchise models.</p>
                  </div>
                  <span className="eligibility-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </article>
                <article className="eligibility-item">
                  <span className="eligibility-step"><span className="material-symbols-outlined">location_city</span></span>
                  <div>
                    <h5>Uttar Pradesh Domicile</h5>
                    <p>Applicants must be residing in Uttar Pradesh.</p>
                  </div>
                  <span className="eligibility-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </article>
              </div>
            </div>
          </div>

          {/*  Three-pillar impact band: Key Benefits  */}
          <div className="section-info-panel benefits-panel" data-aos="fade-up" data-aos-delay="200">
            <div className="section-card-header">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 icon-box-light-teal-amber">
                <span className="material-symbols-outlined text-xl">workspace_premium</span>
              </div>
              <div>
                <h3 className="section-card-title">
                  Key Benefits
                </h3>
                <p className="section-card-subtitle">Financial, operational & mentorship advantages</p>
              </div>
            </div>

            <div className="benefit-cards">
              <article className="benefit-card">
                <span className="benefit-index">01 / FINANCE</span>
                <div className="benefit-icon benefit-icon-gold"><span className="material-symbols-outlined">payments</span></div>
                <h4>Financial Freedom</h4>
                <p>Up to ₹5–10 lakh interest-free, collateral-free loans to start a business through a franchise.</p>
                <span className="benefit-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                <span className="benefit-accent" aria-hidden="true"></span>
              </article>
              <article className="benefit-card">
                <span className="benefit-index">02 / NETWORK</span>
                <div className="benefit-icon benefit-icon-teal"><span className="material-symbols-outlined">verified</span></div>
                <h4>Guided Success</h4>
                <p>Connect directly with 30+ reputed franchise brands and industry experts for smooth execution.</p>
                <span className="benefit-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                <span className="benefit-accent" aria-hidden="true"></span>
              </article>
              <article className="benefit-card">
                <span className="benefit-index">03 / KNOW-HOW</span>
                <div className="benefit-icon benefit-icon-green"><span className="material-symbols-outlined">model_training</span>
                </div>
                <h4>Knowledge & Training</h4>
                <p>Build practical insight into business ownership, operations, management, and scaling.</p>
                <span className="benefit-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                <span className="benefit-accent" aria-hidden="true"></span>
              </article>
            </div>
          </div>

        </div>
      </section>



      {/*  9. APPLICATION / GUIDANCE DESK & FAQS                      */}

      <section className="py-16 border-b border-slate-200 bg-slate-50-solid">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/*  Guidance Form  */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl card-white-bordered">
            <h3 className="text-2xl font-black mb-2 text-navy-black">Request Guidance /
              Callback</h3>
            <p className="text-sm mb-6 text-slate-500-imp">Need help with CM YUVA application or NCVET
              training
              enrollment? Fill out your details below.</p>

            <form className="space-y-4"
              onSubmit={(e) => { e.preventDefault(); alert('Submitted successfully!'); }}>
              <div>
                <label className="block text-xs font-bold uppercase mb-1 text-slate-700-imp">Full Name
                  *</label>
                <input type="text" required placeholder="e.g. Rahul Kumar"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none input-slate-bordered" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1 text-slate-700-imp">Mobile Number
                    *</label>
                  <input type="tel" required placeholder="10-digit mobile number"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none input-slate-bordered" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1 text-slate-700-imp">District
                    *</label>
                  <input type="text" required placeholder="e.g. Lucknow"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none input-slate-bordered" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-1 text-slate-700-imp">Proposed
                  Business
                  Category</label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none bg-white input-slate-bordered">
                  <option>Franchise Business Model</option>
                  <option>Manufacturing & Micro-Processing</option>
                  <option>Retail & Service Venture</option>
                  <option>IT & Digital Services</option>
                  <option>Agri-Business & Food Processing</option>
                </select>
              </div>

              <button type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all btn-brand-orange">
                Submit Request for Free Counseling
              </button>
            </form>
          </div>

          {/*  Frequently Asked Questions  */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black mb-2 text-navy-black">Frequently Asked
                Questions</h3>
              <p className="text-sm mb-6 text-slate-500-imp">Quick answers to common queries about CM YUVA
                Scheme.</p>

              <div className="space-y-4">
                <details
                  className="group p-4 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden card-white-bordered">
                  <summary className="flex justify-between items-center font-bold cursor-pointer text-sm text-slate-800-imp">
                    <span>What is the maximum loan limit under CM YUVA?</span>
                    <span
                      className="transition group-open:rotate-180 material-symbols-outlined text-slate-400-solid">expand_more</span>
                  </summary>
                  <p className="text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3 border-top-faq-text">
                    In Phase 1, entrepreneurs receive financial assistance up to ₹5 Lakhs (100% interest-free). After
                    successful repayment, Phase 2 provides loans up to ₹10 Lakhs.
                  </p>
                </details>

                <details
                  className="group p-4 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden card-white-bordered">
                  <summary className="flex justify-between items-center font-bold cursor-pointer text-sm text-slate-800-imp">
                    <span>Is NCVET training mandatory for getting loan approval?</span>
                    <span
                      className="transition group-open:rotate-180 material-symbols-outlined text-slate-400-solid">expand_more</span>
                  </summary>
                  <p className="text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3 border-top-faq-text">
                    Yes, completing the 5-day online NCVET EDP training and securing the certificate via <a
                      href="https://training.upicon.in" target="_blank" className="link-teal-underline">training.upicon.in</a>
                    is a
                    mandatory prerequisite for project evaluation.
                  </p>
                </details>

                <details
                  className="group p-4 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden card-white-bordered">
                  <summary className="flex justify-between items-center font-bold cursor-pointer text-sm text-slate-800-imp">
                    <span>Who is eligible to apply?</span>
                    <span
                      className="transition group-open:rotate-180 material-symbols-outlined text-slate-400-solid">expand_more</span>
                  </summary>
                  <p className="text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3 border-top-faq-text">
                    Youth aged between 21 to 40 years, with minimum 8th class educational qualification, and residing in
                    Uttar Pradesh are eligible.
                  </p>
                </details>

                <details
                  className="group p-4 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden card-white-bordered">
                  <summary className="flex justify-between items-center font-bold cursor-pointer text-sm text-slate-800-imp">
                    <span>Are collateral or security required for bank loans?</span>
                    <span
                      className="transition group-open:rotate-180 material-symbols-outlined text-slate-400-solid">expand_more</span>
                  </summary>
                  <p className="text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3 border-top-faq-text">
                    No! The loans provided under CM YUVA scheme are 100% collateral-free and interest-free, backed by
                    government credit guarantee cover.
                  </p>
                </details>
              </div>
            </div>

            {/*  Official Helplines Card  */}
            <div className="mt-6 p-5 rounded-2xl flex items-center justify-between text-white bg-dark-teal-header">
              <div>
                <p className="text-xs font-medium text-teal-200-imp">Official UPICON CM YUVA Helpline</p>
                <p className="text-lg font-black text-amber-300-imp">1800-180-0000 / +91 522 2208888</p>
              </div>
              <a href="mailto:cmyuva@upicon.in"
                className="px-4 py-2 rounded-xl text-xs font-bold border transition-all btn-glass-banner">
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
