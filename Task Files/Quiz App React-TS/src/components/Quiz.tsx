
import React, { useState,useEffect } from "react";
import Question from "./Question";
import "./Quiz_style.css";
const questions = [
  {
    question: "1)To get the most profit, a company should________",
    choices: [
      "1. Provide little customer service",
      "2. Provide high production costs",
      "3. Provide the lowest inventory investment",
      "4. Provide the highest distribution costs",
    ],
    answer: "3. Provide the lowest inventory investment",
  },
  {
    question:
      "2)_______ and ______ are costs that increase or decrease with the quantity sold.",
    choices: [
      "1. Direct labor, indirect material",
      "2. Direct labor, direct material",
      "3. Indirect labor, indirect material",
      "4. Indirect labor, direct material",
    ],
    answer: "2. Direct labor, direct material",
  },
  {
    question:
      "3)The _____________________ is a plan for the production of individual end items.",
    choices: ["1. MPS", "2. JIT", "3. MRP II", "4. MRP"],
    answer: "1. MPS",
  },
  {
    question:
      "4)A _________ strategy means producing the amounts demanded at any given time.",
    choices: [
      "1. production leveling",
      "2. chase",
      "3. subcontracting",
      "4. TQM",
    ],
    answer: "2. chase",
  },
  {
    question: "5)The first step in preparing an MPS is: ",
    choices: [
      "1. Resolve differences between the preliminary MPS and the capacity available.",
      "2. Check the preliminary MRP against available capacity.",
      "3. Develop a preliminary MRP.",
      "4. Develop a rough-cut capacity plan.",
    ],
    answer: "3. Develop a preliminary MRP.",
  },
  {
    question: "6)To get the most profit, a company should________",
    choices: [
      "1. Provide little customer service",
      "2. Provide high production costs",
      "3. Provide the lowest inventory investment",
      "4. Provide the highest distribution costs",
    ],
    answer: "3. Provide the lowest inventory investment",
  },
  {
    question: "7)The first step in preparing an MPS is: ",
    choices: [
      "1. Resolve differences between the preliminary MPS and the capacity available.",
      "2. Check the preliminary MRP against available capacity.",
      "3. Develop a preliminary MRP.",
      "4. Develop a rough-cut capacity plan.",
    ],
    answer: "3. Develop a preliminary MRP.",
  },
  {
    question:
      "8)_______ and ______ are costs that increase or decrease with the quantity sold.",
    choices: [
      "1. Direct labor, indirect material",
      "2. Direct labor, direct material",
      "3. Indirect labor, indirect material",
      "4. Indirect labor, direct material",
    ],
    answer: "2. Direct labor, direct material",
  },
  {
    question: "9)The first step in preparing an MPS is: ",
    choices: [
      "1. Resolve differences between the preliminary MPS and the capacity available.",
      "2. Check the preliminary MRP against available capacity.",
      "3. Develop a preliminary MRP.",
      "4. Develop a rough-cut capacity plan.",
    ],
    answer: "3. Develop a preliminary MRP.",
  },

  {
    question: "10)The first step in preparing an MPS is: ",
    choices: [
      "1. Resolve differences between the preliminary MPS and the capacity available.",
      "2. Check the preliminary MRP against available capacity.",
      "3. Develop a preliminary MRP.",
      "4. Develop a rough-cut capacity plan.",
    ],
    answer: "3. Develop a preliminary MRP.",
  },
  {
    question:
      "11)A _________ strategy means producing the amounts demanded at any given time.",
    choices: [
      "1. production leveling",
      "2. chase",
      "3. subcontracting",
      "4. TQM",
    ],
    answer: "2. chase",
  },
  {
    question: "12)The first step in preparing an MPS is: ",
    choices: [
      "1. Resolve differences between the preliminary MPS and the capacity available.",
      "2. Check the preliminary MRP against available capacity.",
      "3. Develop a preliminary MRP.",
      "4. Develop a rough-cut capacity plan.",
    ],
    answer: "3. Develop a preliminary MRP.",
  },
  {
    question: "13)The first step in preparing an MPS is: ",
    choices: [
      "1. Resolve differences between the preliminary MPS and the capacity available.",
      "2. Check the preliminary MRP against available capacity.",
      "3. Develop a preliminary MRP.",
      "4. Develop a rough-cut capacity plan.",
    ],
    answer: "3. Develop a preliminary MRP.",
  },
  {
    question: "14)The first step in preparing an MPS is: ",
    choices: [
      "1. Resolve differences between the preliminary MPS and the capacity available.",
      "2. Check the preliminary MRP against available capacity.",
      "3. Develop a preliminary MRP.",
      "4. Develop a rough-cut capacity plan.",
    ],
    answer: "3. Develop a preliminary MRP.",
  },{
    question: "15)To get the most profit, a company should________",
    choices: [
      "1. Provide little customer service",
      "2. Provide high production costs",
      "3. Provide the lowest inventory investment",
      "4. Provide the highest distribution costs",
    ],
    answer: "3. Provide the lowest inventory investment",
  },

];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // Start timer when question changes
    setTimeRemaining(10); // reset time remaining for each question
    const timerId = setInterval((number) => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    setTimerId(timerId);

    return () => {
      // Clear timer when question changes
      clearInterval(timerId);
    };
  }, [currentQuestion]);

  useEffect(() => {
    // Restart quiz when timer runs out
    if (timeRemaining === 0) {
      clearInterval(timerId);
      alert("---Times up-- Restarting quiz...");
      restartQuiz();
    }
  }, [timeRemaining]);

  const handleAnswer = (answer: string) => {
    clearInterval(timerId);

    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz finished. Your scored ${score}/${questions.length}
      --Thank You--`);
      restartQuiz();
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    
    <div className="box">
      <h1>QUIZ APP TASK</h1>
      <div className="div-all">
        {currentQuestion < questions.length ? (
          <div>
            <p>Time Required--If Not Attempt then Restart Quiz:{timeRemaining}</p>
            <Question 
              question={questions[currentQuestion].question}
              choices={questions[currentQuestion].choices}
              answer={questions[currentQuestion].answer}
              onAnswer={handleAnswer}
            />
          </div>
        ) : (
          "null"
        )}
      </div>
      </div>
    
  );
};

export default Quiz;
