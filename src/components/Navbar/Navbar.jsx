import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navbarstyle from "./Navbar.module.css";
import { LuDot } from "react-icons/lu";

const Navbar = () => {
  const [dropdown, setdropdown] = useState(false);

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
              onMouseEnter={() => link.dropdown && setdropdown(link.name)}
              onMouseLeave={() => setdropdown(null)}
              key={index}
              className=" px-2 py-1 relative"
            >
              <NavLink to={link.path} className={getNavLinkClass}>
                <span className={navbarstyle.text}>{link.name}</span>
                {link.dropdown && (
                  <LuDot className="group-active:text-blue-600" />
                )}
              </NavLink>
              {link.dropdown && dropdown === link.name && (
                <div
                  className="top-11 absolute bg-[#212121] px-4 py-2 rounded-xl text-[18px] text-[#d1cdbe]
                "
                >
                  {link.dropdown.map((dropdownlink, index) => (
                    <li className="mt-2 mb-2">
                      <NavLink key={index} to={dropdownlink.path}>
                        {dropdownlink.name}
                      </NavLink>
                    </li>
                  ))}
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