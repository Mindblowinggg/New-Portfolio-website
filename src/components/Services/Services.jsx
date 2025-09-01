import React from "react";
import TEXTEFFECT from "../TEXTEFFECT/TEXTEFFECT";
import styles from "../Services/Services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>
      <TEXTEFFECT text="WHAT I DO" fontSize={"20px"} />
      <TEXTEFFECT text={"SERVICES"} fontSize={"64px"} />
      <p
        style={{
          padding: "8px",
          fontSize: "20px",
          fontWeight: "350",
          fontFamily: "Poppins",
          lineHeight: "25px",
        }}
      >
        Comprehensive digital services to boost your online presence and achieve
        impactful results.
      </p>
    </div>
  );
};

export default Services;
