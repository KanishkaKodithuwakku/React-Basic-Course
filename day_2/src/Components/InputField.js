import React from "react";


const InputField = ({ label, name, type, value, onChange }) => {
  return (
    <div>
      <div class="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          className="form-control"
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
