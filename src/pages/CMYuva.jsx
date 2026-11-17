import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const CMYuva = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    category: 'Franchise Business Model'
  });

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your request has been submitted. UPICON Nodal Officer will contact you shortly.');
    setFormData({
      name: '',
      phone: '',
      district: '',
      category: 'Franchise Business Model'
    });
  };

  const faqs = [
    {
      q: 'What is the maximum loan limit under CM YUVA?',
      a: 'In Phase 1, entrepreneurs receive financial assistance up to ₹5 Lakhs (100% interest-free). After successful repayment, Phase 2 provides loans up to ₹10 Lakhs.'
    },
    {
      q: 'Is NCVET training mandatory for getting loan approval?',
      a: 'Yes, completing the 5-day online NCVET EDP training and securing the certificate via training.upicon.in is a mandatory prerequisite for project evaluation.'
    },
    {
      q: 'Who is eligible to apply?',
      a: 'Youth aged between 21 to 40 years, with minimum 8th class educational qualification, and residing in Uttar Pradesh are eligible.'
    },
    {
      q: 'Are collateral or security required for bank loans?',
      a: 'No! The loans provided under CM YUVA scheme are 100% collateral-free and interest-free, backed by government credit guarantee cover.'
    }
  ];

  return (
    <div className="cmyuva-page">
      <PageHeader
        breadcrumb="CM YUVA Abhiyan"
        title="Mukhyamantri YUVA Udyami Vikas Abhiyan"
        subtitle="Empowering youth across Uttar Pradesh through NCVET entrepreneurship training, collateral-free financial support up to ₹5-10 Lakhs, and structured franchise business opportunities."
      ></PageHeader>


      {/* CM YUVA ENTREPRENEURSHIP TRAINING PROGRAM */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-100" id="overview">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-8">
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

          <div className="flex flex-col gap-6 mt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left 6 Feature Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-right" data-aos-delay="100">
                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-blue">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-blue">
                      <span className="material-symbols-outlined text-xl">laptop_mac</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">5-Day Online EDP</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">
                        5-day online Entrepreneurial Development Program training.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-teal">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-teal">
                      <span className="material-symbols-outlined text-xl">assignment</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">30-Hour Content</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">
                        Structured total learning content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-purple">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-purple">
                      <span className="material-symbols-outlined text-xl">savings</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">₹5 Lakh Bank Loan</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">
                        Eligible to apply for a bank loan up to ₹5,00,000.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-amber">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-amber">
                      <span className="material-symbols-outlined text-xl">workspace_premium</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">NCVET Certification</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">
                        NCVET approved certificate upon completion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-rose">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-rose">
                      <span className="material-symbols-outlined text-xl">account_balance</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">90-Min Assessment</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">
                        90-minute online assessment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-center justify-between gap-3 card-border-sky">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 icon-bg-sky">
                      <span className="material-symbols-outlined text-xl">groups</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-imp">Ideal for UP Youth</h4>
                      <p className="text-[11px] leading-tight mt-1 text-slate-500-imp">
                        Ideal for self-employment &amp; first-time entrepreneurs in Uttar Pradesh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Video Card */}
              <div className="lg:col-span-5 h-full flex flex-col">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-xl group border border-slate-200 bg-slate-900 h-full min-h-[280px] flex items-center justify-center"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <img
                    src="/assets/images/cmyuva_training_thumb.jpg"
                    alt="CM YUVA Training Video Cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent flex flex-col justify-between p-5">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-brand-orange-solid">
                        OFFICIAL VIDEO GUIDE
                      </span>
                      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span>CM YUVA</span>
                      </div>
                    </div>

                    <a
                      href="https://training.upicon.in"
                      target="_blank"
                      rel="noreferrer"
                      className="self-center w-16 h-16 rounded-full text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all play-btn-orange"
                    >
                      <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                    </a>

                    <div className="flex flex-col gap-1">
                      <h5 className="text-base sm:text-lg font-black text-white leading-snug">
                        CM YUVA EDP Training Walkthrough
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

      {/* ROADMAP SECTION */}
      <section className="roadmap-section bg-slate-50/70 py-16 lg:py-20 border-b border-slate-100" data-aos="fade-up">
        <div className="roadmap-container max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">VISUAL ROADMAP</span>
              <span className="h-px w-8 bg-brand-orange"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Step-by-Step <span>Registration &amp; Certification Flow</span>
            </h2>
          </div>

          <div className="roadmap">
            {/* Step 1 */}
            <div className="roadmap-item">
              <div className="roadmap-card step-blue" data-aos="fade-up" data-aos-delay="100">
                <div className="step-number">01</div>
                <div className="step-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>Visit Portal</h3>
                <p>
                  Visit <a href="https://training.upicon.in/" target="_blank" rel="noreferrer">training.upicon.in ↗</a>
                  <br />&amp; click Register
                </p>
                <div className="step-action">
                  <span className="material-symbols-outlined">open_in_new</span>
                  Portal Access
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="roadmap-item">
              <div className="roadmap-card step-green" data-aos="fade-up" data-aos-delay="200">
                <div className="step-number">02</div>
                <div className="step-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <circle cx="9" cy="11" r="2.5" />
                    <path d="M5.5 17c0-1.8 1.5-2.8 3.5-2.8s3.5 1 3.5 2.8" />
                    <line x1="14" y1="9" x2="19" y2="9" />
                    <line x1="14" y1="13" x2="17" y2="13" />
                  </svg>
                </div>
                <h3>Fetch Details</h3>
                <p>Enter CM YUVA application ID &amp; fetch info</p>
                <div className="step-action">
                  <span className="material-symbols-outlined">badge</span>
                  Application ID
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="roadmap-item">
              <div className="roadmap-card step-purple" data-aos="fade-up" data-aos-delay="300">
                <div className="step-number">03</div>
                <div className="step-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3>Complete Reg.</h3>
                <p>Fill in registration form &amp; submit</p>
                <div className="step-action">
                  <span className="material-symbols-outlined">edit_document</span>
                  Form Submission
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="roadmap-item">
              <div className="roadmap-card step-orange" data-aos="fade-up" data-aos-delay="400">
                <div className="step-number">04</div>
                <div className="step-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                    <circle cx="6" cy="15" r="1.5" />
                    <line x1="10" y1="15" x2="14" y2="15" />
                  </svg>
                </div>
                <h3>Login &amp; Pay</h3>
                <p>Log in &amp; complete course enrollment payment</p>
                <div className="step-action">
                  <span className="material-symbols-outlined">payments</span>
                  Payment
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="roadmap-item">
              <div className="roadmap-card step-cyan" data-aos="fade-up" data-aos-delay="500">
                <div className="step-number">05</div>
                <div className="step-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3>5-Day Training</h3>
                <p>Complete 30-hrs training content &amp; assessment</p>
                <div className="step-action">
                  <span className="material-symbols-outlined">school</span>
                  Online Learning
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="roadmap-item">
              <div className="roadmap-card step-pink" data-aos="fade-up" data-aos-delay="600">
                <div className="step-number">06</div>
                <div className="step-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.4 12.8L17 22l-5-3-5 3 1.6-9.2" />
                  </svg>
                </div>
                <h3>NCVET Certificate</h3>
                <p>Get NCVET certificate &amp; apply for ₹5 Lakh loan</p>
                <div className="step-action">
                  <span className="material-symbols-outlined">workspace_premium</span>
                  Certification &amp; Loan
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Connector Dots */}
          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-dot blue"></div>
            <div className="timeline-dot green"></div>
            <div className="timeline-dot purple"></div>
            <div className="timeline-dot orange"></div>
            <div className="timeline-dot cyan"></div>
            <div className="timeline-dot pink"></div>
          </div>
        </div>
      </section>

      {/* CM YUVA UDYAMI (FRANCHISE) ABHIYAN */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
                CM YUVA Udyami (Franchise) Abhiyan
              </span>
              <span className="h-px w-8 bg-brand-teal"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Empowering Youth, Building Businesses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Your Gateway to Entrepreneurship
            </p>
          </div>

          <div>
            <p className="text-sm sm:text-base leading-relaxed max-w-5xl mb-8 mt-4 text-slate-600-imp">
              Entrepreneurship is one of the key drivers of economic growth, and CM YUVA Udyami (Franchise) Abhiyan is
              committed to promoting a new wave of business leaders in Uttar Pradesh. This initiative, led by UPICON in
              collaboration with GAME &amp; Franchise India, provides a structured platform for the youth to start their own
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
                <p className="text-xs text-slate-500">Avail ₹5-10 lakh collateral-free, interest-free loan under CM YUVA.</p>
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

      {/* WHO CAN APPLY & KEY BENEFITS */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-10">
          <div className="section-info-panel eligibility-panel" data-aos="fade-up">
            <div className="section-card-header">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 icon-box-light-teal-amber">
                <span className="material-symbols-outlined text-xl">groups</span>
              </div>
              <div>
                <h3 className="section-card-title">
                  Who can <span>Apply?</span>
                </h3>
                <p className="section-card-subtitle">Eligibility criteria &amp; applicant requirements</p>
              </div>
            </div>

            <div className="eligibility-content">
              <div className="eligibility-age">
                <div className="eligibility-age-copy">
                  <span className="material-symbols-outlined">badge</span>
                  <div>
                    <span className="eligibility-age-label">Age limit</span>
                    <strong>21–40 <small>years</small></strong>
                  </div>
                </div>
                <p className="eligibility-age-note">Applicants must be between 21 and 40 years of age.</p>
              </div>

              <div className="eligibility-criteria">
                <div className="eligibility-criteria-heading">
                  <span>Applicant profile</span>
                  <p>Qualification, business intent, and Uttar Pradesh domicile</p>
                </div>
                <article className="eligibility-item">
                  <span className="eligibility-step"><span className="material-symbols-outlined">school</span></span>
                  <div>
                    <h5>Minimum Qualification</h5>
                    <p>8th pass or equivalent educational qualification.</p>
                  </div>
                </article>
                <article className="eligibility-item">
                  <span className="eligibility-step"><span className="material-symbols-outlined">trending_up</span></span>
                  <div>
                    <h5>Aspiring Entrepreneurs</h5>
                    <p>Youth looking to start a business via franchise models.</p>
                  </div>
                </article>
                <article className="eligibility-item">
                  <span className="eligibility-step"><span className="material-symbols-outlined">location_city</span></span>
                  <div>
                    <h5>Uttar Pradesh Domicile</h5>
                    <p>Applicants must be residing in Uttar Pradesh.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="section-info-panel benefits-panel" data-aos="fade-up" data-aos-delay="200">
            <div className="section-card-header">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 icon-box-light-teal-amber">
                <span className="material-symbols-outlined text-xl">workspace_premium</span>
              </div>
              <div>
                <h3 className="section-card-title">Key Benefits</h3>
                <p className="section-card-subtitle">Financial, operational &amp; mentorship advantages</p>
              </div>
            </div>

            <div className="benefit-cards">
              <article className="benefit-card">
                <span className="benefit-index">01 / FINANCE</span>
                <div className="benefit-icon benefit-icon-gold"><span className="material-symbols-outlined">payments</span></div>
                <h4>Financial Freedom</h4>
                <p>Up to ₹5–10 lakh interest-free, collateral-free loans to start a business through a franchise.</p>
              </article>
              <article className="benefit-card">
                <span className="benefit-index">02 / NETWORK</span>
                <div className="benefit-icon benefit-icon-teal"><span className="material-symbols-outlined">verified</span></div>
                <h4>Guided Success</h4>
                <p>Connect directly with 30+ reputed franchise brands and industry experts for smooth execution.</p>
              </article>
              <article className="benefit-card">
                <span className="benefit-index">03 / KNOW-HOW</span>
                <div className="benefit-icon benefit-icon-green"><span className="material-symbols-outlined">model_training</span></div>
                <h4>Knowledge &amp; Training</h4>
                <p>Build practical insight into business ownership, operations, management, and scaling.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDANCE FORM & FAQS */}
      <section className="py-16 border-b border-slate-200 bg-slate-50-solid">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl card-white-bordered">
            <h3 className="text-2xl font-black mb-2 text-navy-black">Request Guidance / Callback</h3>
            <p className="text-sm mb-6 text-slate-500-imp">
              Need help with CM YUVA application or NCVET training enrollment? Fill out your details below.
            </p>

            <form className="space-y-4" onSubmit={handleCallbackSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase mb-1 text-slate-700-imp">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Kumar"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none input-slate-bordered"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1 text-slate-700-imp">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none input-slate-bordered"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1 text-slate-700-imp">District *</label>
                  <input
                    type="text"
                    required
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    placeholder="e.g. Lucknow"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none input-slate-bordered"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-1 text-slate-700-imp">
                  Proposed Business Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none bg-white input-slate-bordered"
                >
                  <option>Franchise Business Model</option>
                  <option>Manufacturing &amp; Micro-Processing</option>
                  <option>Retail &amp; Service Venture</option>
                  <option>IT &amp; Digital Services</option>
                  <option>Agri-Business &amp; Food Processing</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all btn-brand-orange border-0 cursor-pointer"
              >
                Submit Request for Free Counseling
              </button>
            </form>
          </div>

          {/* FAQs */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black mb-2 text-navy-black">Frequently Asked Questions</h3>
              <p className="text-sm mb-6 text-slate-500-imp">Quick answers to common queries about CM YUVA Scheme.</p>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 card-white-bordered cursor-pointer"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      <div className="flex justify-between items-center font-bold text-sm text-slate-800-imp">
                        <span>{faq.q}</span>
                        <span className={`material-symbols-outlined text-slate-400-solid transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </div>
                      {isOpen && (
                        <p className="text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3 border-top-faq-text">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Helpline Card */}
            <div className="mt-6 p-5 rounded-2xl flex items-center justify-between text-white bg-dark-teal-header">
              <div>
                <p className="text-xs font-medium text-teal-200-imp">Official UPICON CM YUVA Helpline</p>
                <p className="text-lg font-black text-amber-300-imp">1800-180-0000 / +91 522 2208888</p>
              </div>
              <a href="mailto:cmyuva@upicon.in" className="px-4 py-2 rounded-xl text-xs font-bold border transition-all btn-glass-banner">
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CMYuva;
