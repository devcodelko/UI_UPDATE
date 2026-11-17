import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Page Components
import Home from '../pages/Home';
import About from '../pages/About';
import BusinessUnits from '../pages/BusinessUnits';
import Careers from '../pages/Careers';
import CareerDetails from '../pages/CareerDetails';
import Contact from '../pages/Contact';
import Articles from '../pages/Articles';
import ODOP from '../pages/ODOP';
import Karigar from '../pages/Karigar';
import SuccessStories from '../pages/SuccessStories';
import Webinars from '../pages/Webinars';
import CMYuva from '../pages/CMYuva';
import MSME from '../pages/MSME';
import NewsDetails from '../pages/NewsDetails';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Home Page */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route path="/home-2.html" element={<Navigate to="/" replace />} />
      <Route path="/index.html" element={<Navigate to="/" replace />} />

      {/* 2. About Page */}
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route path="/about.html" element={<Navigate to="/about" replace />} />

      {/* 3. Business Units Page */}
      <Route
        path="/business-units"
        element={
          <MainLayout>
            <BusinessUnits />
          </MainLayout>
        }
      />
      <Route path="/business-units.html" element={<Navigate to="/business-units" replace />} />

      {/* 4. Careers Page */}
      <Route
        path="/careers"
        element={
          <MainLayout>
            <Careers />
          </MainLayout>
        }
      />
      <Route path="/careers.html" element={<Navigate to="/careers" replace />} />

      {/* 5. Career Details Page */}
      <Route
        path="/career-details"
        element={
          <MainLayout>
            <CareerDetails />
          </MainLayout>
        }
      />
      <Route path="/career-details.html" element={<Navigate to="/career-details" replace />} />

      {/* 6. Contact Us Page */}
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
      <Route path="/contact.html" element={<Navigate to="/contact" replace />} />

      {/* 7. Articles & Research Page */}
      <Route
        path="/articles"
        element={
          <MainLayout>
            <Articles />
          </MainLayout>
        }
      />
      <Route path="/articles.html" element={<Navigate to="/articles" replace />} />

      {/* 8. ODOP Page */}
      <Route
        path="/odop"
        element={
          <MainLayout>
            <ODOP />
          </MainLayout>
        }
      />
      <Route path="/odop.html" element={<Navigate to="/odop" replace />} />

      {/* 9. Karigar Craft Page */}
      <Route
        path="/karigar"
        element={
          <MainLayout>
            <Karigar />
          </MainLayout>
        }
      />
      <Route path="/karigar.html" element={<Navigate to="/karigar" replace />} />

      {/* 10. Success Stories Page */}
      <Route
        path="/success-stories"
        element={
          <MainLayout>
            <SuccessStories />
          </MainLayout>
        }
      />
      <Route path="/success-stories.html" element={<Navigate to="/success-stories" replace />} />

      {/* 11. Webinars Page */}
      <Route
        path="/webinars"
        element={
          <MainLayout>
            <Webinars />
          </MainLayout>
        }
      />
      <Route path="/webinars.html" element={<Navigate to="/webinars" replace />} />

      {/* 12. CM Yuva Page */}
      <Route
        path="/cmyuva"
        element={
          <MainLayout>
            <CMYuva />
          </MainLayout>
        }
      />
      <Route path="/cmyuva.html" element={<Navigate to="/cmyuva" replace />} />

      {/* 13. MSME Page */}
      <Route
        path="/msme"
        element={
          <MainLayout>
            <MSME />
          </MainLayout>
        }
      />
      <Route path="/msme.html" element={<Navigate to="/msme" replace />} />

      {/* 14. News Details Page */}
      <Route
        path="/news-details"
        element={
          <MainLayout>
            <NewsDetails />
          </MainLayout>
        }
      />
      <Route path="/news-details.html" element={<Navigate to="/news-details" replace />} />

      {/* 15. Privacy Policy Page */}
      <Route
        path="/privacy-policy"
        element={
          <MainLayout>
            <PrivacyPolicy />
          </MainLayout>
        }
      />
      <Route path="/privacy-policy.html" element={<Navigate to="/privacy-policy" replace />} />

      {/* 16. Terms of Service Page */}
      <Route
        path="/terms-of-service"
        element={
          <MainLayout>
            <TermsOfService />
          </MainLayout>
        }
      />
      <Route path="/terms-of-service.html" element={<Navigate to="/terms-of-service" replace />} />

      {/* Catch-all Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
