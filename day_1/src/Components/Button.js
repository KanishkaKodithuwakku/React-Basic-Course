import React from "react";


const Button = ({ children, btnType }) => {
  return <button className={`btn btn-${btnType}`}>{children}</button>;
}


export default Button;
