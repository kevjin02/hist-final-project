import React from "react";


function handleClick() {
    window.location.reload(false);
}


function Finish(){
    document.body.style="background-color: #34656d;";
    return (
      <div class="start">
        <h2>Congrats! You found all the items!</h2>
        <button class="btn" onClick={handleClick}><i class="fas fa-redo"></i>  Play Again</button>
      </div>
      );
}

export default Finish;