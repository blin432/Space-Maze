import React, { Component } from 'react';
import './App.css';
import Field from './components/Field.jsx';
import SignIn from './components/SignIn.jsx';
import Login from './components/Login.jsx';
import LogOut from './components/Logout.jsx';
import Highscores from './components/Highscores.jsx';


class App extends Component {
  constructor(){
    super()
    this.state = {
      players : []
    }
  }

  render() {
    return (
      <div>
      <LogOut/>
      <SignIn />
      <Login/>
      <Highscores/>
      <Field players={this.state.players}/>
    </div>

    );
  }
}

export default App;
