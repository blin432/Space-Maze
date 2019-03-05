import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal'
import AvatarModal from './Modal.js';
import Login from './Login.js';
import './SignIn.css';

class SignIn extends Component {
  constructor(props){
    super(props)
    this.state={
      button:false,
      signUpDisplay:"block",
      loginDisplay:"none",
    }
  }
  loginShow(){
    if(this.state.button===false){
      this.setState({
        button:true,
        signUpDisplay:"none",
        loginDisplay:"block"
      })
    }
    else{
      this.setState({
        button:false,
        signUpDisplay:"block",
        loginDisplay:"none"
      })
    }   
  }
  login(){
    axios.post('users/login',{email:"oginEmail.value",password:"oginPw.value"}).then((response) => {
      console.log(response.data);
      }).catch((error)=>{
          console.log(error);
      });
  }

  signUpShow(){
    var userName = document.getElementById("sign-up-username");
    var userPassword = document.getElementById("sign-up-password");
      axios.post('users/register', { username: "ben", password: "u1223"}).then((response) => {
        var user = response;
        console.log(user);
      }).catch((error) =>{
        console.log(error);
      });
  }
  
  render() {
    return (
      <div className="App">
         <div  className="sign-in-container col text-center mt-5 "  style={{display:this.state.signUpDisplay}}>
            <h3>Sign Up To Play Now</h3>
            <h5>New Username</h5>
            <InputGroup  >
              <FormControl
                id="sign-up-username"
                aria-label="Username"
                placeholder="Username"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <h5>New Password</h5>
            <InputGroup  >
              <FormControl
                id="sign-up-password"
                aria-label="Password"
                placeholder="Password"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            
            <AvatarModal/>
          <div className="d-flex justify-content-center" >
            <Button style={{display:"block"}} className = "mt-3"variant="outline-secondary" onClick={() => this.signUpShow()}> Complete Sign Up</Button>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <p className= "mt-4 mb-0">Already a Member?</p>
            <Button  className = "mt-3 ml-3"variant="outline-secondary" onClick={() => this.loginShow()}> Login in Here</Button>
          </div>  
        </div> 
      <Login display={this.state.loginDisplay}/>
    </div>
    );
  }
}

export default SignIn;
