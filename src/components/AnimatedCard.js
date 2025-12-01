
// src/components/AnimatedCard.js
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./AnimatedCard.css";

/**
 * Props:
 * - children: card content
 * - className: extra class names
 * - index: optional number (for stagger delay)
 */
export default function AnimatedCard({ children, className = "", index = 0, ...props }) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 16, scale: 0.995 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.08 * i, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
    }),
    hover: { y: -10, scale: 1.01, transition: { duration: 0.25, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`animated-card ${className}`}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate="visible"
      whileHover={shouldReduceMotion ? {} : "hover"}
      custom={index}
      variants={variants}
      {...props}
      role="article"
      aria-live="polite"
    >
      {children}
    </motion.div>
  );
}
