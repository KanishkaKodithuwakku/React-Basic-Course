import React from "react";
import Card from "./Card/Card";

const TestBench = () => {
  const users = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30,
      phone: "123-456-7890",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      age: 25,
      phone: "987-654-3210",
    },
    {
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      age: 35,
      phone: "555-123-4567",
    },
    {
      name: "Bob Williams",
      email: "bobwilliams@example.com",
      age: 42,
      phone: "777-888-9999",
    },
    {
      name: "Emma Davis",
      email: "emmadavis@example.com",
      age: 28,
      phone: "111-222-3333",
    },
    {
      name: "Michael Brown",
      email: "michaelbrown@example.com",
      age: 31,
      phone: "444-555-6666",
    },
  ];

  return (
    <>
      {users.map((user, index) => (
        <Card {...user} kay={index} />
      ))}
    </>
  );
};

export default TestBench;
