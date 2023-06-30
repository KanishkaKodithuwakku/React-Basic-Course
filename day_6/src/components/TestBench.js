import React, { useEffect } from "react";
import Card from "./Card/Card";

const TestBench = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>{users && users.map((user, index) => <Card {...user} key={index} />)}</>
  );
};

export default TestBench;
