import React, { Component } from 'react';
import axios from 'axios';
import {Button,InputGroup,FormControl} from 'react-bootstrap';
import './SignIn.css';
import Modal from 'react-bootstrap/Modal'

class Login extends Component {
  constructor(props){
    super(props)
  }
  
  login(){
    axios.post('users/login',{email:"oginEmail.value",password:"oginPw.value"}).then(function(response){
      console.log(response.data);
      alert('success');
      }).catch(function(err){
          console.log(err);
      });
  }

  
  render() {
    return (
      
      <div  className="sign-in-container col text-center mt-5"  style={{display:this.props.display,margin:"0 auto"}}>
          <h3>Login To Play Now</h3>
          <h5>Username</h5>
          <InputGroup >
            <FormControl
              aria-label="Username"
              placeholder="Username"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <h5>Password</h5>
          <InputGroup  >
            <FormControl
              aria-label="Password"
              placeholder="Password"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        <div className="d-flex justify-content-center" >
          <Button style={{display:"block"}} className = "mt-3 mr-2"variant="outline-secondary" onClick={() => this.login()}> Login</Button>
          <Button style={{display:"block"}} className = "mt-3 ml-2"variant="outline-secondary" onClick={() => this.loginShow()}> Cancel</Button>
        </div>
      </div>
    );
  }
}

export default Login;

  // loginShow(){
  //   if(this.state.button===false){
  //     this.setState({
  //       button:true,
  //       signUpDisplay:"none",
  //       loginDisplay:"block"
  //     })
  //   }
  //   else{
  //     this.setState({
  //       button:false,
  //       signUpDisplay:"block",
  //       loginDisplay:"none"
  //     })
  //   }   
  // }
  // login(){
  //   axios.post('users/login',{email:"oginEmail.value",password:"oginPw.value"}).then((response) => {
  //     console.log(response.data);
  //     }).catch((error)=>{
  //         console.log(error);
  //     });
  // }
