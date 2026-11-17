import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable PageHeader component for inner pages
 *
 * @param {string|React.ReactNode} title - Main heading (H1)
 * @param {string|React.ReactNode} subtitle - Description / Subtitle paragraph
 * @param {string|React.ReactNode} description - Alias for subtitle
 * @param {string} [breadcrumb] - Simple current page name (e.g. "About Us")
 * @param {Array<{label: string, path?: string}>} [breadcrumbs] - Array of breadcrumb items
 * @param {React.ReactNode} [badge] - Optional badge or tag above title
 * @param {'center'|'left'} [align='center'] - Content alignment
 * @param {string} [className] - Additional CSS classes for section
 * @param {React.ReactNode} [children] - Optional custom elements inside header
 */
export default function PageHeader({
  title,
  subtitle,
  description,
  breadcrumb,
  breadcrumbs,
  badge,
  align = 'center',
  className = '',
  children
}) {
  const descText = subtitle || description;
  const isCenter = align === 'center';

  return (
    <section
      className={`bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] pt-28 pb-16 lg:pt-36 lg:pb-24 text-white relative overflow-hidden ${className}`}
    >
      {/* Background Decorative Grid and Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`max-w-7xl mx-auto px-4 lg:px-12 relative z-10 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'
          } gap-4`}
      >
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className={`flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300 ${isCenter ? 'justify-center' : 'justify-start'
            }`}
        >
          <Link
            className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white"
            to="/"
          >
            <span className="material-symbols-outlined text-sm">home</span> Home
          </Link>

          {breadcrumbs && breadcrumbs.length > 0 ? (
            breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={index}>
                  <span className="text-slate-400">/</span>
                  {item.path && !isLast ? (
                    <Link
                      to={item.path}
                      className="hover:text-brand-orange transition-colors text-slate-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-brand-orange font-bold">{item.label}</span>
                  )}
                </React.Fragment>
              );
            })
          ) : breadcrumb ? (
            <>
              <span className="text-slate-400">/</span>
              <span className="text-brand-orange font-bold">{breadcrumb}</span>
            </>
          ) : null}
        </nav>

        {/* Optional Badge */}
        {badge && <div className="mt-1">{badge}</div>}

        {/* Page Title */}
        {title && (
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {title}
          </h1>
        )}

        {/* Description / Subtitle */}
        {descText && (
          <p
            className={`text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''
              }`}
          >
            {descText}
          </p>
        )}

        {/* Custom Extra Elements */}
        {children}
      </div>
    </section>
  );
}
