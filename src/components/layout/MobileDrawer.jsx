import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function MobileDrawer({ isOpen, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const { lang, changeLanguage } = useLanguage();

  return (
    <>
      {/* Mobile Offcanvas Backdrop Overlay */}
      <div
        aria-hidden="true"
        className={isOpen ? 'open' : ''}
        id="mobile-menu-backdrop"
        onClick={onClose}
      ></div>

      {/* Mobile Offcanvas Drawer Panel */}
      <div
        aria-label="Mobile Navigation Menu"
        className={isOpen ? 'open' : ''}
        id="mobile-menu-drawer"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <Link className="flex items-center gap-2.5" onClick={onClose} to="/">
            <img
              alt="UPICON"
              className="h-8 w-auto object-contain"
              src="/assets/images/upicon-logo.png"
            />
          </Link>
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center rounded-full bg-white border border-slate-200 p-0.5 shadow-2xs">
              <button
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all border-0 cursor-pointer ${lang === 'en'
                    ? 'bg-brand-teal text-white shadow-2xs'
                    : 'text-slate-600 hover:text-brand-teal bg-transparent'
                  }`}
                onClick={() => changeLanguage('en')}
                type="button"
              >
                EN
              </button>
              <button
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all border-0 cursor-pointer ${lang === 'hi'
                    ? 'bg-brand-teal text-white shadow-2xs'
                    : 'text-slate-600 hover:text-brand-teal bg-transparent'
                  }`}
                onClick={() => changeLanguage('hi')}
                type="button"
              >
                हिंदी
              </button>
            </div>
            <button
              aria-label="Close Menu"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors border-0 bg-transparent flex items-center justify-center cursor-pointer"
              id="mobile-menu-close"
              onClick={onClose}
              type="button"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Drawer Body Navigation Links */}
        <div className="p-4 flex flex-col gap-4 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              onClick={onClose}
              to="/"
            >
              <span>Home</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>

            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              onClick={onClose}
              to="/home"
            >
              <span>Home 2</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>

            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              onClick={onClose}
              to="/about"
            >
              <span>About</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>

            {/* Knowledge Bank Accordion Menu */}
            <div className="flex flex-col">
              <button
                className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between border-0 bg-transparent text-slate-700 font-semibold text-sm w-full cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
                type="button"
              >
                <span className="flex items-center gap-1.5">
                  <span>Knowledge Bank</span>
                </span>
                <span
                  className="material-symbols-outlined text-base transition-transform"
                  style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>

              {/* Collapsible Submenu */}
              {servicesOpen && (
                <div className="pl-3 py-2 flex flex-col gap-3 bg-slate-50/80 rounded-xl border border-slate-100 my-1">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal px-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">lightbulb</span> Insights
                    </span>
                    <Link
                      className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                      onClick={onClose}
                      to="/articles"
                    >
                      <span className="font-semibold text-slate-900">Articles &amp; Research Papers</span>
                      <span className="text-[10px] text-slate-500">Policy briefs &amp; sectoral studies</span>
                    </Link>
                  </div>

                  <div className="flex flex-col gap-1 pt-1.5 border-t border-slate-200/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange px-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">auto_awesome</span> Spotlights
                    </span>
                    <Link
                      className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                      onClick={onClose}
                      to="/odop"
                    >
                      <span className="font-semibold text-slate-900">ODOP Product of the Month</span>
                      <span className="text-[10px] text-slate-500">District artisan showcases</span>
                    </Link>
                    <Link
                      className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                      onClick={onClose}
                      to="/karigar"
                    >
                      <span className="font-semibold text-slate-900">UP KE Karigar</span>
                      <span className="text-[10px] text-slate-500">Master craftsman recognition</span>
                    </Link>
                    <Link
                      className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                      onClick={onClose}
                      to="/success-stories"
                    >
                      <span className="font-semibold text-slate-900">Success Stories</span>
                      <span className="text-[10px] text-slate-500">Impact stories across 75 districts</span>
                    </Link>
                  </div>

                  <div className="flex flex-col gap-1 pt-1.5 border-t border-slate-200/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal px-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">event</span> Events
                    </span>
                    <Link
                      className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                      onClick={onClose}
                      to="/webinars"
                    >
                      <span className="font-semibold text-slate-900">Webinars &amp; Podcasts</span>
                      <span className="text-[10px] text-slate-500">Industrial summits &amp; expert series</span>
                    </Link>
                  </div>

                  <div className="flex flex-col gap-1 pt-1.5 border-t border-slate-200/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange px-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">quiz</span> FAQ's
                    </span>
                    <Link
                      className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                      onClick={onClose}
                      to="/cmyuva"
                    >
                      <span className="font-semibold text-slate-900">CM Yuva</span>
                      <span className="text-[10px] text-slate-500">Scheme guidance &amp; eligibility</span>
                    </Link>
                    <Link
                      className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                      onClick={onClose}
                      to="/msme"
                    >
                      <span className="font-semibold text-slate-900">MSME Project Reports</span>
                      <span className="text-[10px] text-slate-500">Bankable DPR &amp; SIDBI checklists</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              onClick={onClose}
              to="/business-units"
            >
              <span>Business Units</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>

            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              onClick={onClose}
              to="/careers"
            >
              <span>Careers</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>

            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              onClick={onClose}
              to="/contact"
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
