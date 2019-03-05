import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      button:false,
      signUpDisplay:"block",
      loginDisplay:"none"
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
    axios.post('users/login',{email:"oginEmail.value",password:"oginPw.value"}).then(function(response){
      console.log(response.data);
      alert('success');
      window.location = response.data.URL;
  }).catch(function(err){
      console.log(err);
  });
  }

  signUpShow(){
    var userName = document.getElementById("sign-up-username");
    var userPassword = document.getElementById("sign-up-password");
          axios.post('users/register', { username: "ben", password: "u1223"}).then(function(response) {
            var user = response;
            console.log(user);
            alert(`Account created for`);
        }).catch(function(){
            alert(`Error in loggin in`);
        });
  }
  
  render() {
    return (
      <div className="App">


         <div  className="sign-in-container col text-center mt-5"  style={{display:this.state.signUpDisplay,margin:"0 auto"}}>
          <p>Sign Up To Play Now</p>
          <p>New Username</p>
          <InputGroup  >
            <FormControl
              id="sign-up-username"
              aria-label="Username"
              placeholder="Username"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <p>New Password</p>
          <InputGroup  >
            <FormControl
              id="sign-up-password"
              aria-label="Password"
              placeholder="Password"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <div className="d-flex justify-content-center" >
            <Button style={{display:"block"}} className = "mt-3"variant="outline-secondary" onClick={() => this.signUpShow()}> Sign Up</Button>
          </div>
          <div className="d-flex flex-row justify-content-center">
          <p className= "mt-4 mb-0">Already a Member?</p>
          <Button  className = "mt-3 ml-3"variant="outline-secondary" onClick={() => this.loginShow()}> Login in Here</Button>
          
          </div>  
        </div> 
      


      <div  className="sign-in-container col text-center mt-5"  style={{display:this.state.loginDisplay,margin:"0 auto"}}>
          <p>Login To Play Now</p>
          <p>Username</p>
          <InputGroup >
            <FormControl
              aria-label="Username"
              placeholder="Username"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <p>Password</p>
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



    </div>
    );
  }
}

export default App;
