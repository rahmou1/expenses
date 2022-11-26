import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        All Right Reserved {year} Made By:{" "}
        <a href="https://github.com/rahmou1">❤️ Ahmed Rahmou ❤️</a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
