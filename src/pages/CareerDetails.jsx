import React from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

export default function CareerDetails() {
  useInteractiveEffects();

  return (
    <main className="min-h-screen">
      <section
        className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] py-16 lg:py-24 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]">
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 flex flex-col gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white" to="/" >
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link className="hover:text-brand-orange transition-colors text-white" to="/careers" >Careers</Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold" id="crumb-job-title">Position Details</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full bg-brand-teal-light/20 text-brand-teal-light border border-brand-teal/40 text-xs font-bold uppercase tracking-wider"
                  id="job-badge-dept">
                  Industrial Advisory
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 border border-white/20 text-xs font-medium"
                  id="job-ref-code">
                  Ref: UPICON/HR/2026/041
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
                id="job-title-heading">
                Senior Industrial Advisory Consultant (MSME &amp; TEV)
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 pt-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-brand-orange text-base">location_on</span>
                  <span id="job-location">Lucknow HQ</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-brand-teal text-base">work</span>
                  <span id="job-exp">7 - 10 Years Exp.</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-brand-teal text-base">payments</span>
                  <span id="job-ctc">₹9.0 - 12.0 LPA</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  4. JOB DETAILS & APPLICATION FORM SECTION                  */}

      <section className="py-14 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/*  Left 7 Cols: Detailed Job Description  */}
            <div className="lg:col-span-7 flex flex-col gap-8">

              {/*  Role Purpose  */}
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-teal">description</span>
                  <span>Position Overview &amp; Objective</span>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed" id="job-desc-text">
                  The Senior Industrial Advisory Consultant will lead techno-economic viability (TEV) appraisals, statutory
                  clearance filings, single-window Nivesh Mitra facilitations, and debt structuring for sovereign industrial
                  units across Uttar Pradesh.
                </p>
              </div>

              {/*  Key Responsibilities  */}
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-orange">task_alt</span>
                  <span>Key Responsibilities &amp; Scope of Work</span>
                </h2>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700 p-0 m-0 list-none" id="job-resp-list">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-teal text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Conduct Techno-Economic Viability (TEV) studies and prepare bankable Detailed Project Reports
                      (DPRs) for micro, small, and medium enterprises.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-teal text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Coordinate with Department of MSME &amp; Export Promotion, SIDBI, IFCI, and nationalized banks for
                      credit mobilization.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-teal text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Guide prospective founders through single-window environmental (EIA), land allotment, and Nivesh
                      Mitra statutory clearances.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-teal text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Review financial models, cash-flow forecasts, break-even ratios, and debt-equity coverage for bank
                      loan sanctions.</span>
                  </li>
                </ul>
              </div>

              {/*  Qualification & Skills  */}
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-teal">school</span>
                  <span>Eligibility &amp; Qualification Criteria</span>
                </h2>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700 p-0 m-0 list-none" id="job-qual-list">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-orange text-lg shrink-0 mt-0.5">verified</span>
                    <span>B.Tech / BE / MBA (Finance) / Chartered Accountant (CA) or M.Sc in Industrial Management.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-orange text-lg shrink-0 mt-0.5">verified</span>
                    <span>Minimum 5 to 10 years of experience in industrial project appraisal, banking DPR formulation, or
                      sovereign consultancy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-orange text-lg shrink-0 mt-0.5">verified</span>
                    <span>Thorough understanding of UP MSME Policies, PMEGP, CM YUVA, CGTMSE, and World Bank RAMP
                      schemes.</span>
                  </li>
                </ul>
              </div>

              {/*  Selection & Evaluation Process  */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 flex flex-col gap-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-teal">how_to_reg</span>
                  <span>Selection &amp; Evaluation Stages</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                    <span className="text-[10px] font-bold uppercase text-brand-orange block">Stage 1</span>
                    <span className="font-bold text-slate-900 block mt-0.5">Scrutiny of Applications</span>
                    <span className="text-slate-500 text-[11px]">Shortlisting based on eligibility &amp; resume.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                    <span className="text-[10px] font-bold uppercase text-brand-teal block">Stage 2</span>
                    <span className="font-bold text-slate-900 block mt-0.5">Technical Interview</span>
                    <span className="text-slate-500 text-[11px]">Domain interaction with expert board.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                    <span className="text-[10px] font-bold uppercase text-emerald-700 block">Stage 3</span>
                    <span className="font-bold text-slate-900 block mt-0.5">Final Offer &amp; Joining</span>
                    <span className="text-slate-500 text-[11px]">Document verification &amp; empanelment.</span>
                  </div>
                </div>
              </div>

            </div>

            {/*  Right 5 Cols: Application Form Card  */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-card sticky top-24"
              id="apply-form">
              <div className="flex flex-col gap-2 pb-4 border-b border-slate-100">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Direct Application Form</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Apply for This Position</h3>
                <p className="text-xs text-slate-500">Submit your credentials directly to UPICON HR Recruitment Desk.</p>
              </div>

              {/*  Application Submission Success Alert (Hidden initially)  */}
              <div id="app-success-alert"
                className="hidden my-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex flex-col gap-2 animate-fade-in">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                  <span className="material-symbols-outlined text-xl text-emerald-600">check_circle</span>
                  <span>Application Submitted Successfully!</span>
                </div>
                <p className="leading-relaxed">
                  Thank you for applying. Your application reference code is <strong className="text-slate-900"
                    id="app-ref-id">UPICON/APP/2026/89412</strong>. Our recruitment panel will contact shortlisted
                  candidates via email/SMS.
                </p>
              </div>

              {/*  Interactive Form  */}
              <form id="candidate-apply-form" onSubmit={(e) => { e.preventDefault(); alert('Form submitted successfully!'); }} className="flex flex-col gap-4 mt-4">
                {/*  Full Name  */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800" htmlFor="applicant-name">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" id="applicant-name" required placeholder="e.g. Er. Vikramaditya Singh"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none" />
                </div>

                {/*  Email & Phone Grid  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-800" htmlFor="applicant-email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input type="email" id="applicant-email" required placeholder="vikram@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-800" htmlFor="applicant-phone">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" id="applicant-phone" required placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none" />
                  </div>
                </div>

                {/*  Position Dropdown & Qualification  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-800" htmlFor="applicant-qualification">
                      Highest Qualification <span className="text-red-500">*</span>
                    </label>
                    <select id="applicant-qualification" required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none cursor-pointer">
                      <option value="">Select Qualification</option>
                      <option value="B.Tech / B.E.">B.Tech / B.E.</option>
                      <option value="M.Tech / M.E.">M.Tech / M.E.</option>
                      <option value="MBA / PGDM">MBA / PGDM</option>
                      <option value="CA / ICWA">CA / ICWA</option>
                      <option value="Ph.D / Doctorate">Ph.D / Doctorate</option>
                      <option value="Other Graduate / Diploma">Other Graduate / Diploma</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-800" htmlFor="applicant-exp">
                      Total Experience (Yrs) <span className="text-red-500">*</span>
                    </label>
                    <input type="number" min="0" max="40" id="applicant-exp" required placeholder="e.g. 6"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none" />
                  </div>
                </div>

                {/*  Target Position  */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800" htmlFor="applicant-job-select">
                    Position Applied For
                  </label>
                  <select id="applicant-job-select" required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none cursor-pointer">
                    <option value="1">Senior Industrial Advisory Consultant (MSME &amp; TEV)</option>
                    <option value="2">Project Manager – World Bank RAMP Program</option>
                    <option value="3">Detailed Project Report (DPR) Specialist</option>
                    <option value="4">State Nodal Audit Officer (Food &amp; Agro)</option>
                    <option value="5">Cluster Development Coordinator (ODOP)</option>
                    <option value="6">IT &amp; Digital Infrastructure Lead</option>
                    <option value="empanelment">General Consultant Empanelment Panel</option>
                  </select>
                </div>

                {/*  Resume Upload UI  */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Upload Resume / CV (PDF or DOCX) <span className="text-red-500">*</span>
                  </label>
                  <div
                    className="relative border-2 border-dashed border-slate-200 hover:border-brand-teal rounded-xl p-4 text-center bg-slate-50/70 transition-colors cursor-pointer group">
                    <input type="file" id="applicant-resume" required accept=".pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => { }} />
                    <div className="flex flex-col items-center justify-center gap-1">
                      <span
                        className="material-symbols-outlined text-2xl text-brand-teal group-hover:scale-110 transition-transform">cloud_upload</span>
                      <span className="text-xs font-bold text-slate-800" id="resume-file-label">Click to select CV or drag file
                        here</span>
                      <span className="text-[10px] text-slate-400">PDF, DOCX up to 5 MB</span>
                    </div>
                  </div>
                </div>

                {/*  Cover Letter / Short Statement  */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800" htmlFor="applicant-statement">
                    Brief Cover Letter / Relevant Achievements
                  </label>
                  <textarea id="applicant-statement" rows="3"
                    placeholder="Summarize your key achievements and fit for this role at UPICON..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"></textarea>
                </div>

                {/*  Declaration  */}
                <div className="flex items-start gap-2 pt-1">
                  <input type="checkbox" id="applicant-declare" required
                    className="mt-0.5 rounded border-slate-300 text-brand-teal focus:ring-brand-teal cursor-pointer" />
                  <label htmlFor="applicant-declare" className="text-[11px] text-slate-600 leading-tight cursor-pointer">
                    I hereby declare that all information and uploaded documents provided above are authentic and accurate.
                  </label>
                </div>

                {/*  Submit Button  */}
                <button type="submit" id="submit-app-btn"
                  className="w-full py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs tracking-wide shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border-0 mt-2">
                  <span>Submit Official Application</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
