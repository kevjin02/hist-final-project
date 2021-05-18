import React from "react";
import items from "../items";
import ReactDOM from "react-dom";
import App from "./App"


function Info(props) {

    function goBack(){
        if(items[props.keyVal].found){
            ReactDOM.render(<App curItems = {items} numLeft = {props.numLeft}/>, document.getElementById("root"));
        }
        else {
            items[props.keyVal].found=true;
            ReactDOM.render(<App curItems = {items} numLeft = {props.numLeft-1}/>, document.getElementById("root"));
        }
    }
    
    document.body.style="background-color: #34656d;";

    var curItem = items[props.keyVal];
    var altImage = "Image of "+curItem.name;
    
    return (
    <div className="info">
      <div className="image">
        <img src={curItem.imageLink} alt={altImage}/>
      </div>
      <div className="details">
        <article>
          {curItem.name}
          {curItem.details}
        </article>
      </div>
      <button className="btn" onClick={goBack}><i className="fas fa-arrow-left"></i> Back</button>
    </div>
    );
}

export default Info;