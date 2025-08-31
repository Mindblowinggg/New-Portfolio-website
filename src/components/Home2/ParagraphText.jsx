import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './ParagraphText.module.css';

const text = "I am dedicated to developing innovative solutions and impactful experiences that meet user needs and exceed expectations. I am dedicated to developing innovative solutions and impactful experiences that meet user needs and exceed expectations.";

const ParagraphText = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  // Word component inside the ParagraphText component
  const Word = ({ word, scrollYProgress, start, end }) => {
    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

    return (
      <span className={styles.word}>

      <span  className={styles.shadow}>{word} </span>
      <motion.span style={{ opacity }} className={styles.word}>
        {word}
      </motion.span>
      </span>
    );
  };

  return (
    <p className={styles.paragraph} ref={element}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word
            key={i}
            word={word + ' '}
            scrollYProgress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
};

export default ParagraphText;