import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../presentational/NavBar"
import BottomBar from "../presentational/BottomBar"
import '../../../css/main.css'

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
    //const { seo_title } = this.state;
    return (
    <section>
      <div className="nav">
        <NavBar text="Facials" items={["Classic", "Collegen", "Deep Pore", "Hydrating", "Teen",  "Vitamin C"]}/>
        <NavBar text="Make Up" items={["Bridal Party", "Prom", , "Special Occasion", "Teen"]}/>
        <NavBar text="Spa" items={["MicroDerm", "MicroCurrent", "Body Wraps", "Reflexology", "Body Polish"]}/>
        <NavBar text="Tanning" items={["Bronze", "Face Only", "Legs Only",  "Orignal Airbrush"]}/>
        <NavBar text="Waxing" items={[ "Bikini", "Back", "Brow", "Leg", "Under Arm"]}/>
        <NavBar text="" items={[ "Book Now", "Tap Here"]} handle={this.handleChange}/>
      </div>
      <BottomBar handle={this.handleChange} text="Mollie Dixon"/>
    </section>
    );
  }
}
export default FormContainer;

const wrapper = document.querySelector("Body");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
  
  