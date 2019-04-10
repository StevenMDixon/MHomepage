import React, { Component } from 'react';
import fire from '../firebase';

import Nav from './Nav';
import BottomBar from "../presentational/BottomBar";
import BlogSections from "../container/Blog";

class App extends Component {
  componentDidMount(){
    const db = fire.firestore();
    const userRef = db.collection("fl_content").get().then(refs => console.log(refs));
  }
  handleChange = () => { 
    window.open("http://www.secure-booker.com/angelamichael/MakeAppointment/Search.aspx");
  }
  render() {
    return (
      <React.Fragment>
      <Nav />
      <BottomBar handle={this.handleChange} text="Mollie Dixon"/>
      <BlogSections />
      </React.Fragment>
    );
  }
}

export default App;
