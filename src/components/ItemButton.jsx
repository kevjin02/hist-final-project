import React from "react";
import Info from "./Info";
import ReactDOM from "react-dom";






function ItemButton(props) {

    function handleClick(event){
        var itemsKey = event.target.id;
        ReactDOM.render(<Info keyVal={itemsKey} numLeft={props.numLeft}/>, document.getElementById("root"));
    }

    


    return (<button className="btn" onClick={handleClick} id={props.index} style={{top: props.top, left:props.left, padding:props.padding, border:(props.isFound ? ".2em solid rgb(216, 21, 21)":"none")}}/>);
}

export default ItemButton;