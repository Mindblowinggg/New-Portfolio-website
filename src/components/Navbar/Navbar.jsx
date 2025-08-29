import React, { useState } from "react";
import navbarstyles from "../Navbar/Navbar.module.css";
import MenuBtn from "./MenuBtn";
import SideMenu from "./SideMenu";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={navbarstyles.nav}>
      <div className={navbarstyles.navlogo}>
        <h1>AK</h1>
      </div>
     
        <MenuBtn menuOpen={menuOpen} handleToggle={handleToggle}/>
        {menuOpen && <SideMenu/>}
      
    </nav>
  );
};

export default Navbar;
