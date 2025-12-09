"use client"
import React, { useState } from "react";
import "@/styles/components/quiz.css"

const Quiz: React.FC = () => {
  // Quiz questions
  const questions = [
    {
      question: "What is your biggest life challenge right now?",
      options: ["Career Transition", "Eldercare", "Chronic Illness", "Other"],
    },
    {
      question: "What kind of support do you prefer?",
      options: ["Peer Community", "Expert Advice", "Both"],
    },
    {
      question: "How do you feel about online engagement?",
      options: ["I’m Comfortable", "Neutral", "I Need Guidance"],
    },
  ];

  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Handle option selection
  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  // Generate personalized results
  const getResults = () => {
    if (answers.includes("Career Transition")) {
      return "Explore our Career Transition Navigator and expert coaching to help you find clarity.";
    } else if (answers.includes("Eldercare")) {
      return "Check out our caregiving community and eldercare expert sessions.";
    } else if (answers.includes("Chronic Illness")) {
      return "Discover curated wellness tools and peer support for managing health challenges.";
    } else {
      return "Explore all of Sam’s features to see what suits you best!";
    }
  };

  return (
    <div className="quiz-container">
      {!showResults ? (
        <>
          {/* Progress Bar */}
          <div className="progress-bar">
            Question {currentQuestion + 1} of {questions.length}
          </div>

          {/* Question Display */}
          <div className="question">
            <h3>{questions[currentQuestion].question}</h3>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="option-button"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Results Display */
        <div className="results">
          <h2>Your Personalized Recommendation</h2>
          <p>{getResults()}</p>
          <button onClick={() => setShowResults(false)} className="restart-button">
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;