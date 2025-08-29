import React from "react";
import "./MenuBtn.css";

const MenuBtn = ({menuOpen,handleToggle}) => {
  
  return (
    <div className="menubtn">
      <span  onClick={handleToggle} className="menu-text">{menuOpen ? "CLOSE" : "MENU"}</span>
      <input 
        onChange={handleToggle} 
        id="checkbox" 
        type="checkbox" 
        checked={menuOpen}
      />
      <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </label>
    </div>
  );
};

export default MenuBtn;