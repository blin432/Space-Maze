import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn.js';

class App extends Component {
  constructor(props){
    super(props)
    
  }
  
  render() {
    return (
      <div className="App">
      <SignIn/>
    </div>
    );
  }
}

export default App;
