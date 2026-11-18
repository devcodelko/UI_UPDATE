import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';
import { ContactForm } from '../components/common/ContactForm.jsx';

export default function Contact() {
  useInteractiveEffects();
  const [openFaq, setOpenFaq] = useState('collapseOne');

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

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
            <span className="text-brand-orange font-bold">Contact Us</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Contact UP Industrial Consultants Limited
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Headquartered in Lucknow with Zonal &amp; District Offices across Uttar Pradesh. We are dedicated to
            empowering MSMEs, entrepreneurs, and government departments.
          </p>
        </div>
      </section>


      {/*  4. CONTACT INFORMATION & INQUIRY FORM GRID                 */}

      <section className="py-16 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">

          {/*  Section Header  */}
          <div className="flex flex-col gap-3 max-w-3xl mb-12 lg:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
              <span>Institutional Helpdesk</span>
              <span className="h-px w-12 bg-gradient-to-r from-brand-teal to-transparent"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Connect with Our Advisory Desks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Reach out to our Registered Head Office in Lucknow, Regional Zonal Hub in Kanpur, or submit an official
              project query online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/*  LEFT COLUMN: Official Address & Contact Hubs (5 Cols)  */}
            <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-right">

              {/*  Headquarters Office Card  */}
              <div
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100 relative overflow-hidden group hover:border-brand-teal/30 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0 shadow-2xs">
                    <span className="material-symbols-outlined text-2xl">corporate_fare</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Headquarters</span>
                    <h3 className="text-lg font-bold text-slate-900 m-0">Registered &amp; Head Office</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  <strong className="text-slate-800 font-semibold">UPICON Bhawan</strong>, 5th Floor, Vibhuti Khand, Gomti
                  Nagar, Lucknow – 226010, Uttar Pradesh, India.
                </p>
                <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-brand-teal text-base shrink-0">call</span>
                    <span><strong>Central Phones:</strong> +91 (0522) 272-0850 / 272-0851</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-brand-teal text-base shrink-0">mail</span>
                    <span><strong>Email Desk:</strong> contact@upicon.in | info@upicon.in</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-brand-teal text-base shrink-0">schedule</span>
                    <span><strong>Working Hours:</strong> Mon – Sat: 9:30 AM – 6:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/*  Regional Zonal Office Card (Kanpur)  */}
              <div
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100 relative overflow-hidden group hover:border-brand-orange/30 transition-all">
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0 shadow-2xs">
                    <span className="material-symbols-outlined text-2xl">location_city</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Regional Wing</span>
                    <h3 className="text-lg font-bold text-slate-900 m-0">Zonal Office (Kanpur)</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Industrial Estate, Fazalganj, Kanpur – 208012, Uttar Pradesh, India.
                </p>
                <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-brand-orange text-base shrink-0">call</span>
                    <span><strong>Zonal Desk:</strong> +91 (0512) 221-6543</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-brand-orange text-base shrink-0">mail</span>
                    <span><strong>Zonal Email:</strong> kanpur.zone@upicon.in</span>
                  </div>
                </div>
              </div>

              {/*  Key Departmental Desks & Helplines  */}
              <div className="bg-gradient-to-br from-[#0c2f35] to-[#081f23] text-white rounded-2xl p-6 sm:p-8 shadow-xl">
                <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-orange">support_agent</span>
                  Key Departmental Helplines
                </h4>
                <div className="flex flex-col gap-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-slate-300">Toll-Free National Helpline:</span>
                    <a href="tel:18001802026" className="font-bold text-brand-orange hover:underline">1800-180-2026</a>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-slate-300">MSME &amp; Bankable DPR Desk:</span>
                    <a href="mailto:dpr.msme@upicon.in"
                      className="font-medium text-white hover:underline">dpr.msme@upicon.in</a>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-slate-300">Skill Development Cell:</span>
                    <a href="mailto:skills@upicon.in" className="font-medium text-white hover:underline">skills@upicon.in</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Tenders &amp; RFP Desk:</span>
                    <a href="mailto:tenders@upicon.in" className="font-medium text-white hover:underline">tenders@upicon.in</a>
                  </div>
                </div>
              </div>

            </div>

            {/*  RIGHT COLUMN: Interactive Public Query & Consultation Form (7 Cols)  */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-card border border-slate-100">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-xs font-bold mb-2">
                    <span className="material-symbols-outlined text-sm">edit_note</span> Official Query Portal
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Submit an Institutional Enquiry</h2>
                  <p className="text-sm text-slate-500 mt-1">Fill out the form below. Our consultancy desk will address your
                    inquiry within 24–48 working hours.</p>
                </div>

                {/*  Form Element  */}
                <ContactForm />

              </div>
            </div>

          </div>
        </div>
      </section>


      {/*  5. GOOGLE MAPS & DISTRICT ADDA NETWORK LOCATOR             */}

      <section id="district-network" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">

          {/*  Section Header  */}
          <div className="flex flex-col gap-3 max-w-4xl mb-8 lg:mb-10" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
              <span>Physical Footprint</span>
              <span className="h-px w-12 bg-gradient-to-r from-brand-teal to-transparent"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Interactive Office Maps &amp; Network
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Locate UPICON headquarters in Lucknow Gomti Nagar or visit your regional district center across Uttar
              Pradesh.
            </p>
          </div>

          {/*  District Youth Adda Locator Bar  */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card mb-10" data-aos="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/*  Left 7 Cols: Icon + Title + Description  */}
              <div className="lg:col-span-7 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0 shadow-2xs">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 m-0">Statewide District Youth Adda Desk Finder
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 m-0 mt-1 leading-relaxed">Select a regional center to view
                    local office map location &amp; desk details</p>
                </div>
              </div>
              {/*  Right 5 Cols: Select Box  */}
              <div className="lg:col-span-5 w-full">
                <label htmlFor="district-selector"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Select District Desk:
                </label>
                <select id="district-selector" onChange={(e) => { }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:border-brand-teal outline-none transition-all shadow-2xs">
                  <option value="Lucknow (HQ)">Lucknow Head Office (Gomti Nagar)</option>
                  <option value="Kanpur Zonal">Kanpur Zonal Office (Fazalganj)</option>
                  <option value="Varanasi Center">Varanasi Facilitation Desk</option>
                  <option value="Agra Cluster">Agra Industrial Facilitation Desk</option>
                  <option value="Noida Desk">Gautam Buddha Nagar (Noida Desk)</option>
                  <option value="Gorakhpur Hub">Gorakhpur Regional Youth Adda</option>
                </select>
              </div>
            </div>
          </div>

          {/*  Maps Grid Container  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" data-aos="fade-up">

            {/*  Lucknow HQ Map Embed  */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-card flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-teal"></span>
                  <strong className="text-base text-slate-900 font-bold">Lucknow Head Office Map</strong>
                </div>
                <span className="text-xs text-slate-500 font-medium">Vibhuti Khand, Gomti Nagar</span>
              </div>
              <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
                <iframe title="UPICON Lucknow Head Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4878489725515!2d81.00249697624976!3d26.856230976681023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c246f41e57%3A0x2db4fb8b724581ed!2sUPICON%20Bhawan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            {/*  Kanpur Zonal Office Map Embed  */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-card flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-orange"></span>
                  <strong className="text-base text-slate-900 font-bold">Kanpur Zonal Office Map</strong>
                </div>
                <span className="text-xs text-slate-500 font-medium">Fazalganj Industrial Area</span>
              </div>
              <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
                <iframe title="UPICON Kanpur Zonal Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.492742910246!2d80.30154817623722!3d26.4719269769135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c381c1c38d381%3A0x6b1076f14068598a!2sFazalganj%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/*  6. FREQUENTLY ASKED CONTACT QUESTIONS (Accordion)           */}

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16" data-aos="fade-up">
            <div
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
              <span>Help Desk FAQs</span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Got Questions? We Have Answers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Quick information regarding UPICON services, DPR preparation, and office appointments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="accordion accordion-flush space-y-4" id="contact-faq-accordion">

              {/*  Item 1  */}
              <div className="accordion-item bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <h3 className="accordion-header" id="headingOne">
                  <button
                    className={`accordion-button font-bold text-slate-900 text-sm sm:text-base py-4 px-6 bg-slate-50 hover:bg-slate-100 focus:shadow-none ${openFaq === 'collapseOne' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleFaq('collapseOne')}
                    aria-expanded={openFaq === 'collapseOne'}
                    aria-controls="collapseOne">
                    How can I request a Detailed Project Report (DPR) from UPICON?
                  </button>
                </h3>
                <div id="collapseOne" className={`accordion-collapse collapse ${openFaq === 'collapseOne' ? 'show' : ''}`} aria-labelledby="headingOne"
                  data-bs-parent="#contact-faq-accordion">
                  <div
                    className="accordion-body text-xs sm:text-sm text-slate-600 leading-relaxed px-6 pb-5 border-t border-slate-200/80 bg-white">
                    You can submit an inquiry via our online contact form selecting "MSME DPR &amp; Project Advisory" or
                    email us directly at <strong className="text-slate-800">dpr.msme@upicon.in</strong>. Our project
                    consultants will review your project requirements and guide you through the process.
                  </div>
                </div>
              </div>

              {/*  Item 2  */}
              <div className="accordion-item bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <h3 className="accordion-header" id="headingTwo">
                  <button
                    className={`accordion-button font-bold text-slate-900 text-sm sm:text-base py-4 px-6 bg-slate-50 hover:bg-slate-100 focus:shadow-none ${openFaq === 'collapseTwo' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleFaq('collapseTwo')}
                    aria-expanded={openFaq === 'collapseTwo'}
                    aria-controls="collapseTwo">
                    What are the public visiting hours for UPICON Head Office in Lucknow?
                  </button>
                </h3>
                <div id="collapseTwo" className={`accordion-collapse collapse ${openFaq === 'collapseTwo' ? 'show' : ''}`} aria-labelledby="headingTwo"
                  data-bs-parent="#contact-faq-accordion">
                  <div
                    className="accordion-body text-xs sm:text-sm text-slate-600 leading-relaxed px-6 pb-5 border-t border-slate-200/80 bg-white">
                    The UPICON Lucknow Head Office (Vibhuti Khand, Gomti Nagar) is open Monday through Saturday from
                    <strong className="text-slate-800">9:30 AM to 6:00 PM IST</strong>. It remains closed on Sundays and
                    official Uttar Pradesh state government holidays.
                  </div>
                </div>
              </div>

              {/*  Item 3  */}
              <div className="accordion-item bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <h3 className="accordion-header" id="headingThree">
                  <button
                    className={`accordion-button font-bold text-slate-900 text-sm sm:text-base py-4 px-6 bg-slate-50 hover:bg-slate-100 focus:shadow-none ${openFaq === 'collapseThree' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleFaq('collapseThree')}
                    aria-expanded={openFaq === 'collapseThree'}
                    aria-controls="collapseThree">
                    Is prior appointment required to meet UPICON consultants?
                  </button>
                </h3>
                <div id="collapseThree" className={`accordion-collapse collapse ${openFaq === 'collapseThree' ? 'show' : ''}`} aria-labelledby="headingThree"
                  data-bs-parent="#contact-faq-accordion">
                  <div
                    className="accordion-body text-xs sm:text-sm text-slate-600 leading-relaxed px-6 pb-5 border-t border-slate-200/80 bg-white">
                    While walk-ins are welcomed at our public reception desk, we strongly recommend scheduling a prior
                    appointment via email (<strong className="text-slate-800">contact@upicon.in</strong>) or by calling our
                    central desk (<strong className="text-slate-800">+91 0522 272-0850</strong>) to ensure the concerned
                    departmental officer is available.
                  </div>
                </div>
              </div>

              {/*  Item 4  */}
              <div className="accordion-item bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <h3 className="accordion-header" id="headingFour">
                  <button
                    className={`accordion-button font-bold text-slate-900 text-sm sm:text-base py-4 px-6 bg-slate-50 hover:bg-slate-100 focus:shadow-none ${openFaq === 'collapseFour' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleFaq('collapseFour')}
                    aria-expanded={openFaq === 'collapseFour'}
                    aria-controls="collapseFour">
                    Where can I submit vendor empanelment or tender proposals?
                  </button>
                </h3>
                <div id="collapseFour" className={`accordion-collapse collapse ${openFaq === 'collapseFour' ? 'show' : ''}`} aria-labelledby="headingFour"
                  data-bs-parent="#contact-faq-accordion">
                  <div
                    className="accordion-body text-xs sm:text-sm text-slate-600 leading-relaxed px-6 pb-5 border-t border-slate-200/80 bg-white">
                    All tender submissions, vendor empanelment applications, and procurement inquiries should be sent to
                    <strong className="text-slate-800">tenders@upicon.in</strong> or submitted at the 5th Floor Reception
                    Desk, UPICON Bhawan, Gomti Nagar, Lucknow.
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
