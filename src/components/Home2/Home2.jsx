import React from "react";
import styles from "../Home2/Home2.module.css";
import TEXTEFFECT from "./TEXTEFFECT";

const Home2 = () => {
  return (
    <div className={styles.Home2container}>
      <div className={styles.profilepic}></div>
      <TEXTEFFECT />
      <button style={{padding:'10px 20px' , height:"50px" , width:"150px" , fontSize:'20px'}}>More about me</button>
    </div>
  );
};

export default Home2;
