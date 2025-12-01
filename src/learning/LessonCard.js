// // frontend/src/learning/LessonCard.js
// import React, { useState } from "react";
// import Quiz from "./Quiz";

// export default function LessonCard({ lesson, completed, locked, onQuizComplete }) {
//   const [expanded, setExpanded] = useState(false);
//   const [showQuiz, setShowQuiz] = useState(false);

//   const excerpt = lesson.content.length > 220 ? lesson.content.slice(0, 220) + "…" : lesson.content;

//   return (
//     <article className={`lesson-card ${expanded ? "expanded" : ""} ${locked ? "locked" : ""}`}>
//       {locked && <div className="locked-overlay">🔒 Locked</div>}

//       <div className="card-top">
//         <h2 className="lesson-title">{lesson.title}</h2>
//         <div className="meta">
//           <span className="lesson-order">#{lesson.order}</span>
//           {completed && <span className="badge">✓ Completed</span>}
//         </div>
//       </div>

//       <div className="card-body" onClick={() => setExpanded((s) => !s)} role="button" tabIndex={0}>
//         <p className="lesson-content">{expanded ? lesson.content : excerpt}</p>
//       </div>

//       <div className="card-footer">
//         <button
//           className="btn primary"
//           onClick={() => setShowQuiz(true)}
//           disabled={locked}
//           title={locked ? "Unlock previous lessons to access this quiz" : "Take quiz"}
//         >
//           Take Quiz
//         </button>

//         <button className="btn ghost" onClick={() => setExpanded((s) => !s)}>
//           {expanded ? "Collapse" : "Read"}
//         </button>
//       </div>

//       {showQuiz && (
//         <Quiz
//           lesson={lesson}
//           onClose={() => setShowQuiz(false)}
//           onComplete={(score, total) => {
//             setShowQuiz(false);
//             onQuizComplete(lesson._id, score, total);
//           }}
//         />
//       )}
//     </article>
//   );
// }



// import React from "react";
// import { motion } from "framer-motion";
// import "./learning.css";

// export default function LessonCard({ lesson }) {
//   return (
//     <motion.div 
//       className="lesson-card"
//       whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
//     >
//       <div className="lesson-icon">{lesson.icon}</div>
//       <h3 className="lesson-title">{lesson.title}</h3>
//       <p className="lesson-desc">{lesson.description}</p>
//       <button className="start-btn">Start Lesson</button>
//     </motion.div>
//   );
// }


// import React from "react";
// import "./learning.css";

// const LessonCard = ({ title, description, icon }) => {
//   return (
//     <div className="lesson-card">
//       <div className="lesson-icon">{icon}</div>
//       <h2 className="lesson-title">{title}</h2>
//       <p className="lesson-desc">{description}</p>
//       <button className="lesson-btn">Start</button>
//     </div>
//   );
// };

// export default LessonCard;



// import React from "react";
// import "./learning.css";

// const LessonCard = ({ title, description, icon, onStart }) => {
//   return (
//     <div className="lesson-card">
//       <div className="lesson-icon">{icon}</div>
//       <h2 className="lesson-title">{title}</h2>
//       <p className="lesson-desc">{description}</p>
//       <button className="lesson-btn" onClick={onStart}>
//         Start
//       </button>
//     </div>
//   );
// };

// export default LessonCard;



import React from "react";
import "./learning.css";

const LessonCard = ({ title, description, onStart }) => {
  return (
    <div className="lesson-card">
      <h2 className="lesson-title">{title}</h2>
      <p className="lesson-desc">{description}</p>
      <button className="lesson-btn" onClick={onStart}>
        Start Lesson
      </button>
    </div>
  );
};

export default LessonCard;
