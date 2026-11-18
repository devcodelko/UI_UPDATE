import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function TopBar() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <aside
      aria-label="Official Government Affiliation Header"
      className="bg-slate-900 border-b border-slate-200/80 text-[11px] text-slate-600 tracking-normal py-1.5 relative z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-4 px-4 lg:px-12">
        <div className="hidden lg:flex items-center gap-2 truncate text-slate-700">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
            ✓
          </span>
          <span className="font-medium text-slate-300">Under the aegis of</span>
          <strong className="font-semibold text-slate-200">
            Dept. of MSME &amp; Export Promotion, Govt. of Uttar Pradesh
          </strong>

        </div>
        <div className="flex items-center gap-3 shrink-0 text-slate-200 font-medium">
          <Link className="hover:text-brand-teal transition-colors" to="/">
            CAG Report
          </Link>
          <span className="text-slate-200">|</span>
          <Link className="hover:text-brand-teal transition-colors" to="/">
            CM Yuva
          </Link>
          <span className="text-slate-300">|</span>
          <Link className="hover:text-brand-teal transition-colors" to="/">
            e-Learning
          </Link>
          <span className="text-slate-300">|</span>
          <Link className="hover:text-brand-teal transition-colors" to="/contact">
            Contact
          </Link>
          <span className="text-slate-300">|</span>
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
        </div>
      </div>
    </aside>
  );
}

