import React from "react";
import TEXTEFFECT from "../TEXTEFFECT/TEXTEFFECT";
import styles from "../Projects/Projects.module.css";
import Button from "../Button/Button";
import ProjectDetailCard from "../ProjectDetailCard/ProjectDetailCard";

const projectsData = [
  {
    media: 'https://webredox.net/demo/wp/jesper/wp-content/uploads/2025/06/portfolio-1-800x534.jpg', 
    heading: 'LILA',
    category: 'Tortillas',
  },
  {
    media: 'https://webredox.net/demo/wp/jesper/wp-content/uploads/2025/06/portfolio-2-800x534.jpg', 
    heading: 'COFFEE SHOP',
    category: 'Lifestyle',
  },
  {
    media: 'https://demo.themetorium.net/html/jesper/assets/vids/1920/video-4-1920.mp4', 
    heading: 'DIGITAL AGENCY', 
    category: 'Motion Design',
  },
  {
    media: 'https://webredox.net/demo/wp/jesper/wp-content/uploads/2025/06/portfolio-3-800x534.jpg', 
    heading: 'BRANDING',
    category: 'Artistic',
  },
  {
    media: 'https://webredox.net/demo/wp/jesper/wp-content/uploads/2025/06/portfolio-4-800x534.jpg', 
    heading: 'PRODUCT DESIGN',
    category: 'Wellness',
  },
  {
    media: 'https://webredox.net/demo/wp/jesper/wp-content/uploads/2025/06/portfolio-5-800x534.jpg', 
    heading: 'PINK OASIS',
    category: 'Lifestyle',
  },
  {
    media: 'https://webredox.net/demo/wp/jesper/wp-content/uploads/2025/06/portfolio-6-800x534.jpg', 
    heading: 'TURBULENT WATERS',
    category: 'Lifestyle',
  },
  {
    media: 'https://webredox.net/demo/wp/jesper/wp-content/uploads/2025/06/portfolio-7-800x534.jpg', 
    heading: 'BABY CARE',
    category: 'Wellness',
  },
  {
    media: 'https://webredox.net/demo/wp/jesper/wp-content/uploads/2025/06/portfolio-8-800x534.jpg', 
    heading: 'DREAM SPA',
    category: 'Wellness',
  },
];


const Projects = () => {
  return (
    <div className={styles.container}>
      <TEXTEFFECT text="FEATURED WORK" fontSize={"20px"} />
      <TEXTEFFECT text={"PROJECTS"} fontSize={"64px"} />
      <p style={{padding:"8px", fontSize:"20px" , fontWeight:"350" , fontFamily:"Poppins" , lineHeight:"25px"}}>
        Please explore my selected projects below . Click on each one for an
        overview
      </p>
      <Button/>

      <div style={{  display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {projectsData.map((project, index) => (
          <ProjectDetailCard
            key={index} 
            media={project.media}
            heading={project.heading}
            category={project.category}
            index={index}
          />
        ))}
      </div>

    </div>
  );
};

export default Projects;
