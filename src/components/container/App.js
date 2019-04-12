import React, { Component } from 'react';
import fire from '../firebase';
import { Route } from 'react-router-dom';

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
        <Route exact path="/" component={()=>(
         <React.Fragment><Nav />
          <BottomBar handle={this.handleChange} text="Mollie Dixon"/>
          </React.Fragment> 
        )}></Route>
      <Route exact path="/blog" component={()=>(
         <React.Fragment>
          <BottomBar handle={this.handleChange} text="Mollie Dixon"/>
          <BlogSections />
          </React.Fragment> 
        )}></Route>
      <Route exact path="/reviews" component={()=>(
         <React.Fragment>
          <BottomBar handle={this.handleChange} text="Mollie Dixon"/>
          </React.Fragment> 
        )}></Route>
      
      </React.Fragment>
    );
  }
}

export default App;
