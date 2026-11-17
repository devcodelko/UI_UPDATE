import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const jobList = [
  {
    id: '1',
    category: 'advisory',
    deptBadge: 'Industrial Advisory',
    badgeClass: 'bg-brand-teal-light text-brand-teal',
    ref: 'Ref: UPICON/HR/2026/041',
    title: 'Senior Industrial Advisory Consultant (MSME & TEV)',
    summary:
      'Lead techno-economic viability (TEV) appraisals, statutory clearance filings, and institutional debt structuring for sovereign industrial projects across UP.',
    location: 'Lucknow (HQ)',
    exp: '7 - 10 Yrs Exp.',
    ctc: '₹9.0 - 12.0 LPA',
    deadline: '31 Oct 2026',
    delay: '100'
  },
  {
    id: '2',
    category: 'pmu',
    deptBadge: 'PMU & RAMP Phase II',
    badgeClass: 'bg-brand-orange-light text-brand-orange',
    ref: 'Ref: UPICON/HR/2026/042',
    title: 'Project Manager – World Bank RAMP Program',
    summary:
      'Supervise statewide execution of green technology modernization audits, ZED quality certifications, and MSME delayed payment dispute clinics.',
    location: 'Lucknow & Field',
    exp: '5 - 8 Yrs Exp.',
    ctc: '₹8.0 - 10.5 LPA',
    deadline: '25 Oct 2026',
    delay: '200'
  },
  {
    id: '3',
    category: 'advisory',
    deptBadge: 'Feasibility & Banking',
    badgeClass: 'bg-brand-teal-light text-brand-teal',
    ref: 'Ref: UPICON/HR/2026/043',
    title: 'Detailed Project Report (DPR) Specialist',
    summary:
      'Formulate bankable project reports, capital expenditure models, and financial ratio analysis under SIDBI, PMEGP, and CM YUVA guidelines.',
    location: 'Lucknow (HQ)',
    exp: '3 - 6 Yrs Exp.',
    ctc: '₹6.0 - 8.0 LPA',
    deadline: '05 Nov 2026',
    delay: '300'
  },
  {
    id: '4',
    category: 'cluster',
    deptBadge: 'Technical Quality Cell',
    badgeClass: 'bg-emerald-100 text-emerald-800',
    ref: 'Ref: UPICON/HR/2026/044',
    title: 'State Nodal Audit Officer (Food & Agro)',
    summary:
      'Conduct third-party field evaluations, safety compliance audits, and CAG statutory inspections across registered food processing units.',
    location: 'Kanpur Hub / Field',
    exp: '4 - 7 Yrs Exp.',
    ctc: '₹7.0 - 9.0 LPA',
    deadline: '28 Oct 2026',
    delay: '100'
  },
  {
    id: '5',
    category: 'cluster',
    deptBadge: 'ODOP & Craft Cluster',
    badgeClass: 'bg-brand-orange-light text-brand-orange',
    ref: 'Ref: UPICON/HR/2026/045',
    title: 'Cluster Development Coordinator (ODOP)',
    summary:
      'Coordinate Common Facility Center (CFC) machinery setups, artisan TVET training workshops, and GeM portal market onboarding.',
    location: 'Varanasi / Purvanchal',
    exp: '2 - 5 Yrs Exp.',
    ctc: '₹4.5 - 6.5 LPA',
    deadline: '10 Nov 2026',
    delay: '200'
  },
  {
    id: '6',
    category: 'pmu',
    deptBadge: 'Digital UPICON Cell',
    badgeClass: 'bg-purple-100 text-purple-800',
    ref: 'Ref: UPICON/HR/2026/046',
    title: 'IT & Digital Infrastructure Lead',
    summary:
      'Manage enterprise cloud architecture, Youth Adda district locator API services, and STQC sovereign security compliance portal integrations.',
    location: 'Lucknow (HQ)',
    exp: '4 - 6 Yrs Exp.',
    ctc: '₹7.5 - 10.0 LPA',
    deadline: '02 Nov 2026',
    delay: '300'
  }
];

const Careers = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredJobs =
    activeFilter === 'all'
      ? jobList
      : jobList.filter((job) => job.category === activeFilter);

  return (
    <div className="careers-page">
      <PageHeader
        breadcrumb="Careers"
        title=" Careers & Opportunities"
        subtitle="Join Uttar Pradesh's premier industrial consultancy institution. Explore current job vacancies, consultant empanelment notices, and internship opportunities."
      ></PageHeader>
      {/* Hero Header */}

      {/* ACTIVE CAREER OPENINGS SECTION */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 flex flex-col gap-10">
          {/* Filter & Search Controls Header */}
          <div
            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle flex flex-col lg:flex-row items-center justify-between gap-4"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-1 w-full lg:w-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Current Vacancies</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Explore Open Positions at UPICON</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border-0 cursor-pointer ${activeFilter === 'all'
                  ? 'bg-brand-teal text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                All Openings (6)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('advisory')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border-0 cursor-pointer ${activeFilter === 'advisory'
                  ? 'bg-brand-teal text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Advisory & DPR
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('pmu')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border-0 cursor-pointer ${activeFilter === 'pmu'
                  ? 'bg-brand-teal text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                PMU & RAMP
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('cluster')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border-0 cursor-pointer ${activeFilter === 'cluster'
                  ? 'bg-brand-teal text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Cluster & Field
              </button>
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
                data-aos="fade-up"
                data-aos-delay={job.delay}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${job.badgeClass}`}
                    >
                      {job.deptBadge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">{job.ref}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">{job.summary}</p>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-brand-orange">location_on</span>
                      <span className="font-medium text-slate-800">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-brand-teal">work</span>
                      <span className="font-medium text-slate-800">{job.exp}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-brand-teal">payments</span>
                      <span className="font-semibold text-slate-900">{job.ctc}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-brand-orange">calendar_month</span>
                      <span className="font-semibold text-brand-orange">{job.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <Link
                    to={`/career-details?id=${job.id}`}
                    className="w-full py-2.5 rounded-xl bg-brand-teal hover:bg-brand-teal-dark text-white text-xs font-bold text-center shadow-2xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Details & Apply</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
