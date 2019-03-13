import React, { Component } from 'react';
import './App.css';
import Field from './components/Field.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import axios from 'axios';
class App extends Component {
    state = {
      isLoggedIn : false
    }

    componentDidMount(){
    axios.get('/users/status')
    .then(resp => this.setState({isLoggedIn : resp.data.isLoggedIn}))
    .catch(err => console.log(err))
  }

  logout(){
    console.log('reached logout');
    console.log(this.props);
    axios.post('/users/logout')
    .then(
      this.setState({isLoggedIn : false},
      this.props.history.push('/')))
    .catch(err => console.log(err))
  }

  signIn(){
    this.setState({isLoggedIn:true},
    this.props.history.push("/play"))
  }

  render(){
    let { isLoggedIn } = this.state
    console.log(`isLoggedIn from app.js : ${isLoggedIn}`)
    return(
      <div style={{height:'100vh', width:'100%'}}>
        <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout.bind(this)}/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/showSignUp" render={() => isLoggedIn ? <Redirect to="/"/>  : <SignUp signin={this.signIn.bind(this)}/>}/>
              <Route exact path="/showLogIn" component={() => isLoggedIn ? <Redirect to="/"/>: <Login signin={this.signIn.bind(this)}/>}/>
              <Route exact path="/play" component={isLoggedIn === false ? Home : Field}/>
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);

