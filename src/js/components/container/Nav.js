import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../presentational/NavBar"
import BottomBar from "../presentational/BottomBar"
import '../../../css/main.css'

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  handleChange(id) {
    console.log(id)
  }
  render() {
    //const { seo_title } = this.state;
    return (
    <section>
      <div className="nav">
        <NavBar text="Facials" items={["test", "test"]}/>
        <NavBar text="Make Up" items={["test", "test"]}/>
        <NavBar text="DermaCycles" items={["test", "test"]}/>
        <NavBar text="Waxing" items={["test", "test"]}/>
      </div>
      <BottomBar handle={this.handleChange} text="Mollie Dixon"/>
    </section>
    );
  }
}
export default FormContainer;

const wrapper = document.querySelector("Body");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
  
  