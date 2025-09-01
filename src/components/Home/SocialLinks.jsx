import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";

import styles from "../Home/SocialLinks.module.css";

const socialLinks = [
  { icon: <FaFacebookF color="black" />, href: "https://www.facebook.com" },
  { icon: <FaXTwitter color="black" />, href: "https://x.com" },
  { icon: <FaTiktok color="black" />, href: "https://www.tiktok.com" },
  { icon: <FaInstagram color="black" />, href: "https://www.instagram.com" },
];

const SocialLinks = () => {
  return (
    <div className={styles.sociallinkscontainer}>
      {socialLinks.map((link, index) => (
        <motion.a
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1 + index * 0.15,
            ease: "backInOut",
            
          }}
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
