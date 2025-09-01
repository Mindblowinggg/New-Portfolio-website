import React from "react";
import styles from "../Home2/Home2.module.css";
import TEXTEFFECT from "../TEXTEFFECT/TEXTEFFECT";

const Home2 = () => {
  return (
    <div className={styles.Home2container}>
      <div className={styles.profilepic}></div>
      <TEXTEFFECT text="I am dedicated to developing innovative solutions and impactful experiences that meet user needs and exceed expectations. "  fontSize={"26px"}/>
      <button
        style={{
          padding: "10px 20px",
          height: "50px",
          width: "150px",
          fontSize: "20px",
        }}
      >
        More about me
      </button>
    </div>
  );
};

export default Home2;
