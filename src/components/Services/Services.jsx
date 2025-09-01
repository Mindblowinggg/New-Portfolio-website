import React, { useState } from "react"; // useState import karein
import TEXTEFFECT from "../TEXTEFFECT/TEXTEFFECT";
import styles from "../Services/Services.module.css";
import ServiceInfoCard from "../Serviceinfocard/ServiceInfoCard";
import { servicesData } from "../../assets/ServicesData";
import serviceCardStyles from '../ServiceinfoCard/ServiceinfoCard.module.css';

const Services = () => {
  // Active card ka index store karne ke liye state banayein//
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardClick = (index) => {
    // Agar current card open hai, to close karein .
    // Warna, current card ka index set karke open karein.
    setOpenCardIndex(index === openCardIndex ? null : index);
  };

  return (
    <div className={styles.container}>
      <TEXTEFFECT text="WHAT I DO" fontSize={"20px"} />
      <TEXTEFFECT text={"SERVICES"} fontSize={"64px"} />
      <p
        style={{
          padding: "8px",
          fontSize: "20px",
          fontFamily: "sans-serif",
          lineHeight: "25px",
        }}
      >
        Comprehensive digital services to boost your online presence and achieve
        impactful results.
      </p>

      <div style={{ gap: '30px', flexWrap: 'wrap' , marginTop:"50px" }}>
        {servicesData.map((service, index) => (
          <ServiceInfoCard
            key={index}
            title={service.title}
            description={service.description}
            index={index}
            isOpen={index === openCardIndex}
            onCardClick={handleCardClick}
            className={`${serviceCardStyles.service_card} ${
              index === servicesData.length - 1 ? serviceCardStyles.last_card : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;