import React from 'react';

export const BarbieHeart = ({ 
  className = "", 
  color = "#FF69B4", 
  style 
}: { 
  className?: string; 
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 85C50 85 10 60 10 35C10 20 22.5 10 35 10C42.5 10 47.5 15 50 20C52.5 15 57.5 10 65 10C77.5 10 90 20 90 35C90 60 50 85 50 85Z"
      fill={color}
      stroke="white"
      strokeWidth="2"
    />
    <ellipse cx="30" cy="25" rx="5" ry="3" fill="white" opacity="0.7" />
  </svg>
);

export const BarbieCrown = ({ 
  className = "", 
  color = "#FFD700",
  style 
}: { 
  className?: string; 
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 70L15 40L25 50L35 30L50 45L65 30L75 50L85 40L90 70H10Z"
      fill={color}
      stroke="#FF1493"
      strokeWidth="1.5"
    />
    <circle cx="25" cy="50" r="3" fill="#FF69B4" />
    <circle cx="50" cy="45" r="4" fill="#FF69B4" />
    <circle cx="75" cy="50" r="3" fill="#FF69B4" />
    <ellipse cx="35" cy="35" rx="2" ry="1" fill="white" opacity="0.8" />
    <ellipse cx="65" cy="35" rx="2" ry="1" fill="white" opacity="0.8" />
  </svg>
);

export const BarbieDress = ({ 
  className = "", 
  color = "#FF1493",
  style 
}: { 
  className?: string; 
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 20C30 15 35 10 50 10C65 10 70 15 70 20C70 25 65 30 50 30C35 30 30 25 30 20Z"
      fill="#FFB6C1"
    />
    <path
      d="M35 30C35 30 20 40 15 60C10 80 15 90 25 90L75 90C85 90 90 80 85 60C80 40 65 30 65 30L35 30Z"
      fill={color}
      stroke="#FF69B4"
      strokeWidth="1"
    />
    <path
      d="M40 40L60 40C60 45 55 50 50 50C45 50 40 45 40 40Z"
      fill="white"
      opacity="0.3"
    />
    <circle cx="25" cy="70" r="2" fill="white" opacity="0.6" />
    <circle cx="75" cy="75" r="2" fill="white" opacity="0.6" />
    <circle cx="50" cy="80" r="1.5" fill="white" opacity="0.6" />
  </svg>
);

export const BarbieShoe = ({ 
  className = "", 
  color = "#FF1493",
  style 
}: { 
  className?: string; 
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 50C20 40 30 30 45 30L70 30C80 30 85 35 85 45C85 55 80 60 70 60L30 60C25 60 20 55 20 50Z"
      fill={color}
      stroke="#FF69B4"
      strokeWidth="1"
    />
    <path
      d="M70 30L75 20C80 15 85 20 80 25L75 35"
      fill="#FFB6C1"
      stroke="#FF1493"
      strokeWidth="1"
    />
    <ellipse cx="60" cy="45" rx="8" ry="4" fill="white" opacity="0.3" />
    <circle cx="75" cy="22" r="2" fill="#FFD700" />
  </svg>
);

export const BarbieBag = ({ 
  className = "", 
  color = "#FF69B4",
  style 
}: { 
  className?: string; 
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="50" cy="60" rx="25" ry="30" fill={color} stroke="#FF1493" strokeWidth="2" />
    <path
      d="M35 40C35 35 40 30 50 30C60 30 65 35 65 40"
      stroke="#FF1493"
      strokeWidth="3"
      fill="none"
    />
    <circle cx="40" cy="50" r="2" fill="#FFD700" />
    <circle cx="60" cy="55" r="2" fill="#FFD700" />
    <ellipse cx="50" cy="65" rx="12" ry="8" fill="white" opacity="0.3" />
    <path d="M45 20L55 20C60 20 62 25 60 30L55 25L45 25L40 30C38 25 40 20 45 20Z" fill="#FFB6C1" />
  </svg>
);

export const BarbieMirror = ({ 
  className = "", 
  color = "#FFD700",
  style 
}: { 
  className?: string; 
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="45" r="30" fill="#E6E6FA" stroke={color} strokeWidth="4" />
    <circle cx="50" cy="45" r="25" fill="white" opacity="0.8" />
    <path d="M45 75L55 75L52.5 85L47.5 85L45 75Z" fill={color} />
    <ellipse cx="45" cy="40" rx="3" ry="2" fill="#FF69B4" opacity="0.6" />
    <ellipse cx="55" cy="40" rx="3" ry="2" fill="#FF69B4" opacity="0.6" />
    <path d="M47 50C47 52 48 53 50 53C52 53 53 52 53 50" stroke="#FF1493" strokeWidth="1.5" fill="none" />
  </svg>
);

export const BarbieBow = ({ 
  className = "", 
  color = "#FF1493",
  style 
}: { 
  className?: string; 
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 30C15 20 15 40 25 50C25 60 35 55 40 50L50 45L60 50C65 55 75 60 75 50C85 40 85 20 75 30C65 25 55 35 50 40C45 35 35 25 25 30Z"
      fill={color}
      stroke="#FF69B4"
      strokeWidth="1"
    />
    <ellipse cx="50" cy="42" rx="8" ry="6" fill="#FF69B4" />
    <ellipse cx="35" cy="40" rx="6" ry="4" fill="white" opacity="0.4" />
    <ellipse cx="65" cy="40" rx="6" ry="4" fill="white" opacity="0.4" />
    <circle cx="30" cy="35" r="1.5" fill="white" />
    <circle cx="70" cy="35" r="1.5" fill="white" />
  </svg>
);

export const BarbieFlower = ({ 
  className = "", 
  color = "#FF69B4",
  style 
}: { 
  className?: string; 
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="30" r="12" fill={color} opacity="0.8" />
    <circle cx="30" cy="50" r="12" fill={color} opacity="0.8" />
    <circle cx="70" cy="50" r="12" fill={color} opacity="0.8" />
    <circle cx="40" cy="70" r="12" fill={color} opacity="0.8" />
    <circle cx="60" cy="70" r="12" fill={color} opacity="0.8" />
    <circle cx="50" cy="50" r="8" fill="#FFD700" />
    <circle cx="50" cy="50" r="4" fill="white" opacity="0.8" />
    <path d="M50 80L48 90L52 90L50 80Z" fill="#00AA00" />
    <path d="M45 85L40 80L42 78L47 83" fill="#00AA00" opacity="0.7" />
  </svg>
);

export const BarbieCastle = ({ 
  className = "", 
  color = "#FF69B4",
  style 
}: { 
  className?: string; 
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Castle base */}
    <rect x="20" y="60" width="60" height="30" fill={color} stroke="#FF1493" strokeWidth="1" />
    
    {/* Towers */}
    <rect x="15" y="40" width="15" height="50" fill="#FF1493" />
    <rect x="42.5" y="35" width="15" height="55" fill="#FF1493" />
    <rect x="70" y="40" width="15" height="50" fill="#FF1493" />
    
    {/* Tower tops */}
    <polygon points="22.5,40 15,25 30,25" fill="#FFD700" />
    <polygon points="50,35 42.5,20 57.5,20" fill="#FFD700" />
    <polygon points="77.5,40 70,25 85,25" fill="#FFD700" />
    
    {/* Flags */}
    <rect x="20" y="20" width="5" height="8" fill="#FF69B4" />
    <rect x="47" y="15" width="5" height="8" fill="#FF69B4" />
    <rect x="75" y="20" width="5" height="8" fill="#FF69B4" />
    
    {/* Castle gate */}
    <path d="M40 90L40 75C40 70 45 65 50 65C55 65 60 70 60 75L60 90Z" fill="#8B4513" />
    
    {/* Windows */}
    <rect x="22" y="50" width="4" height="6" fill="#87CEEB" />
    <rect x="47" y="45" width="4" height="6" fill="#87CEEB" />
    <rect x="75" y="50" width="4" height="6" fill="#87CEEB" />
    
    {/* Hearts decoration */}
    <path d="M35 70C35 68 36 67 37 67C38 67 39 68 39 70C39 72 37 74 37 74S35 72 35 70Z" fill="white" opacity="0.8" />
    <path d="M61 70C61 68 62 67 63 67C64 67 65 68 65 70C65 72 63 74 63 74S61 72 61 70Z" fill="white" opacity="0.8" />
  </svg>
);

export const BarbieMagicWand = ({ 
  className = "", 
  color = "#FFD700",
  style 
}: { 
  className?: string; 
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Wand stick */}
    <line x1="20" y1="80" x2="70" y2="30" stroke="#8B4513" strokeWidth="3" />
    
    {/* Star at the top */}
    <polygon 
      points="70,30 72,24 78,24 74,20 76,14 70,17 64,14 66,20 62,24 68,24" 
      fill={color} 
      stroke="#FF1493" 
      strokeWidth="1"
    />
    
    {/* Star center */}
    <circle cx="70" cy="22" r="3" fill="#FF69B4" />
    
    {/* Sparkles around the star */}
    <circle cx="75" cy="18" r="1" fill={color} />
    <circle cx="80" cy="25" r="1.5" fill="#FF69B4" />
    <circle cx="65" cy="15" r="1" fill={color} />
    <circle cx="82" cy="32" r="1" fill="#FF1493" />
    <circle cx="58" cy="22" r="1.5" fill={color} />
    
    {/* Magic trail */}
    <path d="M30 70C32 68 34 66 36 64" stroke="#FF69B4" strokeWidth="2" opacity="0.7" />
    <path d="M35 75C37 73 39 71 41 69" stroke={color} strokeWidth="2" opacity="0.7" />
    <path d="M40 80C42 78 44 76 46 74" stroke="#FF1493" strokeWidth="2" opacity="0.7" />
    
    {/* Ribbon on wand */}
    <ellipse cx="45" cy="55" rx="3" ry="8" fill="#FF69B4" opacity="0.8" />
  </svg>
);
