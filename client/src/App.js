import React, { Component } from 'react';
import './App.css';
import Field from './components/Field.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Logout from './components/Logout.jsx';
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';


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
           <NavBar/>
                   <Switch>
                       <Route exact path ="/" component={Home}/>
                       <Route exact path ="/showSignUp" component={SignUp}/>
                       <Route exact path ="/showLogIn" component={Login}/>
                       <Route exact path="/play" component={Field}/>
                       <Route exact path="/LogOut" component={Logout}/>
                   </Switch>
      </div>

    );
  }
}

export default App;
