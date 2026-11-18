import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

const faqList = [
  {
    q: "1. Why is creating an MSME project report important?",
    a: "Creating an MSME project report is essential in securing loans, grants, or other financial support from banks, government schemes, or investors. It provides a detailed business overview, which helps stakeholders assess details, evaluate its viability, and make an informed decision."
  },
  {
    q: "2. What is the ideal length for an MSME project report?",
    a: "While there is no defined ideal length for an MSME project report, it should be thorough enough to address all necessary aspects of the business, including market analysis, financial projections, and funding requirements. Typically, it is made in 20 to 40 pages, depending on the project."
  },
  {
    q: "3. Is it possible for me to create an MSME project report on my own?",
    a: "Absolutely! Yes, you can definitely prepare an MSME project report on your own. However, it is advisable to seek input from financial experts or business advisors to ensure that all the information is accurate and complete, especially regarding financial projections."
  },
  {
    q: "4. Is it mandatory to submit a project report to apply for MSME loans?",
    a: "Yes, banks and financial institutions often expect a project report when you want to apply for MSME loans, especially when the amount is large or when applying under government schemes."
  },
  {
    q: "5. What are the essential elements of a project report for MSMEs?",
    a: "The MSME project report typically includes an executive summary, business description, market research, product or service description, organizational structure, implementation plan, financial projections, and funding requirements."
  },
  {
    q: "6. How to calculate financial projections in an MSME project report?",
    a: "Financial projections are developed by analyzing various factors, including market research, historical performance data, industry benchmarks, and informed assumptions regarding future revenues and expenses."
  },
  {
    q: "7. What does break-even analysis refer to in a project report for MSMEs?",
    a: "A break-even analysis is a financial assessment used in MSME project reports to identify the point in a business where total revenues equal total costs, resulting in neither profit nor loss."
  },
  {
    q: "8. How does an MSME project report contribute to obtaining government subsidies?",
    a: "An MSME report is essential for getting government subsidies, as it provides a detailed overview of the business plan, financial projections, and operational strategies."
  },
  {
    q: "9. Can startups utilize MSME project reports to secure funding?",
    a: "Yes, startups can use MSME project reports for funding. These reports describe the business plan, financial projections, and market analysis, helping to present the startup's viability to investors and financial institutions."
  },
  {
    q: "10. How frequently should an MSME project report be revised?",
    a: "It is particularly important to revise the report whenever you are seeking new loans or financing options. Additionally, the report should be updated whenever there are significant changes in the business model, operational strategies, or financial projections."
  }
];

export default function Msme() {
  useInteractiveEffects();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="min-h-screen">
      <section
        className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] py-16 lg:py-24 text-white relative overflow-hidden border-b border-slate-800">
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]">
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center flex flex-col items-center gap-4"
          data-aos="fade-up">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-2">
            <Link className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white" to="/" >
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">MSME Project Reports</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Bankable MSME Project Profiles &amp; DPRs
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Access detailed techno-economic feasibility studies, DPR checklists, SIDBI bankability norms, and scheme
            guidelines for setting up manufacturing and service units across Uttar Pradesh.
          </p>
        </div>
      </section>


      {/*  MODEL DPR CATALOG & PROFILE CARDS                          */}

      <section className="py-16 lg:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-6 border-b border-slate-200/80 pb-5"
            data-aos="fade-up">
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-1.5">Empowering First-Gen
                Founders</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Featured MSME Model DPR Profiles
              </h2>
            </div>
            <a href="#msme-faq-section"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-teal text-white font-bold text-xs shadow-xs hover:bg-brand-teal-dark transition-all w-fit">
              <span className="material-symbols-outlined text-base">help</span>
              <span>View DPR FAQ Guide</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/*  Profile 1  */}
            <div
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-card hover:border-brand-teal/50 transition-all duration-300 flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-[11px] font-bold uppercase tracking-wider">Food
                    Processing</span>
                  <span className="text-xs font-semibold text-slate-400 font-mono">DPR #MSME-01</span>
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 group-hover:text-brand-teal transition-colors mb-3 leading-snug">
                  Automated Mustard Oil Expeller Unit</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Comprehensive techno-economic study detailing cold-press machinery specs, 10 TPD capacity, PMEGP subsidy
                  norms, and 3-year cash flow projections.
                </p>
              </div>
              <div
                className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-orange">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">payments</span>
                  Project Cost: ₹25.0 Lakhs
                </span>
                <span
                  className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform duration-300">arrow_forward</span>
              </div>
            </div>

            {/*  Profile 2  */}
            <div
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-card hover:border-brand-teal/50 transition-all duration-300 flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full bg-brand-orange-light text-brand-orange text-[11px] font-bold uppercase tracking-wider">Renewable
                    Energy</span>
                  <span className="text-xs font-semibold text-slate-400 font-mono">DPR #MSME-02</span>
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 group-hover:text-brand-orange transition-colors mb-3 leading-snug">
                  Solar Roof Assembly &amp; Inverter Unit</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  SIDBI bankable project report for establishing clean energy solar inverter assembly line, quality testing
                  lab, and rural distribution network.
                </p>
              </div>
              <div
                className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-orange">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">payments</span>
                  Project Cost: ₹80.0 Lakhs
                </span>
                <span
                  className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform duration-300">arrow_forward</span>
              </div>
            </div>

            {/*  Profile 3  */}
            <div
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-card hover:border-brand-teal/50 transition-all duration-300 flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-[11px] font-bold uppercase tracking-wider">Ayush
                    &amp; Pharma</span>
                  <span className="text-xs font-semibold text-slate-400 font-mono">DPR #MSME-03</span>
                </div>
                <h3
                  className="text-xl font-bold text-slate-900 group-hover:text-brand-teal transition-colors mb-3 leading-snug">
                  Organic Herbal Essential Oils Extraction</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Detailed DPR incorporating ZED quality standards, GMP certification requirements, steam distillation plant
                  specs, and export financial feasibility.
                </p>
              </div>
              <div
                className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-orange">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">payments</span>
                  Project Cost: ₹45.0 Lakhs
                </span>
                <span
                  className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform duration-300">arrow_forward</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/*  LIVE MSME FAQ SECTION (Strictly Aligned inside max-w-7xl Container)  */}

      <section className="py-16 lg:py-24 bg-white border-t border-slate-200/80 overflow-hidden" id="msme-faq-section">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">

          {/*  Section Header  */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14" data-aos="fade-up">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">Knowledge Base &amp; Loan
              Guidelines</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">Got Questions? We've
              Got Answers!</h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mt-3 rounded-full"></div>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
              Frequently asked questions regarding MSME project reports, bankability, financial projections, and government
              subsidies.
            </p>
          </div>

          {/*  FAQ Accordion List (Centered inside 4xl container within 7xl boundary)  */}
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5" data-aos="fade-up" data-aos-delay="100"
            id="msme-faq-accordion">
            {faqList.map((item, idx) => (
              <div
                key={idx}
                className="msme-faq-card border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all duration-300 bg-white">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="faq-toggle-btn w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-brand-teal transition-colors cursor-pointer bg-transparent border-0">
                  <span>{item.q}</span>
                  <span
                    className="faq-icon w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-lg font-bold shrink-0 transition-all">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`faq-answer-wrapper px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal ${openFaq === idx ? 'block' : 'hidden'}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
