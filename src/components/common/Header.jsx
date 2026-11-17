import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Header({ onOpenMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const { lang, currentLang, changeLanguage } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const isClosedByClickRef = useRef(false);
  const langDropdownRef = useRef(null);
  const location = useLocation();

  // Automatically close mega menu and language dropdown whenever route changes
  useEffect(() => {
    isClosedByClickRef.current = false;
    setIsMegaMenuOpen(false);
    setLangDropdownOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [location.pathname]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.group-hover-menu')) {
        setIsMegaMenuOpen(false);
        isClosedByClickRef.current = false;
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const closeMegaMenu = () => {
    isClosedByClickRef.current = true;
    setIsMegaMenuOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleMenuMouseEnter = () => {
    if (!isClosedByClickRef.current) {
      setIsMegaMenuOpen(true);
    }
  };

  const handleMenuMouseLeave = () => {
    isClosedByClickRef.current = false;
    setIsMegaMenuOpen(false);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const scrollDelta = 6;

    const handleScroll = () => {
      const rawScrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollTop = Math.max(0, rawScrollTop);

      if (scrollTop > 80) {
        setScrolled(true);

        // Scroll Down -> Hide header
        if (scrollTop > lastScrollTop + scrollDelta) {
          setHeaderHidden(true);
          document.documentElement.style.setProperty('--header-offset', '0px');
        }
        // Scroll Up -> Reveal header
        else if (scrollTop < lastScrollTop - scrollDelta) {
          setHeaderHidden(false);
          document.documentElement.style.setProperty('--header-offset', '80px');
        }
      } else {
        setHeaderHidden(false);
        document.documentElement.style.setProperty('--header-offset', '80px');
        if (scrollTop <= 40) {
          setScrolled(false);
        }
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectLanguage = (newLang) => {
    setLangDropdownOpen(false);
    changeLanguage(newLang);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isKnowledgeBankActive = [
    '/articles',
    '/odop',
    '/karigar',
    '/success-stories',
    '/webinars',
    '/cmyuva',
    '/msme',
    '/news-details'
  ].some(path => location.pathname.startsWith(path));

  return (
    <header className={`home2-header fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${scrolled ? 'scrolled' : ''} ${headerHidden ? 'header-hidden' : ''}`}>
      <div className="max-w-[1420px] mx-auto px-4 lg:px-12 h-20 flex items-center justify-between gap-4 header-inner transition-all duration-300">
        {/* Left: Logo & State Institution Badging */}
        <Link aria-label="UPICON Home" className="flex items-center gap-3.5 group shrink-0" to="/">
          <img
            alt="UPICON - UP Industrial Consultants Ltd."
            className="upicon-logo-black h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            src="/assets/images/upicon-logo.png"
          />
          <img
            alt="UPICON - UP Industrial Consultants Ltd."
            className="upicon-logo-white h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            src="/assets/images/upicon-logo-white.png"
          />
        </Link>

        {/* Center: Primary Navigation with Mega Menu */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 h-full text-[14px] font-semibold">
          <Link
            className={`home2-nav-link px-3 py-2 transition-all flex items-center gap-1 ${isActive('/') ? 'active font-bold' : ''}`}
            to="/"
          >
            Home
          </Link>

          {/* About Link */}
          <Link
            className={`home2-nav-link px-3 py-2 rounded-lg transition-all flex items-center gap-1 ${isActive('/about') ? 'active font-bold' : ''}`}
            to="/about"
          >
            About
          </Link>

          {/* Services with Interactive Enhanced Mega Menu Grid */}
          <div
            className={`relative h-full flex items-center group-hover-menu ${isMegaMenuOpen ? 'open' : ''}`}
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
          >
            <button
              type="button"
              onClick={() => setIsMegaMenuOpen(prev => !prev)}
              className={`home2-nav-dropdown-btn px-3 py-2 rounded-lg transition-all flex items-center gap-1 border-0 bg-transparent font-semibold cursor-pointer ${isKnowledgeBankActive ? 'active font-bold' : ''}`}
            >
              Knowledge Bank
              <span className={`material-symbols-outlined text-base opacity-75 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* MEGA MENU OVERLAY (4 Columns Enhanced Grid) */}
            {isMegaMenuOpen && (
              <div
                onClick={closeMegaMenu}
                className="mega-menu-panel absolute top-[100%] left-1/2 -translate-x-1/2 w-[960px] bg-white rounded-2xl shadow-card border border-slate-100 p-6 z-50"
                style={{
                  opacity: 1,
                  visibility: 'visible',
                  pointerEvents: 'auto',
                  transform: 'translateX(-50%) translateY(0)'
                }}
              >
                <div className="mega-menu-grid">
                  {/* Column 1: Insights */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                      <span className="w-8 h-8 rounded-lg bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-lg">lightbulb</span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Insights</span>
                    </div>
                    <ul className="flex flex-col gap-1.5 p-0 m-0 list-none">
                      <li>
                        <Link onClick={closeMegaMenu} className="group mega-menu-item-card" to="/articles">
                          <span className="font-semibold text-slate-900 group-hover:text-brand-teal text-[13px] leading-snug">
                            Articles &amp; Research Papers
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                            Policy briefs &amp; sectoral studies
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Spotlights */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                      <span className="w-8 h-8 rounded-lg bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-lg">auto_awesome</span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Spotlights</span>
                    </div>
                    <ul className="flex flex-col gap-1.5 p-0 m-0 list-none">
                      <li>
                        <Link onClick={closeMegaMenu} className="group mega-menu-item-card" to="/odop">
                          <span className="font-semibold text-slate-900 group-hover:text-brand-orange text-[13px] leading-snug">
                            ODOP Product of the Month
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                            District artisan showcases
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMegaMenu} className="group mega-menu-item-card" to="/karigar">
                          <span className="font-semibold text-slate-900 group-hover:text-brand-orange text-[13px] leading-snug">
                            UP KE Karigar
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                            Master craftsman recognition
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMegaMenu} className="group mega-menu-item-card" to="/success-stories">
                          <span className="font-semibold text-slate-900 group-hover:text-brand-orange text-[13px] leading-snug">
                            Success Stories
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                            Impact stories across 75 districts
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Events */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                      <span className="w-8 h-8 rounded-lg bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-lg">event</span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Events</span>
                    </div>
                    <ul className="flex flex-col gap-1.5 p-0 m-0 list-none">
                      <li>
                        <Link onClick={closeMegaMenu} className="group mega-menu-item-card" to="/webinars">
                          <span className="font-semibold text-slate-900 group-hover:text-brand-teal text-[13px] leading-snug">
                            Webinars &amp; Podcasts
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                            Industrial summits &amp; expert series
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 4: FAQ's */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                      <span className="w-8 h-8 rounded-lg bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-lg">quiz</span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">FAQ's</span>
                    </div>
                    <ul className="flex flex-col gap-1.5 p-0 m-0 list-none">
                      <li>
                        <Link onClick={closeMegaMenu} className="group mega-menu-item-card" to="/cmyuva">
                          <span className="font-semibold text-slate-900 group-hover:text-brand-orange text-[13px] leading-snug">
                            CM Yuva
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                            Scheme guidance &amp; eligibility
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMegaMenu} className="group mega-menu-item-card" to="/msme">
                          <span className="font-semibold text-slate-900 group-hover:text-brand-orange text-[13px] leading-snug">
                            MSME Project Reports
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                            Bankable DPR &amp; SIDBI checklists
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Business Units Link */}
          <Link
            className={`home2-nav-link px-3 py-2 rounded-lg transition-all ${isActive('/business-units') ? 'active font-bold' : ''}`}
            to="/business-units"
          >
            Business Units
          </Link>
          {/* e-Learning Link */}
          <Link
            className={`home2-nav-link px-3 py-2 rounded-lg transition-all`}
            to="https://training.upicon.in/" target="_blank"
          >
            e-Learning
          </Link>
          {/* Careers Link */}
          <Link
            className={`home2-nav-link px-3 py-2 rounded-lg transition-all ${isActive('/careers') ? 'active font-bold' : ''}`}
            to="/careers"
          >
            Careers
          </Link>

          {/* Contact Us Link */}
          <Link
            className={`home2-nav-link px-3 py-2 rounded-lg transition-all ${isActive('/contact') ? 'active font-bold' : ''}`}
            to="/contact"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-2.5">
          {/* Secondary CTA: District Youth Adda */}
          <Link
            className="home2-header-cta home2-nav-link hidden sm:inline-flex items-center justify-center gap-1.5 px-3 py-1.5 font-semibold text-xs tracking-wide transition-all"
            to="https://cmyouthadda.in/" target="_blank"
          >
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span>YOUTH ADDA</span>
          </Link>

          {/* Language Selector Dropdown */}
          <div
            ref={langDropdownRef}
            className="relative group/lang flex items-center"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <button
              type="button"
              id="header-lang-btn"
              onClick={() => setLangDropdownOpen(prev => !prev)}
              className="home2-lang-btn flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold transition-all border-0 bg-transparent cursor-pointer uppercase notranslate"
              aria-expanded={langDropdownOpen}
              aria-haspopup="true"
              translate="no"
            >
              <span className="material-symbols-outlined text-base notranslate" translate="no">language</span>
              <span id="current-lang-text" className="font-bold tracking-tight notranslate" translate="no">{currentLang}</span>
              <span className={`material-symbols-outlined text-sm opacity-80 transition-transform notranslate ${langDropdownOpen ? 'rotate-180' : ''}`} translate="no">
                expand_more
              </span>
            </button>

            {/* Language Dropdown Menu */}
            <div className={`lang-dropdown-menu absolute right-0 top-[115%] w-36 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 transition-all ${langDropdownOpen ? 'block' : 'hidden'}`}>
              <button
                type="button"
                onClick={() => handleSelectLanguage('en')}
                className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-brand-orange hover:bg-slate-50 transition-colors uppercase border-0 bg-transparent cursor-pointer text-left notranslate"
                translate="no"
              >
                <span className="font-bold text-slate-900 notranslate" translate="no">ENGLISH</span>
                <span className={`material-symbols-outlined text-sm notranslate ${lang === 'en' ? 'text-brand-orange' : 'text-transparent'}`} translate="no">
                  check
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleSelectLanguage('hi')}
                className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-brand-orange hover:bg-slate-50 transition-colors uppercase border-0 bg-transparent cursor-pointer text-left notranslate"
                translate="no"
              >
                <span className="font-bold text-slate-900 notranslate" translate="no">HINDI</span>
                <span className={`material-symbols-outlined text-sm notranslate ${lang === 'hi' ? 'text-brand-orange' : 'text-transparent'}`} translate="no">
                  check
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle Mobile Navigation Menu"
            onClick={onOpenMobileMenu}
            className="home2-menu-toggle lg:hidden p-2 rounded-lg transition-colors border-0 bg-transparent flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
