import React from "react";

const NavBar = (props) => (
  <div className="item">
    <h2>{props.text}</h2>
    {props.items.map(item=> <p>{item}</p>)}
  </div>
);

export default NavBar;