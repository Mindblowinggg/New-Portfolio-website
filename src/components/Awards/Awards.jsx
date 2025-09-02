import React from "react";
import TEXTEFFECT from "../TEXTEFFECT/TEXTEFFECT";
import styles from "../Awards/Awards.module.css";

const Awards = () => {
  return (
    <div className={styles.container}>
      <TEXTEFFECT text="RECOGNITIONS" fontSize={"20px"} />
      <TEXTEFFECT text={"AWARDS"} fontSize={"64px"} />
      <p style={{fontSize:"20px" , marginTop:"30px" , fontFamily:"Poppins" , textTransform:"uppercase"}}>List of recognitions that make me proud</p>
    </div>
  );
};

export default Awards;
