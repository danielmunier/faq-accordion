import React, { useState } from 'react';
import "./style.css";
import star from "../../assets/images/icon-star.svg";
import plusSign from "../../assets/images/icon-plus.svg";
import minusSign from "../../assets/images/icon-minus.svg";

export default function Accordion({ questionsData }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const handleClick = (index) => {
    setActiveQuestionIndex(index === activeQuestionIndex ? null : index);
  };

  return (
    <div id="faq-card">
      <div id="faq-header">
        <img src={star} alt="Star icon" />
        <h1>FAQs</h1>
      </div>

      <div id="faq-container">
        <ul className="faq-list">
          {questionsData.map((question, index) => (
            <li key={question.id} onClick={() => handleClick(index)} className="faq-item">
              <div className="faq-item-title">
                <h2>{question.title}</h2>
                <img src={index === activeQuestionIndex ? minusSign : plusSign} alt="Icon" />
              </div>
              {index === activeQuestionIndex && ( 
                <p className="item-description">
                  {question.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
