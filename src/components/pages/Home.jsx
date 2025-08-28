import React from 'react'
import { motion } from 'framer-motion';
import "../pages/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <motion.h1
        initial={{ opacity: 0, y: 70, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          duration: 1
        }}
      >
        welcome
        <br />
        AMAN
      </motion.h1>
    </div>
  )
}

export default Home;