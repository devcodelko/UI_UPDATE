import React from 'react';
import { Link } from 'react-router-dom';
import { useInteractiveEffects } from '../hooks/useInteractiveEffects.js';

export default function Odop() {
  useInteractiveEffects();

  return (
    <main className="min-h-screen">
      <section
        className="bg-gradient-to-br from-[#0c2f35] via-[#094b5c] to-[#081f23] py-16 lg:py-24 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#138D9E_1px,transparent_1px)] [background-size:24px_24px]">
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 text-center flex flex-col items-center gap-4"
          data-aos="fade-up">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link className="hover:text-brand-orange transition-colors flex items-center gap-1 text-white" to="/" >
              <span className="material-symbols-outlined text-sm">home</span> Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand-orange font-bold">ODOP Product of the Month</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            One District One Product (ODOP) Showcases
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Discover the rich craftsmanship, district artisan heritage, and economic potential of Uttar Pradesh's flagship
            ODOP artisan clusters.
          </p>
        </div>
      </section>

      {/*  Product of the Month Spotlight Card  */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div
            className="bg-gradient-to-r from-amber-50 via-orange-50/50 to-white rounded-3xl p-6 sm:p-10 border border-brand-orange/30 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            data-aos="fade-up">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider">Product
                  of the Month • Oct 2026</span>
                <span className="text-xs text-brand-orange font-bold">GI Tagged Craft</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
                Moradabad Metalcrafts &amp; Brass Artware
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Moradabad is world-renowned as the 'Peetal Nagari' (Brass City). UPICON has established a multi-crore Common
                Facility Center (CFC) featuring high-precision electroplating tanks, laser engraving, and zero-discharge
                effluent treatment plant to support over 45,000 local metal artisans.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-orange/20 text-center">
                <div className="bg-white p-3 rounded-xl border border-brand-orange/20 shadow-2xs">
                  <span className="block text-xl font-bold text-brand-orange">₹4,500 Cr+</span>
                  <span className="text-[11px] text-slate-600 font-medium">Annual Exports</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-brand-orange/20 shadow-2xs">
                  <span className="block text-xl font-bold text-brand-orange">45,000+</span>
                  <span className="text-[11px] text-slate-600 font-medium">Artisans Benefited</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-brand-orange/20 shadow-2xs">
                  <span className="block text-xl font-bold text-brand-orange">01 Active</span>
                  <span className="text-[11px] text-slate-600 font-medium">Modern UPICON CFC</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img alt="Moradabad Brassware Craft" className="w-full h-72 sm:h-80 object-cover"
                  src="assets/images/odop-banner.jpg" />
                <div
                  className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-xl text-xs">
                  <span className="font-bold block text-amber-300">UPICON CFC Facilitation:</span>
                  <span>Electroplating, Lacquer Coating &amp; Custom Export Packaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Statewide ODOP Crafts Showcase Grid  */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-end mb-10" data-aos="fade-up">
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-1">Statewide District
                Footprint</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Featured District Crafts</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*  Craft 1  */}
            <div
              className="bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img alt="Varanasi Silk"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src="assets/images/odop-pottery.jpg" />
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold">Varanasi
                    District</span>
                </div>
                <div className="p-6">
                  <span
                    className="px-2.5 py-1 rounded-full bg-brand-orange-light text-brand-orange text-[11px] font-bold uppercase tracking-wider">Handlooms
                    &amp; Textiles</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-brand-orange transition-colors">
                    Banarasi Brocade &amp; Silk Saree Cluster</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    UPICON handloom modernization cell installed electronic Jacquard looms and direct GeM portal onboarding
                    for 12,000 weavers in Chowkaghat.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-semibold">CFC Grant: ₹2.2 Crores</span>
                <span className="font-bold text-brand-orange flex items-center gap-1">Details <span
                  className="material-symbols-outlined text-sm">arrow_forward</span></span>
              </div>
            </div>

            {/*  Craft 2  */}
            <div
              className="bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img alt="Lucknow Chikankari"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src="assets/images/odop-woodcraft.jpg" />
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold">Lucknow
                    District</span>
                </div>
                <div className="p-6">
                  <span
                    className="px-2.5 py-1 rounded-full bg-brand-teal-light text-brand-teal text-[11px] font-bold uppercase tracking-wider">Crafts
                    &amp; Apparel</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-brand-teal transition-colors">
                    Chikankari &amp; Zardozi Embroidery</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Empowering 25,000 female artisans with digital block cutting machines, thread dyeing units, and direct
                    retail cataloging.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-semibold">25,000 Artisans</span>
                <span className="font-bold text-brand-teal flex items-center gap-1">Details <span
                  className="material-symbols-outlined text-sm">arrow_forward</span></span>
              </div>
            </div>

            {/*  Craft 3  */}
            <div
              className="bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group"
              data-aos="fade-up" data-aos-delay="300">
              <div>
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img alt="Bhadohi Carpets"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src="assets/images/odop-textiles.jpg" />
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold">Bhadohi
                    District</span>
                </div>
                <div className="p-6">
                  <span
                    className="px-2.5 py-1 rounded-full bg-brand-orange-light text-brand-orange text-[11px] font-bold uppercase tracking-wider">Floor
                    Covering</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-brand-orange transition-colors">
                    Hand-Knot Carpet &amp; Rug Industry</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bhadohi carpet hub UPICON CFC provides eco-friendly wool washing, moth-proofing, and international
                    export quality certifications.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-semibold">₹3,200 Cr Exports</span>
                <span className="font-bold text-brand-orange flex items-center gap-1">Details <span
                  className="material-symbols-outlined text-sm">arrow_forward</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
