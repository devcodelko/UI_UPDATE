import React, { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      id="back-to-top"
      aria-label="Scroll back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-05 z-50 w-12 h-12 rounded-full bg-brand-teal text-white shadow-card hover:bg-brand-teal-dark hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-white/20 group cursor-pointer ${show ? 'show' : ''}`}
    >
      <span className="material-symbols-outlined text-xl group-hover:-translate-y-0.5 transition-transform">
        arrow_upward
      </span>
    </button>
  );
}
