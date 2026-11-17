import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function MobileMenuDrawer({ isOpen, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const { lang, changeLanguage } = useLanguage();

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Mobile Offcanvas Backdrop Overlay */}
      <div
        id="mobile-menu-backdrop"
        aria-hidden="true"
        onClick={onClose}
        className={isOpen ? 'open' : ''}
      />

      {/* Mobile Offcanvas Drawer Panel */}
      <div
        id="mobile-menu-drawer"
        aria-label="Mobile Navigation Menu"
        className={isOpen ? 'open' : ''}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <Link className="flex items-center gap-2.5" to="/" onClick={handleLinkClick}>
            <img alt="UPICON" className="h-8 w-auto object-contain" src="/assets/images/upicon-logo.png" />
          </Link>
          <div className="flex items-center gap-2">
            {/* Language Switcher in Drawer */}
            <div className="inline-flex items-center rounded-full bg-white border border-slate-200 p-0.5 shadow-2xs notranslate" translate="no">
              <button
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold border-0 cursor-pointer notranslate ${lang === 'en' ? 'bg-brand-teal text-white' : 'text-slate-600 bg-transparent font-semibold'}`}
                type="button"
                onClick={() => changeLanguage('en')}
                translate="no"
              >
                EN
              </button>
              <button
                className={`px-2 py-0.5 rounded-full text-[10px] border-0 cursor-pointer notranslate ${lang === 'hi' ? 'bg-brand-teal text-white font-bold' : 'text-slate-600 bg-transparent font-semibold'}`}
                type="button"
                onClick={() => changeLanguage('hi')}
                translate="no"
              >
                हिंदी
              </button>
            </div>
            <button
              id="mobile-menu-close"
              aria-label="Close Menu"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors border-0 bg-transparent flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Drawer Body Navigation Links */}
        <div className="p-4 flex flex-col gap-4 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            {/* Home Link */}
            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              to="/"
              onClick={handleLinkClick}
            >
              <span>Home</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>

            {/* About Link */}
            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              to="/about"
              onClick={handleLinkClick}
            >
              <span>About</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>

            {/* Knowledge Bank Accordion Menu */}
            <div className="flex flex-col">
              <button
                id="mobile-services-toggle"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between border-0 bg-transparent text-slate-700 font-semibold text-sm w-full cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <span>Knowledge Bank</span>
                </span>
                <span
                  id="mobile-services-arrow"
                  className="material-symbols-outlined text-base transition-transform"
                  style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>

              {/* Collapsible Submenu */}
              <div
                id="mobile-services-submenu"
                className={`${servicesOpen ? 'flex' : 'hidden'} pl-3 py-2 flex-col gap-3 bg-slate-50/80 rounded-xl border border-slate-100 my-1`}
              >
                {/* Column 1: Insights */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal px-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">lightbulb</span> Insights
                  </span>
                  <Link
                    className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                    to="/articles"
                    onClick={handleLinkClick}
                  >
                    <span className="font-semibold text-slate-900">Articles &amp; Research Papers</span>
                    <span className="text-[10px] text-slate-500">Policy briefs &amp; sectoral studies</span>
                  </Link>
                </div>

                {/* Column 2: Spotlights */}
                <div className="flex flex-col gap-1 pt-1.5 border-t border-slate-200/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange px-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">auto_awesome</span> Spotlights
                  </span>
                  <Link
                    className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                    to="/odop"
                    onClick={handleLinkClick}
                  >
                    <span className="font-semibold text-slate-900">ODOP Product of the Month</span>
                    <span className="text-[10px] text-slate-500">District artisan showcases</span>
                  </Link>
                  <Link
                    className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                    to="/karigar"
                    onClick={handleLinkClick}
                  >
                    <span className="font-semibold text-slate-900">UP KE Karigar</span>
                    <span className="text-[10px] text-slate-500">Master craftsman recognition</span>
                  </Link>
                  <Link
                    className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                    to="/success-stories"
                    onClick={handleLinkClick}
                  >
                    <span className="font-semibold text-slate-900">Success Stories</span>
                    <span className="text-[10px] text-slate-500">Impact stories across 75 districts</span>
                  </Link>
                </div>

                {/* Column 3: Events */}
                <div className="flex flex-col gap-1 pt-1.5 border-t border-slate-200/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal px-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">event</span> Events
                  </span>
                  <Link
                    className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                    to="/webinars"
                    onClick={handleLinkClick}
                  >
                    <span className="font-semibold text-slate-900">Webinars &amp; Podcasts</span>
                    <span className="text-[10px] text-slate-500">Industrial summits &amp; expert series</span>
                  </Link>
                </div>

                {/* Column 4: FAQ's */}
                <div className="flex flex-col gap-1 pt-1.5 border-t border-slate-200/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange px-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">quiz</span> FAQ's
                  </span>
                  <Link
                    className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                    to="/cmyuva"
                    onClick={handleLinkClick}
                  >
                    <span className="font-semibold text-slate-900">CM Yuva</span>
                    <span className="text-[10px] text-slate-500">Scheme guidance &amp; eligibility</span>
                  </Link>
                  <Link
                    className="px-2 py-1.5 rounded-md hover:bg-white text-xs flex flex-col"
                    to="/msme"
                    onClick={handleLinkClick}
                  >
                    <span className="font-semibold text-slate-900">MSME Project Reports</span>
                    <span className="text-[10px] text-slate-500">Bankable DPR &amp; SIDBI checklists</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Business Units Link */}
            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              to="/business-units"
              onClick={handleLinkClick}
            >
              <span>Business Units</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>
            {/* e-Learning Link */}
            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              to="https://training.upicon.in/"
              onClick={handleLinkClick}
            >
              <span>e-Learning</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>

            {/* Careers Link */}
            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              to="/careers"
              onClick={handleLinkClick}
            >
              <span>Careers</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>

            {/* Contact Us Link */}
            <Link
              className="px-3 py-2.5 rounded-lg hover:bg-brand-teal-light hover:text-brand-teal transition-colors flex items-center justify-between"
              to="/contact"
              onClick={handleLinkClick}
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
            </Link>
          </div>

          {/* Quick Action Buttons inside Mobile Drawer */}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-auto">
            <Link
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs shadow-sm transition-colors text-center"
              to="/business-units"
              onClick={handleLinkClick}
            >
              <span>Explore Advisory Services</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
