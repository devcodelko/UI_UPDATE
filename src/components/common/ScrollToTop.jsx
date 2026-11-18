import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Small timeout to ensure DOM update/render completes before scrolling
    const timer = setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }

      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } catch (e) {
        window.scrollTo(0, 0);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

