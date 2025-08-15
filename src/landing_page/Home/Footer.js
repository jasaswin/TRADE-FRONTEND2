
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Direct path from public folder */}
        <img src="/media/images/logo.png" alt="TradeNest Logo" className="footer-logo" />
        <p className="footer-text">
          Built by <span className="brand">NimJas</span>, © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
