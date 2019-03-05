import React, { Component } from 'react';
import './App.css';
import Field from './components/Field.jsx';


class App extends Component {
  constructor(){
    super()
    this.state = {
      players : []
    }
  }

  render() {
    return (
      <div >
        <Field players={this.state.players}/>
      </div>
    );
  }
}

export default App;
