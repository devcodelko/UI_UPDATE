import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

const filterButtons = [
  { key: 'all', label: 'All Divisions', icon: 'apps', count: '08' },
  { key: 'tech', label: 'Tech & AI Modernization', icon: 'memory', count: '02' },
  { key: 'corporate', label: 'Corporate & Strategy', icon: 'account_tree', count: '02' },
  { key: 'rural', label: 'Rural & Food Tech', icon: 'cottage', count: '02' },
  { key: 'edp', label: 'EDP & Resources', icon: 'school', count: '02' }
];

const divisionsData = [
  {
    id: '01',
    category: 'tech',
    color: 'teal',
    icon: 'memory',
    divisionBadge: 'Division 01',
    title: 'Technology Transfer Division',
    description: 'The organisation is playing an important role in the transfer of technology. This division locates and arranges transfer of appropriate technology to the prospective entrepreneur.',
    pills: ['Technology Transfer', 'Entrepreneur Matching', 'Appropriate Tech'],
    tag: 'Commercial Technology Matching',
    delay: '100'
  },
  {
    id: '02',
    category: 'rural',
    color: 'orange',
    icon: 'cottage',
    divisionBadge: 'Division 02',
    title: 'Rural Project Division',
    description: 'With the continuing emphasis on development of rural sector, UPICON has opened a rural project division for providing consultancy services by way of transfer of suitable technology fitting the rural environment.',
    pills: ['Rural Development', 'Village Ecosystem', 'Appropriate Tech'],
    tag: 'Rural Ecosystem Services',
    delay: '200'
  },
  {
    id: '03',
    category: 'corporate',
    color: 'teal',
    icon: 'account_tree',
    divisionBadge: 'Division 03',
    title: 'Management Services Division',
    description: 'This division offers services for corporate planning, inventory control, financial planning, collaboration arrangement, labour relations industrial management, business administration etc.',
    pills: ['Corporate Planning', 'Inventory & Finance', 'Labor Relations'],
    tag: 'Corporate & Operations Strategy',
    delay: '300'
  },
  {
    id: '04',
    category: 'tech',
    color: 'orange',
    icon: 'smart_toy',
    divisionBadge: 'Division 04',
    title: 'Revival and Modernization Division',
    description: 'AI and automation have the potential to transform businesses across industries. Our team helps organizations harness AI to streamline processes, enhance productivity, and deliver personalized customer experiences.',
    pills: ['AI & Automation', 'Process Optimization', 'Customer CX'],
    tag: 'AI & Industry Modernization',
    delay: '400'
  },
  {
    id: '05',
    category: 'edp',
    color: 'teal',
    icon: 'school',
    divisionBadge: 'Division 05',
    title: 'Training and EDP Division',
    description: 'This division looks after the training needs of entrepreneurs & executives throughout the State. A large number of specially designed programmes are conducted at the instance of government departments, financial institutions & commercial banks.',
    pills: ['Statewide EDP', 'Executive Training', 'Bank & Dept Schemes'],
    tag: 'Entrepreneurship Development',
    delay: '100'
  },
  {
    id: '06',
    category: 'rural',
    color: 'orange',
    icon: 'restaurant',
    divisionBadge: 'Division 06',
    title: 'Food Processing Service Centre',
    description: 'To provide better services to food processing industries through modernisation and technology transfer, UPICON has opened a separate centre at Kanpur in collaboration with Central Food Technological Research Institute, Mysore.',
    pills: ['Kanpur Centre', 'CFTRI Mysore Tech', 'Agri-Food Tech'],
    tag: 'CFTRI Mysore Collaboration',
    delay: '200'
  },
  {
    id: '07',
    category: 'edp',
    color: 'teal',
    icon: 'groups',
    divisionBadge: 'Division 07',
    title: "UPICON's Resources & Strength",
    description: "The Company's main strength is its dedicated team of 26 professionals from different disciplines of engineering, finance, management, and marketing, with 10-25 years of field experience.",
    pills: ['26 Senior Experts', '10-25 Yrs Experience', 'Multi-Discipline'],
    tag: 'Senior Professional Cadre',
    delay: '300'
  },
  {
    id: '08',
    category: 'corporate',
    color: 'orange',
    icon: 'hub',
    divisionBadge: 'Division 08',
    title: 'Other Areas',
    description: 'UPICON has successfully provided services in natural gas utilisation, development of ancillaries, backward areas development, techno-economic appraisal, food processing support, and more.',
    pills: ['Natural Gas Utilisation', 'Backward Area Dev', 'Techno-Economic'],
    tag: 'Specialized Turnkey Mandates',
    delay: '400'
  }
];

export default function BusinessUnits() {
  useInteractiveEffects();
  const [filter, setFilter] = useState('all');

  return (
    <main className="min-h-screen">
      <section className="relative bg-slate-900 text-white py-16 lg:py-20 overflow-hidden border-b border-slate-800">
        {/*  Atmospheric Ambient Background Media & Overlay  */}
        <div className="absolute inset-0 z-0">
          <img alt="UPICON Business Units & Enterprise Consultancy"
            className="w-full h-full object-cover object-center opacity-25 filter blur-[1px]"
            src="assets/images/project-planning.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-brand-teal-dark/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          {/*  Breadcrumb Navigation  */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-semibold text-slate-300 p-0 m-0 list-none">
              <li>
                <Link className="hover:text-brand-teal transition-colors flex items-center gap-1 text-slate-400" to="/" >
                  <span className="material-symbols-outlined text-sm">home</span> Home
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li className="text-brand-orange font-bold">Business Units</li>
            </ol>
          </nav>

          {/*  Hero Header Content  */}
          <div className="max-w-3xl flex flex-col gap-4" data-aos="fade-up">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-white text-xs font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span>UPICON Business Units &amp; Specializations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Business Units &amp; Consultancy Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Pioneering multi-disciplinary consultancy, technology transfer, financial inclusion, and micro-business
              ecosystem development across Uttar Pradesh since 1974.
            </p>

            {/*  Key Capability Badges  */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-200">
                <span className="material-symbols-outlined text-sm text-brand-teal">badge</span>
                <span>50+ Multi-Disciplinary Experts</span>
              </div>
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-200">
                <span className="material-symbols-outlined text-sm text-brand-orange">verified</span>
                <span>2,000+ Completed Assignments</span>
              </div>
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-200">
                <span className="material-symbols-outlined text-sm text-brand-teal">account_balance</span>
                <span>BFMR &amp; CFTRI Collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  4. SECTION 1: BUSINESS UNIT - CONSULTANCY GROUP           */}

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/*  Left Column: Editorial Overview & Key Narrative  */}
            <div className="lg:col-span-7 flex flex-col gap-6" data-aos="fade-right">
              <div className="flex flex-col gap-2">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light border border-brand-teal/20 text-brand-teal text-xs font-bold w-fit">
                  <span className="material-symbols-outlined text-sm">corporate_fare</span>
                  <span>Business Unit</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Consultancy Group
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-brand-teal to-brand-orange rounded-full mt-1"></div>
              </div>

              {/*  Verbatim Content Paragraph from Existing Live Page  */}
              <p className="text-slate-700 text-base leading-relaxed font-normal">
                Consultancy has gone from being a one-way street, to a two-way interactive process, to a process that
                evolves and personalises itself based on customised inputs from the client, to now being a new revolutionary
                process pioneered by U.P. Industrial Consultants Ltd. With the opening up of the country's economy in the
                early 90's and the sudden boom in the early 2000, UPICON realised the importance of the growing Banking and
                Financial market and hence stepped into this segment in October 2006, with its Banking, Finance &amp; Market
                Research (BFMR) division.
              </p>

              {/*  Animated Stat Counter Grid Cards  */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-2">
                {/*  Counter Box 1  */}
                <div
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-brand-teal/40 transition-all hover:shadow-card group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Domain Experts</span>
                    <span
                      className="w-8 h-8 rounded-lg bg-brand-teal-light text-brand-teal flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-lg">groups</span>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-brand-teal animate-counter" data-target="50"
                      data-suffix="+">50+</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium mt-1">Engineers, Finance, Management &amp; Marketing
                    Specialists</p>
                </div>

                {/*  Counter Box 2  */}
                <div
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-brand-orange/40 transition-all hover:shadow-card group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Assignments</span>
                    <span
                      className="w-8 h-8 rounded-lg bg-brand-orange-light text-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-lg">assignment_turned_in</span>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-brand-orange animate-counter" data-target="2000"
                      data-suffix="+">2,000+</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium mt-1">Industrial &amp; Sovereign Projects Executed</p>
                </div>
              </div>

              {/*  Action Buttons  */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a className="px-5 py-3 rounded-lg bg-brand-teal text-white font-bold text-xs tracking-wide shadow-xs hover:bg-brand-teal-dark hover:shadow-md transition-all flex items-center gap-2"
                  href="#divisions">
                  <span>Explore Divisions</span>
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </a>
                <Link className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:text-brand-teal hover:border-brand-teal font-semibold text-xs transition-all flex items-center gap-2"
                  to="/#contact">
                  <span>Connect With Advisors</span>
                  <span className="material-symbols-outlined text-sm">mail</span>
                </Link>
              </div>
            </div>

            {/*  Right Column: Visual Showcase & Floating Feature Cards  */}
            <div className="lg:col-span-5 relative" data-aos="fade-left" data-aos-delay="200">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 group">
                <img alt="UPICON Consultancy Group Advisory"
                  className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  src="assets/images/hero-consultant.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/*  Floating Overlay Card  */}
                <div
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-brand-teal text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">analytics</span>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">Banking, Finance &amp; Market Research (BFMR)</span>
                      <span className="text-[11px] text-slate-500">Established October 2006 • Techno-Commercial Guidance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/*  5. SECTION 2: WORKS WITH CONSULTANCY GROUP (DIVISIONS)     */}

      <section id="divisions" className="py-16 lg:py-24 bg-slate-50 relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">

          {/*  Section Header  */}
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-3 mb-12 lg:mb-16" data-aos="fade-up">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light border border-brand-teal/20 text-brand-teal text-xs font-bold">
              <span className="material-symbols-outlined text-sm">hub</span>
              <span>Consultancy Group</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Works with Consultancy Group
            </h2>
            <div className="w-20 h-1 bg-brand-orange rounded-full"></div>

            {/*  Verbatim Content Paragraph from Existing Live Page  */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 font-normal">
              Consultancy has evolved from a one-way street to a two-way interactive process, personalized based on client
              input. UPICON pioneered this revolutionary approach. With the opening up of the country's economy, UPICON
              expanded into Banking, Finance &amp; Market Research (BFMR) division, providing techno-commercial guidance
              with experienced experts under a single roof.
            </p>
          </div>

          {/*  Interactive Division Category Filter Tabs (Executive Pill Bar)  */}
          <div className="flex justify-center mb-8 mt-8" data-aos="fade-up" data-aos-delay="100">
            <div
              className="p-2 bg-white rounded-2xl lg:rounded-full border border-slate-200/90 shadow-md flex flex-wrap items-center justify-center gap-2 max-w-5xl"
              id="division-filters">
              {filterButtons.map((btn) => {
                const isActive = filter === btn.key;
                return (
                  <button
                    key={btn.key}
                    type="button"
                    data-filter={btn.key}
                    onClick={() => setFilter(btn.key)}
                    className={`div-filter-btn px-4 py-2.5 rounded-xl lg:rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${isActive ? 'active-tab' : 'inactive-tab'
                      }`}
                  >
                    <span className="material-symbols-outlined text-base">{btn.icon}</span>
                    <span>{btn.label}</span>
                    <span className="tab-count px-2 py-0.5 rounded-full text-[10px] font-mono">
                      {btn.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/*  8 Divisions Grid Layout (Executive Enhanced Cards)  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {divisionsData.map((division) => {
              const isVisible = filter === 'all' || division.category === filter;
              if (!isVisible) return null;

              const isTeal = division.color === 'teal';

              return (
                <div
                  key={division.id}
                  data-category={division.category}
                  data-aos="fade-up"
                  data-aos-delay={division.delay}
                  className={`division-card p-6 lg:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-card transition-all duration-300 flex flex-col justify-between group relative overflow-hidden border-t-4 ${isTeal
                      ? 'border-t-brand-teal hover:border-brand-teal/50'
                      : 'border-t-brand-orange hover:border-brand-orange/50'
                    }`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${isTeal ? 'from-brand-teal/5 to-transparent' : 'from-brand-orange/5 to-transparent'
                      }`}
                  ></div>

                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ${isTeal
                            ? 'bg-brand-teal-light text-brand-teal group-hover:bg-brand-teal group-hover:text-white group-hover:shadow-brand-teal/20'
                            : 'bg-brand-orange-light text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-brand-orange/20'
                          }`}
                      >
                        <span className="material-symbols-outlined text-2xl">{division.icon}</span>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold tracking-wider uppercase shadow-xs">
                        {division.divisionBadge}
                      </span>
                    </div>

                    <div>
                      <h3
                        className={`text-xl font-bold text-slate-900 transition-colors ${isTeal ? 'group-hover:text-brand-teal' : 'group-hover:text-brand-orange'
                          }`}
                      >
                        {division.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mt-2.5 font-normal">
                        {division.description}
                      </p>
                    </div>

                    {/*  Key Focus Pills  */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {division.pills.map((pill, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60 flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${isTeal ? 'bg-brand-teal' : 'bg-brand-orange'}`}></span>
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold relative z-10 ${isTeal ? 'text-brand-teal' : 'text-brand-orange'
                      }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      {division.tag}
                    </span>
                    <span
                      className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/*  6. SECTION 3: STRATEGIC CAPABILITIES & RESOURCE STRENGTHS   */}

      <section className="py-16 lg:py-24 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/*  Left Content Narrative & Feature List  */}
            <div className="lg:col-span-6 flex flex-col gap-6" data-aos="fade-right">
              <div className="flex flex-col gap-3">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/25 text-brand-orange text-xs font-bold w-fit">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <span>Resource Strength &amp; Multidisciplinary Capabilities</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Empowering Entrepreneurs &amp; Enterprises Across Uttar Pradesh
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-brand-teal via-brand-orange to-transparent rounded-full mt-1">
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                With 50+ years of institutional heritage, UPICON combines the strategic rigor of international management
                consultancies with direct state-level governance access. Our business units operate in synergy to deliver
                turnkey solutions from feasibility studies and technology adoption to credit syndication and market access.
              </p>

              {/*  Interactive Feature List  */}
              <div className="flex flex-col gap-3.5 pt-1">
                {/*  Feature Item 1  */}
                <div className="empower-feature-card group" data-aos="fade-right" data-aos-delay="100">
                  <span
                    className="w-9 h-9 rounded-lg bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">account_balance</span>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                      BFMR Division (Est. Oct 2006)
                    </h4>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      Specialized banking, finance &amp; market research delivering techno-commercial appraisal dossiers.
                    </p>
                  </div>
                </div>

                {/*  Feature Item 2  */}
                <div className="empower-feature-card group" data-aos="fade-right" data-aos-delay="200">
                  <span
                    className="w-9 h-9 rounded-lg bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">memory</span>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                      Technology Transfer &amp; Commercialization
                    </h4>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      Locating and arranging appropriate technology matching for prospective industrial entrepreneurs.
                    </p>
                  </div>
                </div>

                {/*  Feature Item 3  */}
                <div className="empower-feature-card group" data-aos="fade-right" data-aos-delay="300">
                  <span
                    className="w-9 h-9 rounded-lg bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">smart_toy</span>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                      AI &amp; Industrial Revival
                    </h4>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      Automation, productivity optimization, and turnkey revival solutions for enterprise modernizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  Right Visual Card Grid  */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">

                {/*  Card 1: CFTRI Kanpur Center  */}
                <div
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-teal/40 transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="100">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center shadow-xs">
                        <span className="material-symbols-outlined text-xl">science</span>
                      </span>
                      <span
                        className="px-2.5 py-1 rounded-full bg-brand-teal-light text-brand-teal text-[10px] font-bold uppercase tracking-wider">CFTRI
                        Mysore</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                        CFTRI Kanpur Center
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">
                        Collaborative food processing technology &amp; modernization wing established at Kanpur in
                        partnership with Central Food Technological Research Institute, Mysore.
                      </p>
                    </div>
                  </div>
                  <div
                    className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-teal">
                    <span>Food Processing Wing</span>
                    <span
                      className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>

                {/*  Card 2: MEGSAT Programs  */}
                <div
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-orange/40 transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="200">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-xs">
                        <span className="material-symbols-outlined text-xl">workspace_premium</span>
                      </span>
                      <span
                        className="px-2.5 py-1 rounded-full bg-brand-orange-light text-brand-orange text-[10px] font-bold uppercase tracking-wider">Govt.
                        Scheme</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                        MEGSAT Programs
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">
                        Mass Employment Generation through Science &amp; Technology scheme execution delivering specialized
                        EDP training across Uttar Pradesh.
                      </p>
                    </div>
                  </div>
                  <div
                    className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-orange">
                    <span>Science &amp; Tech Schemes</span>
                    <span
                      className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>

                {/*  Card 3: Full Width Executive Dark Card (Statewide Footprint)  */}
                <div className="sm:col-span-2 col-span-2 empower-dark-card group" data-aos="fade-up" data-aos-delay="300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                      <span
                        className="w-12 h-12 rounded-xl bg-brand-teal/20 text-brand-teal border border-brand-teal/30 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-2xl">shield_with_house</span>
                      </span>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white tracking-wide">Statewide 75 District Footprint</span>
                          <span
                            className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase border border-emerald-500/30">Active</span>
                        </div>
                        <span className="text-xs text-slate-300 font-normal leading-relaxed">
                          Headquartered in Kanpur &amp; Lucknow with 6 regional zonal offices across Uttar Pradesh &amp; MP.
                        </span>
                      </div>
                    </div>

                    <Link className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-1.5 shrink-0 hover:border-brand-teal"
                      to="/#district-network">
                      <span>View Offices</span>
                      <span
                        className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
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
