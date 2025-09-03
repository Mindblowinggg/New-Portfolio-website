import React from "react";

const LinksSection = () => {
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
        Links
      </h1>
      <ul style={{ listStyleType: "none", padding: 0, textAlign: "center" }}>
        <li style={{ marginBottom: "20px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#4A4A4A",
              fontWeight: 400,
              fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
            Support
          </a>
        </li>
        <li style={{ marginBottom: "20px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#4A4A4A",
              fontWeight: 400,
              fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
            Licenses
          </a>
        </li>
        <li style={{ marginBottom: "20px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#4A4A4A",
              fontWeight: 400,
              fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
            Terms of Use
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#4A4A4A",
              fontWeight: 400,
              fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
            Privacy Policy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinksSection;
