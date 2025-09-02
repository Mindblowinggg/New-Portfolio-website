import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Feedback.module.css";
import TEXTEFFECT from '../TEXTEFFECT/TEXTEFFECT';
import { reviewsData } from "../../assets/Reviewdata";

const Feedback = () => {
  const [cards, setCards] = useState(reviewsData);
  const constraintsRef = useRef(null); 

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 100) { 
      const newOrder = [...cards];
      const draggedCard = newOrder.shift();
      newOrder.push(draggedCard);
      setCards(newOrder);
    }
  };

  return (
    <div className={styles.container}>
      <TEXTEFFECT text="WHAT THEY SAY" fontSize={"20px"} />
      <TEXTEFFECT text={"FEEDBACK"} fontSize={"64px"} />
      <h2 style={{fontWeight:"300" ,fontSize:"20px", fontFamily:"Poppins" , marginLeft:"8px", marginTop:"30px"}}>GENUINE WORDS FROM THE PEOPLE I've HAD THE PLEASURE TO WORK WITH.</h2>

      <div className={styles.cardStackWrapper} ref={constraintsRef}>
        {cards.map((card, index) => {
          const isTopCard = index === 0;

          return (
            <motion.div
              key={card.id}
              className={styles.reviewCard}
              drag={isTopCard ? "x" : false}
              dragConstraints={isTopCard ? { left: 0, right: 0 } : false}
              onDragEnd={isTopCard ? handleDragEnd : undefined}
              layout
              style={{
                zIndex: cards.length - index,
                cursor: isTopCard ? "grab" : "default", 
                backgroundColor: "#e5e3dc", 
              }}
              animate={{
                x: index * 15,
                y: index * 10,
                scale: 1 - index * 0.05,
              }}
              transition={{
                type: "spring",
                stiffness: 150, 
                damping: 40,
              }}
            >
              <p className={styles.number}>{String(card.id).padStart(2, "0")}</p>
              <p className={styles.reviewText}>"{card.review}"</p>
              <p className={styles.reviewer}>- {card.reviewer}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;