// import React from "react";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <h3>All pages</h3>
        <hr />
        <div className="pageList">
          <p>Page 1</p>
          <p>Page 1</p>
          <p>Page 1</p>
          <p>Page 1</p>
          <p>Page 1</p>
          <p>Page 1</p>
        </div>
        <hr />
        <Button color="#fece22" label="Done" />
      </div>
    </div>
  );
};

export default App;
