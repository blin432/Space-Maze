import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,InputGroup,FormControl,Container,Row,Col } from 'react-bootstrap';
// import './SignIn.css';
// import Modal from 'react-bootstrap/Modal';
// import {data} from '../signUpData.js';

class LogOut extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  logOut(){
    let { username, password } = this.state
      axios.post('/users/logout').then((response) => console.log(response))
      .catch((error) => console.log(error))
  } 
  render() {
    return <Button variant="outline-secondary" onClick={() => this.logOut()} > Logout</Button>      
  }
}
export default LogOut;

