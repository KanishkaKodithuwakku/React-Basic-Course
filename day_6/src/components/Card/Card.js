import React from "react";
import CardBody from "./CardBody";
import Avatar from "../Image/Avatar";
import LinkButton from "../Buttons/LinkButton";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

const Card = ({ name, email, age, phone }) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem", marginBottom: "1rem" }}>
        <CardBody>
          <Avatar />
          <CardTitle cardTitle={name} />
          <CardText description={email} />
          <CardText description={age} />
          <CardText description={phone} />
          <LinkButton />
        </CardBody>
      </div>
    </div>
  );
};

export default Card;
