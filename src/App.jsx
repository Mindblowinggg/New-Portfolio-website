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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      // Change this value to a smaller number to make the scroll slower
      mouseMultiplier: 0.2, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    lenisRef.current = lenis;

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