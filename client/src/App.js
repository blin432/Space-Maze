import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn.jsx';
import Login from './components/Login.jsx';
import LogOut from './components/Logout.jsx';
import Highscores from './components/Highscores.jsx';


class App extends Component {
  constructor(props){
    super(props)
    
  }
  
  render() {
    return (
      <div>
      <LogOut/>
      <SignIn />
      <Login/>
      <Highscores/>
    </div>
    );
  }
}

export default App;
