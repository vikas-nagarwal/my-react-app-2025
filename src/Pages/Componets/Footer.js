import React from "react";
import { redirect } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer
      style={{ textAlign: "center", padding: "20px", background: "#f5f5f5" }}
    >
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>

      <h1 style={{ color: "red" }}>Hello Style!</h1>
      <p style={{ color: "red" }}> software development</p>
    </footer>
  );
};

export default Footer;
