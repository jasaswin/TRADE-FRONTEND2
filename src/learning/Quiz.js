// // frontend/src/learning/Quiz.js
// import React, { useState } from "react";
// import "./learning.css";

// const API = process.env.REACT_APP_API_URL || "";

// export default function Quiz({ lesson, onClose, onComplete }) {
//   const [answers, setAnswers] = useState(Array(lesson.quiz.length).fill(null));
//   const [submitting, setSubmitting] = useState(false);
//   const [result, setResult] = useState(null);

//   function selectOption(qIndex, optIndex) {
//     const copy = [...answers];
//     copy[qIndex] = optIndex;
//     setAnswers(copy);
//   }

//   const allAnswered = answers.every((a) => a !== null);

//   async function handleSubmit() {
//     if (!allAnswered) return;
//     setSubmitting(true);

//     // Try backend scoring; fallback to local scoring
//     try {
//       const res = await fetch(`${API}/api/learning/quiz`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ lessonId: lesson._id, answers })
//       });
//       if (!res.ok) throw new Error("backend error");
//       const data = await res.json();
//       setResult(data);
//       onComplete(data.score, data.total);
//     } catch (err) {
//       // local scoring
//       const total = lesson.quiz.length;
//       let score = 0;
//       lesson.quiz.forEach((q, i) => {
//         if (q.answer === answers[i]) score++;
//       });
//       const data = { score, total };
//       setResult(data);
//       // let parent know
//       onComplete(score, total);
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   return (
//     <div className="quiz-modal" role="dialog" aria-modal="true">
//       <div className="quiz-panel">
//         <div className="quiz-header">
//           <h3>{lesson.title} — Quiz</h3>
//           <button className="btn icon" onClick={onClose} aria-label="Close quiz">✕</button>
//         </div>

//         <div className="quiz-body">
//           {lesson.quiz.map((q, i) => (
//             <div key={i} className="question-block">
//               <p className="q-text">{i + 1}. {q.question}</p>
//               <div className="options">
//                 {q.options.map((opt, j) => {
//                   const selected = answers[i] === j;
//                   return (
//                     <button
//                       key={j}
//                       className={`option ${selected ? "selected" : ""}`}
//                       onClick={() => selectOption(i, j)}
//                     >
//                       <span className="opt-label">{String.fromCharCode(65 + j)}</span>
//                       <span>{opt}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="quiz-footer">
//           {result ? (
//             <div className="result">
//               <strong>Score:</strong> {result.score} / {result.total}
//               <div className="result-note">{(result.score / result.total) >= 0.6 ? "Great — you unlocked next lesson!" : "Try again or review the lesson."}</div>
//               <button className="btn primary" onClick={onClose}>Close</button>
//             </div>
//           ) : (
//             <>
//               <button className="btn ghost" onClick={onClose}>Cancel</button>
//               <button className="btn primary" disabled={!allAnswered || submitting} onClick={handleSubmit}>
//                 {submitting ? "Submitting…" : "Submit Answers"}
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import "./learning.css";

const sampleQuestions = [
  { q: "What does owning a stock mean?", options: ["Debt", "Ownership in company", "Fixed income"], answer: "Ownership in company" },
  { q: "P/E ratio indicates?", options: ["Profit & Expenses", "Price relative to earnings", "Public Equity"], answer: "Price relative to earnings" }
];

export default function Quiz() {
  const [score, setScore] = useState(null);

  const handleSubmit = () => {
    // just demo: always return full score
    setScore(sampleQuestions.length);
  };

  return (
    <div className="quiz-card">
      <p>Ready to take the quiz?</p>
      <button className="start-btn" onClick={handleSubmit}>Start Quiz</button>
      {score !== null && <p className="quiz-result">You scored {score}/{sampleQuestions.length} 🎉</p>}
    </div>
  );
}
