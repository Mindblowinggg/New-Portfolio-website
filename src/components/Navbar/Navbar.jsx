import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import navbarstyles from "../Navbar/Navbar.module.css";
import MenuBtn from "./MenuBtn";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);


  useEffect(() => {
    let prevScrollY = scrollY.get();

    return scrollY.on("change", (latestScrollY) => {
      if (latestScrollY > prevScrollY && latestScrollY > 200) {
        setHidden(true);
      } else if (latestScrollY < prevScrollY) {
        setHidden(false);
      }
      prevScrollY = latestScrollY;
    });
  }, [scrollY]);

  // Menu toggle logic
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
    <motion.nav
      className={navbarstyles.nav}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className={navbarstyles.navlogo}>
        <h1>AK</h1>
      </div>
      <MenuBtn menuOpen={menuOpen} handleToggle={handleToggle} />
      <AnimatePresence>{menuOpen && <SideMenu />}</AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
