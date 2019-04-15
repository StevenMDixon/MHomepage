import React, { Component } from 'react';
import fire from '../firebase';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';

import Nav from './Nav';
import BottomBar from "../presentational/BottomBar";
import BlogSections from "../container/Blog";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'home'
    }
  }
  handleChange = (route) => {
    if(route === 'blog'){
      this.props.history.push('/blog');
      this.setState({current: 'blog'})
    }
    else if(route === 'reviews'){
      this.props.history.push('/reviews');
      this.setState({current: 'reviews'})
    }
    else{
      window.open("http://www.secure-booker.com/angelamichael/MakeAppointment/Search.aspx");
    }
  }
  render() {
    return (
        <Switch>
        <Route exact path="/" component={()=>(
         <React.Fragment><Nav />
          <BottomBar handle={this.handleChange}  currentTab={this.state.current}/>
          </React.Fragment> 
        )}></Route>
      <Route path="/blog/:blogId?" component={()=>(
         <React.Fragment>
          <BottomBar handle={this.handleChange}  currentTab={this.state.current}/>
          <BlogSections fire={fire}/>
          </React.Fragment> 
        )}></Route>
      <Route path="/reviews" component={()=>(
         <React.Fragment>
          <BottomBar handle={this.handleChange} currentTab={this.state.current}/>
          </React.Fragment> 
        )}></Route>
      <Redirect from='/*' to='/' />
      </Switch>
    );
  }
}

export default withRouter(App);
