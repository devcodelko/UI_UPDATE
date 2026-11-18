import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight;

      if (scrollHeight > 0) {
        const prog = (scrollTop / scrollHeight) * 100;
        setProgress(prog);
      }

      if (scrollTop > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        aria-hidden="true"
        style={{ width: `${progress}%` }}
      ></div>

      {/* Back to Top Button with .show class support */}
      <button
        id="back-to-top"
        aria-label="Scroll back to top"
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 z-50 w-12 h-12 rounded-full bg-brand-teal text-white shadow-card hover:bg-brand-teal-dark hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border border-white/20 group cursor-pointer ${show ? 'show opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
      >
        <span className="material-symbols-outlined text-xl group-hover:-translate-y-0.5 transition-transform">
          arrow_upward
        </span>
      </button>
    </>
  );
}
