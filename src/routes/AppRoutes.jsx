import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.jsx';

import Home from '../pages/Home.jsx';
import Home2 from '../pages/Home2.jsx';
import About from '../pages/About.jsx';
import Articles from '../pages/Articles.jsx';
import BusinessUnits from '../pages/BusinessUnits.jsx';
import Careers from '../pages/Careers.jsx';
import CareerDetails from '../pages/CareerDetails.jsx';
import CmYuva from '../pages/CmYuva.jsx';
import Contact from '../pages/Contact.jsx';
import Karigar from '../pages/Karigar.jsx';
import Msme from '../pages/Msme.jsx';
import NewsDetails from '../pages/NewsDetails.jsx';
import Odop from '../pages/Odop.jsx';
import PrivacyPolicy from '../pages/PrivacyPolicy.jsx';
import SuccessStories from '../pages/SuccessStories.jsx';
import TermsOfService from '../pages/TermsOfService.jsx';
import Webinars from '../pages/Webinars.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/business-units" element={<BusinessUnits />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career-details" element={<CareerDetails />} />
        <Route path="/cmyuva" element={<CmYuva />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/karigar" element={<Karigar />} />
        <Route path="/msme" element={<Msme />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/odop" element={<Odop />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
