import React from 'react';
import Quiz from "./Components/Quiz";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="quiz-container">
        <Quiz />
      </div>
    </div>
  );
}

export default App;
