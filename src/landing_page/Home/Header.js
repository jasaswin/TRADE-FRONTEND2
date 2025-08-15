
// // src/pages/Home/Header.js
// import React from "react";
// import "./home.css";
// import { motion } from "framer-motion";

// const Header = () => {
//   return (
//     <header className="header">
//       <motion.nav 
//         className="navbar"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="logo">StockSphere</div>
//         <ul className="nav-links">
//           <li><a href="/">Home</a></li>
//           <li><a href="#features">Features</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#contact">Contact</a></li>
//           <li><a href="/login">Login / Signup</a></li>
//           <li><a href="/dashboard" className="dashboard-btn">Dashboard</a></li>
//         </ul>
//       </motion.nav>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

export default function Header() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignup = () => {
    // Simulate signup process
    setTimeout(() => {
      setIsSignedUp(true);
    }, 1000);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      {/* Left side: Logo + Name */}
      <div className="navbar-brand d-flex align-items-center">
        <img
          src="media/images/logo.png"
          alt="Logo"
          className="logo-img"
        />
        <span className="ms-2 brand-name">TradeNest</span>
      </div>

      {/* Right side: Menu buttons */}
      <div className="ms-auto d-flex align-items-center gap-3">
        <NavButton text="Home" />
        <NavButton text="About" />
        <NavButton text="Contact" />

        {!isSignedUp ? (
          <NavButton text="Signup" onClick={handleSignup} />
        ) : (
          <>
            <NavButton text="Login" />
            <NavButton text="Dashboard" />
          </>
        )}
      </div>
    </nav>
  );
}

// Reusable motion button
const NavButton = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ backgroundColor: "#d8b4fe", scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="btn custom-btn"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};
