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
  componentDidMount() {
    axios.post('/users/logout').then((response) =>{
      console.log(response)
      this.props.history.push("/");
    }).catch((error) => console.log(error))
}
  // logOut(){
  //     axios.post('/users/logout').then((response) => console.log(response))
  //     .catch((error) => console.log(error))
  // } 
  render() {
    return <h1>logged out</h1>
  }
}
export default LogOut;

