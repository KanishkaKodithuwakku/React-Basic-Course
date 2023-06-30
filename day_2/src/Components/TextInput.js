import React from "react";

const TextInput = ({ label, textType, placeholder }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        className="form-control"
        type={textType}
        placeholder={placeholder}
      />
    </div>
  );
};
export default TextInput;
