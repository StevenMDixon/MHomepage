import React, { Component } from 'react';
import Nav from './components/container/Nav';
import fire from './firebase';

class App extends Component {
  componentDidMount(){
    const db = fire.firestore();
    //const userRef = db.collection("fl_content").get().then(refs => console.log(refs));
  }
  render() {
    return (
      <Nav />
    );
  }
}

export default App;
