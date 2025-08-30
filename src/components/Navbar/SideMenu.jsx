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


// its bcoz i want sidemenudiv opacity gets 0 after list elements animation gets done
  const totalLiTagsExitDuration = (menuItems.length - 1) * 0.05 + 0.5;
  //////////////////////////////////////////////////////////////////////////

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 0,
        transition: {
          delay: totalLiTagsExitDuration,
          duration: 0.3,
        },
      }}
      transition={{ duration: 0.4 }}
      className={styles.sidemenu}
    >
      <ul className={styles.sidemenuList}>
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.55,
              ease: "easeInOut",
            }}
            exit={{
              opacity: 0,
              y: -100,
              transition: {
                duration: 0.3,
                delay: index * 0.07,
                ease: "easeInOut",
              },
            }}
          >
            {item.title}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SideMenu;
