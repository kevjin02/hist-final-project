import React from "react";
import items from "../items";
import ReactDOM from "react-dom";
import App from "./App"

function goBack(){
    ReactDOM.render(<App curItems = {items}/>, document.getElementById("root"));
}

function Info(props) {
    console.log(props.keyVal);
    items[props.keyVal].found = true;
    return (<div><h1>{items[props.keyVal].name}</h1><button onClick={goBack}>Back</button></div>);
}

export default Info;