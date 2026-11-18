import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>

      {/*  13. FINAL HIGH-CONVERSION CTA SECTION                      */}

      <section className="bg-gradient-to-br from-[#0c2f35] to-[#081f23] py-16 lg:py-20 text-white relative overflow-hidden"
        data-aos="zoom-in" id="contact">
        {/*  Subtle accent glows  */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
                Start Your Enterprise Journey
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Have an Enterprise Idea? <br />
                Let’s Build It Together.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Connect with UPICON’s institutional advisory desks for end-to-end DPR formulation, statutory approvals, CM
                YUVA funding facilitation, and district-level technical mentorship.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm shadow-md transition-all text-center border-0"
                onClick={() => { }}>
                <span>Schedule Advisory Consultation</span>
                <span className="material-symbols-outlined text-base">calendar_month</span>
              </button>
              <a className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all text-center"
                href="#services">
                <span>Explore All Industrial Services</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-[#0B151F] text-slate-300 border-t-2 border-brand-teal text-xs">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Col 1: Brand & Logo */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="bg-white p-3 rounded-xl w-fit shadow-md border border-slate-200">
                <img
                  alt="UPICON - UP Industrial Consultants Ltd."
                  className="h-9 w-auto object-contain"
                  src="/assets/images/upicon-footer-logo.png"
                />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Pioneering state-backed industrial consultancy and MSME transformation across Uttar Pradesh since 1974.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-bold text-sm tracking-wide border-b border-slate-800 pb-2">Quick Links</h3>
              <ul className="flex flex-col gap-2.5 text-slate-400 p-0 m-0 list-none">
                <li>
                  <Link className="group hover:text-white transition-all duration-300 ease-out flex items-center gap-2 hover:translate-x-1.5" to="/business-units">
                    <span className="material-symbols-outlined text-base text-brand-teal group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all duration-300 shrink-0">chevron_right</span>
                    <span className="transition-colors duration-300">Training &amp; Skill</span>
                  </Link>
                </li>
                <li>
                  <Link className="group hover:text-white transition-all duration-300 ease-out flex items-center gap-2 hover:translate-x-1.5" to="/business-units">
                    <span className="material-symbols-outlined text-base text-brand-teal group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all duration-300 shrink-0">chevron_right</span>
                    <span className="transition-colors duration-300">Consultancy Group</span>
                  </Link>
                </li>
                <li>
                  <Link className="group hover:text-white transition-all duration-300 ease-out flex items-center gap-2 hover:translate-x-1.5" to="/business-units">
                    <span className="material-symbols-outlined text-base text-brand-teal group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all duration-300 shrink-0">chevron_right</span>
                    <span className="transition-colors duration-300">CSR Training</span>
                  </Link>
                </li>
                <li>
                  <Link className="group hover:text-white transition-all duration-300 ease-out flex items-center gap-2 hover:translate-x-1.5" to="/#district-network">
                    <span className="material-symbols-outlined text-base text-brand-teal group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all duration-300 shrink-0">chevron_right</span>
                    <span className="transition-colors duration-300">Youth Adda</span>
                  </Link>
                </li>
                <li>
                  <Link className="group hover:text-white transition-all duration-300 ease-out flex items-center gap-2 hover:translate-x-1.5" to="/contact">
                    <span className="material-symbols-outlined text-base text-brand-teal group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all duration-300 shrink-0">chevron_right</span>
                    <span className="transition-colors duration-300">Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Offices */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-bold text-sm tracking-wide border-b border-slate-800 pb-2">Registered Office</h3>
              <div className="flex items-start gap-1.5 text-slate-400 leading-relaxed">
                <span className="material-symbols-outlined text-sm text-brand-orange mt-0.5 shrink-0">location_on</span>
                <span>
                  5th Floor, Kabir Bhawan, G. T. Road, Kanpur, Uttar Pradesh - 208002
                </span>
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <h3 className="text-white font-bold text-sm tracking-wide border-b border-slate-800 pb-2">
                  Corporate Office Address
                </h3>
                <div className="flex items-start gap-1.5 text-slate-400 leading-relaxed">
                  <span className="material-symbols-outlined text-sm text-brand-orange mt-0.5 shrink-0">location_on</span>
                  <span>
                    7th Floor, Rohtas Summit Building, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226 010
                  </span>
                </div>
              </div>
            </div>

            {/* Col 4: Office Hours */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-bold text-sm tracking-wide border-b border-slate-800 pb-2">Office Hours</h3>
              <div className="flex items-start gap-1.5 text-slate-400 leading-relaxed">
                <span className="material-symbols-outlined text-sm text-brand-teal mt-0.5 shrink-0">schedule</span>
                <div>
                  Mon-Sat: 09:30AM-6:00PM
                  <br />
                  2nd &amp; 4th Sat: Closed
                  <br />
                  Sunday: Closed
                </div>
              </div>
            </div>

            {/* Col 5: Helpdesk & Contacts */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-white font-bold text-sm tracking-wide border-b border-slate-800 pb-2">Contact Us</h3>
                <span className="text-white font-bold flex items-center gap-1.5 text-xs">
                  <span className="material-symbols-outlined text-sm text-brand-orange">call</span> 0522 423 3727
                </span>
                <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                  <span className="material-symbols-outlined text-sm text-brand-teal">mail</span> info@upicon.in
                </span>
              </div>
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Enquiry</span>
                <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                  <span className="material-symbols-outlined text-sm text-brand-teal">mail</span> mdoffice@upicon.in
                </span>
              </div>
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Banking Support</span>
                <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                  <span className="material-symbols-outlined text-sm text-brand-teal">mail</span> fi.up@upicon.in
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sovereign Copyright Strip */}
        <div className="border-t border-slate-800/80 bg-[#070D14]">
          <div className="max-w-7xl mx-auto px-4 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
            <p>© 1974 - 2026 UP Industrial Consultants Limited (UPICON). All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link className="hover:text-slate-300 transition-colors" to="/privacy-policy">
                Privacy Policy
              </Link>
              <span className="text-slate-800">|</span>
              <Link className="hover:text-slate-300 transition-colors" to="/terms-of-service">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
}
