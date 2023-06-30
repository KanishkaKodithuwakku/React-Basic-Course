import React from "react";

const CardTitle = ({ cardTitle }) => {
  return <h5 className="card-title">{cardTitle}</h5>;
};

CardTitle.defaultProps = {
  cardTitle: "Card Title (cardTitle)",
};

export default CardTitle;
