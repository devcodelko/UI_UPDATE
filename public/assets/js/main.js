// =========================================================
// UPICON ENTERPRISE PORTAL - BOOTSTRAP 5 MAIN JAVASCRIPT
// =========================================================

// 1. Interactive Tab Switcher for Flagship Initiatives
const tabsData = {
  ramp: {
    badge: "RAMP Phase II (2024-2027)",
    partner: "• World Bank & Ministry of MSME",
    heading: "Raising and Accelerating MSME Performance (RAMP)",
    body: "UPICON is executing sovereign RAMP interventions across Uttar Pradesh: modernizing micro-enterprises through green manufacturing audits, zero-defect quality accreditations (ZED), clean energy adoptions, and rapid mediation clinics for delayed payments.",
    s1V: "₹5 Lakh", s1L: "Green Tech Subsidy",
    s2V: "100% Grant", s2L: "ZED Certification Aid",
    s3V: "45 Days", s3L: "Fast Dispute Redressal",
    image: "assets/images/msme-audit.jpg",
    imageAlt: "World Bank RAMP MSME Enterprise Audit in Uttar Pradesh",
    caption: "RAMP Green Technology & Quality Certification Facility — UPICON"
  },
  odop: {
    badge: "ODOP State Mission",
    partner: "• Dept. of MSME & Export Promotion",
    heading: "One District One Product (ODOP) Common Facility Centers",
    body: "Empowering indigenous product clusters across UP with state-of-the-art Common Facility Centers, standardized export packaging, brand positioning, and direct integration onto government e-Marketplace (GeM) and global marts.",
    s1V: "75 Products", s1L: "Covered Statewide",
    s2V: "₹2.5 Cr", s2L: "CFC Infrastructure Grants",
    s3V: "38+ Marts", s3L: "Dedicated Retail Outlets",
    image: "assets/images/banana-fiber-artisan.jpg",
    imageAlt: "Master craftswoman in Uttar Pradesh weaving banana fiber eco-friendly products",
    caption: "Kushinagar Banana Fiber Artisan Cluster — ODOP & RAMP Facilitation"
  },
  yuva: {
    badge: "State Flagship Scheme",
    partner: "• Govt. of Uttar Pradesh",
    heading: "Mukhyamantri Yuva Udyami Vikas Abhiyan (CM YUVA)",
    body: "Transforming ambitious educated youth into successful micro-entrepreneurs. UPICON facilitates zero-interest capital financing, preparation of bankable project dossiers, and digital bookkeeping mentoring.",
    s1V: "₹5 Lakh", s1L: "Interest-Free Tranche",
    s2V: "1,00,000", s2L: "Youth Mentored Yearly",
    s3V: "Zero", s3L: "Collateral Required",
    image: "assets/images/hero-consultant.jpg",
    imageAlt: "Senior UPICON consultant advising young entrepreneur under CM YUVA scheme",
    caption: "Youth Entrepreneurship Counseling & DPR Appraisal Cell — CM YUVA"
  },
  youthadda: {
    badge: "Grassroots Enterprise Clinics",
    partner: "• 75 District Industrial Centers",
    heading: "District Youth Adda Network & Enterprise Clinics",
    body: "Physical ground hubs in all 75 districts bridging the distance between remote founders and sovereign enterprise incentives. Walk in for real-time DPR appraisal, statutory clearances, and bank loan documentation.",
    s1V: "75 Districts", s1L: "Live Physical Footprint",
    s2V: "Daily", s2L: "MSME Escalation Clinics",
    s3V: "1,200+", s3L: "Consultations Weekly",
    image: "assets/images/msme-audit.jpg",
    imageAlt: "District Youth Adda Helpdesk & Enterprise Escalation Hub",
    caption: "75 District Youth Adda Helpdesk & Enterprise Escalation Hub"
  }
};

function switchTab(key) {
  const keys = ['ramp', 'odop', 'yuva', 'youthadda'];
  keys.forEach(k => {
    const btn = document.getElementById('tab-btn-' + k);
    if (btn) {
      if (k === key) {
        btn.className = "px-4 py-2 rounded-lg text-xs font-bold transition-all bg-brand-teal text-white shadow-sm border-0 shrink-0";
      } else {
        btn.className = "px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-brand-teal transition-all border-0 bg-transparent shrink-0";
      }
    }
  });

  const d = tabsData[key];
  if (d) {
    if (document.getElementById('tab-badge')) document.getElementById('tab-badge').textContent = d.badge;
    if (document.getElementById('tab-heading')) document.getElementById('tab-heading').textContent = d.heading;
    if (document.getElementById('tab-body')) document.getElementById('tab-body').textContent = d.body;
    if (document.getElementById('tab-stat1-val')) document.getElementById('tab-stat1-val').textContent = d.s1V;
    if (document.getElementById('tab-stat1-lbl')) document.getElementById('tab-stat1-lbl').textContent = d.s1L;
    if (document.getElementById('tab-stat2-val')) document.getElementById('tab-stat2-val').textContent = d.s2V;
    if (document.getElementById('tab-stat2-lbl')) document.getElementById('tab-stat2-lbl').textContent = d.s2L;
    if (document.getElementById('tab-stat3-val')) document.getElementById('tab-stat3-val').textContent = d.s3V;
    if (document.getElementById('tab-stat3-lbl')) document.getElementById('tab-stat3-lbl').textContent = d.s3L;

    // Dynamic Image & Caption Switcher
    const imgEl = document.getElementById('tab-image');
    const captionEl = document.getElementById('tab-image-caption');
    if (imgEl && d.image) {
      imgEl.style.opacity = '0.3';
      imgEl.style.transform = 'scale(0.97)';
      setTimeout(() => {
        imgEl.src = d.image;
        if (d.imageAlt) imgEl.alt = d.imageAlt;
        imgEl.style.opacity = '1';
        imgEl.style.transform = 'scale(1)';
      }, 150);
    }
    if (captionEl && d.caption) {
      captionEl.textContent = d.caption;
    }
  }
}

// 2. Interactive District Directory Data
const districtData = {
  lucknow: {
    name: "Lucknow District Youth Adda",
    address: "UPICON Bhawan, 5th Floor, Vibhuti Khand, Gomti Nagar, Lucknow - 226010",
    officer: "Er. Rakesh K. Srivastava (Senior Industrial Advisor)",
    email: "lucknow.youthadda@upicon.in",
    phone: "+91 (0522) 272-0850 / 0851"
  },
  kanpur: {
    name: "Kanpur Nagar Youth Adda",
    address: "Industrial Estate, Fazalganj, Near UPSIDA Office, Kanpur - 208012",
    officer: "Dr. Alok Verma (Cluster Specialist)",
    email: "kanpur.youthadda@upicon.in",
    phone: "+91 (0512) 229-4103"
  },
  varanasi: {
    name: "Varanasi District Youth Adda",
    address: "Handloom Facilitation Centre, Chowkaghat, Varanasi - 221002",
    officer: "Smt. Sunita Pandey (Craft Enterprise Lead)",
    email: "varanasi.youthadda@upicon.in",
    phone: "+91 (0542) 250-9831"
  },
  gorakhpur: {
    name: "Gorakhpur Youth Adda",
    address: "GIDA Administrative Building, Sector 7, Gorakhpur - 273209",
    officer: "Shri Rajeshwar Singh (MSME Nodal Officer)",
    email: "gorakhpur.youthadda@upicon.in",
    phone: "+91 (0551) 258-0044"
  },
  meerut: {
    name: "Meerut Regional Youth Adda",
    address: "Sports Goods Complex, Delhi Road, Meerut - 250002",
    officer: "Er. Vikas Tyagi (Technical Project Manager)",
    email: "meerut.youthadda@upicon.in",
    phone: "+91 (0121) 240-1922"
  },
  prayagraj: {
    name: "Prayagraj Youth Adda",
    address: "DIC Complex, Naini Industrial Area, Prayagraj - 211008",
    officer: "Shri Anand Mohan (Financial Facilitator)",
    email: "prayagraj.youthadda@upicon.in",
    phone: "+91 (0532) 269-7811"
  },
  kushinagar: {
    name: "Kushinagar ODOP Youth Adda",
    address: "Rural Enterprise Centre, Kasia Road, Kushinagar - 274402",
    officer: "Ms. Priyanka Tripathi (Rural Value-Chain Advisor)",
    email: "kushinagar.youthadda@upicon.in",
    phone: "+91 (05564) 271-209"
  },
  noida: {
    name: "Noida / Greater Noida Youth Adda",
    address: "MSME Tower, Sector 62, Electronic City, Noida - 201309",
    officer: "Shri Deepesh Agarwal (High-Tech Industry Advisor)",
    email: "noida.youthadda@upicon.in",
    phone: "+91 (0120) 297-5501"
  }
};

function changeDistrict(key) {
  const item = districtData[key];
  if (item) {
    if (document.getElementById('card-hub-name')) document.getElementById('card-hub-name').textContent = item.name;
    if (document.getElementById('card-hub-address')) document.getElementById('card-hub-address').textContent = item.address;
    if (document.getElementById('card-hub-officer')) document.getElementById('card-hub-officer').textContent = item.officer;
    if (document.getElementById('card-hub-email')) document.getElementById('card-hub-email').textContent = item.email;
    if (document.getElementById('card-hub-phone')) document.getElementById('card-hub-phone').textContent = item.phone;
  }
}

// 3. Page Scroll & Mobile Menu Controller
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('scroll-progress');
  const header = document.querySelector('header');
  const backToTopBtn = document.getElementById('back-to-top');

  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Top Scroll Progress Bar
    if (scrollHeight > 0 && progressBar) {
      const progress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = progress + '%';
    }

    // Compact Header on Scroll
    if (header) {
      if (scrollTop > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to Top Button Toggle
    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(handleScroll);
  }, { passive: true });
  handleScroll();

  // Mobile Menu Drawer Toggle Handlers
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

  function openMobileMenu() {
    if (mobileMenuDrawer && mobileMenuBackdrop) {
      mobileMenuDrawer.classList.add('open');
      mobileMenuBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer && mobileMenuBackdrop) {
      mobileMenuDrawer.classList.remove('open');
      mobileMenuBackdrop.classList.remove('open');
      document.body.style.overflow = '';
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

  // Initialize Hero Swiper Slider
  if (typeof Swiper !== 'undefined' && document.querySelector('.hero-swiper')) {
    new Swiper('.hero-swiper', {
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      speed: 800,
      pagination: {
        el: '.hero-swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.hero-swiper-next',
        prevEl: '.hero-swiper-prev',
      },
    });
  }

  // Initialize Home-2 Full-Width Hero Swiper Slider
  if (typeof Swiper !== 'undefined' && document.querySelector('.home2-full-swiper')) {
    new Swiper('.home2-full-swiper', {
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: '.home2-full-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.home2-full-next',
        prevEl: '.home2-full-prev',
      },
    });
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

  // Initialize Who We Are Swiper Slider
  if (typeof Swiper !== 'undefined' && document.querySelector('.whoweare-swiper')) {
    new Swiper('.whoweare-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 3800,
        disableOnInteraction: false,
      },
      speed: 800,
      pagination: {
        el: '.whoweare-swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.whoweare-swiper-next',
        prevEl: '.whoweare-swiper-prev',
      },
    });
  }

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
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
