import React, { useEffect } from "react";
import Card from "./Card/Card";
import axios from "axios";
import Spinner from "./Indicaters/Spinner";
import SearchBar from "./Inputs/SearchBar";
import Form from "./Inputs/Form";
const TestBench = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchText, setSearchText] = React.useState("");

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



  const handleSearch = (text) => { 
    setSearchText(text);
  }

 const filteredUsers = users.filter((user) =>
   user.fname.toLowerCase().includes(searchText.toLowerCase()) 
 );


  return (
    <>
      {/* <TextInput searchable={true} onChange={handleSearch} /> */}

      <Form formTitle="Add User"/>

      <SearchBar onChange={handleSearch} />

      {loading ? (
        <Spinner />
      ) : (
        filteredUsers.map((user, index) => <Card {...user} key={index} />)
      )}
    </>
  );
};

export default TestBench;
