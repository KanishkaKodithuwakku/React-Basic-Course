import React from "react";
import Avatar from "./Avatar";

const User = ({ name, avatar, status, email }) => {

  return (
    <div className="row">
      <div className="col-sm-2 card">
        <Avatar avatar={avatar} width={100} shape="squar" name={name} />
        <div class="card-body">
          <p class="card-text">{name}</p>
          <p class="card-text">{status}</p>
          <p class="card-text">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
