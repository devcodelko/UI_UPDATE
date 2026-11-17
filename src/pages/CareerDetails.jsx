import React, { useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { jobDatabase } from '../data/jobDatabase';

const CareerDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentId = searchParams.get('id') || '1';
  const jobData = jobDatabase[currentId] || jobDatabase['1'];

  const selectedJobId = currentId;
  const [resumeName, setResumeName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);

  const successAlertRef = useRef(null);

  const handleJobSelectChange = (e) => {
    const newId = e.target.value;
    setSearchParams({ id: newId });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = 'UPICON/APP/2026/' + Math.floor(10000 + Math.random() * 90000);
      setSubmittedRef(randomCode);
      setIsSubmitting(false);

      if (successAlertRef.current) {
        successAlertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1200);
  };

  return (
    <div className="career-details-page">
      <section className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] pt-28 pb-16 lg:pt-36 lg:pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 flex flex-col gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link to="/" className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white">
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link to="/careers" className="hover:text-brand-orange transition-colors text-white">
              Careers
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">{jobData.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-teal-light/20 text-brand-teal-light border border-brand-teal/40 text-xs font-bold uppercase tracking-wider">
                  {jobData.dept}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 border border-white/20 text-xs font-medium">
                  {jobData.ref}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {jobData.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 pt-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-brand-orange text-base">location_on</span>
                  <span>{jobData.location}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-brand-teal text-base">work</span>
                  <span>{jobData.exp}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-brand-teal text-base">payments</span>
                  <span>{jobData.ctc}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-teal">description</span>
                  <span>Position Overview &amp; Objective</span>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{jobData.desc}</p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-orange">task_alt</span>
                  <span>Key Responsibilities &amp; Scope of Work</span>
                </h2>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700 p-0 m-0 list-none">
                  {jobData.resp.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-brand-teal text-lg shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-teal">school</span>
                  <span>Eligibility &amp; Qualification Criteria</span>
                </h2>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700 p-0 m-0 list-none">
                  {jobData.qual.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-brand-orange text-lg shrink-0 mt-0.5">
                        verified
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

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

            <div
              className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-card sticky top-24"
              id="apply-form"
            >
              <div className="flex flex-col gap-2 pb-4 border-b border-slate-100">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Direct Application Form
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Apply for This Position</h3>
                <p className="text-xs text-slate-500">Submit your credentials directly to UPICON HR Recruitment Desk.</p>
              </div>

              {submittedRef && (
                <div
                  ref={successAlertRef}
                  className="my-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex flex-col gap-2 animate-fade-in"
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                    <span className="material-symbols-outlined text-xl text-emerald-600">check_circle</span>
                    <span>Application Submitted Successfully!</span>
                  </div>
                  <p className="leading-relaxed">
                    Thank you for applying. Your application reference code is{' '}
                    <strong className="text-slate-900">{submittedRef}</strong>. Our recruitment panel will contact
                    shortlisted candidates via email/SMS.
                  </p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800" htmlFor="applicant-name">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="applicant-name"
                    required
                    placeholder="e.g. Er. Vikramaditya Singh"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-800" htmlFor="applicant-email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="applicant-email"
                      required
                      placeholder="vikram@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-800" htmlFor="applicant-phone">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="applicant-phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-800" htmlFor="applicant-qualification">
                      Highest Qualification <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="applicant-qualification"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none cursor-pointer"
                    >
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
                    <input
                      type="number"
                      min="0"
                      max="40"
                      id="applicant-exp"
                      required
                      placeholder="e.g. 6"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Target Position */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800" htmlFor="applicant-job-select">
                    Position Applied For
                  </label>
                  <select
                    id="applicant-job-select"
                    value={selectedJobId}
                    onChange={handleJobSelectChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none cursor-pointer"
                  >
                    <option value="1">Senior Industrial Advisory Consultant (MSME &amp; TEV)</option>
                    <option value="2">Project Manager – World Bank RAMP Program</option>
                    <option value="3">Detailed Project Report (DPR) Specialist</option>
                    <option value="4">State Nodal Audit Officer (Food &amp; Agro)</option>
                    <option value="5">Cluster Development Coordinator (ODOP)</option>
                    <option value="6">IT &amp; Digital Infrastructure Lead</option>
                    <option value="empanelment">General Consultant Empanelment Panel</option>
                  </select>
                </div>

                {/* Resume Upload UI */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Upload Resume / CV (PDF or DOCX) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative border-2 border-dashed border-slate-200 hover:border-brand-teal rounded-xl p-4 text-center bg-slate-50/70 transition-colors cursor-pointer group">
                    <input
                      type="file"
                      id="applicant-resume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-2xl text-brand-teal group-hover:scale-110 transition-transform">
                        cloud_upload
                      </span>
                      <span
                        className={`text-xs font-bold ${resumeName ? 'text-brand-teal' : 'text-slate-800'
                          }`}
                      >
                        {resumeName ? `Selected File: ${resumeName}` : 'Click to select CV or drag file here'}
                      </span>
                      <span className="text-[10px] text-slate-400">PDF, DOCX up to 5 MB</span>
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800" htmlFor="applicant-statement">
                    Brief Cover Letter / Relevant Achievements
                  </label>
                  <textarea
                    id="applicant-statement"
                    rows="3"
                    placeholder="Summarize your key achievements and fit for this role at UPICON..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
                  ></textarea>
                </div>

                {/* Declaration */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="applicant-declare"
                    required
                    className="mt-0.5 rounded border-slate-300 text-brand-teal focus:ring-brand-teal cursor-pointer"
                  />
                  <label htmlFor="applicant-declare" className="text-[11px] text-slate-600 leading-tight cursor-pointer">
                    I hereby declare that all information and uploaded documents provided above are authentic and accurate.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs tracking-wide shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border-0 mt-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Official Application</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerDetails;
