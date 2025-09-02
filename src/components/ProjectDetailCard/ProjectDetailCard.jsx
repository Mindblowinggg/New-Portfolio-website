import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectDetailCard.module.css";

const ProjectDetailCard = ({ media, heading, category, index }) => {
  const formattedIndex = (index + 1).toString().padStart(2, "0");
  const isVideo = media.endsWith(".mp4") || media.endsWith(".webm") || media.endsWith(".ogg");

  const renderMedia = () => {
    if (isVideo) {
      return (
        <video
          className={styles.projectMedia}
          src={media}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    } else {
      return <img className={styles.projectMedia} src={media} alt={heading} />;
    }
  };

  return (
    <motion.div
      className={styles.cardContainer}
      initial={{ opacity: 0.6, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 , ease:"easeInOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className={styles.mediaWrapper}>{renderMedia()}</div>
      <div className={styles.cardContent}>
        <div>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.category}>{category}</p>
        </div>
        <p className={styles.number}>{formattedIndex}</p>
      </div>
    </motion.div>
  );
};

export default ProjectDetailCard;