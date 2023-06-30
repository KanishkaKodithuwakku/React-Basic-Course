import React from "react";
import CardBody from "./CardBody";
import Avatar from "../Image/Avatar";
import LinkButton from "../Buttons/LinkButton";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

const Card = ({ fname, lanme, avatar, username }) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem", marginBottom: "1rem" }}>
        <CardBody>
          <Avatar image={avatar} />
          <CardTitle cardTitle={fname + " " + lanme} />
          <CardText description={username} />
          <LinkButton />
        </CardBody>
      </div>
    </div>
  );
};

export default Card;
