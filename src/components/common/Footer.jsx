import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ hideCtaBanner = false }) {
  const handleScheduleConsultation = () => {
    alert('Advisory Consultation Scheduler connected. Please input contact details in the following step.');
  };

  return (
    <footer className="footer-light-theme w-full text-slate-700 text-sm border-0 border-none" style={{ backgroundColor: '#f7f6f6' }} id="contact">
      {/* Top CTA Banner Inside Footer (Unless hidden) */}
      {!hideCtaBanner && (
        <div className="max-w-[1420px] mx-auto px-4 lg:px-12 pt-16 pb-8 lg:pt-20 lg:pb-10 relative z-10" data-aos="zoom-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
                Start Your Enterprise Journey
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Have an Enterprise Idea? <br />
                Let’s Build It Together.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Connect with UPICON’s institutional advisory desks for end-to-end DPR formulation, statutory approvals, CM
                YUVA funding facilitation, and district-level technical mentorship.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-base shadow-md transition-all text-center border-0 cursor-pointer"
                onClick={handleScheduleConsultation}
              >
                <span>Schedule Advisory Consultation</span>
                <span className="material-symbols-outlined text-lg">calendar_month</span>
              </button>
              <Link
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-[#e2e8f0] shadow-xs transition-all text-center"
                to="/business-units"
              >
                <span>Explore All Industrial Services</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer 5-Column Navigation Area */}
      <div className="max-w-[1420px] mx-auto px-4 lg:px-12 pt-6 pb-14 lg:pb-16" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: Brand & Logo on Clean White Badge */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="bg-white p-3 rounded-xl w-fit shadow-xs border border-[#e2e8f0]">
              <img
                alt="UPICON - UP Industrial Consultants Ltd."
                className="h-10 w-auto object-contain"
                src="/assets/images/upicon-footer-logo.png"
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pioneering state-backed industrial consultancy and MSME transformation across Uttar Pradesh since 1974.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-slate-900 font-bold text-base tracking-wide border-b border-[#e2e8f0] pb-2.5">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-slate-600 text-sm list-none p-0 m-0">
              <li>
                <Link className="hover:text-brand-orange text-slate-600 transition-colors flex items-center gap-2 text-sm" to="/business-units">
                  <span className="material-symbols-outlined text-sm text-brand-teal">chevron_right</span>
                  <span>Training &amp; Skill</span>
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-orange text-slate-600 transition-colors flex items-center gap-2 text-sm" to="/business-units">
                  <span className="material-symbols-outlined text-sm text-brand-teal">chevron_right</span>
                  <span>Consultancy Group</span>
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-orange text-slate-600 transition-colors flex items-center gap-2 text-sm" to="/business-units">
                  <span className="material-symbols-outlined text-sm text-brand-teal">chevron_right</span>
                  <span>CSR Training</span>
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-orange text-slate-600 transition-colors flex items-center gap-2 text-sm" to="/cmyuva">
                  <span className="material-symbols-outlined text-sm text-brand-teal">chevron_right</span>
                  <span>Youth Adda</span>
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-orange text-slate-600 transition-colors flex items-center gap-2 text-sm" to="/contact">
                  <span className="material-symbols-outlined text-sm text-brand-teal">chevron_right</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Registered & Corporate Office */}
          <div className="flex flex-col gap-3">
            <h3 className="text-slate-900 font-bold text-base tracking-wide border-b border-[#e2e8f0] pb-2.5">
              Registered Office
            </h3>
            <div className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
              <span className="material-symbols-outlined text-base text-brand-orange mt-0.5 shrink-0">location_on</span>
              <span>
                5th Floor, Kabir Bhawan,<br />
                G. T. Road, Kanpur<br />
                Uttar Pradesh - 208002
              </span>
            </div>
            <div className="flex flex-col gap-3 pt-3">
              <h3 className="text-slate-900 font-bold text-base tracking-wide border-b border-[#e2e8f0] pb-2.5">
                Corporate Office Address
              </h3>
              <div className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                <span className="material-symbols-outlined text-base text-brand-orange mt-0.5 shrink-0">location_on</span>
                <span>
                  7th Floor, Rohtas Summit Building, Vibhuti Khand,<br />
                  Gomti Nagar, Lucknow<br />
                  Uttar Pradesh - 226 010
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Office Hours */}
          <div className="flex flex-col gap-3">
            <h3 className="text-slate-900 font-bold text-base tracking-wide border-b border-[#e2e8f0] pb-2.5">
              Office Hours
            </h3>
            <div className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
              <span className="material-symbols-outlined text-base text-brand-teal mt-0.5 shrink-0">schedule</span>
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
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 font-bold text-base tracking-wide border-b border-[#e2e8f0] pb-2.5">
                Contact Us
              </h3>
              <span className="text-slate-900 font-bold flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-base text-brand-orange">call</span> 0522 423 3727
              </span>
              <span className="text-slate-600 flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-base text-brand-teal">mail</span>
                <a href="mailto:info@upicon.in" className="hover:text-brand-orange text-slate-600">info@upicon.in</a>
              </span>
            </div>
            <div className="pt-3 border-t border-[#e2e8f0] flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Enquiry</span>
              <span className="text-slate-600 flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-base text-brand-teal">mail</span>
                <a href="mailto:mdoffice@upicon.in" className="hover:text-brand-orange text-slate-600">mdoffice@upicon.in</a>
              </span>
            </div>
            <div className="pt-3 border-t border-[#e2e8f0] flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Banking Support</span>
              <span className="text-slate-600 flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-base text-brand-teal">mail</span>
                <a href="mailto:fi.up@upicon.in" className="hover:text-brand-orange text-slate-600">fi.up@upicon.in</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sovereign Copyright Strip */}
      <div className="footer-bottom-strip border-t border-[#e2e8f0]" style={{ backgroundColor: '#ededed' }}>
        <div className="max-w-[1420px] mx-auto px-4 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <p>© 1974 - 2026 UP Industrial Consultants Limited (UPICON). All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link className="text-slate-600 hover:text-brand-orange transition-colors" to="/privacy-policy">
              Privacy Policy
            </Link>
            <span className="text-slate-400">|</span>
            <Link className="text-slate-600 hover:text-brand-orange transition-colors" to="/terms-of-service">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
