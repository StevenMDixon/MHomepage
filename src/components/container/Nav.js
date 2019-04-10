import React, { Component } from "react";
import NavBar from "../presentational/NavBar";
import BottomBar from "../presentational/BottomBar";
import facial from  '../../images/facial.jpg';
import legs from '../../images/legs.jpg';
import makeup from '../../images/makeup.jpg';
import spa from  '../../images/spa.jpg';
import tan from '../../images/tan.jpg';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      conversion: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() { 
    window.open("http://www.secure-booker.com/angelamichael/MakeAppointment/Search.aspx");
    this.setState({conversion: true});
  }
  render() {
    return (
      <React.Fragment>
      <div className="nav">
        <NavBar text="Facials" items={["Classic", "Collegen", "Deep Pore", "Hydrating", "Teen",  "Vitamin C"]} image={facial}/>
        <NavBar text="Make Up" items={["Bridal Party", "Prom", "Special Occasion", "Teen"]} image={makeup}/>
        <NavBar text="Spa" items={["MicroDerm", "MicroCurrent", "Body Wraps", "Reflexology", "Body Polish"]} image={spa}/>
        <NavBar text="Tanning" items={["Bronze", "Face Only", "Legs Only",  "Orignal Airbrush"]} image={tan}/>
        <NavBar text="Waxing" items={[ "Bikini", "Back", "Brow", "Leg", "Under Arm"]} image={legs}/>
        <NavBar text="Book Now" items={["Tap Here"]} handle={this.handleChange}/>
      </div>
      <BottomBar handle={this.handleChange} text="Mollie Dixon"/>
      </React.Fragment>
    );
  }
}
export default FormContainer;

  
  