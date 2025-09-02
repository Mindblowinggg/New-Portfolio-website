import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import Home2 from "./components/Home2/Home2";
import Projects from "./components/Projects/Projects";
import Marquees from "./components/Marquees/Marquees";
import Services from "./components/Services/Services";
import Awards from "./components/Awards/Awards";

const App = () => {
  return (
    <div className="appcontainer">
      <Navbar />
      <Home />
      <Home2 />
      <Projects />
      <Marquees />
      <Services />
      <Awards />
    </div>
  );
};

export default App;
