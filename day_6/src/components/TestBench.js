import React, { useEffect } from "react";
import Card from "./Card/Card";
import axios from "axios";
import Spinner from "./Indicaters/Spinner";
const TestBench = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get("https://www.melivecode.com/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false)
      })
      .catch((error) => { 
        console.log(error);
         setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        users.map((user, index) => <Card {...user} key={index} />)
      )}
    </>
  );
};

export default TestBench;
