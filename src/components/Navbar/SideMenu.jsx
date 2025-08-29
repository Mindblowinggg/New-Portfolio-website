import React from "react";
import styles from "../Navbar/SideMenu.module.css"

const SideMenu = () => {
  const menuItems = [
    { title: "HOME", path: "/" },
    { title: "WORK", path: "/work" },
    { title: "ABOUT", path: "/about" },
    { title: "BLOG", path: "/blog" },
    { title: "CONTACT", path: "/contact" },
    { title: "MORE", path: "/more" },
  ];

  return (
    <div className={styles.sidemenu}>
      <ul className={styles.sidemenuList}>
        {menuItems.map((item, index) => (
          <li key={index}>
           {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
