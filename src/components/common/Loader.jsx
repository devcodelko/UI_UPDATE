import React from 'react';

export default function Loader() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-8 h-8 border-4 border-brand-teal border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
