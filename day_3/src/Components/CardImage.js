import React from "react";
const CardImage = ({ url, alt, style }) => {
  return (
    <div className={style}>
      <img alt={alt} src={url} />
    </div>
  );
};


export default CardImage;
