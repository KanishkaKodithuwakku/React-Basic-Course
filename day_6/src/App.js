import React from "react";
import TestBench from "./components/TestBench";
import Spinner from "./components/Indicaters/Spinner";


const App = () => {
  return (
    <div className="container">
      <div className="row">
       {/* <Spinner/> */}
        <TestBench />
      </div>
    </div>
  );
};
export default App;
