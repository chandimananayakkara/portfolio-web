import React from 'react';
import logoGif from '../../imports/logo.gif';

export function Logo({ className = "w-10 h-10", showText = false }: { className?: string; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <img src={logoGif} alt="Chandima logo" className={className} />
      {showText && (
        <span className="font-bold text-lg tracking-tight text-gray-800 dark:text-gray-100">Chandima</span>
      )}
    </div>
  );
}
