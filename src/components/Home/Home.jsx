import React from "react";
import styles from "../Home/Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.title}>
        <h2 className={styles.name}>
          AMAN <br /> KAHAR
        </h2>
        <p className={styles.proffessionText}>
          FrontEnd developer <br /> (React js.)
        </p>
      </div>
    </>
  );
};

export default Home;
