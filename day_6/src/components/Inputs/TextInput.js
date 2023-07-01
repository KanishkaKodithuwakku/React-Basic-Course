import React from "react";

const TextInput = ({
  label,
  id,
  inputType,
  placeholder,
  searchable,
  onChange,
}) => {
  return (
    <div className="mb-3 mt-3">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}

      <div className={`input-group  ${searchable ? "has-search" : ""}`}>
        {searchable && (
          <span className="input-group-text">
            <i class="bi bi-search"></i>
          </span>
        )}

        <input
          type={inputType}
          className="form-control"
          id={id}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextInput;
