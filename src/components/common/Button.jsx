import React from 'react';

export default function Button({ children, className = '', variant = 'primary', ...props }) {
  const baseStyle = "px-4 py-2 rounded-lg font-bold text-xs transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer border-0";
  const variants = {
    primary: "bg-brand-teal text-white hover:bg-brand-teal-dark",
    secondary: "bg-brand-orange text-white hover:bg-brand-orange-dark",
    outline: "border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </button>
  );
}
