import React from "react";
import CardImage from "./CardImage";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
const Card = (props) => {
  return <div className="col-sm-3">{props.children}</div>;
};

export default Card;
