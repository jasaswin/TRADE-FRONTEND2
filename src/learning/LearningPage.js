import React, { useEffect, useState } from "react";
import LessonCard from "./LessonCard";
import "./learning.css";
import api from "../api"; // important: points to src/api.js

const LearningPage = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isLessonComplete, setIsLessonComplete] = useState(false);
  const [loadingLessons, setLoadingLessons] = useState(false);
  const [loadingQuizzes, setLoadingQuizzes] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Fetch all lessons using api client
  useEffect(() => {
    const fetchLessons = async () => {
      setLoadingLessons(true);
      setError(null);
      try {
        const res = await api.get("/api/learning/lessons");
        setLessons(res.data || []);
      } catch (err) {
        console.error("Error fetching lessons:", err);
        setError("Unable to load lessons right now. Please try again later.");
      } finally {
        setLoadingLessons(false);
      }
    };

    fetchLessons();
  }, []);

  // ✅ Start selected lesson and fetch quizzes
  const handleStartLesson = async (lesson) => {
    setSelectedLesson(lesson);
    setLoadingQuizzes(true);
    setError(null);
    try {
      const res = await api.get(`/api/learning/quizzes/${lesson._id}`);
      setQuizzes(res.data || []);
      setCurrentQuizIndex(0);
      setIsLessonComplete(false);
      setFeedback("");
    } catch (err) {
      console.error("Error fetching quizzes:", err);
      setError("Unable to load quizzes for this lesson. Try again later.");
      setQuizzes([]);
    } finally {
      setLoadingQuizzes(false);
    }
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
      setCurrentQuizIndex((i) => i + 1);
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
    setQuizzes([]);
    setCurrentQuizIndex(0);
    setError(null);
  };

  // Loading / error states
  if (loadingLessons) return <div style={{ padding: 20 }}>Loading lessons…</div>;
  if (error && !selectedLesson) return <div style={{ padding: 20, color: "red" }}>{error}</div>;

  // ✅ Render quiz section if a lesson is selected
  if (selectedLesson) {
    if (loadingQuizzes) {
      return (
        <div className="lesson-details" style={{ padding: 20 }}>
          <h1>{selectedLesson.title}</h1>
          <p>Loading quizzes…</p>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button className="back-btn" onClick={handleBack}>
            ⬅ Back to Lessons
          </button>
        </div>
      );
    }

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

                {/* Animated Next button appears only after correct answer */}
                {feedback.startsWith("✅") && (
                  <button className="next-btn" onClick={handleNext}>
                    Next ➡
                  </button>
                )}

                <div style={{ marginTop: 12 }}>
                  <button className="back-btn" onClick={handleBack}>
                    ⬅ Back to Lessons
                  </button>
                </div>
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

      {lessons.length === 0 ? (
        <p>No lessons available.</p>
      ) : (
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
      )}
    </div>
  );
};

export default LearningPage;
