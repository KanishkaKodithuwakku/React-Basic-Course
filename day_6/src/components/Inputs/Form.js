import React from "react";
import TextInput from "./TextInput";
import ActionButton from "../Buttons/ActionButton";

const Form = ({ formTitle }) => {
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            fname,
            lname,
            email
        }
        onsubmit(newUser);
        setFname("");
        setLname("");
        setEmail("");
    }

    const handleOnChange = (inputName, value) => {
        switch (inputName) {
          case "fname":
            setFname(value);
            break;
          case "lname":
            setLname(value);
            break;
          case "email":
            setEmail(value);
            break;
          default:
            break;
        }
    };

    


  return (
    <>
      <form class="row g-3" onSubmit={handleSubmit}>
        {formTitle && <h5>{formTitle}</h5>}
        <div class="col-auto">
          <TextInput
            label="First Name"
            onChange={handleOnChange("fname", handleOnChange)}
          />
          <TextInput
            label="Last Name"
            onChange={handleOnChange("lname", handleOnChange)}
          />
          <TextInput
            label="Email"
            onChange={handleOnChange("email", handleOnChange)}
          />
        </div>
        <div class="col-auto">
          <ActionButton color="primary">Submit</ActionButton>
        </div>
      </form>
    </>
  );
};

export default Form;
