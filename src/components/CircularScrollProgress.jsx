import React, { useState, useEffect } from 'react';
import './CircularScrollProgress.css'; // CSS file ko import karein

const CircularScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const calculateScrollProgress = () => {
    // Total scrollable height calculate karein
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Current scroll position
    const scrollPosition = window.scrollY;
    
    const percentage = (scrollPosition / totalHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    // Scroll event listener add karein
    window.addEventListener('scroll', calculateScrollProgress);
    
    // Component unmount hone par listener remove karein
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []); // Empty dependency array se yeh sirf ek baar run hoga

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  // Progress ke hisaab se offset calculate karein
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <div className="progress-container">
      <svg className="progress-ring" width="120" height="120">
        {/* Background circle jo hamesha full rahega */}
        <circle
          className="progress-ring-bg"
          stroke="#e6e6e6"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        {/* Progress circle jo scroll hone par fill hoga */}
        <circle
          className="progress-ring-circle"
          stroke="#4caf50"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
    </div>
  );
};

export default CircularScrollProgress;