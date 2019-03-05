import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './SignIn.css';
import Modal from 'react-bootstrap/Modal'

class SignIn extends Component {
  constructor(props){
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state={
      button:false,
      signUpDisplay:"block",
      loginDisplay:"none",
      show:false
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
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  login(){
    axios.post('users/login',{email:"oginEmail.value",password:"oginPw.value"}).then(function(response){
      console.log(response.data);
      alert('success');
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


         <div  className="sign-in-container col text-center mt-5 "  style={{display:this.state.signUpDisplay,margin:"0 auto"}}>
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
            <div className="d-flex flex-row justify-content-center mt-4">
            <h5 className="mt-1">Choose Your Avatar:</h5>
            <Button className="ml-4" variant="primary" onClick={this.handleShow}>
                Click to Choose Avatars
            </Button>
            </div>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Choose Your Avatar</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex">
                <div style={{backgroundColor:"black", width:"100px",height:"100px",margin:"5px"}}>
                </div>
                <div style={{backgroundColor:"black", width:"100px",height:"100px",margin:"5px"}}>
                </div>
                <div style={{backgroundColor:"black", width:"100px",height:"100px",margin:"5px"}}>
                </div>
                <div style={{backgroundColor:"black", width:"100px",height:"100px",margin:"5px"}}>
                </div>
                
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          <div className="d-flex justify-content-center" >
            <Button style={{display:"block"}} className = "mt-3"variant="outline-secondary" onClick={() => this.signUpShow()}> Complete Sign Up</Button>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <p className= "mt-4 mb-0">Already a Member?</p>
            <Button  className = "mt-3 ml-3"variant="outline-secondary" onClick={() => this.loginShow()}> Login in Here</Button>
          </div>  
        </div> 
      


      <div  className="sign-in-container col text-center mt-5"  style={{display:this.state.loginDisplay,margin:"0 auto"}}>
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



    </div>
    );
  }
}

export default SignIn;
