import React from "react";


const SelectInputField = ({ label, options, id, value, onChange }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <select
          className="form-control"
          id={id}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInputField;
