import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import More from "./components/pages/More";
import Customcursor from "./components/Customcursor";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#E4E2DB] h-screen">
        <Navbar/>
        <Customcursor/>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more" element={<More />} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
};

export default App;