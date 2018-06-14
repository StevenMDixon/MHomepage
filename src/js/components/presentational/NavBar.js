import React from "react";

const NavBar = (props) => (
  <div className="item" onClick = {props.handle? ()=>props.handle(): null}>
    <h2>{props.text}</h2>
    {props.items.map(item=> <p>{item}</p>)}
  </div>
);

export default NavBar;