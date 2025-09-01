import React, { useState, useEffect } from "react";
import styles from "../Home/Home.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsArrowVisible(true);
    }, 1600); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.title}>
        <h2 className={styles.name}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", type: "tween", duration: 0.8 }}
          >
            AMAN
          </motion.div>
          <br />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              type: "tween",
              delay: 0.3,
              duration: 0.8,
            }}
          >
            KAHAR
          </motion.div>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            type: "tween",
            delay: 0.8,
            duration: 0.8,
          }}
          className={styles.proffessionText}
        >
          FrontEnd developer <br /> (React js.)
        </motion.p>
      </div>
      <SocialLinks />
      {isArrowVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 10,
          }}
          transition={{
            y: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            opacity: {
                duration: 0.5,
                ease: "easeInOut",
            }
          }}
          style={{ position: "absolute", bottom: 30, right: 20 }}
        >
          <FaArrowDown size={25} />
        </motion.div>
      )}
    </div>
  );
};

export default Home;