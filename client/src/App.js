import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn.jsx';
import Login from './components/Login.jsx';

class App extends Component {
  constructor(props){
    super(props)
    
  }
  
  render() {
    return (
      <div>
      <SignIn />
      <Login/>
    </div>
    );
  }
}

export default App;
