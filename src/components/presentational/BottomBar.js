import React from "react";

const BottomBar = (props) => (
  <div className= "bottom" >
    <h1>&#9753; Mollie Dixon &#10087;</h1>
    <h2>Professional Esthetician</h2>
    <div className="bottom-button-wrapper">
    <button className="bottom-bar-button"onClick={()=>props.handle("book")}>Book Now</button>
    <button className="bottom-bar-button"onClick={()=>props.handle("blog")}>Blog</button>
    </div>
  </div>
);

export default BottomBar;

//<button className="bottom-bar-button"onClick={()=>props.handle("reviews")}>Reviews</button>