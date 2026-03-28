import React from 'react';

export const SparkleEffect = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    {/* Sparkle particles */}
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-70"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `sparkle ${2 + Math.random() * 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
    
    {/* Larger sparkles */}
    {[...Array(4)].map((_, i) => (
      <div
        key={`large-${i}`}
        className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-50"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `sparkle ${3 + Math.random() * 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}
    
    <style>{`
      @keyframes sparkle {
        0%, 100% { 
          opacity: 0;
          transform: scale(0) rotate(0deg);
        }
        50% { 
          opacity: 1;
          transform: scale(1) rotate(180deg);
        }
      }
    `}</style>
  </div>
);
