import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import navbarstyles from "../Navbar/Navbar.module.css";
import MenuBtn from "./MenuBtn";
import SideMenu from "./SideMenu";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isToggling, setIsToggling] = useState(false); // New state to prevent rapid clicks

  const handleToggle = () => {
    if (isToggling) {
      return;
    }
    setIsToggling(true);
    setMenuOpen(!menuOpen);
    setTimeout(() => {
      setIsToggling(false);
    }, 1150);
  };

  return (
    <nav className={navbarstyles.nav}>
      <div className={navbarstyles.navlogo}>
        <h1>AK</h1>
      </div>
      <MenuBtn menuOpen={menuOpen} handleToggle={handleToggle} />
      <AnimatePresence>{menuOpen && <SideMenu />}</AnimatePresence>
    </nav>
  );
};

export default Navbar;
