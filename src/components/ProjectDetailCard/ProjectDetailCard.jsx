import React from "react";
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
    <div className={styles.cardContainer}>
      <div className={styles.mediaWrapper}>{renderMedia()}</div>
      <div className={styles.cardContent}>
        <div>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.category}>{category}</p>
        </div>
        <p className={styles.number}>{formattedIndex}</p>
      </div>
    </div>
  );
};

export default ProjectDetailCard;