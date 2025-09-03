import Marquee from "react-fast-marquee";
import styles from "./Marquees.module.css";
import { FaReact, FaCode } from "react-icons/fa";

const Marquees = () => {
  return (
    <div className={styles.marquee_container}>
      <div className={styles.marquee_wrapper_left_direction}>
        <Marquee direction="left">
          <p className={styles.marquee_text_left}>
            <FaReact color="black" className={styles.icon} />
            This website is built with React JS and lots of love!
          </p>
        </Marquee>
      </div>

      <div className={styles.marquee_wrapper_right_direction}>
        <Marquee  direction="right">
          <p className={styles.marquee_text_right}>
            <FaCode color="black" className={styles.icon} />
            Thank you for visiting!
            <FaReact color="black" className={styles.icon} />
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Marquees;
