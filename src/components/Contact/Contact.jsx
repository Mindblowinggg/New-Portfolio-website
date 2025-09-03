import React from "react";
import TEXTEFFECT from "../TEXTEFFECT/TEXTEFFECT";
import styles from "../Contact/Contact.module.css";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <TEXTEFFECT text="CONTACT" fontSize={"20px"} />
      <TEXTEFFECT text={"LET'S WORK TOGETHER"} fontSize={"64px"} />
      <p className={styles.heading}>
       Feeling good about a new project? Write me what's in your mind and let's talk about it!
      </p>
      <Button  text="LET'S <br/> CONNECT"/>
    </div>
  );
};

export default Contact;
