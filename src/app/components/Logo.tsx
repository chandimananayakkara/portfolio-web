import React from 'react';

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cn-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" /> {/* blue-600 */}
          <stop offset="100%" stopColor="#9333ea" /> {/* purple-600 */}
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Outer Hexagon */}
      <path 
        d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z" 
        stroke="url(#cn-gradient)" 
        strokeWidth="6" 
        strokeLinejoin="round"
        fill="url(#cn-gradient)"
        fillOpacity="0.05"
        filter="url(#glow)"
      />
      
      {/* Inner 'C' */}
      <path 
        d="M45 35C35 35 28 42 28 50C28 58 35 65 45 65" 
        stroke="url(#cn-gradient)" 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Inner 'N' */}
      <path 
        d="M55 65V35L75 65V35" 
        stroke="url(#cn-gradient)" 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
