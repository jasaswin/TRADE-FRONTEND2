
// // // src/pages/Home/Hero.js
// import React from "react";
// import "./home.css";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section 
//       className="hero" 
//       style={{ backgroundImage: "url('/media/images/hero-bg.jpg')" }}
//     >
//       <motion.div 
//         className="hero-content"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1>Trade Smarter, Not Harder</h1>
//         <p>Experience the future of stock trading with real-time market insights and virtual trading.</p>
//         <button className="cta-btn">Get Started</button>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import { motion } from "framer-motion";
import "./Hero.css"; // for styling

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Left Side Image */}
      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/media/images/kite.png" // ✅ put your image in public/media/images
          alt="Trading Illustration"
          className="hero-image"
        />
      </motion.div>

      {/* Right Side Text */}
      <motion.div
        className="hero-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="hero-heading">Trade. Learn. Grow — Without Risk</h1>
        <p className="hero-subtext">
          Practice trading with real market data and virtual money.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;







