import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from '../TEXTEFFECT/TEXTEFFECT.module.css';


const TEXTEFFECT = ({ text, fontSize }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  const Word = ({ word, scrollYProgress, start, end }) => {
    const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
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
    // fontSize prop को style एट्रीब्यूट में उपयोग करें
    <p className={styles.paragraph} ref={element} style={{ fontSize: fontSize }}>
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

export default TEXTEFFECT;