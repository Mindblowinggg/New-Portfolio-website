import React from "react";
import SocialLinks from "../Home/SocialLinks";

const ContactLinks = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#e5e3dc",
      }}
    >
      <h1
        style={{
          fontSize: "38px",
          fontWeight: 400,
          marginBottom: "35px",
          textTransform: "uppercase",
        }}
      >
        Contact
      </h1>
      <ul style={{ listStyleType: "none", padding: 0, textAlign: "center" }}>
        <li style={{ marginBottom: "20px" }}>
          <a
            href="https://maps.app.goo.gl/AZvEgWxs7G8P3L7x6"
            target="/"
            style={{
              textDecoration: "none",
              color: "#4A4A4A",
              fontWeight: 400,
              fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
            India
          </a>
        </li>
      </ul>
      <div style={{ padding: "20px", width: "100%" }}>
        <SocialLinks />
      </div>

      <h1 style={{ fontSize: "100px" }}>AK</h1>
      <p>©2025 AMAN KAHAR All rights reserved.</p>
    </div>
  );
};

export default ContactLinks;
