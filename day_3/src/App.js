import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./User";

class App extends Component {
  render() {
    const user = {
      name: "Kanishka",
      status: "Active",
      avatar: "https://i.pravatar.cc/300",
      email: "kanishka@gmail.com",
    };

    const user2 = {
      name: "Kodithuwakku",
      status: "Deactive",
      avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com",
      email: "kanishka@gmail.com",
    };

    return (
      <div>
        <User {...user} />
        <User {...user2} />
      </div>
    );
  }
}
export default App;
