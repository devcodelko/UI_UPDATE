import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('upicon_lang') || 'en';
  });

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('upicon_lang', newLang);

    if (newLang === 'hi') {
      document.cookie = "googtrans=/en/hi; path=/;";
      document.cookie = `googtrans=/en/hi; path=/; domain=${window.location.hostname}`;
    } else {
      document.cookie = "googtrans=/en/en; path=/;";
      document.cookie = `googtrans=/en/en; path=/; domain=${window.location.hostname}`;
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    }

    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = newLang;
      select.dispatchEvent(new Event('change'));
    }
    
    // Refresh page to apply or revert Google Translate transformation
    window.location.reload();
  };

  useEffect(() => {
    document.documentElement.lang = lang;

    // Prevent Google Translate from altering Material Symbols / Icons text nodes and remove text highlight styling
    const protectIcons = () => {
      const iconElements = document.querySelectorAll(
        '.material-symbols-outlined, .material-icons, [class*="material-symbols"]'
      );
      iconElements.forEach((el) => {
        if (!el.classList.contains('notranslate')) {
          el.classList.add('notranslate');
          el.setAttribute('translate', 'no');
        }
      });

      // Remove background highlights added by Google Translate on font tags
      const fontElements = document.querySelectorAll('font, .goog-text-highlight');
      fontElements.forEach((el) => {
        if (el.classList.contains('goog-text-highlight')) {
          el.classList.remove('goog-text-highlight');
        }
        if (el.style && el.style.backgroundColor) {
          el.style.backgroundColor = 'transparent';
        }
      });

      // Keep Google Translate iframe active but hide offscreen & reset body position
      const translateBanners = document.querySelectorAll(
        'iframe.skiptranslate, .goog-te-banner-frame, iframe[id*=":1.container"]'
      );
      translateBanners.forEach((banner) => {
        banner.style.position = 'absolute';
        banner.style.top = '-9999px';
        banner.style.left = '-9999px';
        banner.style.width = '1px';
        banner.style.height = '1px';
        banner.style.opacity = '0';
        banner.style.pointerEvents = 'none';
      });

      if (document.body && document.body.style.top !== '0px') {
        document.body.style.top = '0px';
      }
    };

    protectIcons();

    const observer = new MutationObserver(() => {
      protectIcons();
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { lang: 'en', changeLanguage: () => {} };
  }
  return context;
}
