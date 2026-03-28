import React from 'react';

export const BarbieIllustration = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background circle */}
    <circle cx="200" cy="150" r="140" fill="url(#pinkGradient)" opacity="0.1" />
    
    {/* Barbie silhouette */}
    <g transform="translate(200, 150)">
      {/* Dress */}
      <path
        d="M-30 -20C-30 -30 -20 -40 0 -40C20 -40 30 -30 30 -20C30 -10 20 0 0 0C-20 0 -30 -10 -30 -20Z"
        fill="#FF69B4"
        stroke="#FF1493"
        strokeWidth="2"
      />
      
      {/* Dress bottom */}
      <path
        d="M-25 0C-25 0 -50 20 -50 60C-50 90 -30 100 -10 100L10 100C30 100 50 90 50 60C50 20 25 0 25 0Z"
        fill="url(#dressGradient)"
        stroke="#FF1493"
        strokeWidth="2"
      />
      
      {/* Hair */}
      <ellipse cx="0" cy="-50" rx="20" ry="25" fill="#FFD700" />
      
      {/* Face */}
      <circle cx="0" cy="-45" r="15" fill="#FFB6C1" />
      
      {/* Crown */}
      <path
        d="M-15 -65L-10 -75L0 -70L10 -75L15 -65Z"
        fill="#FFD700"
        stroke="#FF1493"
        strokeWidth="1"
      />
      
      {/* Gems on crown */}
      <circle cx="-8" cy="-70" r="2" fill="#FF69B4" />
      <circle cx="0" cy="-72" r="2.5" fill="#FF1493" />
      <circle cx="8" cy="-70" r="2" fill="#FF69B4" />
      
      {/* Arms */}
      <ellipse cx="-35" cy="-5" rx="8" ry="20" fill="#FFB6C1" />
      <ellipse cx="35" cy="-5" rx="8" ry="20" fill="#FFB6C1" />
      
      {/* Shoes */}
      <ellipse cx="-15" cy="95" rx="12" ry="8" fill="#FF1493" />
      <ellipse cx="15" cy="95" rx="12" ry="8" fill="#FF1493" />
      
      {/* Dress details */}
      <circle cx="-15" cy="30" r="3" fill="white" opacity="0.7" />
      <circle cx="15" cy="40" r="3" fill="white" opacity="0.7" />
      <circle cx="0" cy="60" r="3" fill="white" opacity="0.7" />
      
      {/* Sparkles around */}
      <g opacity="0.6">
        <path d="M-60 -30L-55 -35L-60 -40L-65 -35Z" fill="#FFD700" />
        <path d="M60 -20L65 -25L60 -30L55 -25Z" fill="#FFD700" />
        <path d="M-70 20L-65 15L-70 10L-75 15Z" fill="#FF69B4" />
        <path d="M70 30L75 25L70 20L65 25Z" fill="#FF69B4" />
        <circle cx="-55" cy="50" r="2" fill="#FF1493" />
        <circle cx="60" cy="60" r="2" fill="#FF1493" />
      </g>
    </g>
    
    {/* Decorative elements */}
    <g opacity="0.4">
      <circle cx="50" cy="50" r="4" fill="#FF69B4" />
      <circle cx="350" cy="80" r="4" fill="#FF1493" />
      <circle cx="80" cy="250" r="4" fill="#FFD700" />
      <circle cx="320" cy="220" r="4" fill="#FF69B4" />
      
      {/* Small hearts */}
      <path d="M100 100C100 95 105 90 110 95C115 90 120 95 120 100C120 110 110 115 110 115S100 110 100 100Z" fill="#FF69B4" />
      <path d="M300 200C300 195 305 190 310 195C315 190 320 195 320 200C320 210 310 215 310 215S300 210 300 200Z" fill="#FF1493" />
    </g>
    
    <defs>
      <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#FFB6C1", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"#FF69B4", stopOpacity:1}} />
      </linearGradient>
      <linearGradient id="dressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor:"#FF1493", stopOpacity:1}} />
        <stop offset="50%" style={{stopColor:"#FF69B4", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"#FF1493", stopOpacity:1}} />
      </linearGradient>
    </defs>
  </svg>
);
