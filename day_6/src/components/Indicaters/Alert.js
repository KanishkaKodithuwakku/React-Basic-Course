import React from "react";

const Alert = ({ alertType,children }) => {
  return (
    <>
      <div className={`alert alert-${alertType}`} role="alert">
        {children}
      </div>
    </>
  );
};

Alert.defaultProps = {
  alertType: 'primary'
};

export default Alert;
