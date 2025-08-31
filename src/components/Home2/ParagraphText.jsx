import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './ParagraphText.module.css';

const text = "I am dedicated to developing innovative solutions and impactful experiences that meet user needs and exceed expectations. ";

const ParagraphText = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.84", "start 0.7"],
  });

  const words = text.split(" ");

  // Nested Word component 
  const Word = ({ word, scrollYProgress, start, end }) => {
    const opacity = useTransform(scrollYProgress, [start, end], [0.3 , 1]); 
    const color = useTransform(
      scrollYProgress,
      [start, end],
      ["rgb(150, 150, 150)", "rgb(0, 0, 0)"] 
    );

    return (
      <motion.span style={{ opacity, color }} className={styles.word}>
        {word}
      </motion.span>
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