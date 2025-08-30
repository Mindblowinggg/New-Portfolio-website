import React from "react";
import styles from "../Home/Home.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { FaArrowDown } from 'react-icons/fa6';


const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.title}>
        <h2 className={styles.name}>
          <motion.div
          initial={{ opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{ease:'easeInOut' , type:'tween', duration:0.8}}
           >
            AMAN
          </motion.div>
          <br />
           <motion.div
             initial={{ opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{ease:'easeInOut' , type:'tween',delay:0.3, duration:0.8}}
          >KAHAR</motion.div>
        </h2>
        <motion.p
        initial={{ opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{ease:'easeInOut' , type:'tween',delay:0.8, duration:0.8}}

         className={styles.proffessionText}>
          FrontEnd developer <br /> (React js.)
        </motion.p>
      </div>
      <SocialLinks/>
      <FaArrowDown size={25} style={{position:"absolute" , bottom:30 , right:20}}/>
    </div>
  );
};

export default Home;
