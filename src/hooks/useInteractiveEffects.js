import { useEffect } from 'react';
import AOS from 'aos';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const tabsData = {
  ramp: {
    badge: "RAMP Phase II (2024-2027)",
    partner: "• World Bank & Ministry of MSME",
    heading: "Raising and Accelerating MSME Performance (RAMP)",
    body: "UPICON is executing sovereign RAMP interventions across Uttar Pradesh: modernizing micro-enterprises through green manufacturing audits, zero-defect quality accreditations (ZED), clean energy adoptions, and rapid mediation clinics for delayed payments.",
    s1V: "₹5 Lakh", s1L: "Green Tech Subsidy",
    s2V: "100% Grant", s2L: "ZED Certification Aid",
    s3V: "45 Days", s3L: "Fast Dispute Redressal",
    image: "/assets/images/msme-audit.jpg",
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
    image: "/assets/images/banana-fiber-artisan.jpg",
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
    image: "/assets/images/hero-consultant.jpg",
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
    image: "/assets/images/msme-audit.jpg",
    imageAlt: "District Youth Adda Helpdesk & Enterprise Escalation Hub",
    caption: "75 District Youth Adda Helpdesk & Enterprise Escalation Hub"
  }
};

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

export function useInteractiveEffects() {
  useEffect(() => {
    // 1. Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });

    // 2. Define global switchTab function
    window.switchTab = function (key) {
      const keys = ['ramp', 'odop', 'yuva', 'youthadda'];
      keys.forEach(k => {
        const btn = document.getElementById('tab-btn-' + k);
        if (btn) {
          if (k === key) {
            btn.className = "px-4 py-2 rounded-lg text-xs font-bold transition-all bg-brand-teal text-white shadow-sm border-0 shrink-0 cursor-pointer";
          } else {
            btn.className = "px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-brand-teal transition-all border-0 bg-transparent shrink-0 cursor-pointer";
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
    };

    // 3. Define global changeDistrict function
    window.changeDistrict = function (key) {
      const item = districtData[key];
      if (item) {
        if (document.getElementById('card-hub-name')) document.getElementById('card-hub-name').textContent = item.name;
        if (document.getElementById('card-hub-address')) document.getElementById('card-hub-address').textContent = item.address;
        if (document.getElementById('card-hub-officer')) document.getElementById('card-hub-officer').textContent = item.officer;
        if (document.getElementById('card-hub-email')) document.getElementById('card-hub-email').textContent = item.email;
        if (document.getElementById('card-hub-phone')) document.getElementById('card-hub-phone').textContent = item.phone;
      }
    };

    // 4. Attach click listeners for tab buttons if they exist
    ['ramp', 'odop', 'yuva', 'youthadda'].forEach((k) => {
      const btn = document.getElementById('tab-btn-' + k);
      if (btn) {
        btn.onclick = () => window.switchTab(k);
      }
    });

    // Attach change listener for district select dropdown
    const districtSelect = document.getElementById('district-select');
    if (districtSelect) {
      districtSelect.onchange = (e) => window.changeDistrict(e.target.value);
    }

    // 5. Initialize Swiper sliders
    const swiperInstances = [];

    if (document.querySelector('.hero-swiper')) {
      swiperInstances.push(
        new Swiper('.hero-swiper', {
          loop: true,
          effect: 'fade',
          fadeEffect: { crossFade: true },
          autoplay: { delay: 3500, disableOnInteraction: false },
          speed: 800,
          pagination: { el: '.hero-swiper-pagination', clickable: true },
          navigation: { nextEl: '.hero-swiper-next', prevEl: '.hero-swiper-prev' }
        })
      );
    }

    if (document.querySelector('.home2-full-swiper')) {
      swiperInstances.push(
        new Swiper('.home2-full-swiper', {
          loop: true,
          effect: 'fade',
          fadeEffect: { crossFade: true },
          autoplay: { delay: 4500, disableOnInteraction: false },
          speed: 1000,
          pagination: { el: '.home2-full-pagination', clickable: true },
          navigation: { nextEl: '.home2-full-next', prevEl: '.home2-full-prev' }
        })
      );
    }

    if (document.querySelector('.notices-swiper')) {
      swiperInstances.push(
        new Swiper('.notices-swiper', {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          autoplay: { delay: 4000, disableOnInteraction: false },
          speed: 700,
          pagination: { el: '.notices-swiper-pagination', clickable: true },
          navigation: { nextEl: '.notices-swiper-next', prevEl: '.notices-swiper-prev' },
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
          }
        })
      );
    }

    if (document.querySelector('.whoweare-swiper')) {
      swiperInstances.push(
        new Swiper('.whoweare-swiper', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          effect: 'fade',
          fadeEffect: { crossFade: true },
          autoplay: { delay: 3800, disableOnInteraction: false },
          speed: 800,
          pagination: { el: '.whoweare-swiper-pagination', clickable: true },
          navigation: { nextEl: '.whoweare-swiper-next', prevEl: '.whoweare-swiper-prev' }
        })
      );
    }


    // 8. Stat Counter Animations Observer
    const counterElements = document.querySelectorAll('.animate-counter');
    if (counterElements.length > 0) {
      const startCounter = (el) => {
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
      };

      if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              startCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });

        counterElements.forEach(el => counterObserver.observe(el));
      } else {
        counterElements.forEach(el => startCounter(el));
      }
    }

    // 9. ScrollSpy for Sticky Section Navigation Sidebars
    let handleScrollSpy = null;
    const navLinks = document.querySelectorAll('aside nav a[href^="#"]');
    if (navLinks.length > 0) {
      const sections = [];
      navLinks.forEach((link) => {
        const hash = link.getAttribute('href');
        if (hash && hash.length > 1) {
          const section = document.querySelector(hash);
          if (section) {
            sections.push({ link, section });
          }
        }
      });

      if (sections.length > 0) {
        handleScrollSpy = () => {
          const scrollPos = window.scrollY || document.documentElement.scrollTop;
          const headerOffset = 180;

          let currentActiveIndex = 0;

          sections.forEach((item, index) => {
            const top = item.section.offsetTop - headerOffset;
            if (scrollPos >= top) {
              currentActiveIndex = index;
            }
          });

          // If near page bottom, activate the last section
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            currentActiveIndex = sections.length - 1;
          }

          sections.forEach((item, index) => {
            const dot = item.link.querySelector('span.rounded-full');
            if (index === currentActiveIndex) {
              item.link.className = "p-2 rounded-lg bg-white text-brand-teal font-bold shadow-xs border border-slate-200/60 transition-all flex items-center gap-2";
              if (dot) {
                const isOrange = item.link.getAttribute('href') === '#sec-8' || (index === sections.length - 1 && sections.length > 2);
                dot.className = `w-2 h-2 rounded-full ${isOrange ? 'bg-brand-orange' : 'bg-brand-teal'} shadow-xs shrink-0 scale-110 transition-all`;
              }
            } else {
              item.link.className = "p-2 rounded-lg hover:bg-white hover:text-brand-teal text-slate-600 font-semibold transition-all flex items-center gap-2";
              if (dot) {
                dot.className = "w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 transition-all";
              }
            }
          });
        };

        window.addEventListener('scroll', handleScrollSpy, { passive: true });
        setTimeout(handleScrollSpy, 100);
      }
    }

    return () => {
      if (handleScrollSpy) {
        window.removeEventListener('scroll', handleScrollSpy);
      }
      swiperInstances.forEach(s => {
        if (s && s.destroy) s.destroy(true, true);
      });
    };
  }, []);
}


