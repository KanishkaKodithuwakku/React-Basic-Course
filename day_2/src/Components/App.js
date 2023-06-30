import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CustomizableForm from "./CustomizableForm";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import CheckboxField from "./CheckboxField";
import SelectInputField from "./SelectInputField";
class App extends Component {
  render() {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" },
    { value: "5", label: "Option 5" },
  ];
    return (
      <div>
        <div className="container">
          <CustomizableForm container_class={"col-sm-6"}>
            <InputField label="Name:" name="name" type="text" />

            <InputField label="Email:" name="email" type="email" />

            <SelectInputField
              label="Select One of ..."
              options={options}
              id="selct_1"
              value={1}
            />

            <CheckboxField description="Check me out" />

            <SubmitButton label="Submit" color="btn-primary" type="submit" />
          </CustomizableForm>
        </div>
      </div>
    );
  }
}
export default App;
