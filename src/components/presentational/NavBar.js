import React from "react";

const NavBar = (props) => (
  <div className="card" onClick = {props.handle? ()=>props.handle(): null}>
    <h2 className="card-title">{props.text}</h2>
    {props.items.map(item=> <p key={item+1}className="lower-titles">{item}</p>)}
    {props.hasOwnProperty('image')? <img className="card-image" src={props.image} alt="woman in sand"/>: null}
  </div>
);

export default NavBar;