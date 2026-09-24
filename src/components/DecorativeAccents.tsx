import React from 'react';

/**
 * Minimal, delicate decorative elements inspired by nail curves,
 * tiny stars, micro flowers, and soft organic contours.
 * Designed with soft warm tones and low opacity.
 */

export const TinyStar: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-[#D8C798] opacity-60 ${className}`}
    aria-hidden="true"
  >
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

export const MicroFlower: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    className={`text-[#DEC9A6] opacity-50 ${className}`}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="2.5" fill="currentColor" fillOpacity="0.4" />
    <path d="M12 4.5V9.5M12 14.5V19.5M4.5 12H9.5M14.5 12H19.5" />
    <path d="M6.7 6.7L10.2 10.2M13.8 13.8L17.3 17.3M17.3 6.7L13.8 10.2M10.2 13.8L6.7 17.3" opacity="0.6" />
  </svg>
);

export const NailCurveAccent: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-24 h-10 text-[#DEC9A6] opacity-40 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M5 32C25 10 75 10 95 32"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeDasharray="1 3"
    />
    <circle cx="50" cy="14" r="2" fill="currentColor" />
  </svg>
);

export const SoftOrganicBlob: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`pointer-events-none absolute rounded-full blur-3xl opacity-35 bg-gradient-to-tr from-[#FDF2D6] via-[#F8E7E4] to-[#F5EADB] ${className}`}
    aria-hidden="true"
  />
);
