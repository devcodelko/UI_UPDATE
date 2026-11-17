import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem('upicon_preferred_lang') || localStorage.getItem('upicon_lang');
    if (saved === 'hi' || saved === 'en') {
      return saved;
    }

    const cookies = document.cookie.split(';');
    for (const c of cookies) {
      const trimmed = c.trim();
      if (trimmed.startsWith('googtrans=')) {
        if (trimmed.includes('/hi')) return 'hi';
        if (trimmed.includes('/en')) return 'en';
      }
    }
  } catch {
    // ignore
  }
  return 'en';
}

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/;`;
  const host = window.location.hostname;
  if (host && host !== 'localhost') {
    document.cookie = `${name}=${value}; path=/; domain=${host};`;
    if (host.includes('.')) {
      document.cookie = `${name}=${value}; path=/; domain=.${host};`;
    }
  }
}

function clearCookie(name) {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  const host = window.location.hostname;
  if (host && host !== 'localhost') {
    document.cookie = `${name}=; path=/; domain=${host}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    if (host.includes('.')) {
      document.cookie = `${name}=; path=/; domain=.${host}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    }
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  const changeLanguage = (newLang) => {
    setLang(newLang);

    try {
      localStorage.setItem('upicon_lang', newLang);
      localStorage.setItem('upicon_preferred_lang', newLang);
    } catch {
      // ignore
    }

    if (newLang === 'hi') {
      setCookie('googtrans', '/en/hi');
      setCookie('googtrans', '/auto/hi');
    } else {
      setCookie('googtrans', '/en/en');
      setCookie('googtrans', '/auto/en');
      clearCookie('googtrans');
    }

    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = newLang;
      select.dispatchEvent(new Event('change'));
    }

    // Refresh page to apply or revert Google Translate transformation cleanly across all components
    window.location.reload();
  };

  useEffect(() => {
    document.documentElement.lang = lang;

    if (lang === 'hi') {
      document.documentElement.classList.add('lang-hi');
      document.body.classList.add('lang-hi');
      document.body.setAttribute('data-lang', 'hi');
      const hasCookie = document.cookie.includes('googtrans=/en/hi') || document.cookie.includes('googtrans=/auto/hi');
      if (!hasCookie) {
        setCookie('googtrans', '/en/hi');
      }
    } else {
      document.documentElement.classList.remove('lang-hi');
      document.body.classList.remove('lang-hi');
      document.body.setAttribute('data-lang', 'en');
    }

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

    let debounceTimer = null;
    const observer = new MutationObserver((mutations) => {
      protectIcons();

      if (lang === 'hi') {
        const hasNewElements = mutations.some(m =>
          Array.from(m.addedNodes).some(node =>
            node.nodeType === 1 &&
            node.tagName !== 'FONT' &&
            !node.classList?.contains('goog-text-highlight') &&
            !node.classList?.contains('notranslate')
          )
        );

        if (hasNewElements) {
          if (debounceTimer) clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
            window.dispatchEvent(new Event('resize'));
            const select = document.querySelector('.goog-te-combo');
            if (select) {
              try {
                select.dispatchEvent(new Event('change'));
              } catch {
                // ignore
              }
            }
          }, 60);
        }
      }
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      observer.disconnect();
    };
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        currentLang: lang === 'hi' ? 'HINDI' : 'ENGLISH',
        changeLanguage,
        switchLanguage: changeLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: 'en',
      currentLang: 'ENGLISH',
      changeLanguage: () => {},
      switchLanguage: () => {}
    };
  }
  return context;
}

