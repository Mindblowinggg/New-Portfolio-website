import React from "react";
import TEXTEFFECT from "../TEXTEFFECT/TEXTEFFECT";
import styles from "../Projects/Projects.module.css";
import Button from "../Button/Button";
import ProjectDetailCard from "../ProjectDetailCard/ProjectDetailCard";
import { projectsData } from "../../assets/ProjectData";

const Projects = () => {
  return (
    <div className={styles.container}>
      <TEXTEFFECT text="FEATURED WORK" fontSize={"20px"} />
      <TEXTEFFECT text={"PROJECTS"} fontSize={"64px"} />
      <p className={styles.heading}>
        Please explore my selected projects below. Click on each one for an overview
      </p>

      <div className={styles.projectsGrid}>
        {projectsData.slice(0, 5).map((project, index) => (
          <ProjectDetailCard
            key={project.media}
            media={project.media}
            heading={project.heading}
            category={project.category}
            index={index}
            topOffset={90 + index * 10}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Button text={"ALLL <br/> PROJECTS"} />
      </div>
    </div>
  );
};

export default Projects;