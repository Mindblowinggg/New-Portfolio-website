import React, { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import Home2 from "./components/Home2/Home2";
import Projects from "./components/Projects/Projects";
import Marquees from "./components/Marquees/Marquees";
import Services from "./components/Services/Services";
import CardStackDrag from "./components/Cardstack";

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Lenis इंस्टेंस बनाएं
    const lenis = new Lenis({
      duration: 1.2, // स्क्रॉल की अवधि को नियंत्रित करता है (स्मूथनेस)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // स्मूथनेस के लिए एक फ़ंक्शन
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.5, // यह मान स्क्रॉल स्पीड को धीमा करता है
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // एनिमेशन लूप शुरू करें
    requestAnimationFrame(raf);

    // इंस्टेंस को useRef में स्टोर करें
    lenisRef.current = lenis;

    // कंपोनेंट अनमाउंट होने पर इंस्टेंस को साफ़ करें
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="appcontainer">
      <Navbar />
      <Home />
      <Home2 />
      <Projects />
      <Marquees />
      <Services />
      <CardStackDrag />
    </div>
  );
};

export default App;