import React from "react";

const BottomBar = (props) => (
  <div className="bottom" onClick={()=>props.handle('test')}>
    <h1>{props.text}</h1>
    <h2>Professional Esthetician</h2>
  </div>
);

export default BottomBar;