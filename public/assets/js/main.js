// =========================================================
// UPICON ENTERPRISE PORTAL - BOOTSTRAP 5 MAIN JAVASCRIPT
// =========================================================

// 3. Page Scroll & Mobile Menu Controller
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('scroll-progress');
  const header = document.querySelector('header');
  const backToTopBtn = document.getElementById('back-to-top');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  let lastScrollTop = 0;
  const scrollDelta = 6; // Minimum delta to prevent micro-jitter
  document.documentElement.style.setProperty('--header-offset', '80px');

  function handleScroll() {
    const rawScrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollTop = Math.max(0, rawScrollTop);
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Top Scroll Progress Bar
    if (scrollHeight > 0 && progressBar) {
      const progress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = progress + '%';
    }

    // Smart Header: Hide on scroll down, reveal on scroll up
    if (header) {
      const isMobileMenuOpen = mobileMenuDrawer && mobileMenuDrawer.classList.contains('open');

      if (!isMobileMenuOpen) {
        if (scrollTop > 80) {
          header.classList.add('scrolled');

          // Scroll Down -> Hide header
          if (scrollTop > lastScrollTop + scrollDelta) {
            header.classList.add('header-hidden');
            document.body.classList.add('header-hidden');
            document.documentElement.style.setProperty('--header-offset', '0px');
          }
          // Scroll Up ("thoda sa upr scroll krne par visible ho jaye") -> Reveal header
          else if (scrollTop < lastScrollTop - scrollDelta) {
            header.classList.remove('header-hidden');
            document.body.classList.remove('header-hidden');
            document.documentElement.style.setProperty('--header-offset', '80px');
          }
        } else {
          // Near top of page -> Always visible
          header.classList.remove('header-hidden');
          document.body.classList.remove('header-hidden');
          document.documentElement.style.setProperty('--header-offset', '80px');
          if (scrollTop <= 40) {
            header.classList.remove('scrolled');
          }
        }
      }
    }

    lastScrollTop = scrollTop;

    // Back to Top Button Toggle
    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // ---------------------------------------------------------
    // Stacking Sector Cards: Blur & Scale as next card overlaps
    // ---------------------------------------------------------
    const sectorCards = document.querySelectorAll('.sector-stack-card');
    if (sectorCards.length > 0) {
      for (let i = 0; i < sectorCards.length; i++) {
        const currentCard = sectorCards[i];
        const nextCard = sectorCards[i + 1];
        const currentTarget = currentCard.querySelector('.sector-card-grid') || currentCard;

        if (nextCard) {
          const currentRect = currentCard.getBoundingClientRect();
          const nextRect = nextCard.getBoundingClientRect();

          // When nextCard slides over currentCard, calculate overlap distance
          const overlapDistance = currentRect.bottom - nextRect.top;

          if (overlapDistance > 0 && currentRect.height > 0) {
            // Threshold over which max blur is achieved (50% card height)
            const thresholdDistance = currentRect.height * 0.5;
            const overlapRatio = Math.max(0, Math.min(1, overlapDistance / thresholdDistance));

            const blurVal = (overlapRatio * 8).toFixed(1);
            const scaleVal = (1 - (overlapRatio * 0.05)).toFixed(3);

            // currentTarget.style.filter = `blur(${blurVal}px)`;
            currentCard.style.transform = `scale(${scaleVal})`;
            currentCard.classList.toggle('is-stacked-behind', overlapRatio > 0.1);
          } else {
            currentTarget.style.filter = 'none';
            currentCard.style.transform = 'none';
            currentCard.classList.remove('is-stacked-behind');
          }
        } else {
          // Last card is never covered
          currentTarget.style.filter = 'none';
          currentCard.style.transform = 'none';
          currentCard.classList.remove('is-stacked-behind');
        }
      }
    }

  }

  // =========================================================
  // LENIS SMOOTH SCROLLING (Upicon Inspired Momentum)
  // =========================================================
  let lenisInstance = null;
  if (typeof Lenis !== 'undefined') {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      smoothTouch: false, // Keep native inertia on mobile screens for natural feel
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
      prevent: (node) => {
        try {
          return (
            node?.hasAttribute?.('data-lenis-prevent') ||
            node?.hasAttribute?.('data-lenis-ignore') ||
            !!node?.closest?.('[data-lenis-prevent], [data-lenis-ignore]')
          );
        } catch (e) {
          return false;
        }
      }
    });

    window.lenis = lenisInstance;

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync scroll handling and AOS with Lenis smooth frames
    lenisInstance.on('scroll', () => {
      handleScroll();
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    });
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(handleScroll);
  }, { passive: true });
  handleScroll();

  // Smooth scroll for in-page anchors via Lenis
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          if (window.lenis) {
            window.lenis.scrollTo(targetEl, { offset: -80, duration: 1.2 });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });

  function openMobileMenu() {
    if (mobileMenuDrawer && mobileMenuBackdrop) {
      mobileMenuDrawer.classList.add('open');
      mobileMenuBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    }
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer && mobileMenuBackdrop) {
      mobileMenuDrawer.classList.remove('open');
      mobileMenuBackdrop.classList.remove('open');
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    }
  }

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
  if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

  // Mobile Services Accordion Toggle inside Drawer
  const mobileServicesToggle = document.getElementById('mobile-services-toggle');
  const mobileServicesSubmenu = document.getElementById('mobile-services-submenu');
  const mobileServicesArrow = document.getElementById('mobile-services-arrow');

  if (mobileServicesToggle && mobileServicesSubmenu) {
    mobileServicesToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileServicesSubmenu.classList.contains('hidden');
      if (isHidden) {
        mobileServicesSubmenu.classList.remove('hidden');
        if (mobileServicesArrow) mobileServicesArrow.style.transform = 'rotate(180deg)';
      } else {
        mobileServicesSubmenu.classList.add('hidden');
        if (mobileServicesArrow) mobileServicesArrow.style.transform = 'rotate(0deg)';
      }
    });
  }

  // Close mobile drawer when clicking non-toggle navigation links inside it
  const mobileNavLinks = document.querySelectorAll('#mobile-menu-drawer a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }

  // Stat Counter Animations Observer
  const counterElements = document.querySelectorAll('.animate-counter');
  if (counterElements.length > 0) {
    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.2
      });

      counterElements.forEach(el => counterObserver.observe(el));
    } else {
      counterElements.forEach(el => startCounter(el));
    }
  }

  // Stat Counter Animation Function
  function startCounter(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = "true";

    const target = parseInt(el.dataset.target, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeOutExpo * target);

      el.textContent = prefix + currentVal.toLocaleString('en-IN') + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = prefix + target.toLocaleString('en-IN') + suffix;
      }
    }
    requestAnimationFrame(updateCounter);
  }

  // Initialize Home-2 Full-Width Hero Swiper Slider
  if (typeof Swiper !== 'undefined' && document.querySelector('.home2-full-swiper')) {
    const heroSwiper = new Swiper('.home2-full-swiper', {
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1000,
      navigation: {
        nextEl: '#hero-next-btn',
        prevEl: '#hero-prev-btn',
      },
    });

    const storyTabs = document.querySelectorAll('.hero-story-tab');
    function updateHeroTabs(index) {
      storyTabs.forEach((tab, i) => {
        if (i === index) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }

    heroSwiper.on('slideChange', () => {
      updateHeroTabs(heroSwiper.realIndex);
    });

    storyTabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-slide-index'), 10);
        heroSwiper.slideToLoop(idx);
      });
    });

    const playPauseBtn = document.getElementById('hero-play-pause-btn');
    const playPauseIcon = document.getElementById('play-pause-icon');
    let isAutoplayRunning = true;
    if (playPauseBtn && playPauseIcon) {
      playPauseBtn.addEventListener('click', () => {
        if (isAutoplayRunning) {
          heroSwiper.autoplay.stop();
          playPauseIcon.textContent = 'play_arrow';
          playPauseBtn.setAttribute('aria-label', 'Play slideshow');
          isAutoplayRunning = false;
        } else {
          heroSwiper.autoplay.start();
          playPauseIcon.textContent = 'pause';
          playPauseBtn.setAttribute('aria-label', 'Pause slideshow');
          isAutoplayRunning = true;
        }
      });
    }
  }

  // Initialize Latest News & Notices Swiper Slider
  if (typeof Swiper !== 'undefined' && document.querySelector('.notices-swiper')) {
    new Swiper('.notices-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 700,
      pagination: {
        el: '.notices-swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.notices-swiper-next',
        prevEl: '.notices-swiper-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      }
    });
  }

  // Initialize Who We Are 3D Card Stack Slider (Upicon Inspired)
  function initWhoWeAreCardStack() {
    const container = document.getElementById('whoweare-stack-cards');
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.whoweare-stack-card'));
    const prevBtn = document.getElementById('whoweare-prev');
    const nextBtn = document.getElementById('whoweare-next');
    const caption = document.getElementById('whoweare-caption');
    if (!cards.length) return;

    let currentIndex = 0;
    const total = cards.length;
    let autoplayTimer = null;

    function updateCards() {
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      const isTiny = window.innerWidth < 400;

      let step1, step2;
      if (isMobile) {
        step1 = isTiny ? 30 : 40;
        step2 = isTiny ? 56 : 74;
      } else if (isTablet) {
        step1 = 52;
        step2 = 96;
      } else {
        step1 = 62;
        step2 = 114;
      }

      cards.forEach((card, i) => {
        let diff = (i - currentIndex) % total;
        if (diff < -Math.floor(total / 2)) diff += total;
        if (diff > Math.floor(total / 2)) diff -= total;

        // Enforce no border-radius and no box-shadow as requested
        card.style.borderRadius = '0';
        card.style.boxShadow = 'none';

        if (diff === 0) {
          // Center active card
          card.style.transform = 'translate3d(0, 0, 0) scale(1)';
          card.style.zIndex = '10';
          card.style.opacity = '1';
          card.style.filter = 'brightness(1)';
          card.style.pointerEvents = 'auto';
          card.style.cursor = 'default';
        } else if (diff === -1) {
          // Immediate left card (slim peeking edge)
          card.style.transform = `translate3d(-${step1}px, 0, -40px) scale(0.88)`;
          card.style.zIndex = '6';
          card.style.opacity = '0.9';
          card.style.filter = 'brightness(0.65)';
          card.style.pointerEvents = 'auto';
          card.style.cursor = 'pointer';
        } else if (diff === 1) {
          // Immediate right card (slim peeking edge)
          card.style.transform = `translate3d(${step1}px, 0, -40px) scale(0.88)`;
          card.style.zIndex = '6';
          card.style.opacity = '0.9';
          card.style.filter = 'brightness(0.65)';
          card.style.pointerEvents = 'auto';
          card.style.cursor = 'pointer';
        } else if (diff === -2) {
          // Far left card (slim peeking edge)
          card.style.transform = `translate3d(-${step2}px, 0, -80px) scale(0.76)`;
          card.style.zIndex = '3';
          card.style.opacity = isTiny ? '0' : '0.65';
          card.style.filter = 'brightness(0.42)';
          card.style.pointerEvents = isTiny ? 'none' : 'auto';
          card.style.cursor = isTiny ? 'default' : 'pointer';
        } else if (diff === 2) {
          // Far right card (slim peeking edge)
          card.style.transform = `translate3d(${step2}px, 0, -80px) scale(0.76)`;
          card.style.zIndex = '3';
          card.style.opacity = isTiny ? '0' : '0.65';
          card.style.filter = 'brightness(0.42)';
          card.style.pointerEvents = isTiny ? 'none' : 'auto';
          card.style.cursor = isTiny ? 'default' : 'pointer';
        } else {
          // Other hidden cards
          const dir = diff < 0 ? -1 : 1;
          card.style.transform = `translate3d(${dir * (step2 + 40)}px, 0, -150px) scale(0.6)`;
          card.style.zIndex = '1';
          card.style.opacity = '0';
          card.style.filter = 'brightness(0.3)';
          card.style.pointerEvents = 'none';
        }
      });

      // Update caption text smoothly
      if (caption) {
        caption.classList.add('whoweare-caption-fade');
        setTimeout(() => {
          const activeCard = cards[currentIndex];
          if (activeCard) {
            caption.textContent = activeCard.getAttribute('data-title') || '';
          }
          caption.classList.remove('whoweare-caption-fade');
        }, 180);
      }
    }

    function goTo(index) {
      currentIndex = (index + total) % total;
      updateCards();
    }

    function next() {
      goTo(currentIndex + 1);
    }

    function prev() {
      goTo(currentIndex - 1);
    }

    // Direct card click navigates to it
    cards.forEach((card, i) => {
      card.addEventListener('click', () => {
        if (i !== currentIndex) {
          goTo(i);
          resetAutoplay();
        }
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prev();
        resetAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        next();
        resetAutoplay();
      });
    }

    // Touch / swipe support
    let touchStartX = 0;
    container.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) prev();
        else next();
        resetAutoplay();
      }
    }, { passive: true });

    // Autoplay (pauses on hover)
    function startAutoplay() {
      if (!autoplayTimer) {
        autoplayTimer = setInterval(next, 4500);
      }
    }
    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }
    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    window.addEventListener('resize', updateCards);

    updateCards();
    startAutoplay();
  }

  initWhoWeAreCardStack();

  // Initialize What We Do Deloitte-style Dual Slider
  function initWhatWeDoDualSlider() {
    const textEl = document.querySelector('.whatwedo-text-swiper');
    const mediaEl = document.querySelector('.whatwedo-media-swiper');
    if (!textEl || !mediaEl || typeof Swiper === 'undefined') return;

    if (textEl.swiper) textEl.swiper.destroy(true, true);
    if (mediaEl.swiper) mediaEl.swiper.destroy(true, true);

    const prevBtn = document.getElementById('whatwedo-prev');
    const nextBtn = document.getElementById('whatwedo-next');
    const fractionEl = document.getElementById('whatwedo-fraction');
    const segmentItems = document.querySelectorAll('.whatwedo-segment-item');

    // 1. Text Swiper (Fade effect with auto-height)
    const textSwiper = new Swiper('.whatwedo-text-swiper', {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 700,
      autoHeight: true,
      allowTouchMove: false,
    });

    // 2. Media Swiper (Carousel with slim stage padding matching Deloitte)
    const mediaSwiper = new Swiper('.whatwedo-media-swiper', {
      slidesPerView: 1.02,
      spaceBetween: 16,
      speed: 800,
      grabCursor: true,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      breakpoints: {
        320: {
          slidesPerView: 1.02,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1.02,
          spaceBetween: 14,
        },
        1024: {
          slidesPerView: 1.02,
          spaceBetween: 16,
        },
        1400: {
          slidesPerView: 1.02,
          spaceBetween: 18,
        },
      },
    });

    const totalSlides = mediaSwiper.slides.length;

    // State sync function
    function updateDualSliderState(activeIndex) {
      const current = activeIndex + 1;

      // 1. Update Fraction Display (e.g., 01 / 04)
      if (fractionEl) {
        const curStr = String(current).padStart(2, '0');
        const totStr = String(totalSlides).padStart(2, '0');
        fractionEl.textContent = `${curStr} / ${totStr}`;
      }

      // 2. Update Segmented Progress Bar (Active segment = #86bc25, Inactive = #e4e4e4)
      if (segmentItems.length > 0) {
        segmentItems.forEach((seg, idx) => {
          if (idx === activeIndex) {
            seg.classList.add('active');
            seg.style.backgroundColor = '#86bc25';
          } else {
            seg.classList.remove('active');
            seg.style.backgroundColor = '';
          }
        });
      }

      // 3. Update Prev Button State
      if (prevBtn) {
        if (activeIndex <= 0) {
          prevBtn.classList.add('swiper-button-disabled');
          prevBtn.setAttribute('disabled', 'true');
        } else {
          prevBtn.classList.remove('swiper-button-disabled');
          prevBtn.removeAttribute('disabled');
        }
      }

      // 4. Update Next Button State
      if (nextBtn) {
        if (activeIndex >= totalSlides - 1) {
          nextBtn.classList.add('swiper-button-disabled');
          nextBtn.setAttribute('disabled', 'true');
        } else {
          nextBtn.classList.remove('swiper-button-disabled');
          nextBtn.removeAttribute('disabled');
        }
      }

      // 5. Synchronize Text Swiper Fade
      if (textSwiper.activeIndex !== activeIndex) {
        textSwiper.slideTo(activeIndex, 700);
      }
    }

    mediaSwiper.on('slideChange', function () {
      updateDualSliderState(this.activeIndex);
    });

    // Prev / Next button listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (mediaSwiper.activeIndex > 0) {
          mediaSwiper.slidePrev(700);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (mediaSwiper.activeIndex < totalSlides - 1) {
          mediaSwiper.slideNext(700);
        }
      });
    }

    // Direct click on any slide card
    mediaSwiper.slides.forEach((slide, idx) => {
      slide.addEventListener('click', () => {
        if (mediaSwiper.activeIndex !== idx) {
          mediaSwiper.slideTo(idx, 700);
        }
      });
    });

    // Clicking on any segment jumps directly to that slide
    segmentItems.forEach((seg, idx) => {
      seg.addEventListener('click', (e) => {
        e.preventDefault();
        mediaSwiper.slideTo(idx, 700);
      });
    });

    // Initial sync
    updateDualSliderState(0);
  }

  initWhatWeDoDualSlider();

  // Division Category Filtering Handler for business-units.html
  const filterBtns = document.querySelectorAll('.div-filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        filterBtns.forEach(b => {
          b.classList.remove('bg-slate-900', 'text-white', 'shadow-xs');
          b.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100', 'border', 'border-slate-200/90');
        });
        this.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100', 'border', 'border-slate-200/90');
        this.classList.add('bg-slate-900', 'text-white', 'shadow-xs');

        const filter = this.getAttribute('data-filter');
        document.querySelectorAll('.division-card').forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // =========================================================
  // FLOATING CHATBOT WIDGET LOGIC (1:1 UI Match)
  // =========================================================
  const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
  const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
  const chatbotScreen = document.getElementById('chatbot-screen');
  const chatbotForm = document.getElementById('chatbot-form');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotTyping = document.getElementById('chatbot-typing');
  const chatbotTooltip = document.getElementById('chatbot-tooltip');
  const chatLangEn = document.getElementById('chat-lang-en');
  const chatLangHi = document.getElementById('chat-lang-hi');
  const chatWelcomeText = document.getElementById('chat-welcome-text');
  const chatbotMicBtn = document.getElementById('chatbot-mic-btn');
  const chatbotSpeakBtn = document.getElementById('chatbot-speak-btn');

  let currentLang = 'hi'; // Default Hindi to match screenshot

  if (chatbotToggleBtn && chatbotScreen) {
    function toggleChatbot() {
      const isActive = chatbotScreen.classList.contains('active');
      if (!isActive) {
        chatbotScreen.classList.add('active');
        if (chatbotTooltip) chatbotTooltip.classList.add('hidden');
        if (chatbotInput) chatbotInput.focus();
      } else {
        chatbotScreen.classList.remove('active');
      }
    }

    chatbotToggleBtn.addEventListener('click', toggleChatbot);
    if (chatbotCloseBtn) chatbotCloseBtn.addEventListener('click', toggleChatbot);

    // Language Toggle Handling
    if (chatLangEn && chatLangHi) {
      chatLangEn.addEventListener('click', () => {
        currentLang = 'en';
        chatLangEn.classList.add('active');
        chatLangHi.classList.remove('active');
        if (chatWelcomeText) {
          chatWelcomeText.innerHTML = 'Namaste! 👋 I am UPICON Mitra. Ask me about UPICON initiatives, government schemes, news, careers, or any enterprise service.';
        }
      });

      chatLangHi.addEventListener('click', () => {
        currentLang = 'hi';
        chatLangHi.classList.add('active');
        chatLangEn.classList.remove('active');
        if (chatWelcomeText) {
          chatWelcomeText.innerHTML = 'नमस्ते! 👋 मैं UPICON मित्र हूँ। UPICON से जुड़ी पहलों, योजनाओं, समाचार, करियर या किसी भी जानकारी के बारे में पूछें।';
        }
      });
    }

    function getBotResponse(userMsg) {
      const msg = userMsg.toLowerCase();
      if (currentLang === 'hi') {
        if (msg.includes('cmyuva') || msg.includes('cm yuva') || msg.includes('loan') || msg.includes('युवा') || msg.includes('ऋण')) {
          return "<strong>मुख्यमंत्री युवा उद्यमी विकास अभियान (CM YUVA)</strong> के तहत युवाओं को बिना किसी गारंटी के ₹5 लाख तक का 0% ब्याज पर ऋण और ₹25,000 की सब्सिडी मिलती है।<br><br>👉 <a href='cmyuva.html' class='text-[#138D9E] underline font-bold'>CM YUVA पोर्टल और आवेदन प्रक्रिया देखें</a>";
        } else if (msg.includes('odop') || msg.includes('artisan') || msg.includes('ओडीओपी') || msg.includes('हस्तशिल्प')) {
          return "<strong>एक जनपद एक उत्पाद (ODOP)</strong> योजना यूपी के 75 जिलों के स्थानीय कारीगरों को ब्रांडिंग, स्किल ट्रेनिंग और एक्सपोर्ट सहायता प्रदान करती है।<br><br>👉 <a href='odop.html' class='text-[#e06714] underline font-bold'>ODOP उत्पाद और कारीगर निर्देशिका देखें</a>";
        } else if (msg.includes('audit') || msg.includes('quality') || msg.includes('जांच') || msg.includes('गुणवत्ता')) {
          return "UPICON की <strong>तकनीकी गुणवत्ता अनुपालन</strong> शाखा ने यूपी की 1,200+ औद्योगिक इकाइयों का गुणवत्ता ऑडिट किया है।";
        } else if (msg.includes('contact') || msg.includes('phone') || msg.includes('संपर्क') || msg.includes('फोन')) {
          return "<strong>UPICON मुख्यालय:</strong><br>📍 कानपुर / लखनऊ, उत्तर प्रदेश<br>📞 हेल्पलाइन: +91-522-2286700<br>✉️ ईमेल: info@upicon.org.in";
        } else {
          return "धन्यवाद! आपका प्रश्न <em>\"" + userMsg + "\"</em> प्राप्त हो गया है। हमारी टीम जल्द ही आपसे संपर्क करेगी।<br><br>तत्काल सहायता के लिए <strong>+91-522-2286700</strong> पर कॉल करें।";
        }
      } else {
        if (msg.includes('cmyuva') || msg.includes('cm yuva') || msg.includes('loan') || msg.includes('yuva')) {
          return "<strong>CM YUVA Scheme (Mukhya Mantri Yuva Udyami Vikas Abhiyan)</strong> provides collateral-free loans up to ₹5 Lakhs at 0% interest with ₹25,000 capital subsidy.<br><br>👉 <a href='cmyuva.html' class='text-[#138D9E] underline font-bold'>View CM YUVA Portal & Flow</a>";
        } else if (msg.includes('odop') || msg.includes('artisan') || msg.includes('craft')) {
          return "<strong>One District One Product (ODOP)</strong> empowers local artisans across 75 UP districts with skill development & export support.<br><br>👉 <a href='odop.html' class='text-[#e06714] underline font-bold'>Explore ODOP Directory</a>";
        } else if (msg.includes('audit') || msg.includes('quality')) {
          return "UPICON's <strong>Technical Quality Compliance</strong> wing has audited over 1,200+ industrial facilities across Uttar Pradesh.";
        } else if (msg.includes('contact') || msg.includes('phone') || msg.includes('address')) {
          return "<strong>UPICON Head Office:</strong><br>📍 Kanpur / Lucknow, UP<br>📞 Helpline: +91-522-2286700<br>✉️ Email: info@upicon.org.in";
        } else {
          return "Thank you! Your query regarding <em>\"" + userMsg + "\"</em> has been recorded. Our sovereign helpdesk representative will assist you.<br><br>Helpline: <strong>+91-522-2286700</strong>.";
        }
      }
    }

    function appendMessage(sender, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = sender === 'user' ? 'flex items-end justify-end' : 'flex items-start gap-2.5';

      if (sender === 'user') {
        msgDiv.innerHTML = `
          <div class="bg-[#138D9E] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-xs leading-relaxed font-medium text-xs sm:text-sm">
            ${text}
          </div>
        `;
      } else {
        msgDiv.innerHTML = `
          <div class="bg-white p-3.5 rounded-2xl rounded-tl-none border border-amber-200/60 shadow-xs max-w-[90%] space-y-1 text-slate-800 leading-relaxed text-xs sm:text-sm">
            ${text}
          </div>
        `;
      }

      chatbotMessages.appendChild(msgDiv);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function handleChatSubmit(queryText) {
      const query = queryText || (chatbotInput ? chatbotInput.value.trim() : '');
      if (!query) return;

      appendMessage('user', query);
      if (chatbotInput) chatbotInput.value = '';

      if (chatbotTyping) chatbotTyping.classList.remove('hidden');
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

      setTimeout(() => {
        if (chatbotTyping) chatbotTyping.classList.add('hidden');
        const botReply = getBotResponse(query);
        appendMessage('bot', botReply);
      }, 700);
    }

    if (chatbotForm) {
      chatbotForm.addEventListener('submit', function (e) {
        e.preventDefault();
        handleChatSubmit();
      });
    }

    // Quick Pill and Nav Bar Icon Click Handlers
    document.addEventListener('click', function (e) {
      const quickBtn = e.target.closest('.chat-quick-btn') || e.target.closest('.chat-nav-btn');
      if (quickBtn && chatbotScreen.contains(quickBtn)) {
        const query = quickBtn.getAttribute('data-query');
        if (query) handleChatSubmit(query);
      }
    });

    // Mic & TTS Voice Handlers
    if (chatbotMicBtn) {
      chatbotMicBtn.addEventListener('click', () => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
          const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
          const recognition = new SpeechRecognition();
          recognition.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US';
          recognition.start();
          chatbotInput.placeholder = currentLang === 'hi' ? 'बोलिए...' : 'Listening...';
          recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            chatbotInput.value = transcript;
            chatbotInput.placeholder = 'Type your question...';
            handleChatSubmit(transcript);
          };
          recognition.onerror = () => {
            chatbotInput.placeholder = 'Type your question...';
          };
        } else {
          alert('Speech Recognition is not supported on this browser.');
        }
      });
    }

    if (chatbotSpeakBtn) {
      chatbotSpeakBtn.addEventListener('click', () => {
        const lastBotMsg = chatbotMessages.querySelector('div:last-child');
        if (lastBotMsg && 'speechSynthesis' in window) {
          const textToSpeak = lastBotMsg.innerText;
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          utterance.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US';
          window.speechSynthesis.speak(utterance);
        }
      });
    }
  }

  // =========================================================
  // 9. UP KE KARIGAR - PINNED HORIZONTAL SCROLL CONTROLLER
  // =========================================================
  function initKarigarScrollSlider() {
      const container = document.getElementById('up-karigar');
      const stickyFrame = document.getElementById('karigar-sticky-frame');
      const track = document.getElementById('karigar-scroll-track');
      const viewport = document.getElementById('karigar-scroll-viewport');
      const indicator = document.getElementById('karigar-scroll-indicator');
      const indicatorIcon = document.getElementById('karigar-scroll-direction-icon');
      const indicatorText = document.getElementById('karigar-indicator-text');
      const prevBtn = document.getElementById('karigar-prev');
      const nextBtn = document.getElementById('karigar-next');
      const progressBar = document.getElementById('karigar-progress-bar');
      const slideNum = document.getElementById('karigar-slide-num');
      const pinStatusPill = document.getElementById('karigar-pin-status-pill');
      const pinStatusText = document.getElementById('karigar-pin-status-text');

      if (!container || !track || !viewport) return;

      let currentTranslateX = 0;
      let targetTranslateX = 0;
      let lastScrollY = window.scrollY;

      // Calibrate container height so vertical scroll distance matches horizontal slide width
      function calibrateHeight() {
        const trackWidth = track.scrollWidth;
        const viewportWidth = viewport.clientWidth;

        // Total distance needed so that all cards including the last card are fully in view
        const travel = Math.max(0, trackWidth - viewportWidth);
        const maxTravel = Math.max(500, travel);
        container.style.height = (window.innerHeight + maxTravel) + 'px';
        return maxTravel;
      }

      let maxTravel = calibrateHeight();

      function onScroll() {
        const rect = container.getBoundingClientRect();
        const windowH = window.innerHeight;
        const totalScrollable = container.offsetHeight - windowH;

        if (totalScrollable <= 0) return;

        // Progress from 0 (section hits top of screen and pins) to 1 (all slides finish)
        const currentScrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollable));

        // Advance track from 0 to -maxTravel
        targetTranslateX = -(progress * maxTravel);

        // Progress Bar
        if (progressBar) {
          progressBar.style.width = (progress * 100).toFixed(1) + '%';
        }

        // Active Card Index
        const totalCards = track.querySelectorAll('.karigar-hero-card').length || 5;
        const currentCardIndex = Math.min(totalCards, Math.max(1, Math.floor(progress * (totalCards - 0.05)) + 1));

        // Update Slide Number (01, 02, etc.)
        if (slideNum) {
          slideNum.textContent = String(currentCardIndex).padStart(2, '0');
        }

        // Direction detection
        const scrollY = window.scrollY;
        const deltaY = scrollY - lastScrollY;
        const isScrollingDown = deltaY >= 0;
        lastScrollY = scrollY;

        // Dynamic Status Indicators
        if (indicator && indicatorText && indicatorIcon) {
          if (progress >= 0.98) {
            // Slide reached the end!
            indicator.classList.remove('is-pinned');
            indicator.classList.add('is-ended');
            indicatorIcon.textContent = 'check_circle';
            indicatorText.textContent = `Slide ${totalCards} of ${totalCards} (Complete) • Scroll Down for Latest News ⬇`;
            if (pinStatusPill && pinStatusText) {
              pinStatusPill.className = 'text-[11px] font-bold text-emerald-700 flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200';
              pinStatusText.textContent = 'Slide complete • Page will scroll down';
            }
          } else if (progress <= 0.02) {
            // At the start of slides
            indicator.classList.remove('is-ended');
            indicator.classList.add('is-pinned');
            indicatorIcon.textContent = 'lock';
            indicatorText.textContent = `Slide 1 of ${totalCards} • Pinned Scroll`;
            if (pinStatusPill && pinStatusText) {
              pinStatusPill.className = 'text-[11px] font-bold text-slate-600 flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200';
              pinStatusText.textContent = 'Slide to end to scroll down';
            }
          } else {
            // In between slides
            indicator.classList.remove('is-ended');
            indicator.classList.add('is-pinned');
            indicatorIcon.textContent = isScrollingDown ? 'arrow_forward' : 'arrow_back';
            indicatorText.textContent = `Slide ${currentCardIndex} of ${totalCards} • ${isScrollingDown ? 'Moving Forward ➔' : 'Reversing 🠘'}`;
            if (pinStatusPill && pinStatusText) {
              pinStatusPill.className = 'text-[11px] font-bold text-amber-700 flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200';
              pinStatusText.textContent = `Slide ${currentCardIndex}/${totalCards} • Locked until end`;
            }
          }
        }
      }

      function render() {
        currentTranslateX += (targetTranslateX - currentTranslateX) * 0.12;
        track.style.transform = 'translate3d(' + currentTranslateX.toFixed(2) + 'px, 0, 0)';
        requestAnimationFrame(render);
      }

      // Synchronize with standard scroll and Lenis
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', () => {
        maxTravel = calibrateHeight();
        onScroll();
      });

      if (window.lenis) {
        window.lenis.on('scroll', onScroll);
      }

      // Manual Navigation Controls: smoothly scrolls the page window to step through slides
      function scrollToCard(targetIndex) {
        const totalCards = track.querySelectorAll('.karigar-hero-card').length || 5;
        const clampedIndex = Math.max(0, Math.min(totalCards - 1, targetIndex));
        const targetProgress = (totalCards > 1) ? (clampedIndex / (totalCards - 1)) : 0;
        const containerTop = container.getBoundingClientRect().top + window.scrollY;
        const totalScrollable = container.offsetHeight - window.innerHeight;
        const targetScrollY = containerTop + (targetProgress * totalScrollable);

        if (window.lenis) {
          window.lenis.scrollTo(targetScrollY, { duration: 0.8 });
        } else {
          window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
        }
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const totalCards = track.querySelectorAll('.karigar-hero-card').length || 5;
          const rect = container.getBoundingClientRect();
          const totalScrollable = container.offsetHeight - window.innerHeight;
          const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
          const currentCard = Math.floor(progress * (totalCards - 1));
          scrollToCard(currentCard + 1);
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const totalCards = track.querySelectorAll('.karigar-hero-card').length || 5;
          const rect = container.getBoundingClientRect();
          const totalScrollable = container.offsetHeight - window.innerHeight;
          const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
          const currentCard = Math.ceil(progress * (totalCards - 1));
          scrollToCard(currentCard - 1);
        });
      }

      // Mobile Touch Gesture Support
      let touchStartX = 0;
      viewport.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
        }
      }, { passive: true });

      viewport.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
          const deltaX = e.touches[0].clientX - touchStartX;
          touchStartX = e.touches[0].clientX;
          const scrollDelta = -deltaX * 1.5;
          if (window.lenis) {
            window.lenis.scrollTo(window.scrollY + scrollDelta, { immediate: true });
          } else {
            window.scrollBy({ top: scrollDelta, behavior: 'auto' });
          }
        }
      }, { passive: true });

      // Initial execution
      maxTravel = calibrateHeight();
      onScroll();
      render();
    }

    initKarigarScrollSlider();
  });

function scrollToTop() {
  if (window.lenis) {
    window.lenis.scrollTo(0, { duration: 1.4 });
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Global Site Language Switcher (Header Language Menu)
function switchSiteLang(lang) {
  const currentLangText = document.getElementById('current-lang-text');
  const checkEn = document.getElementById('lang-check-en');
  const checkHi = document.getElementById('lang-check-hi');

  if (lang === 'hi') {
    if (currentLangText) currentLangText.textContent = 'HINDI';
    if (checkEn) {
      checkEn.classList.remove('text-brand-orange');
      checkEn.classList.add('text-transparent');
    }
    if (checkHi) {
      checkHi.classList.remove('text-transparent');
      checkHi.classList.add('text-brand-orange');
    }
  } else {
    if (currentLangText) currentLangText.textContent = 'ENGLISH';
    if (checkEn) {
      checkEn.classList.remove('text-transparent');
      checkEn.classList.add('text-brand-orange');
    }
    if (checkHi) {
      checkHi.classList.remove('text-brand-orange');
      checkHi.classList.add('text-transparent');
    }
  }
}

