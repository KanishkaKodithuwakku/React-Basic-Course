import React, { useState } from "react";

const CustomizableForm = ({ container_class, url, children }) => {
  
  return (
    <div className={container_class}>
      <form>
        {children}
      </form>
    </div>
  );
};

export default CustomizableForm;
