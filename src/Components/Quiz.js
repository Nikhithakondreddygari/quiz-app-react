import React, { useState, useRef } from 'react';
import { data } from './data';
import './Quiz.css'; 

function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const option_array = [option1, option2, option3, option4];

  const checkAns = (event, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        event.target.classList.add('correct');
        setScore(prev => prev + 1);
      } else {
        event.target.classList.add('wrong');
        option_array[question.ans - 1].current.classList.add('correct');
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      // Remove previous answer styles
      option_array.forEach(option => {
        if (option.current) {
          option.current.classList.remove('correct', 'wrong');
        }
      });

      setIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        if (newIndex < data.length) {
          setQuestion(data[newIndex]);
          return newIndex;
        } else {
          alert(`Quiz finished! Your score is ${score}/${data.length}`);
          return prevIndex;
        }
      });
      setLock(false);
    }
  };

  return (
    <div className='container'>
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li ref={option1} onClick={(event) => checkAns(event, 1)}>{question.option1}</li>
        <li ref={option2} onClick={(event) => checkAns(event, 2)}>{question.option2}</li>
        <li ref={option3} onClick={(event) => checkAns(event, 3)}>{question.option3}</li>
        <li ref={option4} onClick={(event) => checkAns(event, 4)}>{question.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index">{index + 1} of {data.length} questions</div>
    </div>
  );
}

export default Quiz;
