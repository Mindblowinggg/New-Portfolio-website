import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import Home2 from "./components/Home2/Home2";
import Projects from "./components/Projects/Projects";
import Marquees from "./components/Marquees/Marquees";
import Services from "./components/Services/Services";
import Awards from "./components/Awards/Awards";
import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import { Link, Links } from "react-router-dom";
import LinksSection from "./components/LINKS/LinksSection";
import Sitemap from "./components/Sitemap/Sitemap";
import ContactLinks from "./components/ContactLinks/ContactLinks";

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
      <Feedback/>
      <Contact/>
      <LinksSection/>
      <Sitemap/>
      <ContactLinks/>
    </div>
  );
};

export default App;
