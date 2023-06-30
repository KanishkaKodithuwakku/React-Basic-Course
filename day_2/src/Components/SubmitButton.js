import React from "react";


const SubmitButton = ({ label,color, type }) => {
  return (
    <button className={`btn ${color}`} type={type} onClick={testFunction}>
      {label}
    </button>
  );
};


export default SubmitButton;
