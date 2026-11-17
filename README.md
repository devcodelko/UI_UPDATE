# UPICON - Uttar Pradesh Industrial Consultants Limited (React Edition)

A high-performance, enterprise-grade React application converted from the original multi-page HTML5/CSS/JavaScript web portal. Built with Vite, modern ES6+ React functional components, and React Router DOM.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (version 18.0.0 or higher recommended)
- npm (version 9.0.0 or higher)

### Setup & Execution Commands

1. **Navigate to the React project directory:**
   ```bash
   cd react-version
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` to view the live application with Hot Module Replacement (HMR).

4. **Create a production build:**
   ```bash
   npm run build
   ```
   Builds the optimized production assets into the `dist/` directory.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```
   Serves the production bundle locally at `http://localhost:4173/`.

---

## 📁 Architecture & Folder Structure

```text
react-version/
├── public/
│   ├── assets/
│   │   └── images/          # Full resolution images, logos, portraits, and craft assets
│   └── images/              # Compatibility image mirror ensuring 100% asset resolution
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── style.css    # Complete pre-compiled UPICON brand styling & utility classes
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx           # Fixed sticky header with 4-column mega-menu & language switch
│   │   │   ├── Footer.jsx           # 5-column institutional footer with integrated advisory CTA
│   │   │   ├── MobileMenuDrawer.jsx # Mobile offcanvas menu with collapsible accordion
│   │   │   ├── Chatbot.jsx          # "UPICON Mitra" AI assistant with Voice & TTS capability
│   │   │   ├── BackToTop.jsx        # Floating back-to-top button with smooth scroll
│   │   │   ├── ScrollProgress.jsx   # Top viewport scroll progress indicator
│   │   │   └── SocialSidebar.jsx    # Right-hand floating social link bar
│   │   └── ui/
│   │       ├── StatCounter.jsx         # Animated number counter on scroll
│   │       ├── WhoWeAreStack.jsx       # 3D interactive stacked corporate cards
│   │       ├── WhatWeDoSlider.jsx      # Synchronized dual-row service cards slider
│   │       └── KarigarScrollSlider.jsx # Scroll-driven horizontal artisan gallery
│   ├── data/
│   │       ├── artisanData.js  # 10 UP master artisans profiles with Hindi bios & assets
│   │       ├── storyData.js    # 6 District enterprise success stories
│   │       └── jobDatabase.js  # 6 Detailed career openings & empanelment roster
│   ├── layouts/
│   │   └── MainLayout.jsx   # Master layout wrapper with auto-scroll-to-top & AOS hooks
│   ├── pages/
│   │   ├── Home.jsx           # Home Page (hero swiper, counters, 3D card stack, showcase)
│   │   ├── About.jsx          # Corporate overview, 4-phase methodology & timeline
│   │   ├── BusinessUnits.jsx  # 8 industrial divisions with category filtering
│   │   ├── Careers.jsx        # Careers portal with active filtering tabs
│   │   ├── CareerDetails.jsx  # Dynamic job viewer, file upload preview & form submission
│   │   ├── Contact.jsx        # HQ/Zonal offices, department helplines, Youth Adda map finder
│   │   ├── Articles.jsx       # Publications, whitepapers & research catalog with filter tabs
│   │   ├── ODOP.jsx           # Moradabad spotlight, cluster metrics & featured crafts
│   │   ├── Karigar.jsx        # Interactive master artisan explorer with audio/story preview
│   │   ├── SuccessStories.jsx # Interactive district enterprise case studies explorer
│   │   ├── Webinars.jsx       # Masterclass video player, webinars & podcast archives
│   │   ├── CMYuva.jsx         # Scheme facts, 6-step roadmap, benefits & callback form
│   │   ├── MSME.jsx           # Bankable DPR profiles (Oil, Solar, Aroma) & 10 FAQs
│   │   ├── NewsDetails.jsx    # Official press release, copy link / print & news carousel
│   │   ├── PrivacyPolicy.jsx  # GDPR & data governance with sticky table of contents
│   │   └── TermsOfService.jsx # Sovereign portal governance with sticky navigation
│   ├── routes/
│   │   └── AppRoutes.jsx      # Complete routing table for all 16 pages + .html redirects
│   ├── App.jsx                # Router provider root
│   ├── main.jsx               # React 19 entry point
│   └── index.css              # Global styles entry
├── index.html                 # HTML shell with Google Fonts, Bootstrap & Swiper CSS
├── vite.config.js             # Vite configuration with React plugin
└── package.json               # Dependencies and build scripts
```

---

## 🎨 100% Design & UI Fidelity Guarantee

- **Colors & Branding**: UPICON Deep Teal (`#0c2f35`), Vibrant Orange (`#f97316`), Gold/Amber accents, and neutral background tones are strictly preserved.
- **Typography**: Google Font `Plus Jakarta Sans` with `Material Symbols Outlined` icon set.
- **Responsive Layouts**: Desktop, laptop, tablet, and mobile breakpoints identical to the original project.
- **Zero Placeholder Content**: All original Hindi and English biographies, metrics, district names, and contact details have been migrated verbatim into structured datasets.

---

## ⚡ Converted Dynamic Features

| Original Feature | React Implementation |
| :--- | :--- |
| HTML Multi-page Navigation | React Router DOM with path matching & legacy `.html` redirects |
| Mobile Navigation Menu | React State Drawer (`MobileMenuDrawer.jsx`) with ESC key & overlay backdrop |
| Swiper Hero & Sliders | React Swiper 11 with touch, mousewheel, and responsive breakpoints |
| Artisan Detail Modal / View | React State driven viewer with smooth Hindi text transitions |
| Career Application Form | Controlled form with client-side validation, PDF upload preview & reference ID generator |
| UPICON Mitra Chatbot | Full React component with Web Speech API (Voice Recognition & TTS), quick questions, and bilingual support |
| Scroll-to-Top & Progress Bar | React scroll hooks with passive event listeners |
| AOS Scroll Animations | Initialized and refreshed on every route change in `MainLayout.jsx` |
