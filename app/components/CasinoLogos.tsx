import React from 'react';

export const logos = {
  bwin: (
    <svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="240" height="80" rx="12" fill="#1a1a1a"/>
      <circle cx="36" cy="40" r="16" fill="#FFD700"/>
      <text x="64" y="53" fontFamily="Arial Black, Impact, sans-serif" fontSize="40" fontWeight="900" fill="#FFFFFF" letterSpacing="-1">bwin</text>
    </svg>
  ),
};

export type LogoKey = keyof typeof logos;
