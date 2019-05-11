import React from "react";

const BottomBar = (props) => {
  const {current} = props;
  return(
  <div className= "bottom" >
    <h1>&#9753; Mollie Dixon &#10087;</h1>
    <h2>Professional Esthetician</h2>
    <div className="bottom-button-wrapper">
    <button id="book" className={`bottom-bar-button ${current===''? 'current': ''}`} onClick={()=>props.handle("book")}>Book Now</button>
    <button id="home" className={`bottom-bar-button ${current==='home'? 'current': ''}`} onClick={()=>props.handle("home")}> Home </button>
    <button id="blog" className={`bottom-bar-button ${current==='blog'? 'current': ''}`} onClick={()=>props.handle("blog")}>Blog</button>
    </div>
  </div>
  )
};

export default BottomBar;

//<button className="bottom-bar-button"onClick={()=>props.handle("reviews")}>Reviews</button>