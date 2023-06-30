import React from "react";


const CardText = ({ description }) => {
  return <p className="card-text">{description}</p>;
};

CardText.defaultProps = {
  description: "Description (description)",
};

export default CardText;
