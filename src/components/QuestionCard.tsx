import React, { Component } from 'react';

interface Props  {
  question: string;
  answers: string[];
  callback: any;
  userAnswers: any;
  questionNum: number;
  totalQuestions: number;
}


const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswers, questionNum, totalQuestions }) =>
  (
  
    <div>
      <p className="number">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map(answer => (
          <div>
            <button disabled={userAnswers} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer}}></span>
            </button>
          </div>
        ))}
      </div>
  </div>
);

export default QuestionCard;