import React from "react";


const ActionButton = ({ type, color, children, onClick }) => {
  return (
    <>
      <button
        type={type}
        className={`btn btn-${color}`}
        onClick={(e) => onClick(e)}
      >
        {children}
      </button>
    </>
  );
};

ActionButton.defaultProps = {
  type: "button",
};

export default ActionButton;
