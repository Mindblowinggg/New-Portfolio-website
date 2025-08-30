import React from "react";
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
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
