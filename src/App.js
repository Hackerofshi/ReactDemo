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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <a href="#/pages/detail">去detail</a>
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
