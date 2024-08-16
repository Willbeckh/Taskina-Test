// import React from "react";
import "./App.css";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <div>
          <Checkbox label="All pages" />
        </div>
        <hr />
        
        <div className="pageList">
          <div>
            <Checkbox label="Page 1" />
          </div>
          <Checkbox label="Page 2" />
          <Checkbox label="Page 3" />
          <Checkbox label="Page 4" />
          <Checkbox label="Page 5" />
          <Checkbox label="Page 6" />
        </div>
        <hr />

        <Button color="#ffce22" label="Done" />
      </div>
    </div>
  );
};

export default App;
