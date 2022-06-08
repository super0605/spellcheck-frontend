import React from "react";

interface ResultBoxProps {
  correct: boolean;
  suggestions: string[];
}

const ResultBox = ({ correct, suggestions }: ResultBoxProps) => {
  return (
    <section className="result-box-wrapper">
      <div className="correctness-result">
        Correct: {correct ? "True" : "False"}
      </div>
      <h3>
        Suggestions List{": "}
        {suggestions.length > 0 ? (
          <span>{suggestions.length}</span>
        ) : (
          <span>[]</span>
        )}
      </h3>
      <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="suggestion-item">
            {suggestion}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResultBox;
