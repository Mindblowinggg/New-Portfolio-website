import React from "react";
import { motion } from "framer-motion";
import TEXTEFFECT from "../TEXTEFFECT/TEXTEFFECT";
import styles from "../Awards/Awards.module.css";

const awardsData = [
  {
    id: 1,
    title: "Awwwards",
    description: "Developer Award, Site of the Month",
    count: "12x Awards",
  },
  {
    id: 2,
    title: "CSS Design Awards",
    description: "Website of the Day, Designer of the Year '23",
    count: "3x Awards",
  },
  {
    id: 3,
    title: "Behance",
    description: "UI Gallery Featured",
    count: "2x Awards",
  },
  {
    id: 4,
    title: "CSS Winner",
    description: "Site of the Day",
    count: "4x Awards",
  },
  {
    id: 5,
    title: "FWA Awards",
    description: "FWA of the Day, Special Mention",
    count: "8x Awards",
  },
];

const Awards = () => {
  return (
    <div className={styles.container}>
      <TEXTEFFECT text="RECOGNITIONS" fontSize={"20px"} />
      <TEXTEFFECT text={"AWARDS"} fontSize={"64px"} />
      <p
        style={{
          fontSize: "20px",
          marginTop: "30px",
          fontFamily: "Poppins",
          textTransform: "uppercase",
        }}
      >
        List of recognitions that make me proud
      </p>

      <div className={styles.awardlist}>
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            className={styles.eachaward}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut"
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <p>{award.title}</p>
              <p style={{ color: "#7F7E7C" }}>{award.id}</p>
            </div>
            <p style={{ textAlign: "left", color: "#7F7E7C" }}>{award.description}</p>
            <p style={{ textAlign: "left", color: "#7F7E7C" }}>{award.count}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Awards;