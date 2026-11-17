import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
const MSME = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const msmeFaqs = [
    {
      q: '1. Why is creating an MSME project report important?',
      a: 'Creating an MSME project report is essential in securing loans, grants, or other financial support from banks, government schemes, or investors. It provides a detailed business overview, which helps stakeholders assess details, evaluate its viability, and make an informed decision.'
    },
    {
      q: '2. What is the ideal length for an MSME project report?',
      a: 'While there is no defined ideal length for an MSME project report, it should be thorough enough to address all necessary aspects of the business, including market analysis, financial projections, and funding requirements. Typically, it is made in 20 to 40 pages, depending on the project.'
    },
    {
      q: '3. Is it possible for me to create an MSME project report on my own?',
      a: 'Absolutely! Yes, you can definitely prepare an MSME project report on your own. However, it is advisable to seek input from financial experts or business advisors to ensure that all the information is accurate and complete, especially regarding financial projections.'
    },
    {
      q: '4. Is it mandatory to submit a project report to apply for MSME loans?',
      a: 'Yes, banks and financial institutions often expect a project report when you want to apply for MSME loans, especially when the amount is large or when applying under government schemes.'
    },
    {
      q: '5. What are the essential elements of a project report for MSMEs?',
      a: 'The MSME project report typically includes an executive summary, business description, market research, product or service description, organizational structure, implementation plan, financial projections, and funding requirements.'
    },
    {
      q: '6. How to calculate financial projections in an MSME project report?',
      a: 'Financial projections are developed by analyzing various factors, including market research, historical performance data, industry benchmarks, and informed assumptions regarding future revenues and expenses.'
    },
    {
      q: '7. What does break-even analysis refer to in a project report for MSMEs?',
      a: 'A break-even analysis is a financial assessment used in MSME project reports to identify the point in a business where total revenues equal total costs, resulting in neither profit nor loss.'
    },
    {
      q: '8. How does an MSME project report contribute to obtaining government subsidies?',
      a: 'An MSME report is essential for getting government subsidies, as it provides a detailed overview of the business plan, financial projections, and operational strategies.'
    },
    {
      q: '9. Can startups utilize MSME project reports to secure funding?',
      a: 'Yes, startups can use MSME project reports for funding. These reports describe the business plan, financial projections, and market analysis, helping to present the startup\'s viability to investors and financial institutions.'
    },
    {
      q: '10. How frequently should an MSME project report be revised?',
      a: 'It is particularly important to revise the report whenever you are seeking new loans or financing options. Additionally, the report should be updated whenever there are significant changes in the business model, operational strategies, or financial projections.'
    }
  ];

  return (
    <div className="msme-page">
      <PageHeader
        breadcrumb="MSME"
        title="Bankable MSME Project Profiles & DPRs"
        subtitle="Access detailed techno-economic feasibility studies, DPR checklists, SIDBI bankability norms, and scheme guidelines for setting up manufacturing and service units across Uttar Pradesh."
      />


      {/* MODEL DPR CATALOG & PROFILE CARDS */}
      <section className="py-16 lg:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col">
            {/* Showcase 1 - Content Left, Image Right */}
            <div className="msme-editorial-row" data-aos="fade-up" data-aos-delay="100">
              {/* Text Side */}
              <div className="msme-editorial-col-text">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
                  Food Processing
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Our journey begins with empowering agro-industrial entrepreneurs with complete cold-press machinery specs,
                  10 TPD processing capacity, PMEGP subsidy norms, and 3-year cash flow projections. Engineered for high oil
                  recovery and bank-ready credit linkage to support scalable, sustainable operations.
                </p>


              </div>

              {/* Image Side */}
              <div className="msme-editorial-col-image">
                <div className="msme-editorial-img-container" style={{ aspectRatio: '636 / 493' }}>
                  <img
                    src="/assets/images/msme-dpr-mustard-oil.jpg"
                    alt="Automated Mustard Oil Expeller Unit"
                  />
                </div>
              </div>
            </div>

            {/* Showcase 2 - Image Left, Content Right (row-reverse) */}
            <div className="msme-editorial-row row-reverse" data-aos="fade-up" data-aos-delay="200">
              {/* Text Side */}
              <div className="msme-editorial-col-text">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
                  Power &amp; Solar
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Reliable power is crucial for modern industrial-scale operations. This SIDBI bankable project report provides
                  turnkey guidance for establishing a clean energy inverter assembly line, precision testing laboratory, and rural
                  distribution network, reducing reliance on the conventional grid and lowering overall energy costs.
                </p>


              </div>

              {/* Image Side */}
              <div className="msme-editorial-col-image">
                <div className="msme-editorial-img-container" style={{ aspectRatio: '636 / 493' }}>
                  <img
                    src="/assets/images/msme-dpr-solar-roof.jpg"
                    alt="Solar Roof Assembly & Inverter Unit"
                  />
                </div>
              </div>
            </div>

            {/* Showcase 3 - Content Left, Image Right */}
            <div className="msme-editorial-row" data-aos="fade-up" data-aos-delay="300">
              {/* Text Side */}
              <div className="msme-editorial-col-text">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
                  Ayush &amp; Pharma
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Engineered for premium export readiness, this detailed DPR incorporates ZED Gold quality benchmarks, GMP certification
                  requirements, and precision steam distillation engineering. Encompassing aromatic crop supply chains, modern laboratory
                  quality assurance, and high-yield commercial feasibility.
                </p>

              </div>

              {/* Image Side */}
              <div className="msme-editorial-col-image">
                <div className="msme-editorial-img-container" style={{ aspectRatio: '636 / 493' }}>
                  <img
                    src="/assets/images/msme-dpr-herbal-oil.jpg"
                    alt="Organic Herbal Essential Oils Extraction"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MSME FAQ SECTION */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-200/80 overflow-hidden" id="msme-faq-section">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14" data-aos="fade-up">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">
              Knowledge Base &amp; Loan Guidelines
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Got Questions? We've Got Answers!
            </h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mt-3 rounded-full"></div>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
              Frequently asked questions regarding MSME project reports, bankability, financial projections, and government
              subsidies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5" data-aos="fade-up" data-aos-delay="100">
            {msmeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="msme-faq-card border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all duration-300 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="faq-toggle-btn w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-brand-teal transition-colors cursor-pointer bg-transparent border-0"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`faq-icon w-8 h-8 rounded-full ${isOpen ? 'bg-brand-teal text-white' : 'bg-slate-100 text-slate-600'
                        } flex items-center justify-center text-lg font-bold shrink-0 transition-all`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-wrapper px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MSME;
