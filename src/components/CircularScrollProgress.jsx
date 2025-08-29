import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { BsDot } from 'react-icons/bs'; // <--- Yeh line add karein

const CircularScrollProgressWithLibrary = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const percentage = (scrollPosition / totalHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        zIndex: 1000,
      }}
    >
      <CircularProgressbar
        value={scrollPercentage}
        styles={buildStyles({
          pathColor: `#3498db`,
          trailColor: '#d6d6d6',
        })}
      />
      {/* <--- Yeh naya code hai icon ke liye ---> */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Icon ko bilkul center mein lane ke liye
          fontSize: '40px', // Icon ka size adjust karein
          color: '#3498db', // Icon ka rang
        }}
      >
        <BsDot /> {/* <--- Aapka dot icon yahan hai ---> */}
      </div>
      {/* <--- Naya code yahan tak hai ---> */}
    </div>
  );
};

export default CircularScrollProgressWithLibrary;