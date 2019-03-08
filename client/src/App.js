import React, { Component } from 'react';
import './App.css';
import Field from './components/Field.jsx';
import SignIn from './components/SignIn.jsx';
import Login from './components/Login.jsx';

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
      <SignIn />
      <Login/>
      <Field players={this.state.players}/>
    </div>

    );
  }
}

export default App;
