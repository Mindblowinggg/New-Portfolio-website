import React from "react";
import styles from "../Navbar/SideMenu.module.css";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,  
        duration: 0.5,
        ease: "easeOut"
      },
    },
    exit: { 
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        delay: 0.2,
        duration: 0.3,
        ease: "easeIn"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }, 
  };

  return (
    <div className={styles.sidemenu}>
      <motion.ul
        className={styles.sidemenuList}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit" 
      >
        {menuItems.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            {item.title}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SideMenu;