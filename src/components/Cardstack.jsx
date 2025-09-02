import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardStackDrag = () => {
  const [cards, setCards] = useState([
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
  ]);

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 100 || info.offset.y < -100) {
      const newOrder = [...cards];
      const draggedCard = newOrder.shift();
      newOrder.push(draggedCard);
      setCards(newOrder);
    }
  };

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      paddingTop: '20vh', // Adjust spacing from top
    }}>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleDragEnd}
          style={{
            position: 'absolute',
            zIndex: cards.length - index,
            width: '80%', // Mobile friendly width
            maxWidth: '300px',
            height: '200px',
            borderRadius: '12px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'grab',
            // Position the cards in a stack
            top: `${index * 10}px`, // This positions each card below the previous one
          }}
          initial={{ y: 0, rotate: 0 }}
          animate={{
            y: index * 50, // Stacking effect
            rotate: index * 5, // Fanning effect
          }}
          exit={{ opacity: 0, y: -200, scale: 0.8 }}
        >
          {card.text}
        </motion.div>
      ))}
    </div>
  );
};

export default CardStackDrag;