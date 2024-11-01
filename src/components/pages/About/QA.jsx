import React from "react";

const QA = ({ questionAndAnswer }) => {
  return (
    <div>
      <h3>{questionAndAnswer.question}</h3>
      <p>{questionAndAnswer.answer}</p>
    </div>
  );
};

export default QA;
