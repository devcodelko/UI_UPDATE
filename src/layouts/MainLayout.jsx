import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import MobileMenuDrawer from '../components/common/MobileMenuDrawer';
import SocialSidebar from '../components/common/SocialSidebar';
import Chatbot from '../components/common/Chatbot';
import BackToTop from '../components/common/BackToTop';
import ScrollProgress from '../components/common/ScrollProgress';

export default function MainLayout({ children, hideFooterCta = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }, []);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    let lenis = null;
    let rafId = null;

    const initLenis = () => {
      if (typeof window !== 'undefined' && typeof window.Lenis !== 'undefined') {
        lenis = new window.Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2,
        });
        window.lenis = lenis;

        function raf(time) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        lenis.on('scroll', () => {
          if (typeof AOS !== 'undefined') {
            AOS.refresh();
          }
        });
      }
    };

    if (typeof window !== 'undefined') {
      if (typeof window.Lenis !== 'undefined') {
        initLenis();
      } else {
        // Wait briefly if script is still parsing
        const checkTimer = setTimeout(() => {
          if (typeof window.Lenis !== 'undefined') {
            initLenis();
          }
        }, 100);
        return () => clearTimeout(checkTimer);
      }
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
        window.lenis = null;
      }
    };
  }, []);

  // Smooth internal anchor scrolling (#initiatives, #up-karigar, etc.)
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.length <= 1) return;
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        if (window.lenis) {
          window.lenis.scrollTo(targetElement, { offset: -80 });
        } else {
          const top = targetElement.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Scroll to top, refresh AOS, and automatically trigger translation on route change
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    AOS.refresh();

    // If Hindi mode is active, trigger Google Translate immediately on the newly loaded page
    const isHindi = lang === 'hi' ||
      document.documentElement.lang === 'hi' ||
      document.documentElement.classList.contains('lang-hi');

    if (isHindi) {
      const triggerTranslatePipeline = () => {
        // Dispatch synthetic scroll and resize events
        window.dispatchEvent(new Event('scroll'));
        window.dispatchEvent(new Event('resize'));
        document.dispatchEvent(new Event('scroll'));

        if (window.lenis) {
          try {
            window.lenis.emit();
          } catch {
            // ignore
          }
        }

        // Micro-scroll nudge: causes browser's native viewport & intersection listeners to evaluate new elements
        try {
          const curY = window.scrollY || document.documentElement.scrollTop || 0;
          if (curY === 0) {
            window.scrollTo(0, 1);
            requestAnimationFrame(() => {
              window.scrollTo(0, 0);
              window.dispatchEvent(new Event('scroll'));
            });
          } else {
            window.scrollBy(0, 1);
            requestAnimationFrame(() => {
              window.scrollBy(0, -1);
              window.dispatchEvent(new Event('scroll'));
            });
          }
        } catch {
          // ignore
        }

        // Trigger combo box change event
        const select = document.querySelector('.goog-te-combo');
        if (select) {
          try {
            select.dispatchEvent(new Event('change'));
          } catch {
            // ignore
          }
        }
      };

      // Trigger across rapid intervals so newly mounted DOM is translated immediately without waiting for user scroll
      triggerTranslatePipeline();
      const t1 = setTimeout(triggerTranslatePipeline, 40);
      const t2 = setTimeout(triggerTranslatePipeline, 120);
      const t3 = setTimeout(triggerTranslatePipeline, 260);
      const t4 = setTimeout(triggerTranslatePipeline, 500);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [location.pathname, lang]);

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 antialiased">

      {/* Main Header */}
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      {/* Mobile Offcanvas Drawer */}
      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Page Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Institutional Footer */}
      <Footer hideCtaBanner={hideFooterCta} />

      {/* Floating Right-Side Social Sidebar */}
      <SocialSidebar />

      {/* Floating Interactive Chatbot Widget */}
      <Chatbot />

      {/* Floating Back-To-Top Button */}
      <BackToTop />
    </div>
  );
}
