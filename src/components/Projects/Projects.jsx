import React from "react";
import TEXTEFFECT from "../TEXTEFFECT/TEXTEFFECT";
import styles from "../Projects/Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <TEXTEFFECT text="FEATURED WORK" fontSize={"16px"} />
      <TEXTEFFECT text={"PROJECTS"} fontSize={"64px"} />
      <p style={{padding:"8px", fontSize:"20px" , fontWeight:"350" , fontFamily:"Poppins" , lineHeight:"25px"}}>
        Please explore my selected projects below . Click on each one for an
        overview
      </p>
    </div>
  );
};

export default Projects;
