import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

export default function App() {
  return (
    <LanguageProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}

