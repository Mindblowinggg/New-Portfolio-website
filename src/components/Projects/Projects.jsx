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
      <p style={{ padding: "8px", fontSize: "20px", fontWeight: "350", fontFamily: "Poppins", lineHeight: "25px" }}>
        Please explore my selected projects below. Click on each one for an overview
      </p>
      <Button />

      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        {projectsData.map((project, index) => (
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
    </div>
  );
};

export default Projects;