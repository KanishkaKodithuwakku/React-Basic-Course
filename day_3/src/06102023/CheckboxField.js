import React from "react";

const CheckboxField = ({ description, checkbox_id, styleClasses}) => {
  return (
    <div>
      <div class="form-check">
        <input
          type="checkbox"
          class={`form-check-input ${styleClasses}`}
          id={checkbox_id}
        />
        <label className="form-check-label">{description}</label>
      </div>
    </div>
  );
};

export default CheckboxField;
