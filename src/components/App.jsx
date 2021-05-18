import React from "react";
import Background from '../images/commonsImage.png';
import ItemButton from "./ItemButton"
import ReactDOM from "react-dom";
import Finish from "./Finish";


function App(props) {
  document.body.style = 'background: white;';
  
  if(props.numLeft === 0){
    ReactDOM.render(<Finish/>, document.getElementById("root"));
  }
  
  return (
    <div className="container">
      <img src={Background} alt="Failed to load." />
      {props.curItems.map((obj, index) =>                    
        <ItemButton key={index} index={index} top={obj.top} left={obj.left} padding={obj.padding} isFound={obj.found} numLeft={props.numLeft}/>
      )}
      <p className="counter">Items Left: {props.numLeft}</p>
    </div>
  );
}

export default App;
