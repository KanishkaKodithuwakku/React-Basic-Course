import React from "react";
import Icon from "./Icon";
import AlertBody from "./AlertBody";
const Alert = ({ alertType, alertText , iconClasses,children, as, iconComponent}) => {
  return (
    <div className={`col-sm-12 alert alert-${alertType}`}>
      <div className="row">
        <div className="col-sm-1">
          <Icon />
        </div>
        <AlertBody>{children}</AlertBody>
        <div className="col-sm-1 icon-close">x</div>
        {as === "icon" && (iconComponent)}
      </div>
    </div>
  );
};

export default Alert;
