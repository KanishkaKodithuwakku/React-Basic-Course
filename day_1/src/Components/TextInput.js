import React from "react";

const TextInput = ({ type,name,id,plaseholder,value}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={plaseholder}
        value={value}
      />
    </>
  );
};

export default TextInput;
