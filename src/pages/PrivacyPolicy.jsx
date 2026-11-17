import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { id: 'sec-overview', label: 'Overview & Consent' },
  { id: 'sec-1', label: '1. Data Processing Commitment' },
  { id: 'sec-2', label: '2. Information We Collect & Usage' },
  { id: 'sec-3', label: '3. How We Share Personal Info' },
  { id: 'sec-4', label: '4. Security, Retention & Children' },
  { id: 'sec-5', label: '5. Your Individual Rights' },
  { id: 'sec-6', label: '6. Copyright Notice' },
  { id: 'sec-7', label: '7. Policy Changes' },
  { id: 'sec-8', label: '8. Contact Us & Address', isSpecial: true },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('sec-overview');

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70;
      if (isBottom) {
        setActiveSection('sec-8');
        return;
      }

      const scrollPos = window.scrollY + 160;
      let currentSecId = 'sec-overview';

      for (const item of navItems) {
        const sec = document.getElementById(item.id);
        if (sec) {
          const top = sec.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            currentSecId = item.id;
          }
        }
      }

      setActiveSection((prev) => (prev !== currentSecId ? currentSecId : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    let lenisHandler = null;
    let lenisTimer = null;
    if (window.lenis) {
      lenisHandler = handleScroll;
      window.lenis.on('scroll', lenisHandler);
    } else {
      lenisTimer = setInterval(() => {
        if (window.lenis) {
          lenisHandler = handleScroll;
          window.lenis.on('scroll', lenisHandler);
          clearInterval(lenisTimer);
        }
      }, 200);
      setTimeout(() => clearInterval(lenisTimer), 3000);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lenisTimer) clearInterval(lenisTimer);
      if (window.lenis && lenisHandler) {
        window.lenis.off('scroll', lenisHandler);
      }
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      if (window.lenis) {
        window.lenis.scrollTo(elem, { offset: -100 });
      } else {
        const yOffset = -100;
        const y = elem.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="privacy-page">
      {/* Hero / Header Banner */}
      <section className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] pt-28 pb-16 lg:pt-36 lg:pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 flex flex-col items-center text-center gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white" to="/">
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">Privacy Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm text-brand-teal-light">shield</span>
            <span>Data Governance &amp; GDPR Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Last updated: <strong className="text-white">November 17, 2025</strong>
          </p>
        </div>
      </section>

      {/* Main Content & Sticky TOC Sidebar */}
      <section className="py-14 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 4 Cols: Sticky Table of Contents Sidebar */}
            <aside className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 sticky top-28 z-20">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-4 flex items-center gap-2 border-b border-slate-200 pb-3">
                <span className="material-symbols-outlined text-base">format_list_bulleted</span>
                <span>Policy Sections</span>
              </h3>
              <nav className="flex flex-col gap-2 text-xs font-semibold text-slate-600">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`p-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                        isActive
                          ? 'bg-white text-brand-teal shadow-2xs font-bold'
                          : 'text-slate-600 hover:bg-white hover:text-brand-teal'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-200 ${
                          isActive
                            ? 'bg-brand-teal'
                            : item.isSpecial
                            ? 'bg-brand-orange'
                            : 'bg-slate-300'
                        }`}
                      ></span>
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <span className="material-symbols-outlined text-brand-teal text-sm">lock</span>
                  <span>Data Protection Office</span>
                </div>
                <p>
                  Direct inquiries regarding GDPR or personal data management to{' '}
                  <a href="mailto:info@upicon.in" className="text-brand-teal font-bold hover:underline">
                    info@upicon.in
                  </a>.
                </p>
              </div>
            </aside>

            {/* Right 8 Cols: Legal Policy Text Body */}
            <main className="lg:col-span-8 flex flex-col gap-8 text-slate-700 leading-relaxed text-sm">
              {/* Intro Overview Box */}
              <div
                id="sec-overview"
                className="p-6 rounded-2xl bg-brand-teal-light/30 border border-brand-teal/20 text-slate-800 flex flex-col gap-3"
              >
                <p className="font-medium text-sm leading-relaxed">
                  UPICON (Uttar Pradesh Industrial Consultants Limited), referred to as "UPICON," "we," "us," or "our," is
                  committed to transforming the way businesses operate by enabling entrepreneurship and innovation. Since
                  1974, UPICON has been supporting organizations through consultations, training programs, and strategic
                  insights. This Privacy Statement explains how we collect, use, store, and disclose your information while
                  safeguarding your rights under applicable privacy laws, including GDPR.
                </p>
                <p className="text-xs text-slate-600 italic">
                  By accessing or using our website, products, or services, you consent to the practices described in this
                  Privacy Statement and agree to its terms. This Policy applies to all UPICON services, except those
                  governed by a separate privacy statement.
                </p>
              </div>

              {/* Section 1 */}
              <div id="sec-1" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>1. Data Processing Commitment</span>
                </h2>
                <p>
                  All categories of personal information we collect are processed lawfully, fairly, and transparently in
                  line with GDPR and established industry standards. We ensure all data is acquired with proper consent and
                  that your rights remain fully protected.
                </p>
              </div>

              {/* Section 2 */}
              <div id="sec-2" className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>2. Information We Collect and How We Use It</span>
                </h2>

                {/* 2.1 */}
                <div className="flex flex-col gap-2 pl-3 border-l-2 border-brand-teal/40">
                  <h3 className="text-base font-bold text-slate-900">2.1 Information You Provide</h3>
                  <p>We collect personal information you voluntarily provide when you:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800 p-0 m-0 list-none my-1">
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-base">check_circle</span>
                      <span>Contact us directly</span>
                    </li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-base">check_circle</span>
                      <span>Participate in online surveys or discussions</span>
                    </li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-base">check_circle</span>
                      <span>Register for demos, trials, sign-ups, or training sessions</span>
                    </li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-base">check_circle</span>
                      <span>Create an account or use our services</span>
                    </li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-base">check_circle</span>
                      <span>Engage with us at events or via social media</span>
                    </li>
                    <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-base">check_circle</span>
                      <span>Apply for employment opportunities</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600">
                    This may include your name, email address (business or personal), contact details, organizational
                    information, and any other information you submit voluntarily.
                  </p>
                </div>

                {/* 2.2 */}
                <div className="flex flex-col gap-2 pl-3 border-l-2 border-brand-orange/40 mt-2">
                  <h3 className="text-base font-bold text-slate-900">2.2 Information About the Use of Our Services</h3>
                  <p>When you visit our website, we may collect general usage and technical data, including:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                    <span className="p-2 rounded bg-slate-100 font-medium">• Browser type &amp; version</span>
                    <span className="p-2 rounded bg-slate-100 font-medium">• Operating system</span>
                    <span className="p-2 rounded bg-slate-100 font-medium">• Referring &amp; visited pages</span>
                    <span className="p-2 rounded bg-slate-100 font-medium">• Date &amp; time of access</span>
                    <span className="p-2 rounded bg-slate-100 font-medium">• IP address</span>
                    <span className="p-2 rounded bg-slate-100 font-medium">• Internet service provider</span>
                  </div>
                </div>

                {/* 2.3 */}
                <div className="flex flex-col gap-2 pl-3 border-l-2 border-brand-teal/40 mt-2">
                  <h3 className="text-base font-bold text-slate-900">2.3 Information from Third Parties</h3>
                  <p>
                    We may collect information from third-party sources such as business partners, government organizations,
                    or data providers, only when you have granted consent to those providers. We will seek confirmation from
                    you before engaging further using that information.
                  </p>
                  <p className="text-xs text-slate-600 italic">
                    When processing such data, UPICON ensures it does not infringe upon the privacy or legal rights of any
                    individual.
                  </p>
                </div>

                {/* Use of Collected Info */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 flex flex-col gap-3 mt-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand-teal">settings_suggest</span>
                    <span>Use of Collected Information</span>
                  </h3>
                  <p className="text-xs text-slate-600">We use your data for purposes including, but not limited to:</p>
                  <ul className="flex flex-col gap-1.5 text-xs text-slate-700 p-0 m-0 list-none">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-sm">chevron_right</span>
                      <span>Preparing interactive and user-friendly content</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-sm">chevron_right</span>
                      <span>Optimizing website performance based on visitor behavior</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-sm">chevron_right</span>
                      <span>Ensuring long-term viability of our services</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-sm">chevron_right</span>
                      <span>Providing necessary information to law enforcement when required</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-sm">chevron_right</span>
                      <span>Communicating updates, notices, and marketing messages with your explicit consent</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600 border-t border-slate-200 pt-2">
                    Statistical analysis may be conducted to enhance data protection, improve services, and optimize overall
                    user experience. Your express consent is required for any data usage beyond basic service fulfillment.
                    You may withdraw your consent anytime by emailing{' '}
                    <a href="mailto:info@upicon.in" className="text-brand-teal font-bold hover:underline">
                      info@upicon.in
                    </a>.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div id="sec-3" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>3. How We Share Personal Information</span>
                </h2>
                <p>
                  UPICON does not share your information with third parties without your consent, except in specific
                  circumstances outlined below:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-brand-teal uppercase tracking-wider">3.1 Service Providers</h3>
                    <p className="text-xs text-slate-600">
                      We may share limited data with strategic partners, third-party auditors, or government organizations
                      when required for compliance. These entities are bound by confidentiality and data protection
                      obligations.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                      3.2 Legal Compliance &amp; Security
                    </h3>
                    <p className="text-xs text-slate-600">
                      We may disclose personal information if required by law, court order, or authorized government
                      request. UPICON is obligated to comply with applicable judicial requirements without needing
                      additional consent.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-lg">verified</span>
                  <span>UPICON does not sell your personal information under any form.</span>
                </div>
              </div>

              {/* Section 4 */}
              <div id="sec-4" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>4. Data Security and Retention</span>
                </h2>
                <p>
                  We store data only for the period necessary to fulfil the purpose for which it was collected or as legally
                  required. After expiration of the retention period, your data is securely deleted unless needed for
                  contract fulfillment.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1.5 mt-1">
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-brand-orange text-base">child_care</span>
                    <span>Protection of Children's Privacy</span>
                  </h3>
                  <p className="text-xs text-slate-600">
                    We do not knowingly collect personal data from children under 16. If such data is discovered, we will
                    delete it immediately. Contact us at{' '}
                    <a href="mailto:info@upicon.in" className="text-brand-teal font-bold hover:underline">
                      info@upicon.in
                    </a>{' '}
                    if you believe a child's data has been shared with us.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div id="sec-5" className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>5. Your Rights Regarding Your Information</span>
                </h2>
                <p>You may exercise the following rights regarding your personal data at any time:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="material-symbols-outlined text-brand-teal">fact_check</span>
                    <span>Right of Confirmation</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="material-symbols-outlined text-brand-teal">visibility</span>
                    <span>Right of Access</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="material-symbols-outlined text-brand-teal">edit_note</span>
                    <span>Right to Amend or Update</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="material-symbols-outlined text-brand-orange">delete_forever</span>
                    <span>Right to Delete Your Data</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="material-symbols-outlined text-brand-orange">undo</span>
                    <span>Right to Withdraw Consent</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="material-symbols-outlined text-brand-orange">unsubscribe</span>
                    <span>Right to Opt-Out</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  To exercise any of these rights, simply email our data protection team at{' '}
                  <a href="mailto:info@upicon.in" className="text-brand-teal font-bold hover:underline">
                    info@upicon.in
                  </a>.
                </p>
              </div>

              {/* Section 6 */}
              <div id="sec-6" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>6. Copyright Notice</span>
                </h2>
                <p>
                  All content on our website—including design, text, graphics, forms, and source code—is copyrighted by
                  UPICON and its partners. Content may be downloaded only for personal, non-commercial reference purposes.
                  Reproduction without permission is strictly prohibited.
                </p>
              </div>

              {/* Section 7 */}
              <div id="sec-7" className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span>7. Changes to This Privacy Statement</span>
                </h2>
                <p>
                  UPICON may update this Privacy Statement periodically to reflect new technologies, industry standards, or
                  regulatory requirements. Any changes will be posted on this page, and we encourage users to review the
                  policy regularly.
                </p>
              </div>

              {/* Section 8: Contact Us Card */}
              <div
                id="sec-8"
                className="p-6 rounded-2xl bg-gradient-to-br from-brand-teal-light/40 via-white to-brand-orange-light/30 border border-brand-teal/20 shadow-subtle flex flex-col gap-4 mt-2"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Section 8</span>
                  <h2 className="text-xl font-extrabold text-slate-900">Contact Data Protection Team</h2>
                  <p className="text-xs text-slate-600">
                    For questions or concerns about this Privacy Statement or its implementation, you may contact our data protection team at:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-200/80 text-xs text-slate-800">
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 font-semibold">Official Email:</span>
                    <a
                      href="mailto:info@upicon.in"
                      className="text-brand-teal font-extrabold hover:underline text-sm flex items-center gap-1"
                    >
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
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
