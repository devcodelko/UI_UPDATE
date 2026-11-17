import React from 'react';
import PageHeader from '../components/common/PageHeader';

export default function About() {
  return (
    <div className="about-page-wrapper">
      {/* 3. HERO / BREADCRUMB HEADER BANNER */}
      <PageHeader
        breadcrumb="About Us"
        title="About UP Industrial Consultants Limited"
        subtitle="Pioneering professional consultancy services, industrial development support, and business solutions across Uttar Pradesh since 1974."
      />

      {/* 4. OVERVIEW: COVERAGE AND SUPPORT */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden" id="overview">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="flex flex-col gap-3 max-w-4xl mb-10 lg:mb-14" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
              <span>Corporate Overview</span>
              <span className="h-px w-12 bg-gradient-to-r from-brand-teal to-transparent" />
            </div>
            <h2 className="text-3xl sm:text-4xl mb-4 lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Coverage and Support by UP Industrial Consultants Limited
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Layered Photo Composition */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-28" data-aos="fade-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  alt="UPICON Field Consultancy in Uttar Pradesh"
                  className="w-full h-[400px] lg:h-[480px] rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/assets/images/hero-consultant.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold shadow-lg border border-white/20">
                  <span className="material-symbols-outlined text-brand-teal text-sm">verified</span>
                  <span>UP Govt &amp; Banking JV</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                      50+
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Years of State Leadership</h4>
                      <p className="text-[11px] text-slate-600 font-medium">Empowering Enterprises &amp; Artisans Since 1974</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-6 -right-6 w-52 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group z-20">
                <img
                  alt="UPICON Workshop Audit Session"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="/assets/images/msme-audit.jpg"
                />
                <div className="absolute inset-0 bg-slate-950/30" />
                <span className="absolute bottom-2 left-2 text-[9px] font-bold text-white bg-brand-orange px-2.5 py-0.5 rounded-md shadow-sm">
                  Govt. Audit Hub
                </span>
              </div>
            </div>

            {/* Right: Editorial Connected Storyline */}
            <div className="lg:col-span-7 flex flex-col gap-8 pl-0 lg:pl-4" data-aos="fade-left">
              <div className="relative pl-8 border-l-2 border-brand-teal/30 hover:border-brand-teal transition-colors pb-2">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-teal border-4 border-white shadow-xs" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-1 block">01. Economic Impact</span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  In Uttar Pradesh, the importance of micro, small, and medium enterprises (MSMEs) forms the backbone of our economy. MSMEs play a crucial role in generating employment, encouraging innovation, and driving economic growth. At UPICON, we recognize the immense potential of MSMEs and offer targeted solutions to solve the common issues entrepreneurs face in various sectors.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors pb-2">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-xs" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1 block">02. Institutional Establishment</span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  UP Industrial Consultants Limited was established by the Government of UP, the Industrial Credit and Investment Corporation of India (ICICI), Nationalised Banks, and the State Level Financial Institutions to support the MSME sector. UPICON's main goal is to empower MSMEs by providing training, consultancy, and support services. We offer a comprehensive suite of services that includes everything from technical advisory services to market access, to help businesses scale and thrive.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-brand-teal/30 hover:border-brand-teal transition-colors pb-2">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-teal border-4 border-white shadow-xs" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-1 block">03. Sectoral Coverage</span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-3">
                  Uttar Pradesh is home to a wide range of industries, including traditional handicrafts, handlooms, food processing, leather goods, textiles, and light engineering. UPICON provides tailored consultancy services to meet the specific needs of these sectors, helping businesses improve efficiency, productivity, and profitability. We also work closely with government agencies to facilitate policy advocacy and support the growth of key industrial clusters.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">Handicrafts</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">Handlooms</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">Food Processing</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">Leather Goods</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">Textiles</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">Light Engineering</span>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-xs" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1 block">04. Policy Implementation</span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  We work closely with the government to help implement various schemes and policies designed to support MSMEs. By bridging the gap between businesses and government support, we ensure that MSMEs have access to the resources they need to grow and succeed. Our team of experienced professionals provides expert advice and support to help businesses navigate complex regulatory environments and unlock new opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EMPOWERING MSMES AND ENTREPRENEURS                      */}
      <section className="py-16 lg:py-24 bg-slate-50/70 relative overflow-hidden" id="empowering-msmes">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-col gap-3 max-w-4xl" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              UPICON EMPOWERING MSMES AND ENTREPRENEURS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              With Government Programs UPICON Empowering MSMEs and Entrepreneurs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-1">
              UPICON acts as a key catalyst in driving government schemes and initiatives aimed at fostering economic
              progress and employment generation. Some of their key involvement areas include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden" data-aos="fade-up">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-teal" />
              <div className="flex flex-col gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 shadow-sm mb-1">
                  <span className="material-symbols-outlined text-2xl">campaign</span>
                </div>
                <h3 className="text-lg font-bold text-brand-teal leading-snug">Awareness and Outreach</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  UPICON conducts awareness campaigns to educate entrepreneurs, including micro-enterprises and women, about government schemes and financial assistance. These initiatives have reached thousands of individuals across the state.
                </p>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-teal">
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal" /> State-Wide Campaigns</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange" />
              <div className="flex flex-col gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm mb-1">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <h3 className="text-lg font-bold text-brand-orange leading-snug">Training and Skill Development</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We offer training programs designed to enhance the skills of micro-entrepreneurs. These programs cover business planning, financial management, digital literacy, and marketing strategies.
                </p>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-orange">
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Capacity Building</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-teal" />
              <div className="flex flex-col gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 shadow-sm mb-1">
                  <span className="material-symbols-outlined text-2xl">support_agent</span>
                </div>
                <h3 className="text-lg font-bold text-brand-teal leading-snug">Scheme Facilitation and Guidance</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  UPICON helps entrepreneurs navigate the complex process of applying for government schemes. We guide them through paperwork, assist with DPR preparation, and connect them with authorities.
                </p>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-teal">
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal" /> End-to-End Assistance</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange" />
              <div className="flex flex-col gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm mb-1">
                  <span className="material-symbols-outlined text-2xl">lightbulb</span>
                </div>
                <h3 className="text-lg font-bold text-brand-orange leading-snug">Promotion of Innovation &amp; Incubation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We encourage innovation by providing support to startups and new ventures. UPICON offers incubation services, helping entrepreneurs refine business models and access seed funding.
                </p>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-orange">
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Startup Incubation</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-2" data-aos="fade-up">
            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 border border-brand-teal/20">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              UPICON has been instrumental in working with government institutions like Ministry of MSME, Govt of India, SIDBI, Skill India, and Nationalized Banks to implement programs that focus on training, capacity building, financing, and market access across Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* 6. UPICON INITIATIVES TO EMPOWER MSMES                    */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-white" id="initiatives-empower">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 flex flex-col gap-12 lg:gap-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-4 border-b border-slate-200/80" data-aos="fade-up">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
                <span>UPICON and MSMEs</span>
                <span className="h-px w-12 bg-gradient-to-r from-brand-teal to-transparent" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                UPICON's Initiatives to Empower MSMEs
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To address the challenges faced by MSMEs, UPICON has introduced a range of initiatives that focus on key areas such as technical advisory, market access, financial assistance, and infrastructure development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            <div className="flex flex-col gap-5 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group" data-aos="fade-up">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-400 group-hover:text-brand-teal transition-colors">01</span>
                <span className="w-3 h-3 rounded-full bg-brand-teal ring-4 ring-brand-teal/20 shadow-sm" />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <span className="material-symbols-outlined text-2xl sm:text-3xl text-brand-teal shrink-0 mt-0.5">settings_suggest</span>
                <h3 className="text-lg sm:text-xl font-bold text-brand-teal leading-snug">Technical Formulation</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide technical formulation services that assist MSMEs in adopting modern technologies to improve efficiency, product quality, and environmental sustainability.
              </p>
            </div>

            <div className="flex flex-col gap-5 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-400 group-hover:text-brand-orange transition-colors">02</span>
                <span className="w-3 h-3 rounded-full bg-brand-orange ring-4 ring-brand-orange/20 shadow-sm" />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <span className="material-symbols-outlined text-2xl sm:text-3xl text-brand-orange shrink-0 mt-0.5">storefront</span>
                <h3 className="text-lg sm:text-xl font-bold text-brand-orange leading-snug">Market Access</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We help businesses expand their market reach by connecting them with buyers, trade associations, and government agencies. Our initiatives include export packaging and GeM onboarding.
              </p>
            </div>

            <div className="flex flex-col gap-5 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-400 group-hover:text-brand-teal transition-colors">03</span>
                <span className="w-3 h-3 rounded-full bg-brand-teal ring-4 ring-brand-teal/20 shadow-sm" />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <span className="material-symbols-outlined text-2xl sm:text-3xl text-brand-teal shrink-0 mt-0.5">payments</span>
                <h3 className="text-lg sm:text-xl font-bold text-brand-teal leading-snug">Financial Assistance</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We assist businesses in accessing financial assistance from government schemes, including CGTMSE, PMEGP, and CM YUVA, providing guidance on preparing credit proposals.
              </p>
            </div>

            <div className="flex flex-col gap-5 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-400 group-hover:text-brand-orange transition-colors">04</span>
                <span className="w-3 h-3 rounded-full bg-brand-orange ring-4 ring-brand-orange/20 shadow-sm" />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <span className="material-symbols-outlined text-2xl sm:text-3xl text-brand-orange shrink-0 mt-0.5">precision_manufacturing</span>
                <h3 className="text-lg sm:text-xl font-bold text-brand-orange leading-snug">Infrastructure Development</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We support the development of industrial infrastructure, including Common Facility Centers (CFCs) under the ODOP scheme with modern machinery and testing setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LOCAL HISTORY & HERITAGE (1974)                        */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] text-white relative overflow-hidden" id="history-growth">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex flex-col gap-4" data-aos="fade-right">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-teal/20 text-brand-teal border border-brand-teal/30 text-xs font-bold uppercase tracking-wider w-fit">
                <span className="material-symbols-outlined text-sm">history</span> Heritage &amp; Mandate
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                UPICON Legacy
              </h2>
              <div className="flex items-baseline gap-2 pt-2">
                <span className="text-5xl font-black text-brand-orange">1974</span>
                <span className="text-xs text-slate-300 font-medium uppercase tracking-widest">Incorporation Year</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                Over 5 decades of continuous institutional advisory, government scheme delivery, and industrial capacity building across Uttar Pradesh.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-8" data-aos="fade-left">
              <div className="border-b border-white/15 pb-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-widest">
                  <span className="material-symbols-outlined text-base">event</span>
                  <span>UPICON Story</span>
                </div>
                <h3 className="text-xl font-bold text-white">UPICON's Local History</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Incorporated on March 30, 1974, we began with the mission of supporting and empowering entrepreneurs and businesses in Uttar Pradesh. Over the years, we have evolved into a trusted agency, providing consultancy, planning, and development services.
                </p>
              </div>

              <div className="border-b border-white/15 pb-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest">
                  <span className="material-symbols-outlined text-base">auto_graph</span>
                  <span>UPICON Offers</span>
                </div>
                <h3 className="text-xl font-bold text-white">Offers That Have Grown Over Time</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our range of services has expanded to meet the changing needs of businesses and entrepreneurs in Uttar Pradesh. Today, we offer a comprehensive suite of services that includes everything from technical advisory to market access.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-widest">
                  <span className="material-symbols-outlined text-base">psychology_alt</span>
                  <span>Problem Solver</span>
                </div>
                <h3 className="text-xl font-bold text-white">What Problems Can UPICON Solve?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We understand the unique challenges faced by businesses and entrepreneurs in Uttar Pradesh. Our team of experts is dedicated to providing practical solutions to solve these challenges and help businesses succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW WE EXECUTE PROJECTS                                */}
      <section className="py-16 lg:py-24 bg-slate-50/50" id="project-execution">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-3xl" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
              <span>Project Funding &amp; Execution</span>
              <span className="h-px w-12 bg-gradient-to-r from-brand-orange to-transparent" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              How We Execute Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-1">
              At UPICON, we follow a structured approach to project execution to ensure that every project is completed on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-teal transition-all group" data-aos="fade-up">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">architecture</span>
                </span>
                <span className="text-xs font-black text-slate-400 group-hover:text-brand-teal transition-colors">STEP 01</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-teal transition-colors">Strategic Planning</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We conduct comprehensive feasibility studies, DPR preparation, and risk assessments to ensure that every project is built on a solid foundation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-orange transition-all group" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">groups</span>
                </span>
                <span className="text-xs font-black text-slate-400 group-hover:text-brand-orange transition-colors">STEP 02</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">Support &amp; Guidance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We offer skill development training programs to enhance the skills of micro-entrepreneurs covering business planning, financial management, and marketing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-teal transition-all group" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">trending_up</span>
                </span>
                <span className="text-xs font-black text-slate-400 group-hover:text-brand-teal transition-colors">STEP 03</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-teal transition-colors">Driving Sales &amp; Revenue</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We help businesses increase sales and revenue by connecting them with new markets, trade opportunities, and government procurement platforms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-orange transition-all group" data-aos="fade-up">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                </span>
                <span className="text-xs font-black text-slate-400 group-hover:text-brand-orange transition-colors">STEP 04</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">Financial Assistance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We assist businesses in securing financial assistance from government schemes and financial institutions to support their growth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-teal transition-all group" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">payments</span>
                </span>
                <span className="text-xs font-black text-slate-400 group-hover:text-brand-teal transition-colors">STEP 05</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-teal transition-colors">Financial Advisory</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide expert financial advisory services to help businesses manage their finances effectively, optimize capital structure, and achieve long-term growth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-orange transition-all group" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">handshake</span>
                </span>
                <span className="text-xs font-black text-slate-400 group-hover:text-brand-orange transition-colors">STEP 06</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">Entrepreneurial Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We offer end-to-end support to entrepreneurs, from business idea formulation to setup, market access, and operational scaling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
