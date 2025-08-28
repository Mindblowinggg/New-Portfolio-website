import React, { useState } from "react";
import Mouseposition from "../utils/Mouseposition";
import styles from "./Customcursor.module.css";
import { motion } from "framer-motion";

const Customcursor = () => {
  const [ishovered, setishovered] = useState(false);
  const { x, y } = Mouseposition();
  const size = ishovered ? 500 : 20;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x-size/2}px ${y-size/2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
      >
        <p
          onMouseEnter={() => setishovered(true)}
          onMouseLeave={() => setishovered(false)}
        >
          no its not me, its ai
        </p>
      </motion.div>
      <div className={styles.body}>
        <p>hi my name is aman</p>
      </div>
    </main>
  );
};

export default Customcursor;