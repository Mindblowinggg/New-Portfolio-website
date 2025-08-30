import React from "react";
import styles from "../Navbar/SideMenu.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


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
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}
      className={styles.sidemenu}
    >
      <ul
        className={styles.sidemenuList}
      >
        {menuItems.map((item, index) => (
          <motion.li key={index}>{item.title}</motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SideMenu;
