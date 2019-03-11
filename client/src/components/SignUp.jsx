import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,InputGroup,FormControl,Container,Row,Col,Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import './SignIn.css';
import {data} from '../signUpData.js';
import AlertError from './AlertError.jsx'

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
      show:false
    }
  }
// function handles posting users to the database,
// if that action is successfull then login user and also
//redirect to play page
  signUp(e){
    e.preventDefault()
    let { username, password } = this.state
      axios.post('/users/register', { 
      username, 
      password}).then((response) =>{
        console.log(response)
        axios.post('/users/login', { 
          username, 
          password}).then((response) =>{
            this.props.history.push("/play")
            console.log(response)
          }) .catch((error) =>{console.log(error)
          });
      }).catch((error) => {
        console.log(error)
        this.setState({show:true})
      });
  }

  handleUsernameInput(input){
    this.setState({username: input})
  }

  handlePasswordInput(input){
    this.setState({password: input})
  }
  handleHide(){
    this.setState({ show: false });
  }
  render() {
    
    return (
      <Container className="text-center" xs={12} md={{ size: 4, offset: 8 }}  style={{maxWidth: '400px'}}>
        <Row>
          <Col className="mt-5">
              <h3 className="mb-5">Sign Up</h3>

              <Alert show={this.state.show}  onClose variant="danger">
                  <Alert.Heading>Error In Signing In</Alert.Heading>
                  <p>
                    Username Already Exists/Enter Username and Password
                  </p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button onClick={() => this.handleHide()} variant="outline-success">
                      Okay
                    </Button>
                  </div>
              </Alert>

              <Form onSubmit={(e) => this.signUp(e)}>
              
                  <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={this.state.username}  onChange={(e) => this.handleUsernameInput(e.target.value)}/>
                  </Form.Group>
                  <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={(e) => this.handlePasswordInput(e.target.value)} />
                  </Form.Group>
                  <Button className="m-4" type="submit">Register</Button>
                    <p className= "m-4">Already a Member?</p>
                    <NavLink to="/showLogIn"><Button variant="primary">Login</Button></NavLink> 
              </Form> 
         </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
