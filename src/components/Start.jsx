import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import items from "../items"


function handleClick(){
    ReactDOM.render(<App curItems = {items} numLeft={items.length}/>, document.getElementById("root"));
}


function Start(){
    return (
    <div className="start">
      <h1>HIST 1500 Final Project</h1>
      <p>
        Dr. Molvig's scientific friends are loose on Commons. Round them up before the freshmen wake up and learn about them in the process!
      </p>
      <h3>
        Can you find all eleven?
      </h3>
      <button className="btn" onClick={handleClick}>Begin!</button>
    </div>
    );
}

export default Start;