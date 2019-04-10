import React from "react";

const BottomBar = (props) => (
  <div className= "bottom" >
    <h1>&#9753; {props.text} &#10087;</h1>
    <h2>Professional Esthetician</h2>
    <span>
    <p class="bottom-bar-button"onClick={()=>props.handle()}>Book Now</p>
    </span>
  </div>
);

export default BottomBar;