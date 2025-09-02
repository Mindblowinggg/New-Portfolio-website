import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Feedback.module.css";
import TEXTEFFECT from '../TEXTEFFECT/TEXTEFFECT';

const reviewsData = [
  { id: 1, review: "One of the best template I've ever had. I love it! It's fully customizable, well coded, fast and responsive - fitting for all kind of devices.", reviewer: "Wironimo" },
  { id: 2, review: "I found a bug on Iphone and Ipad and the author fixed very quickly. I appreciated his efforts and his quickness in solving the problem.", reviewer: "Admanente" },
  { id: 3, review: "I've been using this for a few weeks now and I'm very impressed with the quality and design. It's exactly what I was looking for.", reviewer: "Gazzzzz" },
  { id: 4, review: "Fantastic template, very well documented and easy to use. The support team is also very responsive and helpful.", reviewer: "User-456" },
];

const Feedback = () => {
  const [cards, setCards] = useState(reviewsData);

  const handleDragEnd = (event, info) => {
    // Determine if the drag was significant enough to reorder
    // Changed to check abs(info.velocity.x) for a more "swipe" like feel
    if (Math.abs(info.velocity.x) > 500 || Math.abs(info.offset.x) > 150) { // Increased threshold
      const newOrder = [...cards];
      const draggedCard = newOrder.shift(); // Remove the top card
      newOrder.push(draggedCard); // Move it to the back
      setCards(newOrder);
    }
  };

  return (
    <div className={styles.container}>
      <TEXTEFFECT text="WHAT THEY SAY" fontSize={"20px"} />
      <TEXTEFFECT text={"FEEDBACK"} fontSize={"64px"} />
      <h2 style={{fontWeight:"300" ,fontSize:"20px", fontFamily:"Poppins" , marginLeft:"8px", marginTop:"30px"}}>GENUINE WORDS FROM THE PEOPLE I'VE HAD THE PLEASURE TO WORK WITH.</h2>

      <div className={styles.cardStackWrapper}>
        {cards.map((card, index) => {
          const isTopCard = index === 0;

          return (
            <motion.div
              key={card.id}
              className={styles.reviewCard}
              drag={isTopCard ? "x" : false} // Only the top card is draggable
              // Tighter dragConstraints to keep the card closer to the center
              dragConstraints={{ left: -1, right: 1, top: -1, bottom: 1 }}
              onDragEnd={isTopCard ? handleDragEnd : undefined}
              style={{
                zIndex: cards.length - index,
                cursor: isTopCard ? "grab" : "default",
                // Initial styling for cards entering the stack
                opacity: 1, // Start fully opaque for simplicity
                scale: 1,
              }}
              animate={{
                // Stacking effect and visual cues based on index
                x: index === 0 ? 0 : (index * 15), // Top card at x: 0, others slightly shifted
                y: index * 10, // Slight vertical offset for stacking
                scale: 1 - index * 0.05, // Scale down cards in the back
                opacity: 1 - index * 0.1, // Fade out cards in the back
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                // Apply transition to specific properties when cards reorder
                x: { type: "spring", stiffness: 300, damping: 30 },
                y: { type: "spring", stiffness: 300, damping: 30 },
                scale: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { type: "spring", stiffness: 300, damping: 30 },
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