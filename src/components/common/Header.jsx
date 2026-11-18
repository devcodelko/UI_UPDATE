import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ onOpenMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] ${scrolled ? 'scrolled' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Left: Logo & State Institution Badging */}
        <Link aria-label="UPICON Home" className="flex items-center gap-3.5 group shrink-0" to="/">
          <img
            alt="UPICON - UP Industrial Consultants Ltd."
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            src="/assets/images/upicon-logo.png"
          />
          <div className="hidden xl:flex flex-col border-l border-slate-200 pl-3 py-0.5">
            <span className="text-[10px] font-bold tracking-wider uppercase text-brand-teal leading-tight">
              U.P. Industrial Consultants Ltd.
            </span>
            <span className="text-[11px] font-medium text-slate-500">
              A Joint Venture Institution • Estd. 1974
            </span>
          </div>
        </Link>

        {/* Center: Primary Navigation with Mega Menu */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 h-full text-[14px] font-semibold text-slate-700">
          <Link
            className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1 ${isActive('/')
              ? 'bg-brand-teal text-white font-bold'
              : 'hover:text-brand-teal hover:bg-brand-teal-light text-slate-700'
              }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1 ${isActive('/home-2')
              ? 'bg-brand-teal text-white font-bold'
              : 'hover:text-brand-teal hover:bg-brand-teal-light text-slate-700'
              }`}
            to="/home"
          >
            Home 2
          </Link>
          <Link
            className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1 ${isActive('/about')
              ? 'bg-brand-teal text-white font-bold'
              : 'hover:text-brand-teal hover:bg-brand-teal-light text-slate-700'
              }`}
            to="/about"
          >
            About
          </Link>

          {/* Services with Interactive Enhanced Mega Menu Grid */}
          <div
            className="relative h-full flex items-center group-hover-menu"
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
          >
            <button
              className="px-3 py-2 rounded-lg hover:text-brand-teal hover:bg-brand-teal-light transition-all flex items-center gap-1 border-0 bg-transparent text-slate-700 font-semibold cursor-pointer"
              onClick={() => setIsMegaOpen((prev) => !prev)}
            >
              Knowledge Bank
              <span
                className={`material-symbols-outlined text-base opacity-60 transition-transform ${isMegaOpen ? 'rotate-180' : ''
                  }`}
              >
                expand_more
              </span>
            </button>
            {/* MEGA MENU OVERLAY (4 Columns Enhanced Grid) */}
            <div
              className={`mega-menu-panel absolute top-[100%] left-1/2 -translate-x-1/2 w-[960px] bg-white rounded-2xl shadow-card border border-slate-100 p-6 z-50 ${isMegaOpen ? 'open' : ''
                }`}
              onClick={(e) => {
                if (e.target.closest('a')) {
                  setIsMegaOpen(false);
                }
              }}
            >
              <div className="mega-menu-grid">
                {/* Column 1: Insights */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-8 h-8 rounded-lg bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-lg">lightbulb</span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                      Insights
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 p-0 m-0 list-none">
                    <li>
                      <Link className="group mega-menu-item-card" to="/articles">
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
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      Spotlights
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 p-0 m-0 list-none">
                    <li>
                      <Link className="group mega-menu-item-card" to="/odop">
                        <span className="font-semibold text-slate-900 group-hover:text-brand-orange text-[13px] leading-snug">
                          ODOP Product of the Month
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                          District artisan showcases
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="group mega-menu-item-card" to="/karigar">
                        <span className="font-semibold text-slate-900 group-hover:text-brand-orange text-[13px] leading-snug">
                          UP KE Karigar
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                          Master craftsman recognition
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="group mega-menu-item-card" to="/success-stories">
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
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                      Events
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 p-0 m-0 list-none">
                    <li>
                      <Link className="group mega-menu-item-card" to="/webinars">
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
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      FAQ's
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 p-0 m-0 list-none">
                    <li>
                      <Link className="group mega-menu-item-card" to="/cmyuva">
                        <span className="font-semibold text-slate-900 group-hover:text-brand-orange text-[13px] leading-snug">
                          CM Yuva
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                          Scheme guidance &amp; eligibility
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="group mega-menu-item-card" to="/msme">
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
          </div>

          <Link
            className={`px-3 py-2 rounded-lg transition-all ${isActive('/business-units')
              ? 'bg-brand-teal text-white font-bold'
              : 'hover:text-brand-teal hover:bg-brand-teal-light text-slate-700'
              }`}
            to="/business-units"
          >
            Business Units
          </Link>
          <Link
            className={`px-3 py-2 rounded-lg transition-all ${isActive('/careers')
              ? 'bg-brand-teal text-white font-bold'
              : 'hover:text-brand-teal hover:bg-brand-teal-light text-slate-700'
              }`}
            to="/careers"
          >
            Careers
          </Link>
          <Link
            className={`px-3 py-2 rounded-lg transition-all ${isActive('/contact')
              ? 'bg-brand-teal text-white font-bold'
              : 'hover:text-brand-teal hover:bg-brand-teal-light text-slate-700'
              }`}
            to="/contact"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-2.5">
          <Link
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold text-xs tracking-wide transition-all"
            to="/#district-network"
          >
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span>Youth Adda</span>
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            aria-label="Toggle Mobile Navigation Menu"
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-brand-teal hover:bg-slate-100 transition-colors border-0 bg-transparent flex items-center justify-center cursor-pointer"
            id="mobile-menu-toggle"
            onClick={onOpenMobileMenu}
            type="button"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
