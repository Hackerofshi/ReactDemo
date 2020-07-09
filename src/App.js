import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd-mobile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <a href="#/pages/detail">去detail</a>
        </div>
        <div>
          <a href="#/pages/DemoAnt">DemoAnt</a>
        </div>
        <Button
          onClick={() => {
            alert("fff");
          }}
        >
          Detail
        </Button>
      </header>
    </div>
  );
}

export default App;
