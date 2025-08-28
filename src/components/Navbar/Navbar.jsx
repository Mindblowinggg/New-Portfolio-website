import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import navbarstyle from "./Navbar.module.css";
import { LuDot } from "react-icons/lu";


const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const navLinks = [
    { path: "/", name: "HOME" },
    {
      path: "/work",
      name: "WORK",
      dropdown: [
        { path: "/work/projects", name: "Projects" },
        { path: "/work/case-studies", name: "Case Studies" },
        { path: "/work/clients", name: "Clients" },
        { path: "/work/testimonials", name: "Testimonials" },
        { path: "/work/process", name: "Process" },
      ],
    },
    { path: "/about", name: "ABOUT" },
    { path: "/blog", name: "BLOG" },
    { path: "/contact", name: "CONTACT" },
    {
      path: "/more",
      name: "MORE",
      dropdown: [
        { path: "/more/services", name: "Services" },
        { path: "/more/portfolio", name: "Portfolio" },
      ],
    },
  ];

  const getNavLinkClass = ({ isActive }) =>
    `group ${navbarstyle.link} ${isActive ? navbarstyle.active : ""}`;

  const handleMouseEnter = (linkName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdown(linkName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(null);
    }, 150);
  };

  useEffect(() => {
   
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-10 pt-8 pb-4 ${navbarstyle.NAV}`}
    >
      {/* logo section */}
      <div>
        <img src="/LOGO.svg" alt="" />
      </div>
      {/* navlinks section */}
      <div className={navbarstyle.NAVLINKS}>
        <ul className="flex justify-center items-center gap-7 text-2xl">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className=" px-2 py-1 relative"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to={link.path} className={getNavLinkClass}>
                <span className={navbarstyle.text}>{link.name}</span>
                {link.dropdown && (
                  <LuDot className="group-active:text-blue-600" />
                )}
              </NavLink>
              {link.dropdown && dropdown === link.name && (
                <div className="top-11 absolute bg-[#212121] px-4 py-2 rounded-xl text-[18px] text-[#d1cdbe]">
                  <ul className="list-none">
                    {link.dropdown.map((dropdownlink, index) => (
                      <li key={index} className="mt-2 mb-2">
                        <NavLink to={dropdownlink.path}>
                          {dropdownlink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Contact button */}
      <div>
        <NavLink to="/contact" className="contact-button">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;