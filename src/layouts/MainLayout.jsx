import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/common/TopBar.jsx';
import Header from '../components/common/Header.jsx';
import MobileDrawer from '../components/layout/MobileDrawer.jsx';
import Footer from '../components/common/Footer.jsx';
import Chatbot from '../components/common/Chatbot.jsx';
import BackToTop from '../components/common/BackToTop.jsx';
import FloatingSidebar from '../components/common/FloatingSidebar.jsx';
import ScrollToTop from '../components/common/ScrollToTop.jsx';

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 antialiased">
      <ScrollToTop />
      <TopBar />
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
      <FloatingSidebar />
      <Chatbot />
      <BackToTop />
    </div>
  );
}
