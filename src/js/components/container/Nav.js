import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "../presentational/NavBar"
import '../../../css/main.css'

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <div className="nav">
        <NavBar text="Facials"/>
        <NavBar text="Facials"/>
        <NavBar text="Facials"/>
        <NavBar text="Facials"/>
      </div>
    );
  }
}
export default FormContainer;

const wrapper = document.querySelector(".container");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
  
  