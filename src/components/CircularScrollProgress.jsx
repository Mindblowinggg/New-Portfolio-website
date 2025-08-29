import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaArrowUp } from 'react-icons/fa'; // Import the arrow up icon from Font Awesome

const CircularScrollProgressWithLibrary = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const percentage = (scrollPosition / totalHeight) * 100;
      // Ensure percentage is not NaN for very short pages
      setScrollPercentage(isNaN(percentage) ? 0 : percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        zIndex: 1000,
        cursor: 'pointer',
        display: 'flex',          // Flexbox use karein
        justifyContent: 'center', // Horizontal center
        alignItems: 'center',     // Vertical center
      }}>
      <CircularProgressbar
        value={scrollPercentage}
        styles={buildStyles({
          pathColor: `#3498db`,
          trailColor: '#d6d6d6',
        })}
      />
      {/* Icon ko CircularProgressbar ke upar render karein */}
      <FaArrowUp
        style={{
          position: 'absolute', // Absolute position karein
          fontSize: '20px',    // Icon ka size set karein
          color: '#34495e',    // Icon ka color set karein
        }}
      />
    </div>
  );
};

export default CircularScrollProgressWithLibrary;