import React from 'react';
import styles from './Button.module.css';

const Button = ({ text = "ALL<br/>PROJECTS" }) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonCircle}></div>
      <span
        className={styles.buttonText}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default Button;