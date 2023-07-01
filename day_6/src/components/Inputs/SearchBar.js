import React from "react";
import TextInput from "./TextInput";


const SearchBar = ({ onChange }) => {
  return (
    <>
      <TextInput onChange={onChange} searchable={true} />
    </>
  );
};

export default SearchBar;
