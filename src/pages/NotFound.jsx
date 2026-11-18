import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
      <span className="text-6xl font-extrabold text-brand-teal">404</span>
      <h1 className="text-2xl font-bold mt-2 text-slate-800">Page Not Found</h1>
      <p className="text-slate-500 mt-1 max-w-md text-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="mt-6 px-6 py-3 bg-brand-teal text-white font-bold text-xs rounded-xl shadow-xs hover:bg-brand-teal-dark transition-colors">
        Return to Home Page
      </Link>
    </div>
  );
}
