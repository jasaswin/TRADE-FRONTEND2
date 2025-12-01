

import React, { useEffect, useState } from "react";
import LessonCard from "./LessonCard";
import "./learning.css";

const LearningPage = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isLessonComplete, setIsLessonComplete] = useState(false);

  // ✅ Fetch all lessons
  useEffect(() => {
    fetch("http://localhost:3002/api/learning/lessons")
      .then((res) => res.json())
      .then((data) => setLessons(data))
      .catch((err) => console.error("Error fetching lessons:", err));
  }, []);

  // ✅ Start selected lesson and fetch quizzes
  const handleStartLesson = (lesson) => {
    setSelectedLesson(lesson);
    fetch(`http://localhost:3002/api/learning/quizzes/${lesson._id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data);
        setCurrentQuizIndex(0);
        setIsLessonComplete(false);
      });
  };

  // ✅ Handle quiz answer
  const handleAnswer = (quiz, option) => {
    if (option === quiz.correctAnswer) {
      setFeedback("✅ Yay! You got it right!");
    } else {
      setFeedback("❌ Wrong answer, try again!");
    }
  };

  // ✅ Move to next question
  const handleNext = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setFeedback("");
    } else {
      setIsLessonComplete(true);
    }
  };

  // ✅ Go back to lessons list
  const handleBack = () => {
    setSelectedLesson(null);
    setFeedback("");
    setIsLessonComplete(false);
  };

  // ✅ Render quiz section
  if (selectedLesson) {
    const currentQuiz = quizzes[currentQuizIndex];

    return (
      <div className="lesson-details">
        <h1>{selectedLesson.title}</h1>
        <p>{selectedLesson.content}</p>

        {!isLessonComplete ? (
          <>
            {currentQuiz ? (
              <div className="quiz-card">
                <p className="quiz-question">
                  {`Q${currentQuizIndex + 1}. ${currentQuiz.question}`}
                </p>
                <div className="quiz-options">
                  {currentQuiz.options.map((opt, j) => (
                    <button
                      key={j}
                      className="quiz-option-btn"
                      onClick={() => handleAnswer(currentQuiz, opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {feedback && <p className="feedback">{feedback}</p>}

                {/* ✅ Animated Next button appears only after correct answer */}
{feedback.startsWith("✅") && (
  <button className="next-btn" onClick={handleNext}>
    Next ➡
  </button>
)}



                {/* ✅ Next button */}
                {/* <button
                  className="next-btn"
                  onClick={handleNext}
                  disabled={!feedback.startsWith("✅")}
                >
                  Next ➡
                </button> */}
              </div>
            ) : (
              <p>Loading quiz...</p>
            )}
          </>
        ) : (
          <div className="quiz-card">
            <h2>🎉 Lesson Complete!</h2>
            <p>You’ve finished all quizzes for this lesson.</p>
            <button className="back-btn" onClick={handleBack}>
              ⬅ Back to Lessons
            </button>
          </div>
        )}
      </div>
    );
  }

  // ✅ Render all lessons
  return (
    <div className="learning-container">
      <h1>📘 Start Learning</h1>
      <p>Explore interactive lessons with quizzes and challenges</p>
      <div className="lessons-grid">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson._id}
            title={lesson.title}
            description={lesson.description}
            onStart={() => handleStartLesson(lesson)}
          />
        ))}
      </div>
    </div>
  );
};

export default LearningPage;
