import React, { useState } from 'react';
import './App.css';
import backImage from './assets/quizImag.jpg';
import QuestionCard from './components/QuestionCard';

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
  
  }
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <img src={backImage} alt="background image" className="backImage" />
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
