import React from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

export default function TermsOfService() {
  useInteractiveEffects();

  return (
    <main className="min-h-screen">
      <section
        className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] py-16 lg:py-20 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]">
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 flex flex-col items-center text-center gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white" to="/" >
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">Terms of Service</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm text-brand-orange">gavel</span>
            <span>Sovereign Governance &amp; Portal Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Terms of Service
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Last updated: <strong className="text-white">November 17, 2025</strong>
          </p>
        </div>
      </section>


      {/*  4. MAIN TERMS OF SERVICE CONTENT & STICKY SIDEBAR          */}

      <section className="py-14 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/*  Left 4 Cols: Sticky Table of Contents Sidebar  */}
            <aside className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 sticky top-28 z-20">
              <h3
                className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-4 flex items-center gap-2 border-b border-slate-200 pb-3">
                <span className="material-symbols-outlined text-base">format_list_bulleted</span>
                <span>Terms Navigation</span>
              </h3>
              <nav className="flex flex-col gap-2 text-xs font-semibold text-slate-600">
                <a href="#sec-overview"
                  className="p-2 rounded-lg hover:bg-white hover:text-brand-teal transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                  <span>Overview &amp; Acceptance</span>
                </a>
                <a href="#sec-1"
                  className="p-2 rounded-lg hover:bg-white hover:text-brand-teal transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>1. Institutional Services Scope</span>
                </a>
                <a href="#sec-2"
                  className="p-2 rounded-lg hover:bg-white hover:text-brand-teal transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>2. User Conduct &amp; Filings</span>
                </a>
                <a href="#sec-3"
                  className="p-2 rounded-lg hover:bg-white hover:text-brand-teal transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>3. Intellectual Property Rights</span>
                </a>
                <a href="#sec-4"
                  className="p-2 rounded-lg hover:bg-white hover:text-brand-teal transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>4. Advisory &amp; DPR Disclaimers</span>
                </a>
                <a href="#sec-5"
                  className="p-2 rounded-lg hover:bg-white hover:text-brand-teal transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>5. Empanelment &amp; External Links</span>
                </a>
                <a href="#sec-6"
                  className="p-2 rounded-lg hover:bg-white hover:text-brand-teal transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>6. Limitation of Liability</span>
                </a>
                <a href="#sec-7"
                  className="p-2 rounded-lg hover:bg-white hover:text-brand-teal transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>7. Governing Law &amp; Jurisdiction</span>
                </a>
                <a href="#sec-8"
                  className="p-2 rounded-lg hover:bg-white hover:text-brand-teal transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                  <span>8. Legal Helpdesk &amp; Contact</span>
                </a>
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <span className="material-symbols-outlined text-brand-orange text-sm">policy</span>
                  <span>Institutional Legal Cell</span>
                </div>
                <p>For official legal correspondence or contract queries, email <a href="mailto:info@upicon.in"
                  className="text-brand-teal font-bold hover:underline">info@upicon.in</a>.</p>
              </div>
            </aside>

            {/*  Right 8 Cols: Terms Content Body  */}

            <div className='lg:col-span-8 flex flex-col gap-8 text-slate-700 leading-relaxed text-sm'>
              {/*  Preamble Box  */}
              <div id="sec-overview"
                className="p-6 rounded-2xl bg-brand-teal-light/30 border border-brand-teal/20 text-slate-800 flex flex-col gap-3">
                <p className="font-medium text-sm leading-relaxed">
                  Welcome to UP Industrial Consultants Limited (UPICON). These Terms of Service ("Terms") govern your access
                  to and use of our web portal, DPR catalogs, Youth Adda district clinics, empanelment systems, and
                  institutional advisory services. UPICON operates under the administrative supervision of the Department of
                  MSME &amp; Export Promotion, Government of Uttar Pradesh, as a Joint Venture of SIDBI, IFCI, and
                  Nationalized Banks established in 1974.
                </p>
                <p className="text-xs text-slate-600 italic">
                  By accessing or using our portal, submitting DPR requests, or applying for consultant empanelment, you
                  confirm that you have read, understood, and agreed to be bound by these Terms.
                </p>
              </div>

              {/*  Section 1  */}
              <div id="sec-1" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>1. Institutional Services &amp; Advisory Scope</span>
                </h2>
                <p>
                  UPICON provides end-to-end industrial consultancy services, including Detailed Project Reports (DPRs),
                  Techno-Economic Viability (TEV) appraisals, statutory environmental clearances, TVET skill modernization,
                  and government scheme facilitation (PMEGP, CM YUVA, ODOP, and World Bank RAMP Phase II).
                </p>
                <ul className="flex flex-col gap-2 text-xs font-medium text-slate-700 p-0 m-0 list-none my-1">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-brand-teal text-base shrink-0 mt-0.5">check_circle</span>
                    <span>All DPR profiles, feasibility briefs, and scheme guidelines are structured in accordance with
                      national banking and state government standards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-brand-teal text-base shrink-0 mt-0.5">check_circle</span>
                    <span>Services accessed via 75 District Youth Adda clinics are provided by certified nodal industrial
                      advisors under UPICON administrative supervision.</span>
                  </li>
                </ul>
              </div>

              {/*  Section 2  */}
              <div id="sec-2" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>2. User Conduct &amp; Application Filings</span>
                </h2>
                <p>
                  When registering on our portal, requesting DPR downloads, or submitting recruitment/empanelment
                  applications, you agree to provide true, accurate, current, and complete credentials.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1 text-brand-teal">
                      <span className="material-symbols-outlined text-base">verified_user</span> Authentic Filings
                    </span>
                    <span className="text-slate-600">Applicants must ensure all educational certificates, financial statements,
                      and business DPR details are authentic.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1 text-brand-orange">
                      <span className="material-symbols-outlined text-base">block</span> Prohibited Activity
                    </span>
                    <span className="text-slate-600">Unauthorized scraping, server overload attacks, false scheme submissions,
                      or misrepresenting official affiliation is strictly prohibited.</span>
                  </div>
                </div>
              </div>

              {/*  Section 3  */}
              <div id="sec-3" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>3. Intellectual Property Rights</span>
                </h2>
                <p>
                  All content published on this portal—including official logos, DPR catalog synopses, research paper
                  whitepapers, SVG graphics, software source code, and institutional layouts—is the exclusive intellectual
                  property of UPICON and its sovereign partners.
                </p>
                <p className="text-xs text-slate-600 italic">
                  Material may be downloaded for personal, non-commercial industrial reference only. Reproduction,
                  redistribution, or commercial resale of UPICON project reports without prior written consent is strictly
                  prohibited under Indian Copyright Laws.
                </p>
              </div>

              {/*  Section 4  */}
              <div id="sec-4" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>4. Advisory &amp; DPR Financial Disclaimers</span>
                </h2>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-amber-800">
                    <span className="material-symbols-outlined text-xl text-amber-600">warning</span>
                    <span>Important Banking &amp; Subsidy Disclaimer</span>
                  </div>
                  <p className="leading-relaxed">
                    Detailed Project Reports (DPRs) prepared by UPICON serve as bankable techno-economic feasibility models.
                    While UPICON DPRs are empanelled with public sector lenders, actual credit sanctions, loan
                    disbursements, and scheme subsidies remain subject to individual commercial bank board appraisals and
                    sovereign grant availability.
                  </p>
                </div>
              </div>

              {/*  Section 5  */}
              <div id="sec-5" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>5. Empanelment &amp; Third-Party External Links</span>
                </h2>
                <p>
                  External links to sovereign portals (such as Nivesh Mitra, GeM, World Bank RAMP, SIDBI, and Dept. of MSME
                  &amp; Export Promotion) are provided for institutional convenience. UPICON is not responsible for external
                  third-party content or privacy policies.
                </p>
                <p className="text-xs text-slate-600">
                  Empanelled consultants, field auditors, and technical contractors operate under specific project
                  engagement letters executed with UPICON.
                </p>
              </div>

              {/*  Section 6  */}
              <div id="sec-6" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>6. Limitation of Liability</span>
                </h2>
                <p>
                  To the maximum extent permitted by applicable law, UPICON and its board of directors, nodal officers, or
                  consultants shall not be liable for any indirect, incidental, or consequential damages arising out of
                  portal downtime, third-party internet delays, or unfulfilled bank loan applications.
                </p>
              </div>

              {/*  Section 7  */}
              <div id="sec-7" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>7. Governing Law &amp; Jurisdiction</span>
                </h2>
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of the Republic of India.
                  Any legal disputes or proceedings arising out of these Terms or portal usage shall be subject to the
                  exclusive jurisdiction of the competent courts at <strong>Lucknow, Uttar Pradesh, India</strong>.
                </p>
              </div>

              {/*  Section 8: Legal Contact Card  */}
              <div id="sec-8"
                className="p-6 rounded-2xl bg-gradient-to-br from-brand-teal-light/40 via-white to-brand-orange-light/30 border border-brand-teal/20 shadow-subtle flex flex-col gap-4 mt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Section 8</span>
                  <h2 className="text-xl font-extrabold text-slate-900">Legal Cell &amp; Official Correspondence</h2>
                  <p className="text-xs text-slate-600">For legal notices, contract inquiries, or institutional compliance
                    queries, reach our legal cell at:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-200/80 text-xs text-slate-800">
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 font-semibold">Official Email:</span>
                    <a href="mailto:info@upicon.in"
                      className="text-brand-teal font-extrabold hover:underline text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">mail</span>
                      <span>info@upicon.in</span>
                    </a>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 font-semibold">Registered Headquarters Address:</span>
                    <p className="font-bold leading-relaxed text-slate-900">
                      UPICON A-708-709, 7th Floor, Rohtas Summit Building, Vibhuti Khand, Gomti Nagar, Lucknow – 226010,
                      Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </main>
  );
}
