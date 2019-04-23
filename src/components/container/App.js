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
      <React.Fragment>
        <Switch>
        <Route exact path="/" component={()=>(
           <Nav />
        )}></Route>
      <Route path="/blog/:blogId?" component={()=>(
          <BlogSections fire={fire} />
        )}></Route>
      <Redirect from='/*' to='/' />
      </Switch>
      <BottomBar handle={this.handleChange} currentTab={this.state.current}/>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
