import React from "react";
import navbarstyles from "../Navbar/Navbar.module.css";
import { HiMenuAlt4 } from 'react-icons/hi';
import { RxCross1 } from "react-icons/rx";
import MenuBtn from "./MenuBtn";

const Navbar = () => {
  return (
    <nav className={navbarstyles.nav}>
      <div className={navbarstyles.navlogo}>
        <h1>AK</h1>
      </div>
     
        <MenuBtn/>
      
    </nav>
  );
};

export default Navbar;
