import React from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

export default function Careers() {
  useInteractiveEffects();

  return (
    <main className="min-h-screen">
      <section
        className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] py-16 lg:py-24 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]">
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none">
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center flex flex-col items-center gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white" to="/" >
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">Careers</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Careers &amp; Opportunities
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Join Uttar Pradesh's premier industrial consultancy institution. Explore current job vacancies, consultant
            empanelment notices, and internship opportunities.
          </p>
        </div>
      </section>


      {/*  4. ACTIVE CAREER OPENINGS & EMPANELMENT LISTINGS            */}

      <section className="py-16 lg:py-20 bg-slate-50/70 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 flex flex-col gap-10">

          {/*  Filter & Search Controls Header  */}
          <div
            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle flex flex-col lg:flex-row items-center justify-between gap-4" data-aos="fade-up">
            <div className="flex flex-col gap-1 w-full lg:w-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Current Vacancies</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Explore Open Positions at UPICON</h2>
            </div>

            {/*  Filter Tabs / Controls  */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
              <button
                className="px-4 py-2 rounded-xl bg-brand-teal text-white text-xs font-bold shadow-2xs border-0 cursor-pointer">
                All Openings (6)
              </button>
              <button
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold transition-colors border-0 cursor-pointer">
                Advisory &amp; DPR
              </button>
              <button
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold transition-colors border-0 cursor-pointer">
                PMU &amp; RAMP
              </button>
              <button
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold transition-colors border-0 cursor-pointer">
                Cluster &amp; Field
              </button>
            </div>
          </div>

          {/*  Job Cards Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/*  Job Card 1: Senior Industrial Advisory Consultant  */}
            <div
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded-full bg-brand-teal-light text-brand-teal text-[10px] font-extrabold uppercase tracking-wider">
                    Industrial Advisory
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Ref: UPICON/HR/2026/041</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                  Senior Industrial Advisory Consultant (MSME &amp; TEV)
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Lead techno-economic viability (TEV) appraisals, statutory clearance filings, and institutional debt
                  structuring for sovereign industrial projects across UP.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">location_on</span>
                    <span className="font-medium text-slate-800">Lucknow (HQ)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">work</span>
                    <span className="font-medium text-slate-800">7 - 10 Yrs Exp.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">payments</span>
                    <span className="font-semibold text-slate-900">₹9.0 - 12.0 LPA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">calendar_month</span>
                    <span className="font-semibold text-brand-orange">31 Oct 2026</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <Link to="/career-details?id=1"
                  className="w-full py-2.5 rounded-xl bg-brand-teal hover:bg-brand-teal-dark text-white text-xs font-bold text-center shadow-2xs transition-colors flex items-center justify-center gap-1.5">
                  <span>View Details &amp; Apply</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/*  Job Card 2: Project Manager - World Bank RAMP Program  */}
            <div
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded-full bg-brand-orange-light text-brand-orange text-[10px] font-extrabold uppercase tracking-wider">
                    PMU &amp; RAMP Phase II
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Ref: UPICON/HR/2026/042</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-orange transition-colors leading-snug">
                  Project Manager – World Bank RAMP Program
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Supervise statewide execution of green technology modernization audits, ZED quality certifications, and
                  MSME delayed payment dispute clinics.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">location_on</span>
                    <span className="font-medium text-slate-800">Lucknow &amp; Field</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">work</span>
                    <span className="font-medium text-slate-800">5 - 8 Yrs Exp.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">payments</span>
                    <span className="font-semibold text-slate-900">₹8.0 - 10.5 LPA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">calendar_month</span>
                    <span className="font-semibold text-brand-orange">25 Oct 2026</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <Link to="/career-details?id=2"
                  className="w-full py-2.5 rounded-xl bg-brand-teal hover:bg-brand-teal-dark text-white text-xs font-bold text-center shadow-2xs transition-colors flex items-center justify-center gap-1.5">
                  <span>View Details &amp; Apply</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/*  Job Card 3: DPR Formulation Specialist  */}
            <div
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="300">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded-full bg-brand-teal-light text-brand-teal text-[10px] font-extrabold uppercase tracking-wider">
                    Feasibility &amp; Banking
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Ref: UPICON/HR/2026/043</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                  Detailed Project Report (DPR) Specialist
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Formulate bankable project reports, capital expenditure models, and financial ratio analysis under SIDBI,
                  PMEGP, and CM YUVA guidelines.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">location_on</span>
                    <span className="font-medium text-slate-800">Lucknow (HQ)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">work</span>
                    <span className="font-medium text-slate-800">3 - 6 Yrs Exp.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">payments</span>
                    <span className="font-semibold text-slate-900">₹6.0 - 8.0 LPA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">calendar_month</span>
                    <span className="font-semibold text-brand-orange">05 Nov 2026</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <Link to="/career-details?id=3"
                  className="w-full py-2.5 rounded-xl bg-brand-teal hover:bg-brand-teal-dark text-white text-xs font-bold text-center shadow-2xs transition-colors flex items-center justify-center gap-1.5">
                  <span>View Details &amp; Apply</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/*  Job Card 4: State Nodal Quality Audit Officer  */}
            <div
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider">
                    Technical Quality Cell
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Ref: UPICON/HR/2026/044</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                  State Nodal Audit Officer (Food &amp; Agro)
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Conduct third-party field evaluations, safety compliance audits, and CAG statutory inspections across
                  registered food processing units.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">location_on</span>
                    <span className="font-medium text-slate-800">Kanpur Hub / Field</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">work</span>
                    <span className="font-medium text-slate-800">4 - 7 Yrs Exp.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">payments</span>
                    <span className="font-semibold text-slate-900">₹7.0 - 9.0 LPA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">calendar_month</span>
                    <span className="font-semibold text-brand-orange">28 Oct 2026</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <Link to="/career-details?id=4"
                  className="w-full py-2.5 rounded-xl bg-brand-teal hover:bg-brand-teal-dark text-white text-xs font-bold text-center shadow-2xs transition-colors flex items-center justify-center gap-1.5">
                  <span>View Details &amp; Apply</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/*  Job Card 5: Cluster Development Coordinator  */}
            <div
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded-full bg-brand-orange-light text-brand-orange text-[10px] font-extrabold uppercase tracking-wider">
                    ODOP &amp; Craft Cluster
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Ref: UPICON/HR/2026/045</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-orange transition-colors leading-snug">
                  Cluster Development Coordinator (ODOP)
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Coordinate Common Facility Center (CFC) machinery setups, artisan TVET training workshops, and GeM portal
                  market onboarding.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">location_on</span>
                    <span className="font-medium text-slate-800">Varanasi / Purvanchal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">work</span>
                    <span className="font-medium text-slate-800">2 - 5 Yrs Exp.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">payments</span>
                    <span className="font-semibold text-slate-900">₹4.5 - 6.5 LPA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">calendar_month</span>
                    <span className="font-semibold text-brand-orange">10 Nov 2026</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <Link to="/career-details?id=5"
                  className="w-full py-2.5 rounded-xl bg-brand-teal hover:bg-brand-teal-dark text-white text-xs font-bold text-center shadow-2xs transition-colors flex items-center justify-center gap-1.5">
                  <span>View Details &amp; Apply</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/*  Job Card 6: IT & Digital Portal Lead  */}
            <div
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="300">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 text-[10px] font-extrabold uppercase tracking-wider">
                    Digital UPICON Cell
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Ref: UPICON/HR/2026/046</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                  IT &amp; Digital Infrastructure Lead
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Manage enterprise cloud architecture, Youth Adda district locator API services, and STQC sovereign
                  security compliance portal integrations.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">location_on</span>
                    <span className="font-medium text-slate-800">Lucknow (HQ)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">work</span>
                    <span className="font-medium text-slate-800">4 - 6 Yrs Exp.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-teal">payments</span>
                    <span className="font-semibold text-slate-900">₹7.5 - 10.0 LPA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-brand-orange">calendar_month</span>
                    <span className="font-semibold text-brand-orange">02 Nov 2026</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <Link to="/career-details?id=6"
                  className="w-full py-2.5 rounded-xl bg-brand-teal hover:bg-brand-teal-dark text-white text-xs font-bold text-center shadow-2xs transition-colors flex items-center justify-center gap-1.5">
                  <span>View Details &amp; Apply</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
