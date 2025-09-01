import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../ServiceinfoCard/ServiceinfoCard.module.css';

const ServiceInfoCard = ({ title, description, index, isOpen, onCardClick, className }) => {
  const formattedIndex = (index + 1).toString().padStart(2, "0");

  return (
    <div className={className}>
      <div className={styles.card_header} onClick={() => onCardClick(index)}>
        <div className={styles.title_container}>
          <span className={styles.number}>{formattedIndex}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.arrow_container}>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown className={styles.arrow_icon} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.description_container}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className={styles.description_text}>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceInfoCard;